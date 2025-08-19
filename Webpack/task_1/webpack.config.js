// On importe le module 'path' de Node.js pour gérer les chemins de fichiers
const path = require('path');

// Configuration de Webpack
module.exports = {
	// Point d'entrée de l'application : le fichier principal à compiler
	entry: './js/dashboard_main.js',

	// Paramètres de sortie du bundle compilé
	output: {
		// Chemin absolu vers le dossier où sera généré le fichier bundle
		path: path.resolve(__dirname, 'public'),

		// No
