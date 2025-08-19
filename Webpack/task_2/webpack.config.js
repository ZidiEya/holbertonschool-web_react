// Importation du module 'path' (fourni par Node.js) 
// pour gérer les chemins de fichiers/dossiers
const path = require('path');

module.exports = {
	// Point d'entrée : fichier principal qui lance l’application
	entry: './js/dashboard_main.js',

	// Configuration de sortie
	output: {
		// Résolution du chemin absolu vers le dossier "public"
		path: path.resolve(__dirname, 'public'),
		// Nom du fichier généré après le bundling
		filename: 'bundle.js',
	},

	// Gestion des différents types de fichiers
	module: {
		rules: [
			{
				// Règle pour charger les fichiers CSS
				test: /\.css$/i, // Tout fichier qui finit par .css
				use: [
					'style-loader', // Injecte le CSS dans le DOM
					'css-loader',   // Permet à Webpack de comprendre le CSS
				],
			},
			{
				// Règle pour charger les images
				test: /\.(png|svg|jpg|jpeg|gif)$/i, // Extensions d’images supportées
				type: 'asset/resource', // Gère les fichiers en tant que ressources statiques
			},
		],
	},

	// Mode production : optimisation automatique du build
	mode: 'production',
};
