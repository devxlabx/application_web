# Projet Webpack Exemple

Ce projet est un exemple simple de configuration Webpack pour compiler des fichiers HTML, CSS et JavaScript. Le projet inclut également des styles responsives et des couleurs pour améliorer l'apparence visuelle.

## Table des matières

- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Configuration Webpack](#configuration-webpack)
- [Utilisation](#utilisation)
- [Licence](#licence)

## Installation

1 - Initialiser un projet Node.js :
npm init -y

2 - Installer Webpack et Webpack CLI :
npm install --save-dev webpack webpack-cli

Installer les loaders nécessaires pour traiter les fichiers CSS et HTML :
npm install --save-dev css-loader style-loader html-webpack-plugin

3 - Créer un fichier webpack.config.js à la racine de votre projet :
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index.js', // Point d'entrée de l'application
output: {
filename: 'bundle.js', // Nom du fichier de sortie
path: path.resolve(**dirname, 'dist'), // Répertoire de sortie
},
module: {
rules: [
{
test: /\.css$/, // Règle pour les fichiers CSS
use: ['style-loader', 'css-loader'],
},
],
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html', // Fichier HTML de base
}),
],
devServer: {
contentBase: path.join(**dirname, 'dist'),
compress: true,
port: 9000,
},
};

4 : Créer les Fichiers Source (index.html, index.js et style.css)

5 - Ajouter un script de build dans votre fichier package.json :

"scripts": {
"build": "webpack",
"start": "webpack serve --open"
}

Compiler le projet :
npm run build

Démarrer le serveur de développement :
npm start


webpack-tutorial/
├── dist/
├── src/
│   ├── index.html
│   ├── index.js
│   └── styles.css
├── package.json
└── webpack.config.js