import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import fr from 'date-fns/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Snackbar,
    Alert,
    IconButton,
    Tooltip,
    Typography
} from '@mui/material';
import AuthUser from './AuthUser';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import TodayIcon from '@mui/icons-material/Today';
import SearchIcon from '@mui/icons-material/Search';

const locales = {
    'fr': fr,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const EventComponent = ({ event }) => {
    const startTime = format(new Date(event.start), 'HH:mm');
    const endTime = format(new Date(event.end), 'HH:mm');
    
    const getStatusLabel = (status) => {
        switch(status) {
            case 'pending':
                return 'En attente';
            case 'in_progress':
                return 'En cours';
            case 'completed':
                return 'Terminé';
            case 'cancelled':
                return 'Annulé';
            default:
                return 'En attente';
        }
    };
    
    return (
        <div className={`task-${event.status || 'pending'}`} style={{ height: '100%' }}>
            <div className="task-title">{event.title}</div>
            <div className="task-time">{startTime} - {endTime}</div>
            <div className="task-status">{getStatusLabel(event.status)}</div>
        </div>
    );
};

export default function TaskCalendar() {
    const { http } = AuthUser();
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [users, setUsers] = useState([]);
    const [filters, setFilters] = useState({
        user: 'all',
        status: 'all'
    });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'error'
    });
    const [newEvent, setNewEvent] = useState({
        title: '',
        description: '',
        start_time: new Date(),
        end_time: new Date(),
        assigned_to: '',
        status: 'pending'
    });

    useEffect(() => {
        fetchEvents();
        fetchUsers();
    }, []);

    useEffect(() => {
        filterEvents();
    }, [events, filters]);

    const filterEvents = () => {
        let filtered = [...events];
        
        if (filters.user !== 'all') {
            filtered = filtered.filter(event => event.assigned_to === filters.user);
        }
        
        if (filters.status !== 'all') {
            filtered = filtered.filter(event => event.status === filters.status);
        }
        
        setFilteredEvents(filtered);
    };

    const fetchEvents = async () => {
        try {
            const response = await http.get('/tasks');
            const formattedEvents = response.data.map(task => ({
                ...task,
                start: new Date(task.start_time),
                end: new Date(task.end_time)
            }));
            setEvents(formattedEvents);
        } catch (error) {
            console.error('Erreur lors de la récupération des tâches:', error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await http.get('/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
        }
    };

    const handleSelectSlot = ({ start, end }) => {
        setNewEvent({
            ...newEvent,
            start_time: start,
            end_time: end
        });
        setSelectedEvent(null);
        setOpenDialog(true);
    };

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setNewEvent({
            title: event.title,
            description: event.description,
            start_time: new Date(event.start_time),
            end_time: new Date(event.end_time),
            assigned_to: event.assigned_to,
            status: event.status
        });
        setOpenDialog(true);
    };

    const handleSave = async () => {
        try {
            if (selectedEvent) {
                await http.put(`/tasks/${selectedEvent.id}`, newEvent);
            } else {
                await http.post('/tasks', newEvent);
            }
            fetchEvents();
            handleClose();
        } catch (error) {
            if (error.response?.data?.message) {
                setSnackbar({
                    open: true,
                    message: "L'utilisateur assigné a déjà une tâche planifiée à ce moment-là. Veuillez choisir un autre créneau ou un autre utilisateur.",
                    severity: 'warning'
                });
            } else {
                setSnackbar({
                    open: true,
                    message: 'Une erreur est survenue lors de la sauvegarde de la tâche.',
                    severity: 'error'
                });
            }
        }
    };

    const handleDelete = async () => {
        if (!selectedEvent) return;
        try {
            await http.delete(`/tasks/${selectedEvent.id}`);
            fetchEvents();
            handleClose();
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
        }
    };

    const handleClose = () => {
        setOpenDialog(false);
        setSelectedEvent(null);
        setNewEvent({
            title: '',
            description: '',
            start_time: new Date(),
            end_time: new Date(),
            assigned_to: '',
            status: 'pending'
        });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box sx={{ height: 'calc(100vh - 100px)', p: 2 }}>
            <Box sx={{ 
                mb: 3, 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: 2,
                borderRadius: 1,
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TodayIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 500 }}>
                        Calendrier des tâches
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FilterListIcon sx={{ color: 'action.active' }} />
                        <FormControl sx={{ minWidth: 200 }}>
                            <InputLabel>Utilisateur</InputLabel>
                            <Select
                                value={filters.user}
                                onChange={(e) => setFilters({ ...filters, user: e.target.value })}
                                label="Utilisateur"
                                size="small"
                            >
                                <MenuItem value="all">Tous les utilisateurs</MenuItem>
                                {users.map((user) => (
                                    <MenuItem key={user.id} value={user.id}>
                                        {user.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ minWidth: 200 }}>
                            <InputLabel>Statut</InputLabel>
                            <Select
                                value={filters.status}
                                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                                label="Statut"
                                size="small"
                            >
                                <MenuItem value="all">Tous les statuts</MenuItem>
                                <MenuItem value="pending">En attente</MenuItem>
                                <MenuItem value="in_progress">En cours</MenuItem>
                                <MenuItem value="completed">Terminé</MenuItem>
                                <MenuItem value="cancelled">Annulé</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Tooltip title="Nouvelle tâche">
                        <IconButton 
                            color="primary"
                            onClick={() => {
                                setNewEvent({
                                    ...newEvent,
                                    start_time: new Date(),
                                    end_time: new Date()
                                });
                                setSelectedEvent(null);
                                setOpenDialog(true);
                            }}
                            sx={{ 
                                backgroundColor: 'primary.main',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                }
                            }}
                        >
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

            <Box sx={{ 
                backgroundColor: 'white',
                borderRadius: 1,
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                height: 'calc(100% - 70px)',
                overflow: 'hidden'
            }}>
                <Calendar
                    localizer={localizer}
                    events={filteredEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '100%' }}
                    selectable
                    onSelectSlot={handleSelectSlot}
                    onSelectEvent={handleSelectEvent}
                    components={{
                        event: EventComponent
                    }}
                    messages={{
                        next: 'Suivant',
                        previous: 'Précédent',
                        today: "Aujourd'hui",
                        month: 'Mois',
                        week: 'Semaine',
                        day: 'Jour',
                        agenda: 'Agenda'
                    }}
                    views={['month', 'week', 'day']}
                />
            </Box>

            <Dialog open={openDialog} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    {selectedEvent ? 'Modifier la tâche' : 'Nouvelle tâche'}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                        <TextField
                            label="Titre"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            label="Description"
                            value={newEvent.description}
                            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <TextField
                            label="Date de début"
                            type="datetime-local"
                            value={format(new Date(newEvent.start_time), "yyyy-MM-dd'T'HH:mm")}
                            onChange={(e) => setNewEvent({ ...newEvent, start_time: new Date(e.target.value) })}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            label="Date de fin"
                            type="datetime-local"
                            value={format(new Date(newEvent.end_time), "yyyy-MM-dd'T'HH:mm")}
                            onChange={(e) => setNewEvent({ ...newEvent, end_time: new Date(e.target.value) })}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                        <FormControl fullWidth>
                            <InputLabel>Assigné à</InputLabel>
                            <Select
                                value={newEvent.assigned_to || ''}
                                onChange={(e) => setNewEvent({ ...newEvent, assigned_to: e.target.value })}
                                label="Assigné à"
                            >
                                <MenuItem value="">Non assigné</MenuItem>
                                {users.map((user) => (
                                    <MenuItem key={user.id} value={user.id}>
                                        {user.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {selectedEvent && (
                            <FormControl fullWidth>
                                <InputLabel>Statut</InputLabel>
                                <Select
                                    value={newEvent.status}
                                    onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
                                    label="Statut"
                                >
                                    <MenuItem value="pending">En attente</MenuItem>
                                    <MenuItem value="in_progress">En cours</MenuItem>
                                    <MenuItem value="completed">Terminé</MenuItem>
                                    <MenuItem value="cancelled">Annulé</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    {selectedEvent && (
                        <Button onClick={handleDelete} color="error">
                            Supprimer
                        </Button>
                    )}
                    <Button onClick={handleSave} variant="contained" color="primary">
                        {selectedEvent ? 'Modifier' : 'Créer'}
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={20000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleCloseSnackbar} 
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
} 