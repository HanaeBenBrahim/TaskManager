import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Container, 
    Typography, 
    Button, 
    Box, 
    Grid,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Home = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            navigate('/dashboard');
            return;
        }
    }, [token, navigate]);

    const features = [
        {
            icon: <CalendarMonthIcon sx={{ fontSize: 40, color: '#6B46C1' }} />,
            title: 'Calendrier Intuitif',
            description: 'Organisez vos tâches facilement avec notre calendrier simple et efficace.'
        },
        {
            icon: <TaskAltIcon sx={{ fontSize: 40, color: '#6B46C1' }} />,
            title: 'Gestion des Tâches',
            description: 'Créez et suivez vos tâches en quelques clics.'
        }
    ];

    return (
        <Box sx={{ 
            minHeight: '100vh',
            bgcolor: '#F7FAFC',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Cercles décoratifs */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6B46C1 0%, #805AD5 100%)',
                    opacity: 0.1,
                    top: '-200px',
                    right: '-200px',
                    zIndex: 0
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6B46C1 0%, #805AD5 100%)',
                    opacity: 0.1,
                    bottom: '-150px',
                    left: '-150px',
                    zIndex: 0
                }}
            />

            {/* Contenu principal */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Section Hero */}
                <Box sx={{ 
                    pt: { xs: 8, md: 12 }, 
                    pb: { xs: 6, md: 8 },
                    textAlign: 'center'
                }}>
                    <Typography 
                        variant="h2" 
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            color: '#2D3748',
                            mb: 3
                        }}
                    >
                        Mon Agenda
                    </Typography>
                    <Typography 
                        variant="h5"
                        sx={{ 
                            color: '#4A5568',
                            mb: 4,
                            maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        Simplifiez votre organisation quotidienne avec notre gestionnaire de tâches intuitif
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                        <Button
                            component={Link}
                            to="/register"
                            variant="contained"
                            sx={{
                                bgcolor: '#6B46C1',
                                color: 'white',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                borderRadius: 2,
                                '&:hover': {
                                    bgcolor: '#553C9A'
                                }
                            }}
                        >
                            Commencer
                        </Button>
                        <Button
                            component={Link}
                            to="/login"
                            variant="outlined"
                            sx={{
                                borderColor: '#6B46C1',
                                color: '#6B46C1',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                borderRadius: 2,
                                '&:hover': {
                                    borderColor: '#553C9A',
                                    bgcolor: 'rgba(107, 70, 193, 0.1)'
                                }
                            }}
                        >
                            Se connecter
                        </Button>
                    </Box>
                </Box>

                {/* Section Fonctionnalités */}
                <Grid 
                    container 
                    spacing={4} 
                    sx={{ 
                        py: { xs: 6, md: 8 },
                        maxWidth: '800px',
                        mx: 'auto'
                    }}
                >
                    {features.map((feature, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Box
                                sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    height: '100%',
                                    bgcolor: 'white',
                                    borderRadius: 3,
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)'
                                    }
                                }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    {feature.icon}
                                </Box>
                                <Typography 
                                    variant="h6" 
                                    component="h3" 
                                    gutterBottom
                                    sx={{ 
                                        fontWeight: 600,
                                        color: '#2D3748'
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: '#4A5568',
                                        lineHeight: 1.7
                                    }}
                                >
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;