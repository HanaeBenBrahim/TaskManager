# 📅 TaskManager - Application de Gestion de Tâches

<div align="center">
  <img src="https://img.shields.io/badge/React-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Laravel-red?logo=laravel" alt="Laravel" />
  <img src="https://img.shields.io/badge/Material--UI-5-blue?logo=mui" alt="Material-UI" />
  <img src="https://img.shields.io/badge/MySQL-8-blue?logo=mysql" alt="MySQL" />
</div>

## 🌟 Fonctionnalités

- **📊 Tableau de Bord Intuitif**
  - Vue d'ensemble claire de vos tâches
  - Statistiques et métriques importantes

- **📅 Calendrier Intelligent**
  - Visualisation claire des tâches
  - Gestion facile des événements
  - Filtrage par statut et utilisateur

- **👥 Gestion des Tâches**
  - Création et assignation de tâches
  - Suivi en temps réel
  - Statuts personnalisables
  - Collaboration d'équipe

- **🔒 Authentification Sécurisée**
  - Système de connexion robuste
  - Gestion des rôles et permissions
  - Protection des données

## 🚀 Installation

### Prérequis

- PHP >= 8.1
- Node.js >= 16
- MySQL >= 8.0
- Composer
- npm ou yarn

### Backend (Laravel)

```bash
# Installation des dépendances PHP
cd Laravel
composer install

# Configuration de l'environnement
cp .env.example .env
php artisan key:generate

# Configuration de la base de données
# Éditer le fichier .env avec vos informations de base de données

# Migration de la base de données
php artisan migrate

# Génération du secret JWT  !!!
php artisan jwt:secret

# Démarrage du serveur
php artisan serve
```

### Frontend (React)

```bash
# Installation des dépendances JavaScript
cd reactjs
npm install

# Démarrage de l'application
npm start
```

## 🎨 Technologies Utilisées

### Backend
- **Laravel** - Framework PHP moderne et robuste
- **MySQL** - Base de données relationnelle
- **Sanctum** - Authentification API sécurisée

### Frontend
- **React** - Bibliothèque JavaScript performante
- **Material-UI 5** - Framework UI moderne
- **React Big Calendar** - Gestion avancée du calendrier
- **Axios** - Client HTTP pour les requêtes API

## 🔧 Configuration

### Variables d'Environnement

#### Backend (.env)
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=taskmanager
DB_USERNAME=root
DB_PASSWORD=
```

#### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:8000
```

## 📱 Captures d'écran

- 🏠 **Page d'Accueil** - Interface moderne et accueillante
- 📅 **Calendrier** - Vue claire et organisée des tâches
- ✅ **Gestion des Tâches** - Interface intuitive de gestion
- 👤 **Profil Utilisateur** - Gestion des informations personnelles

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à nous contacter.

---

<div align="center">
  <p>Développé par Hanae✨ et Mohamed</p>
</div> 
