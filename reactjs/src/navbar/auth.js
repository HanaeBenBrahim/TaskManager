import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
import { AppBar, Toolbar, Button, Box, Container, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import Profile from '../components/Profile';
import Login from '../components/login';

function Auth() {
    const {token, logout, user} = AuthUser();
    
    const getUserName = () => {
        const userStr = sessionStorage.getItem('user');
        if (userStr) {
            try {
                const user = JSON.parse(userStr);
                return user.name || 'Utilisateur';
            } catch (e) {
                return 'Utilisateur';
            }
        }
        return 'Utilisateur';
    };

    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }

    return (
        <>
            <AppBar position="sticky" sx={{ 
                backgroundColor: 'white', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
            }}>
                <Container>
                    <Toolbar sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        padding: '0.5rem 0',
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'text.primary',
                                fontWeight: 500,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            Bienvenue, {getUserName()}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                                component={Link}
                                to="/dashboard"
                                startIcon={<DashboardIcon />}
                                sx={{
                                    color: 'primary.main',
                                    '&:hover': {
                                        backgroundColor: 'rgba(33, 150, 243, 0.08)',
                                    },
                                    textTransform: 'none',
                                    fontWeight: 500,
                                }}
                            >
                                Dashboard
                            </Button>
                            <Button
                                component={Link}
                                to="/profile"
                                startIcon={<PersonIcon />}
                                sx={{
                                    color: 'primary.main',
                                    '&:hover': {
                                        backgroundColor: 'rgba(33, 150, 243, 0.08)',
                                    },
                                    textTransform: 'none',
                                    fontWeight: 500,
                                }}
                            >
                                Mon Profil
                            </Button>
                            <Button
                                onClick={logoutUser}
                                startIcon={<LogoutIcon />}
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                        color: 'error.main',
                                    },
                                    textTransform: 'none',
                                    fontWeight: 500,
                                }}
                            >
                                Déconnexion
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container sx={{ mt: 1 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Container>
        </>
    );
}

export default Auth;
