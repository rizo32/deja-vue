<h5 style="text-align: center;">Collège de Maisonneuve<br>
<br><br><br><br><br>
TP 2<br>
<br><br><br><br><br>
Par<br>
Gabriel ROY-RIZZOLI<br>
2295331<br>
<br><br><br><br><br>
Techniques avancées<br>en programmation Web<br>
<br><br><br><br><br>
Travail présenté à<br>
Marcos V SANCHES<br>
dans le cadre du cours<br>
582-41F-MA<br>
<br><br><br><br><br><br>
Groupe 21622<br>
<br><br><br><br><br>
17 mars 2023<br>
<br>

# Description

>
Nous sommes Target, une grande compagnie américaine, et voulons venir saisir le marché canadien! Nous avons malheureusement quelques problèmes d'inventaires et seulement 3 produits à offrir pour le moment, et c'est pourquoi nous vous invitons à venir insérer vos propres produits directement dans notre base de données! Une fois inséré (dans <i>inventory mgmt</i>), vous pourrez les consulter dans la page <i>Our products</i> et les modifier ou les supprimer en appuyant sur l'item et ensuite sur l'option correspondante à l'action souhaitée.


# Instructions

## Installation (pour le développement)

```
(installer node, version 5.2 et + )
npx create-react-app tp2
cd tp2
npm start
```

## Librairies
```
npm i // (à chaque nouvel import), ex.
npm i react-icons
npm i react-router-dom
```

## Déploiement

```
npm run build
npm i -g serve (pour tester)
npx serve -s build -p 8000
```


## Ouverture du serveur JSON

```
npm i json-server
npm run server

(localhost:5000)
```


## Ouverture du site

```
npm start

(localhost:3000)
```

## Utilisation

Pour utiliser le site, veuillez d'abord partir le serveur JSON, et le serveur react (voir les lignes de commandes correspondantes). Vous pourrez ensuite accéder à localhost:3000 et naviguer à travers le menu. 'Inventory mgmt' permet d'ajoute un produit, 'products' permet de voir les produits disponibles, et vous pouvez cliquer sur ces derniers afin de modifier ou supprimer ses produits. En cliquant sur le logo, vous allez arriver sur la page d'accueil. Incredible, isn't it?


# Liens

https://rizorizo.art

https://github.com/rizo32/tp2_react