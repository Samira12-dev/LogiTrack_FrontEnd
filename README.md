# 1. Nom du projet

**Nom du projet :** LogiTrack Frontend -- Interface de Gestion Logistique

---

# 2. Présentation du projet

LogiTrack Frontend est une application web développée avec **React.js** permettant aux utilisateurs de gérer les différentes fonctionnalités de l'application LogiTrack.

L'application communique avec une API REST sécurisée développée avec **Spring Boot, Spring Security et JWT**.

L'interface permet aux utilisateurs de consulter et gérer les clients, les produits et les commandes selon leur rôle.

L'application propose une interface moderne, claire et responsive avec une gestion des accès basée sur l'authentification et les rôles.

---

# 3. Problématique

Les utilisateurs d'une application logistique doivent pouvoir accéder uniquement aux fonctionnalités correspondant à leurs responsabilités.

Le frontend doit donc assurer :

* La gestion de l'authentification
* La conservation de la session utilisateur
* La protection des routes privées
* La gestion des rôles
* La communication sécurisée avec l'API
* La gestion des erreurs HTTP
* Une interface adaptée aux différents utilisateurs

LogiTrack Frontend répond à ces besoins grâce à **React Router, Axios Interceptors, ProtectedRoute et RoleGuard**.

---

# 4. Fonctionnalités principales

## Authentification

* Inscription
* Connexion
* Déconnexion
* Stockage du JWT
* Récupération du rôle utilisateur
* Redirection vers le tableau de bord
* Gestion de la session

## Sécurité

* ProtectedRoute
* RoleGuard
* Gestion des autorisations selon le rôle
* Axios Request Interceptor
* Axios Response Interceptor
* Gestion des erreurs `401`, `403`, `404` et `500`
* Déconnexion automatique en cas de `401 Unauthorized`

## Tableau de bord

Le tableau de bord permet d'afficher différentes informations :

* Nombre de clients
* Nombre de produits
* Nombre de commandes
* Commandes en attente
* Commandes expédiées
* Commandes livrées
* Produits avec un stock faible
* Produit le plus commandé
* Commandes récentes

## Gestion des clients

* Afficher la liste des clients
* Consulter un client
* Ajouter un client
* Modifier un client
* Supprimer un client selon le rôle

## Gestion des produits

* Afficher la liste des produits
* Consulter un produit
* Ajouter un produit
* Modifier un produit
* Supprimer un produit selon le rôle
* Rechercher par catégorie
* Rechercher selon le prix
* Afficher les produits avec un stock faible

## Gestion des commandes

* Afficher les commandes
* Consulter une commande
* Créer une commande
* Ajouter un produit à une commande
* Modifier le statut d'une commande
* Consulter les commandes d'un client
* Filtrer les commandes par statut

Statuts disponibles :

```text
EN_ATTENTE
EXPEDIEE
LIVREE
```

## Pagination et tri

* Changement de page
* Choix du nombre d'éléments par page
* Affichage du nombre total d'éléments
* Tri des données

## Recherche et filtrage

* Recherche des clients par nom
* Recherche des produits par catégorie
* Recherche des produits par prix
* Recherche des commandes d'un client
* Filtrage des commandes par statut
* Affichage des produits avec un stock faible

---

# 5. Gestion des rôles

L'application prend en charge trois rôles :

### ADMIN

Accès complet à l'application :

* Gestion des utilisateurs
* Gestion des clients
* Gestion des produits
* Gestion des commandes
* Suppression des données
* Consultation des statistiques

### MANAGER

Accès aux fonctionnalités opérationnelles :

* Gestion des clients
* Gestion des produits
* Gestion des commandes
* Modification du statut des commandes
* Consultation des statistiques
* Consultation des produits avec un stock faible

### AGENT

Accès principalement aux fonctionnalités de consultation :

* Consultation des clients
* Consultation des produits
* Consultation des commandes
* Consultation des détails d'une commande
* Modification du statut d'une commande selon ses autorisations

Les routes et fonctionnalités sont protégées avec `ProtectedRoute` et `RoleGuard`.

---

# 6. Technologies utilisées

