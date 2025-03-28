import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import AuthUser from './AuthUser';

const Profile = () => {
    const navigate = useNavigate();
    const { http } = AuthUser();
    const [user, setUser] = useState({
        name: '',
        email: '',
        current_password: '',
        new_password: '',
        confirm_password: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const fetchUserData = async () => {
            if (!isLoading) return;

            try {
                const response = await http.get('/user');
                if (isMounted) {
                    setUser(prev => ({
                        ...prev,
                        name: response.data.name,
                        email: response.data.email
                    }));
                    setIsLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    if (err.response?.status === 401) {
                        navigate('/login');
                    } else {
                        showNotification('Erreur lors de la récupération des informations', 'error');
                    }
                    setIsLoading(false);
                }
            }
        };

        fetchUserData();

        return () => {
            isMounted = false;
        };
    }, [http, navigate, isLoading]);

    const showNotification = (msg, type) => {
        if (type === 'success') {
            setMessage(msg);
            setShowMessage(true);
            setShowError(false);
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        } else {
            setError(msg);
            setShowError(true);
            setShowMessage(false);
            setTimeout(() => {
                setShowError(false);
            }, 5000);
        }
    };

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowMessage(false);
        setShowError(false);

        // Vérification des mots de passe
        if (user.new_password) {
            if (!user.current_password) {
                showNotification('Le mot de passe actuel est requis pour changer le mot de passe', 'error');
                return;
            }
            if (user.new_password !== user.confirm_password) {
                showNotification('Les mots de passe ne correspondent pas', 'error');
                return;
            }
            if (user.new_password.length < 8) {
                showNotification('Le nouveau mot de passe doit contenir au moins 8 caractères', 'error');
                return;
            }
        }

        try {
            const updateData = {
                name: user.name,
                email: user.email,
                current_password: user.current_password,
                new_password: user.new_password,
                new_password_confirmation: user.confirm_password
            };

            const response = await http.put('/user/update', updateData);
            showNotification('Profil mis à jour avec succès', 'success');
            setUser(prev => ({
                ...prev,
                current_password: '',
                new_password: '',
                confirm_password: ''
            }));
        } catch (err) {
            if (err.response?.status === 401) {
                navigate('/login');
            } else {
                const errorMessage = err.response?.data?.message || 'Erreur lors de la mise à jour du profil';
                showNotification(errorMessage, 'error');
            }
        }
    };

    if (isLoading) {
        return (
            <div className="profile-container">
                <h2>Chargement...</h2>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <h2>Mon Profil</h2>
            {showMessage && message && (
                <div className={`alert alert-success ${!showMessage ? 'fade-out' : ''}`}>
                    {message}
                </div>
            )}
            {showError && error && (
                <div className={`alert alert-danger ${!showError ? 'fade-out' : ''}`}>
                    {error}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label>Nom</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Mot de passe actuel</label>
                    <input
                        type="password"
                        name="current_password"
                        value={user.current_password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Nouveau mot de passe</label>
                    <input
                        type="password"
                        name="new_password"
                        value={user.new_password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Confirmer le nouveau mot de passe</label>
                    <input
                        type="password"
                        name="confirm_password"
                        value={user.confirm_password}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Mettre à jour le profil
                </button>
            </form>
        </div>
    );
};

export default Profile; 