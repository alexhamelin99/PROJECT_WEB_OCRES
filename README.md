# Projet de fin de semestre - Dashboard 

 Voici notre dashboard réalisé avec React. Nous avons décidé de réaliser un Dashboard présentant plusieurs fonctionnalités que nous estimons pertinentes. 

### Organisation du travail

Afin de correctement réaliser le projet, nous avons divisé le travail avec l'outil Airtable.

Ci-dessous un aperçu : 

![ImageRoadmapAirtable](Airtable.PNG)

### Prototypage

Nous avons commencé par créer un premier design de notre Dashboard avec Figma. Nous avons tenté de le rendre le plus simple et intuitif possible. Nous avons réussi à dépasser nos attentes du prototypage lors de la phase de développement puisque le final final est légérement différent des prévisions que nous faites avec Figma.

**Intérêts du prototypage** : Ce prototype nous a permis de définir un squelette à notre Dashboard en pensant au préalable aux différents widgets que nous allons utilisé ainsi qu'à leurs emplacements sur la page. Ceci nous a facilité le travail car, par la suite, nous n'avions plus qu'à les placer dans les espaces dédiés.

![ImageProto1](proto1.PNG)

![ImageProto2](proto2.PNG)

### Frontend

Voici la liste des paquets **Yarn** que nous avons utilisés :

- **react-router**
- **axios** : Nous nous sommes servis d'Axios pour les API de nos widgets **Search** (recherche Wikipédia), **Météo**, **Graph** (Chiffres Covid-19) et **Traduction**.

- **recharts** : afficher des graphiques facilement
- **storybook** : composants plus robustes

**J'ai décidé de ne pas utiliser Bootstrap** afin d'apprendre à faire des sites responsives en CSS pur sans dépendre d'un framework.
Pour cela, j'ai utilisé une grille CSS et des conteneurs flex.

J'ai commencé par créer la hiérarchie des composants à l'aide du prototype.
Chaque composant ne contenait que son nom et une couleur de fond pour les reconnaitre et les agencer plus facilement.

J'ai ensuite travailler le responsive en utilisant une grille CSS et des conteneurs flex:

![ImageGrilleCss](grillecss.PNG)

Une fois le responsive correctement réalisé, j'ai déclaré des **données bêtes** en tant que state dans App.js.
Cela va nous faciliter la tâche lorsque nous connecterons l'API au front, je n'aurai qu'à remplacer ces données bêtes par le résultat d'une requête GET.

J'ai ensuite passer en props à tout les composants enfants le state de App.js.

Ensuite, j'ai utilisé react-router pour faire la page admin.

Finalement, j'ai réalisé les composants individuellement.

### La partie backend

La partie backend sera codée en **Javascript** avec l'aide de **Node.JS** en utilisant une base de donnée **MongoDB** (Document-based).

### Comment mettre en route notre projet

1) Cloner ce repo.

2) Installer les paquets nécessaires en éxécutant la commande suivante:
    ``` bash
    npm install
    ``` 
    dans **/front**

3) Lancer le projet en éxécutant la commande suivante:
    ``` bash
    npm start
    ``` 
    dans **/front**

4) Se rendre sur [localhost](http://localhost:3000/#/)

## Auteurs

Réalisé par Robin Labrot, Arthur Saint Martin.
OCRES ING4 2A
