 ## Configuration de VSCode pour le formatage automatique lors de la sauvegarde :  

### Installation et activation de Prettier
1. **Installer l'extension** : [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
2. **Activer le formatage automatique** :
   - Ouvrir **Fichier > Préférences > Paramètres**.
   - Rechercher `"format on save"` et cocher **Editor: Format On Save**.
   - Rechercher `"default formatter"` et sélectionner **Prettier - Code formatter** (`esbenp.prettier-vscode`).

---

## Configuration de VSCode pour l'affichage des erreurs de linting

### Installation et activation de ESLint
1. **Installer l'extension** : [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
2. **Configurer les paramètres** :
   - Ouvrir **VSCode**.
   - Ouvrir **settings.json**.
   - Ajouter ou modifier les paramètres suivants :

```
   {
       "editor.codeActionsOnSave": {
           "source.fixAll.eslint": "explicit"
       },
       "eslint.validate": ["javascript"]
   }
```

3. **Vérifier que le linting fonctionne** :  
>> npm run lint -> Afficher les erreurs  
>> npm run lint:fix -> Corriger automatiquement les erreurs

--------------------------------------

 ## Accès à Chrome DevTools :

1. **Entrer dans le terminal** :
>> node --inspect

2. **Entrer dans la barre d'adresse du navigateur** :
>> _chrome://inspect_

3. **Aller à _Remote Target_ puis _Inspect_**

### Onglets DevTools:

**Console** :  
Permet d'executer du code JavaScript en direct  
Afficher les logs  

**Sources** :  
Afficher le code source  
Poser des breakpoints pour éxecuter le code pas à pas  

**Memory** :  
Afficher la consommation de mémoire du site  
Utilisation de Snapshot pour afficher la mémoire utilisée à un instant  

**Performance** :  
Enregistrer une timeline d'exécution du site pour analyser sa vitesse et ses performances  

--------------------------------------  

## Résultats du test de charge avec Autocannon

** Dans le terminal** :
>> autocannon -c 10 -d 30 -p 2 http://localhost:3009/api/test

### Configuration du test
- **URL cible** : `http://localhost:3009/api/test`
- **Durée** : 30 secondes
- **Connexions simultanées** : 10
- **Facteur de pipeline** : 2

### Latence des requêtes

| Stat    | 2.5% | 50% | 97.5% | 99%  | Moyenne | Écart-type | Maximum |
|---------|------|-----|-------|------|---------|-----------|---------|
| Latency | 3 ms | 4 ms | 10 ms | 12 ms | 4.7 ms | 2.41 ms  | 124 ms  |

### Requêtes et débit

| Stat        | 1%   | 2.5% | 50%  | 97.5% | Moyenne | Écart-type | Min   |
|------------|------|------|------|-------|---------|-----------|------|
| Req/Sec    | 2 093 | 2 093 | 4 247 | 4 423 | 3 869,7 | 713,83    | 2 092 |
| Bytes/Sec  | 877 kB | 877 kB | 1.78 MB | 1.85 MB | 1.62 MB | 299 kB | 877 kB |

### Statistiques générales
- **Nombre total de requêtes** : 116 076
- **Réponses 2xx** : 0
- **Réponses non 2xx** : 116 076
- **Données transférées** : 48.6 MB
- **Nombre d’échantillons** : 30 (1 par seconde)
