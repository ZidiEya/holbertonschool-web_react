// Importation du fichier CSS contenant le style de l'application
import './App.css';

// Importation du logo Holberton
import logo from './holberton_logo.jpg';

// Définition du composant fonctionnel principal App
function App() {
  return (
    // Conteneur principal de l'application
    <div className="App">
      
      {/* En-tête de l'application */}
      <div className="App-header">
        {/* Affichage du logo importé */}
        <img src={logo} alt="logo" />
        {/* Titre de l'application */}
        <h1>School dashboard</h1>
      </div>

      {/* Corps de l'application */}
      <div className="App-body">
        <p>
          {/* Texte affiché au centre de la page */}
          Login to access the full dashboard
        </p>
      </div>

      {/* Pied de page de l'application */}
      <div className="App-footer">
        <p>
          {/* Message de copyright */}
          Copyright 2020 - holberton School
        </p>
      </div>

    </div>
  );
}

// Exportation du composant App pour qu’il puisse être utilisé ailleurs
export default App;
