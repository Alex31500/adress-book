# 📇 Contact Book

**Gestionnaire de contacts moderne et élégant**

**Version :** v1.0.0 - 2025  
**Développé par :** Paul Mancien & Alexandre Sellier

---

## 📘 Présentation

**Contact Book** est une application web de gestion de contacts développée avec une architecture orientée objet moderne. Elle permet de créer, visualiser et supprimer des contacts avec une interface utilisateur intuitive et esthétique.

L'application utilise le stockage local du navigateur pour persister les données et offre une expérience utilisateur fluide avec validation en temps réel.

---

## ✨ Fonctionnalités

### ➕ Ajout de contacts
Créez de nouveaux contacts avec nom, prénom, email et téléphone via un formulaire modal élégant.

### 📋 Visualisation
Consultez tous vos contacts dans un tableau organisé et facile à parcourir.

### 🗑️ Suppression
Supprimez des contacts avec confirmation pour éviter les erreurs.

### ✅ Validation temps réel
Le formulaire se valide automatiquement et n'autorise la soumission que si tous les champs sont remplis.

### 💾 Persistance
Les contacts sont sauvegardés automatiquement dans le navigateur (localStorage).

### 📱 Responsive
Interface adaptée à tous les écrans (desktop, tablette, mobile).

---

## 📖 Guide d'utilisation

### Ajouter un contact

1. Cliquez sur le bouton **+** en haut à droite du tableau
2. Une fenêtre modale s'ouvre avec un formulaire
3. Remplissez tous les champs obligatoires (Nom, Prénom, Email, Téléphone)
4. Le bouton "Valider" s'active automatiquement quand tous les champs sont remplis
5. Cliquez sur "Valider" pour ajouter le contact

### Supprimer un contact

1. Localisez le contact dans le tableau
2. Cliquez sur le bouton **×** dans la colonne "Actions"
3. Confirmez la suppression dans la boîte de dialogue

### Contacter par email

1. Cliquez sur l'adresse email d'un contact dans le tableau
2. Votre client email par défaut s'ouvre automatiquement

---

## 🏗️ Architecture technique

L'application suit une architecture **orientée objet modulaire** avec séparation des responsabilités :

```
classes/
│
├── Contact.js
│   └─→ Modèle de données (id, nom, prénom, email, téléphone)
│
├── ContactManager.js
│   └─→ Gestion CRUD + persistance localStorage
│
├── UI.js
│   └─→ Manipulation du DOM et affichage
│
├── Modal.js
│   └─→ Gestion de la fenêtre modale
│
├── FormValidator.js
│   └─→ Validation des formulaires
│
├── ContactBookApp.js
│   └─→ Orchestrateur principal de l'application
│
└── main.js
    └─→ Point d'entrée de l'application
```

### Description des classes

#### 📦 Contact
Représente un contact avec ses propriétés (id, nom, prénom, email, téléphone) et sa méthode de rendu HTML.

#### 🗄️ ContactManager
Gère la collection de contacts (CRUD) et la persistance via localStorage.

#### 🎨 UI
Responsable du rendu et de la manipulation du DOM pour l'affichage des contacts.

#### 🪟 Modal
Contrôle l'ouverture et la fermeture de la fenêtre modale.

#### ✓ FormValidator
Valide les champs du formulaire en temps réel.

#### 🎯 ContactBookApp
Classe principale qui orchestre toutes les interactions et coordonne les autres classes.

---

## 🛠️ Technologies utilisées

- HTML5
- CSS3
- JavaScript ES6+
- Modules ES6
- LocalStorage API
- POO (Programmation Orientée Objet)

> **⚠️ Prérequis :** Navigateur moderne supportant les modules ES6 (Chrome 61+, Firefox 60+, Safari 11+, Edge 16+)

---

## 💻 Installation & Déploiement

### Structure des fichiers

```
project/
│
├── index.html
├── style.css
│
├── assets/
│   └── annuaire.png
│
└── classes/
    ├── Contact.js
    ├── ContactManager.js
    ├── UI.js
    ├── Modal.js
    ├── FormValidator.js
    ├── ContactBookApp.js
    └── main.js
```

### Déploiement

1. Téléchargez tous les fichiers en respectant la structure ci-dessus
2. Ouvrez `index.html` dans votre navigateur
3. L'application est prête à l'emploi !

> **⚠️ Important :** Pour que les modules ES6 fonctionnent, vous devez servir l'application via un serveur HTTP local (ex: Live Server pour VS Code) et non en ouvrant directement le fichier HTML.

---

## 🎨 Personnalisation

### Couleurs principales

Les couleurs de l'application peuvent être modifiées dans le fichier `style.css` :

```css
/* Palette de couleurs */
:root {
  --bg-primary: #1a1a1a;     /* Fond principal */
  --bg-secondary: #2a4a5a;   /* Sections */
  --accent: #4a90e2;         /* Bordures et accents */
  --text-light: #87ceeb;     /* Titres */
  --text-main: #e0e0e0;      /* Texte principal */
  --success: #2d5016;        /* Boutons validés */
  --danger: #8b0000;         /* Suppression */
}
```

### Contact par défaut

Pour modifier le contact affiché par défaut, éditez la méthode `loadContacts()` dans **ContactManager.js**.

---

## 💡 FAQ & Dépannage

### ❓ Les contacts ne se sauvegardent pas
Vérifiez que le localStorage est activé dans votre navigateur et que vous n'êtes pas en navigation privée.

### ❓ Le bouton Valider reste désactivé
Assurez-vous que tous les champs du formulaire sont bien remplis (pas d'espaces vides uniquement).

### ❓ Erreur de chargement des modules
Utilisez un serveur HTTP local. Les modules ES6 ne fonctionnent pas avec le protocole `file://`

### ❓ Comment réinitialiser l'application ?
Ouvrez la console du navigateur (F12) et tapez : `localStorage.clear()` puis rechargez la page.

---

## 📄 Licence

© 2025 Acme Corp. - Tous droits réservés

Développé avec ❤️ en JavaScript

**Créateurs :** Paul Mancien & Alexandre Sellier  
**Documentation rédigée par :** Paul Mancien & Alexandre Sellier
