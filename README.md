# Angular Recrutement de monstres

Généré avec la version 12.2.11 de AngularCLI.


Dans le dossier src/app utiliser `ng serve` pour lancer le serveur de développement. Puis se rendre sur `http://localhost:4200/`.

Utiliser `ng generate component component-name` pour générer de nouveaux composants.

la route http://localhost:4200/dashboard :
renvoi à la page d'accueil du site comportant une "mise à la une" de certains monstres, une recherche rapide de monstres via une saisie de caractères, et une zone de notifications fournissant l'historique des recherches et profils consultés.

la route http://localhost:4200/monsters :
renvoi au catalogue de monstres permettant d'ajouter de nouveaux monstres à la liste, d'en retirer de la liste, et de consulter leurs profils.

la route http://localhost:4200/detail/{id} : 
renvoi au profil du monstre selectionné permettant d'éditer son nom, de consulter sa description, le choisir et d'enregistrer la modification.
