import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import AuthUser from './AuthUser';
import {
    Container,
    Box,
    TextField,
    Button,
    Typography,
    Link
} from '@mui/material';

export default function Register() {
    const navigate = useNavigate();
    const { http } = AuthUser();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        if (!name.trim()) {
            newErrors.name = 'Le nom est requis';
            isValid = false;
        }

        if (!validateEmail(email)) {
            newErrors.email = "L'adresse email n'est pas valide";
            isValid = false;
        }

        if (password.length < 8) {
            newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
            isValid = false;
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const submitForm = () => {
        if (validateForm()) {
            http.post('/register', {
                name: name,
                email: email,
                password: password
            }).then(() => {
                navigate('/login');
            });
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    mt: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                        mb: 1,
                        fontWeight: 600,
                        color: '#6B46C1'
                    }}
                >
                    Mon Agenda
                </Typography>

                <Box
                    component="form"
                    sx={{
                        width: '100%',
                        mt: 2,
                        p: 3,
                        bgcolor: 'white',
                        borderRadius: 2,
                        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{ mb: 1, color: '#333', fontWeight: 500 }}
                    >
                        Nom
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Votre nom"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                '&:hover fieldset': {
                                    borderColor: '#6B46C1',
                                },
                            },
                        }}
                    />

                    <Typography
                        variant="subtitle1"
                        sx={{ mb: 1, color: '#333', fontWeight: 500 }}
                    >
                        Email
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="votre@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                '&:hover fieldset': {
                                    borderColor: '#6B46C1',
                                },
                            },
                        }}
                    />

                    <Typography
                        variant="subtitle1"
                        sx={{ mb: 1, color: '#333', fontWeight: 500 }}
                    >
                        Mot de passe
                    </Typography>
                    <TextField
                        fullWidth
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                '&:hover fieldset': {
                                    borderColor: '#6B46C1',
                                },
                            },
                        }}
                    />

                    <Typography
                        variant="subtitle1"
                        sx={{ mb: 1, color: '#333', fontWeight: 500 }}
                    >
                        Confirmer le mot de passe
                    </Typography>
                    <TextField
                        fullWidth
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                '&:hover fieldset': {
                                    borderColor: '#6B46C1',
                                },
                            },
                        }}
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                            Déjà inscrit ?{' '}
                            <Link
                                component={RouterLink}
                                to="/login"
                                sx={{
                                    color: '#6B46C1',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Se connecter
                            </Link>
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={submitForm}
                            sx={{
                                px: 4,
                                py: 1.5,
                                bgcolor: '#1A202C',
                                borderRadius: 2,
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 500,
                                '&:hover': {
                                    bgcolor: '#2D3748',
                                },
                            }}
                        >
                            S'inscrire
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}