<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backend - Hanae & BenBrahim</title>
    <style>
        :root {
            --primary-blue: #4a90e2;
            --primary-purple: #9b59b6;
            --light-blue: #f0f7ff;
            --light-purple: #f8f0ff;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Arial, sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: linear-gradient(135deg, var(--light-blue), var(--light-purple));
            width: 100%;
        }

        .container {
            width: 85%;
            max-width: 1400px;
            margin: 2rem auto;
            padding: 2rem;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            flex-grow: 1;
        }

        .header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid var(--primary-blue);
        }

        .header h1 {
            color: var(--primary-blue);
            margin: 0;
            font-size: 2.5rem;
        }

        .header p {
            color: var(--primary-purple);
            margin: 0.5rem 0 0;
            font-size: 1.1rem;
        }

        .content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .card {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            border: 1px solid rgba(74, 144, 226, 0.1);
            transition: transform 0.2s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card h3 {
            color: var(--primary-blue);
            margin-top: 0;
        }

        .card p {
            color: #666;
            margin: 0.5rem 0;
        }

        .footer {
            width: 100%;
            text-align: center;
            padding: 1.5rem;
            background-color: white;
            color: var(--primary-purple);
            font-size: 1rem;
            box-shadow: 0 -2px 4px rgba(0,0,0,0.05);
        }

        .status-badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.9rem;
            background-color: var(--light-blue);
            color: var(--primary-blue);
        }

        @media (max-width: 768px) {
            .container {
                width: 95%;
                padding: 1rem;
            }
            
            .content {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Backend Dashboard</h1>
            <p>Espace de développement Hanae & BenBrahim</p>
        </div>

        <div class="content">
            <div class="card">
                <h3>API Status</h3>
                <p>Vérifiez l'état de vos endpoints API</p>
                <span class="status-badge">Active</span>
            </div>

            <div class="card">
                <h3>Base de données</h3>
                <p>Gérez vos connexions et migrations</p>
                <span class="status-badge">Connecté</span>
            </div>

            <div class="card">
                <h3>Logs</h3>
                <p>Consultez les logs système</p>
                <span class="status-badge">En temps réel</span>
            </div>

            <div class="card">
                <h3>Documentation</h3>
                <p>Accédez à la documentation API</p>
                <span class="status-badge">À jour</span>
            </div>
        </div>
    </div>

    <footer class="footer">
        Hanae & BenBrahim
    </footer>
</body>
</html> 