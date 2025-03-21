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
  Avatar
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Register() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { email: '', password: '' };

        if (!validateEmail(email)) {
            newErrors.email = "L'adresse email n'est pas valide";
            isValid = false;
        }

        if (password.length < 8) {
            newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const submitForm = () => {
        if (validateForm()) {
            http.post('/register', {
                email: email,
                password: password,
                name: name
            }).then((res) => {
                navigate('/login')
            });
        }
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
                    <PersonAddIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
                    Inscription
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
                            label="Nom"
                            autoComplete="name"
                            autoFocus
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Adresse email"
                            autoComplete="email"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Mot de passe"
                            type="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            error={!!errors.password}
                            helperText={errors.password}
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
                            S'inscrire
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}