// Importation du fichier CSS pour le style
import './body.css'; 

// Importation de jQuery pour manipuler le DOM
import $ from 'jquery'; 

// Importation de lodash pour utiliser des fonctions utilitaires comme debounce
import _ from 'lodash';  

// Initialisation du compteur à 0
let count = 0;  

// Fonction pour incrémenter et retourner la valeur du compteur
function updateCounter() {
	count += 1;  // Incrémente le compteur
	return count; // Retourne la nouvelle valeur
}  

// Quand le DOM est prêt, on exécute la fonction suivante
$(function() {  
	// Ajout d'un paragraphe avec un texte dans le body
	$('body').append('<p>Dashboard data for the students</p>');  

	// Ajout d'un bouton avec un texte
	$('body').append('<button><span>Click here to get started<span></button>');  

	// Ajout d'un paragraphe vide pour afficher le compteur
	$('body').append("<p id='count'></p>");   

	// Création d'une fonction "debounced" pour éviter l'exécution trop rapide des clics
	let debouncedFunc = _.debounce(() => {  
		let count = updateCounter(); // Incrémente le compteur
		$('#count').text(`${count} clicks on the button`); // Met à jour le texte du paragraphe avec le nombre de clics
	});  

	// On attache la fonction debounced au clic du bouton
	$('button').on('click', debouncedFunc);  
});  
