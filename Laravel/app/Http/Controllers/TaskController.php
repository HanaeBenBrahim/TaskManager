<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the tasks.
     */
    public function index()
    {
        $tasks = Task::with(['user', 'assignedUser'])
            ->where(function($query) {
                $query->where('user_id', Auth::id())
                    ->orWhere('assigned_to', Auth::id());
            })
            ->orderBy('start_time')
            ->get();
        
        return response()->json($tasks);
    }

    /**
     * Store a newly created task.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_time' => 'required|date',
            'end_time' => 'required|date|after:start_time',
            'assigned_to' => 'nullable|exists:users,id'
        ]);

        $task = new Task($request->all());
        $task->user_id = Auth::id();

        // Vérifier les conflits si la tâche est assignée
        if ($task->assigned_to && $task->hasConflict()) {
            return response()->json([
                'message' => 'Il y a un conflit d\'horaire pour l\'utilisateur assigné'
            ], 422);
        }

        $task->save();
        return response()->json($task->load(['user', 'assignedUser']), 201);
    }

    /**
     * Display the specified task.
     */
    public function show(Task $task)
    {
        $this->authorize('view', $task);
        return response()->json($task->load(['user', 'assignedUser']));
    }

    /**
     * Update the specified task.
     */
    public function update(Request $request, Task $task)
    {
        $this->authorize('update', $task);

        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'start_time' => 'sometimes|required|date',
            'end_time' => 'sometimes|required|date|after:start_time',
            'assigned_to' => 'nullable|exists:users,id',
            'status' => 'sometimes|required|in:pending,in_progress,completed,cancelled'
        ]);

        $task->fill($request->all());

        // Vérifier les conflits si la tâche est assignée
        if ($task->assigned_to && $task->hasConflict()) {
            return response()->json([
                'message' => 'Il y a un conflit d\'horaire pour l\'utilisateur assigné'
            ], 422);
        }

        $task->save();
        return response()->json($task->load(['user', 'assignedUser']));
    }

    /**
     * Remove the specified task.
     */
    public function destroy(Task $task)
    {
        $this->authorize('delete', $task);
        $task->delete();
        return response()->json(null, 204);
    }

    /**
     * Get tasks for a specific date range.
     */
    public function getTasksByDateRange(Request $request)
    {
        $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date'
        ]);

        $tasks = Task::with(['user', 'assignedUser'])
            ->where(function($query) {
                $query->where('user_id', Auth::id())
                    ->orWhere('assigned_to', Auth::id());
            })
            ->whereBetween('start_time', [$request->start_date, $request->end_date])
            ->orderBy('start_time')
            ->get();

        return response()->json($tasks);
    }
}
