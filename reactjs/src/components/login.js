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

export default function Login() {
    const navigate = useNavigate();
    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = () => {
        http.post('/login', { email: email, password: password }).then((res) => {
            setToken(res.data.user, res.data.access_token);
        })
    }

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    mt: 8,
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
                <Typography
                    variant="h6"
                    sx={{
                        mb: 4,
                        color: '#666',
                        fontWeight: 400
                    }}
                >
                    Connectez-vous à votre compte
                </Typography>

                <Box
                    component="form"
                    sx={{
                        width: '100%',
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
                        Email
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="votre@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={submitForm}
                        sx={{
                            py: 1.5,
                            bgcolor: '#6B46C1',
                            borderRadius: 2,
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontWeight: 500,
                            '&:hover': {
                                bgcolor: '#553C9A',
                            },
                        }}
                    >
                        Se connecter
                    </Button>
                </Box>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant="body1" sx={{ color: '#666' }}>
                        Pas encore de compte ?{' '}
                        <Link
                            component={RouterLink}
                            to="/register"
                            sx={{
                                color: '#6B46C1',
                                textDecoration: 'none',
                                fontWeight: 500,
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            S'inscrire
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}