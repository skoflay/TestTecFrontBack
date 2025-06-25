# Application de Gestion de Projets - Spring Boot & Angular

Ce projet complet permet de gérer des projets et leurs tâches associées via une API REST (backend Spring Boot) et une interface web (frontend Angular).

---

## 🧩 Partie 1 : Backend - Spring Boot

### 🔸 Entités

- `Project` : id, name, description, startDate, endDate
- `Task` : id, title, description, status, dueDate, project (relation ManyToOne)

### 🔸 Relations

- OneToMany : Un projet peut avoir plusieurs tâches.

### 🔸 Fonctions implémentées

- CRUD complet sur les projets :
  - GET /projects
  - POST /projects
  - PUT /projects/{id}
  - DELETE /projects/{id}
- Liste des tâches d’un projet :  
  - GET /projects/{id}/tasks (avec pagination)
- Recherche de tâches :
  - GET /tasks/search?status=...
  - GET /tasks/search?title=...

---

## 🌐 Partie 2 : Frontend - Angular

### 🔸 Initialisation

- Projet créé avec Angular CLI
- Bootstrap intégré pour le design

### 🔸 Modèles

#### `/src/app/models`
- `project.model.ts`
- `task.model.ts`

### 🔸 Services

#### `/src/app/services`
- `project.service.ts` : gestion des appels HTTP vers l'API Spring Boot (projets, tâches, recherches)

### 🔸 Composants

#### `/src/app/components`
- `project-list` : affiche la liste des projets
- `task-list` : affiche les tâches d’un projet avec pagination
- `task-form` : formulaire pour ajouter ou modifier une tâche

---

## 🔗 Communication Frontend ↔ Backend

Utilisation d’`HttpClient` Angular pour consommer l’API REST Spring Boot.


