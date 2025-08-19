// Import du module 'path' de Node.js pour gérer et résoudre les chemins de fichiers
const path = require('path');

module.exports = {
  // Point d'entrée de l'application : fichier principal qui contient ton code JS
  entry: './js/dashboard_main.js',

  // Options de sortie : où et comment Webpack va générer le bundle
  output: {
    // __dirname = chemin absolu du dossier actuel
    // path.resolve() permet de créer un chemin absolu vers le dossier 'public'
    path: path.resolve(__dirname, 'public'),

    // Nom du fichier de sortie généré par Webpack
    filename: 'bundle.js',
  },

  // Mode de compilation
  // - 'development' : code non minifié, plus lisible (avec sourcemaps)
  // - 'production' : code optimisé et minifié
  mode: 'production',
};
