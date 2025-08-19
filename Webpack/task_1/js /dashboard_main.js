// On importe jQuery pour manipuler le DOM
import $ from 'jquery';
// On importe Lodash pour utiliser des fonctions utilitaires comme debounce
import _ from 'lodash';

// Compteur initial pour suivre le nombre de clics
let count = 0;

// Fonction pour incrémenter le compteur et retourner la nouvelle valeur
function updateCounter() {
	count += 1;
	return count;
}

// Lorsque le DOM est prêt, exécuter la fonction
$(function() {
	// Ajouter un titre principal
	$('body').append('<p>Holberton Dashboard</p>');

	// Ajouter un sous-titre ou description
	$('body').append('<p>Dashboard data for the students</p>');

	// Ajouter un bouton sur lequel l'utilisateur va cliquer
	$('body').append('<button>Click here to get started</button>');

	// Ajouter un paragraphe pour afficher le compteur de clics
	$('body').append("<p id='count'></p>");

	// Ajouter un footer ou copyright
	$('body').append('<p>Copyright - Holberton School</p>');

	// Crée une fonction "debounced" pour limiter le nombre d'appels
	let debouncedFunc = _.debounce(() => {
		// Incrémente le compteur à chaque clic
		let count = updateCounter();
		// Met à jour le contenu du paragraphe #count avec le nombre de clics
		$('#count').text(`${count} clicks on the button`);
	});

	// Associe l'événement click du bouton à la fonction debounced
	$('button').on('click', debouncedFunc);
});
