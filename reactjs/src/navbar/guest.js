import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import Register from '../components/register';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Guest() {
    return (
        <>
            <AppBar position="sticky" sx={{ 
                backgroundColor: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
            }}>
                <Container>
                    <Toolbar sx={{ 
                        display: 'flex',
                        justifyContent: 'flex-end',
                        padding: '0.5rem 0',
                    }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                                component={Link}
                                to="/"
                                startIcon={<HomeIcon />}
                                sx={{
                                    color: 'primary.main',
                                    '&:hover': {
                                        backgroundColor: 'rgba(33, 150, 243, 0.08)',
                                    },
                                    textTransform: 'none',
                                    fontWeight: 500,
                                }}
                            >
                                Accueil
                            </Button>
                            <Button
                                component={Link}
                                to="/login"
                                startIcon={<LoginIcon />}
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                    textTransform: 'none',
                                    fontWeight: 500,
                                }}
                            >
                                Connexion
                            </Button>
                            <Button
                                component={Link}
                                to="/register"
                                startIcon={<PersonAddIcon />}
                                variant="contained"
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                    },
                                }}
                            >
                                Inscription
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container sx={{ mt: 3 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Container>
        </>
    );
}

export default Guest;
