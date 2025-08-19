// Importation du fichier CSS principal
import '../css/main.css';

// Importation de jQuery pour manipuler le DOM
import $ from 'jquery';

// Importation de Lodash pour utiliser des fonctions utilitaires (ici debounce)
import _ from 'lodash';

// Variable pour compter le nombre de clics
let count = 0;

// Fonction qui incrémente et retourne le compteur
function updateCounter() {
	count += 1;
	return count;
}

// Exécution du code quand le DOM est chargé
$(function() {
	// Ajout du logo (sera stylisé via le CSS)
	$('body').append("<div id='logo'></div>");

	// Ajout du titre et du sous-titre
	$('body').append('<p>Holberton Dashboard</p>');
	$('body').append('<p>Dashboard data for the students</p>');

	// Ajout du bouton avec un <span> pour le texte
	$('body').append('<button><span>Click here to get started<span></button>');

	// Zone où sera affiché le nombre de clics
	$('body').append("<p id='count'></p>");

	// Ajout du copyright
	$('bod
