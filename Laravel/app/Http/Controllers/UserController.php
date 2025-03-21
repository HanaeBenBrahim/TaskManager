<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Get a list of all users.
     */
    public function index()
    {
        $users = User::select('id', 'name', 'email')->get();
        return response()->json($users);
    }
}
