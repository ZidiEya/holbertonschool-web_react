
             Webpack


             🌐 Petit résumé de Webpack
Webpack est un module bundler (un assembleur de modules).
Il prend ton code (TypeScript, JavaScript, CSS, images, etc.), le transforme avec des loaders et plugins, puis génère un ou plusieurs fichiers optimisés (souvent bundle.js) que ton navigateur peut exécuter.

⚙️ Étapes pour configurer Webpack dans un projet React + TypeScript
Installer les dépendances

bash
Copier
Modifier
npm install --save-dev webpack webpack-cli webpack-dev-server \
ts-loader typescript \
html-webpack-plugin \
css-loader style-loader
Créer un fichier de config : webpack.config.js

js
Copier
Modifier
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // point d'entrée
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // nettoie dist à chaque build
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
Ajouter des scripts dans package.json

json
Copier
Modifier
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production"
}
Créer la structure minimale

pgsql
Copier
Modifier
/public
   index.html
/src
   index.tsx
   App.tsx
webpack.config.js
tsconfig.json