| Technologie        | Utilisation dans le projet         |
| ------------------ | ---------------------------------- |
| React 19           | Développement de l'interface       |
| Vite               | Outil de développement et de build |
| JavaScript ES6+    | Langage de programmation           |
| React Router DOM   | Gestion de la navigation           |
| Axios              | Communication avec l'API           |
| Axios Interceptors | Gestion du JWT et des erreurs      |
| React Hook Form    | Gestion des formulaires            |
| Yup                | Validation des formulaires         |
| CSS3               | Mise en forme                      |
| MUI                | Composants d'interface             |
| JWT                | Authentification                   |
| Docker             | Conteneurisation                   |
| Git / GitHub       | Versionnement                      |

---

# 7. Architecture du projet

L'application est organisée de manière modulaire :

```text
src/
├── api/
│   └── axios.js
│
├── components/
│   ├── Header/
│   ├── Sidebar/
│
├── pages/
│   ├── auth/
│   │   ├── Login/
│   │   └── Register/
│   │
│   ├── Dashboard/
│   ├── Clients/
│   ├── Produits/
│   ├── Commandes/
│   ├── Utilisateurs/
│   └── AccesRefuse/
│
├── routes/
│   ├── AppRoutes.jsx
│   ├── ProtectedRoute.jsx
│   └── RoleGuard.jsx
│
├── layouts/
│   └── MainLayout.jsx
│
├── App.jsx
└── main.jsx
```

---

# 8. Authentification et sécurité

Après une connexion réussie, le frontend :

1. Récupère le JWT envoyé par l'API.
2. Enregistre le token dans `localStorage`.
3. Récupère le rôle de l'utilisateur.
4. Redirige l'utilisateur vers le tableau de bord.
5. Ajoute automatiquement le JWT aux requêtes HTTP.

Exemple du header envoyé à l'API :

```http
Authorization: Bearer <JWT>
```

---

# 9. Axios Interceptors

Une configuration Axios centralisée permet de gérer automatiquement l'authentification.

## Request Interceptor

Le Request Interceptor :

* Récupère le JWT depuis `localStorage`
* Ajoute automatiquement le token au header `Authorization`

## Response Interceptor

Le Response Interceptor gère les principales erreurs HTTP :

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
```

En cas de `401 Unauthorized`, la session est supprimée et l'utilisateur est redirigé vers la page de connexion.

---

# 10. Route Guard

`ProtectedRoute` protège les pages privées de l'application.

Les utilisateurs non authentifiés ne peuvent pas accéder aux pages internes.

Exemples :

```text
/dashboard
/clients
/produits
/commandes
/utilisateurs
```

Sans JWT valide, l'utilisateur est automatiquement redirigé vers :

```text
/login
```

---

# 11. Role Guard

`RoleGuard` contrôle l'accès aux fonctionnalités selon le rôle de l'utilisateur.

Exemple :

```jsx
<RoleGuard roles={["ADMIN"]}>
    <Users />
</RoleGuard>
```

Une tentative d'accès à une fonctionnalité non autorisée redirige l'utilisateur vers :

```text
/acces-refuse
```

---

# 12. Installation et lancement

## 12.1 Prérequis

* Node.js
* npm
* Git
* Docker Desktop
* API LogiTrack Backend en fonctionnement

## 12.2 Cloner le dépôt

```bash
git clone https://github.com/votre-compte/logitrack-frontend.git
```

## 12.3 Ouvrir le projet

```bash
cd logitrack-frontend
```

## 12.4 Installer les dépendances

```bash
npm install
```

## 12.5 Variables d'environnement

Créer un fichier `.env` à la racine du projet :

```env
VITE_API_URL=http://localhost:8080/api
```

---

# 13. Lancer le frontend en développement

Pour lancer le projet avec Vite :

```bash
npm run dev
```

L'application sera généralement disponible sur :

```text
http://localhost:5173
```

L'URL exacte est affichée dans le terminal après le lancement de Vite.

---

# 14. Lancer le frontend avec Docker

Le projet contient un `Dockerfile` permettant de construire et exécuter le frontend dans un conteneur.

## Construire l'image Docker

Depuis la racine du projet :

```bash
docker build -t logitrack-frontend .
```

## Lancer le conteneur

```bash
docker run -d -p 5173:80 --name logitrack-frontend logitrack-frontend
```

Le frontend sera accessible sur :

```text
http://localhost:5173
```
## Vérifier les conteneurs

```bash
docker ps
```

## Arrêter le conteneur

```bash
docker stop logitrack-frontend
```

## Supprimer le conteneur

```bash
docker rm logitrack-frontend
```

## Supprimer l'image Docker

```bash
docker rmi logitrack-frontend
```

---

# 15. Docker Compose

Si un fichier `docker-compose.yml` est présent dans le projet, l'application peut être lancée avec :

```bash
docker compose up --build
```

Pour lancer les conteneurs en arrière-plan :

```bash
docker compose up -d --build
```

Pour arrêter les services :

```bash
docker compose down
```

Pour afficher les logs :

```bash
docker compose logs -f
```

---

# 16. Communication avec le Backend

Le frontend communique avec l'API LogiTrack à travers Axios.

Architecture de communication :

```text
React
   ↓
