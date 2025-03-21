import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';
import {
    Container,
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Avatar,
    Link
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export default function Login() {
    const navigate = useNavigate();
    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () => {
        // api call
        http.post('/login', { email: email, password: password }).then((res) => {
            setToken(res.data.user, res.data.access_token);
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ 
                    m: 1, 
                    bgcolor: 'primary.main',
                    width: 56,
                    height: 56
                }}>
                    <LoginIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
                    Connexion
                </Typography>
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        width: '100%',
                        borderRadius: 2,
                    }}
                >
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Adresse email"
                            autoComplete="email"
                            autoFocus
                            onChange={e => setEmail(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Mot de passe"
                            type="password"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                            sx={{ mb: 3 }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={submitForm}
                            sx={{
                                mt: 2,
                                mb: 2,
                                py: 1.5,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                boxShadow: 'none',
                                '&:hover': {
                                    boxShadow: 'none',
                                    backgroundColor: 'primary.dark',
                                },
                            }}
                        >
                            Se connecter
                        </Button>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Vous n'avez pas de compte ?{' '}
                                <Link 
                                    href="/register" 
                                    sx={{ 
                                        textDecoration: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        }
                                    }}
                                >
                                    Inscrivez-vous
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}