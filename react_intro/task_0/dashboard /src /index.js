// Importation de la librairie React pour créer des composants
import React from 'react';

// Importation de ReactDOM pour afficher les composants React dans le DOM
import ReactDOM from 'react-dom';

// Importation du composant principal App
import App from './App';

// Importation du module permettant de mesurer les performances de l’app
import reportWebVitals from './reportWebVitals';

// Rendu du composant principal <App /> à l’intérieur de la balise <div id="root"> du fichier public/index.html
ReactDOM.render(
  // StrictMode est un outil de développement qui aide à détecter des problèmes potentiels
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Point d’ancrage de l’application dans le DOM
);

// Optionnel : permet de mesurer les performances de l’application
// Exemple : on peut envoyer les résultats dans la console ou à un service d’analytics
// Pour activer : décommenter et utiliser reportWebVitals(console.log) ou une fonction personnalisée
reportWebVitals();
