import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Container, 
    Typography, 
    Button, 
    Box, 
    Grid, 
    Card, 
    CardContent,
    useTheme,
    useMediaQuery,
    Paper,
    Avatar
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimelineIcon from '@mui/icons-material/Timeline';

const IllustrationComponent = () => (
    <Box
        sx={{
            position: 'relative',
            width: '100%',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        {/* Cercle principal animé */}
        <Box
            sx={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                animation: 'float 6s ease-in-out infinite'
            }}
        />
        
        {/* Éléments flottants */}
        <Box
            sx={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                animation: 'slideRight 12s linear infinite'
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    transform: 'translateX(-50%)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
            >
                <EventNoteIcon color="primary" />
                <Typography variant="body2">Réunion d'équipe - 10:00</Typography>
            </Paper>
            
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    ml: 4,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
            >
                <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                <Typography variant="body2">Tâche complétée</Typography>
            </Paper>
        </Box>

        {/* Graphique animé */}
        <Box
            sx={{
                position: 'absolute',
                right: '10%',
                top: '20%',
                animation: 'slideLeft 10s linear infinite'
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
            >
                <TimelineIcon sx={{ color: '#FF9800' }} />
                <Typography variant="body2">Progression +25%</Typography>
            </Paper>
        </Box>
    </Box>
);

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
            icon: <CalendarMonthIcon />,
            title: 'Calendrier Intelligent',
            description: 'Planifiez et visualisez vos tâches avec notre calendrier intuitif et personnalisable.'
        },
        {
            icon: <TaskAltIcon />,
            title: 'Gestion des Tâches',
            description: 'Créez, assignez et suivez vos tâches en temps réel avec une interface moderne.'
        },
        {
            icon: <GroupIcon />,
            title: 'Collaboration d\'Équipe',
            description: 'Travaillez efficacement en équipe avec des outils de collaboration avancés.'
        },
        {
            icon: <NotificationsActiveIcon />,
            title: 'Notifications',
            description: 'Restez informé des mises à jour importantes avec des notifications en temps réel.'
        },
        {
            icon: <AnalyticsIcon />,
            title: 'Analyses Détaillées',
            description: 'Suivez la progression et analysez la performance de votre équipe.'
        },
        {
            icon: <SpeedIcon />,
            title: 'Interface Rapide',
            description: 'Profitez d\'une expérience fluide et réactive pour une productivité maximale.'
        }
    ];

    return (
        <Box sx={{ bgcolor: '#f8f9fa' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #6B46C1 0%, #805AD5 100%)',
                    color: 'white',
                    pt: { xs: 8, md: 12 },
                    pb: { xs: 10, md: 16 },
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography 
                                variant="h2" 
                                component="h1" 
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                                }}
                            >
                                Gérez vos tâches,<br />
                                Boostez votre productivité
                            </Typography>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    mb: 4, 
                                    opacity: 0.9,
                                    fontWeight: 400
                                }}
                            >
                                Une solution moderne et intuitive pour organiser votre travail, 
                                collaborer en équipe et atteindre vos objectifs.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button
                                    component={Link}
                                    to="/register"
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        bgcolor: 'white',
                                        color: 'primary.main',
                                        '&:hover': {
                                            bgcolor: 'grey.100'
                                        },
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        textTransform: 'none'
                                    }}
                                >
                                    Commencer gratuitement
                                </Button>
                                <Button
                                    component={Link}
                                    to="/login"
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        borderColor: 'white',
                                        color: 'white',
                                        '&:hover': {
                                            borderColor: 'grey.100',
                                            bgcolor: 'rgba(255,255,255,0.1)'
                                        },
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        textTransform: 'none'
                                    }}
                                >
                                    Se connecter
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <IllustrationComponent />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Container 
                sx={{ 
                    py: { xs: 8, md: 12 },
                    mt: -8,
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Grid container spacing={3}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    bgcolor: 'white',
                                    borderRadius: 2,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                    }
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: 'primary.main',
                                        width: 56,
                                        height: 56,
                                        mb: 2
                                    }}
                                >
                                    {feature.icon}
                                </Avatar>
                                <Typography 
                                    variant="h6" 
                                    component="h3" 
                                    gutterBottom
                                    sx={{ fontWeight: 600 }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography 
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.7 }}
                                >
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* CTA Section */}
            <Box 
                sx={{ 
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: { xs: 8, md: 12 },
                    mt: 8
                }}
            >
                <Container>
                    <Box
                        sx={{
                            textAlign: 'center',
                            maxWidth: 800,
                            mx: 'auto'
                        }}
                    >
                        <Typography 
                            variant="h3" 
                            component="h2" 
                            gutterBottom
                            sx={{ fontWeight: 700 }}
                        >
                            Prêt à améliorer votre productivité ?
                        </Typography>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                mb: 4, 
                                opacity: 0.9,
                                fontWeight: 400
                            }}
                        >
                            Rejoignez des milliers d'utilisateurs qui ont déjà transformé leur façon de travailler
                        </Typography>
                        <Button
                            component={Link}
                            to="/register"
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: 'white',
                                color: 'primary.main',
                                '&:hover': {
                                    bgcolor: 'grey.100'
                                },
                                px: 6,
                                py: 2,
                                fontSize: '1.1rem',
                                textTransform: 'none'
                            }}
                        >
                            Commencer maintenant
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Animations mises à jour */}
            <style>
                {`
                    @keyframes float {
                        0%, 100% { transform: translateY(0) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(5deg); }
                    }
                    @keyframes slideRight {
                        0% { transform: translateX(-30px); opacity: 0.3; }
                        50% { transform: translateX(0); opacity: 1; }
                        100% { transform: translateX(-30px); opacity: 0.3; }
                    }
                    @keyframes slideLeft {
                        0% { transform: translateX(30px); opacity: 0.3; }
                        50% { transform: translateX(0); opacity: 1; }
                        100% { transform: translateX(30px); opacity: 0.3; }
                    }
                `}
            </style>
        </Box>
    );
};

export default Home;