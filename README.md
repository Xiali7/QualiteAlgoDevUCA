Configuration de VSCode pour formatage automatique lors de la sauvegarde :  

Installer l'extension Prettier - Code formatter.  
Fichier > Préférences > Paramètres  
Rechercher "format on save". Cocher "Editor: Format On Save".  
Rechercher "default formatter". Sélectionner Prettier - Code formatter (esbenp.prettier-vscode).

--------------------------------------

Configuration de VSCode pour affichage des erreurs de linting :

Installer l'extension ESLint.  
Ouvrez VSCode.  
Ouvrir settings.json  
Ajoutez ou modifiez les paramètres suivants :  
```
{  
    "editor.codeActionsOnSave": {  
    "source.fixAll.eslint": "explicit"  
  },  
  "eslint.validate": ["javascript"]  
}  
```
Vérifiez que le linting fonctionne :  
>> npm run lint -> Afficher les erreurs  
>> npm run lint:fix -> Corriger automatiquement les erreurs  
