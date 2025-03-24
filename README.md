# TaskManager - Gestionnaire de Tâches

## Description
TaskManager est une application web moderne de gestion de tâches développée avec Laravel et React. Elle offre une interface intuitive et des fonctionnalités avancées pour organiser efficacement vos activités.

## Fonctionnalités
- 🔐 Authentification sécurisée
- 📅 Gestion de calendrier
- ✅ Suivi des tâches
- 👥 Gestion des utilisateurs
- 📱 Interface responsive

## Technologies Utilisées
- Backend: Laravel
- Frontend: React
- Base de données: MySQL
- API: RESTful

## Installation

### Prérequis
- PHP >= 8.0
- Composer
- Node.js >= 14.0
- MySQL

### Configuration
1. Cloner le repository
```bash
git clone https://github.com/HanaeBenBrahim/TaskManager.git
```

2. Installer les dépendances
```bash
# Backend
cd Laravel
composer install
cp .env.example .env
php artisan key:generate

# Frontend
cd ../reactjs
npm install
```

3. Configurer la base de données
- Créer une base de données MySQL
- Modifier le fichier .env avec vos informations de connexion

4. Lancer les migrations
```bash
cd Laravel
php artisan migrate
```

5. Démarrer les serveurs
```bash
# Backend
cd Laravel
php artisan serve

# Frontend
cd reactjs
npm start
```

## Mise à jour de l'interface 🎨

### Login & Register ✨
- Design épuré en violet (#6846C1)
- Réduction des marges pour un affichage plus compact
- Traduction complète des textes en français

### Accueil 🏠
- Deux fonctionnalités principales : Calendrier Intuitif & Gestion des Tâches
- Design allégé avec boutons d'action clairs

### Calendrier 📅
- Interface entièrement en français
- Suppression du filtre par statut, affichage optimisé

### Navigation 🧭
- Message de bienvenue personnalisé
- Ajustement des espaces et des boutons

✅ Résultat : Une interface plus fluide, moderne et intuitive !



## Contact
Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à nous contacter directement. 