Axios
   ↓
JWT
   ↓
Spring Security
   ↓
LogiTrack API
   ↓
MySQL
```

L'URL de l'API est configurée grâce à la variable d'environnement :

```env
VITE_API_URL=http://localhost:8080/api
```

---

# 17. Contribution personnelle

Projet réalisé individuellement.

J'ai développé l'interface frontend React permettant de communiquer avec l'API LogiTrack sécurisée.

J'ai réalisé notamment :

* Les pages d'inscription et de connexion
* La gestion de la session utilisateur
* L'intégration du JWT
* La configuration Axios
* Les Axios Interceptors
* Le ProtectedRoute
* Le RoleGuard
* Le tableau de bord
* La gestion des clients
* La gestion des produits
* La gestion des commandes
* La pagination
* Le tri
* La recherche
* Le filtrage
* La validation des formulaires avec React Hook Form et Yup
* Le Header
* La Sidebar
* L'interface responsive
* La conteneurisation avec Docker

---

# 18. Difficultés rencontrées

## Difficulté 1 -- Authentification JWT

La gestion du JWT côté frontend nécessitait de récupérer correctement le token après la connexion et de le conserver pendant la session.

La solution mise en place utilise `localStorage` ainsi qu'un Axios Request Interceptor permettant d'ajouter automatiquement le token aux requêtes.

## Difficulté 2 -- Protection des routes

La protection des routes nécessitait de différencier les utilisateurs authentifiés des utilisateurs non authentifiés.

La création de `ProtectedRoute` permet de contrôler la présence du token avant l'accès aux pages privées.

## Difficulté 3 -- Gestion des rôles

La gestion des rôles `ADMIN`, `MANAGER` et `AGENT` nécessitait de contrôler les accès aux différentes fonctionnalités.

Le composant `RoleGuard` permet de limiter l'accès à certaines pages selon le rôle de l'utilisateur.

## Difficulté 4 -- Communication avec l'API

La communication entre React et Spring Boot nécessitait une configuration correcte de l'URL de l'API, des headers et des erreurs HTTP.

La configuration centralisée d'Axios permet de simplifier cette communication.

---

# 19. Améliorations possibles

* Ajouter des notifications en temps réel
* Ajouter des graphiques avancés au tableau de bord
* Ajouter un système de thème clair/sombre
* Améliorer davantage l'expérience mobile
* Ajouter des tests automatisés frontend
* Ajouter une gestion avancée des permissions
* Déployer l'application sur une plateforme cloud

---

# 20. Checklist finale

* [x] React 19
* [x] Vite
* [x] React Router DOM
* [x] Axios
* [x] Axios Request Interceptor
* [x] Axios Response Interceptor
* [x] JWT
* [x] ProtectedRoute
* [x] RoleGuard
* [x] Authentification
* [x] Gestion des rôles
* [x] Dashboard
* [x] Gestion des clients
* [x] Gestion des produits
* [x] Gestion des commandes
* [x] Pagination
* [x] Tri
* [x] Recherche
* [x] Filtrage
* [x] React Hook Form
* [x] Yup
* [x] Interface responsive
* [x] Dockerfile
* [x] Git / GitHub