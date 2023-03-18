# Piiquante

Création d'une API sécurisée pour une application d'avis gastronomiques

Compétences évaluées

1. Mettre en œuvre des opérations CRUD de manière sécurisée

- Création d'une sauce;
- Récupération des sauces;
- Récupération d'une sauce;
- Modification d'une sauce;
- Supression d'une sauce.

2. Stocker des données de manière sécurisée

    La bibliothèque bcrypt a été utilisée pour hasher le mot de passe avant qu'il ne soit sauvegardé;
    L'utilisateur doit obligatoirement saisir une adresse email conforme pour créer un compte;
    Un plugin mongoose a été utilisé pour s'assurer que l'adresse email soit unique.

3. Implémenter un modèle logique de données conformément à la réglementation

    L'api a été réalisé avec NodeJS et le framework express;
    Toute requête qui fait intervenir les sauces nécessite l'authentification de l'utilisateur;
    Seul le propriétaire d'une sauce peut la modifier et la supprimer;
    Impossible de liker ou disliker deux fois la même sauce.
