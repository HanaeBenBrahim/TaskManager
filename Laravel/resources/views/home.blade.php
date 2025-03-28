<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backend Dashboard</title>
    <style>
        :root {
            --primary-color: #6846C1;
            --secondary-color: #8B5CF6;
            --text-color: #2D3748;
            --bg-color: #F7FAFC;
            --card-bg: #FFFFFF;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Arial, sans-serif;
            background: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        .header {
            text-align: center;
            padding: 4rem 0;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            margin-bottom: 3rem;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
            opacity: 0.1;
        }

        .header h1 {
            font-size: 2.5rem;
            margin: 0;
            margin-bottom: 1rem;
        }

        .header p {
            font-size: 1.2rem;
            margin: 0;
            opacity: 0.9;
        }

        .content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .card {
            background: var(--card-bg);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card h2 {
            color: var(--primary-color);
            margin-top: 0;
            font-size: 1.5rem;
        }

        .card p {
            margin: 0;
            color: #4A5568;
        }

        .footer {
            text-align: center;
            padding: 2rem;
            background: var(--card-bg);
            border-top: 1px solid #E2E8F0;
        }

        .footer p {
            margin: 0;
            color: #718096;
        }

        .footer strong {
            color: var(--primary-color);
        }

        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }

            .header {
                padding: 3rem 0;
            }

            .header h1 {
                font-size: 2rem;
            }

            .content {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Bienvenue sur le Backend Dashboard</h1>
        <p>Cet espace est dédié à la gestion et au développement des fonctionnalités backend</p>
    </div>

    <div class="container">
        <div class="content">
            <div class="card">
                <h2>État du Système</h2>
                <p>Tout est opérationnel et prêt à l'usage !</p>
            </div>

            <div class="card">
                <h2>API RESTful</h2>
                <p>Interface de programmation complète pour l'intégration frontend</p>
            </div>

            <div class="card">
                <h2>Base de Données</h2>
                <p>Système de gestion de données optimisé et sécurisé</p>
            </div>
        </div>
    </div>

    <footer class="footer">
        <p>Développé par <strong>Hanae</strong> & <strong>Ben Brahim</strong></p>
    </footer>
</body>
</html> 