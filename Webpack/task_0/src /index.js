// Importation de la librairie jQuery
import $ from "jquery";

// Fonction qui s'exécute lorsque le DOM est complètement chargé
$(function() {
    // Ajoute un paragraphe avec le texte "Holberton Dashboard" dans le body
    $('body').append('<p>Holberton Dashboard</p>');

    // Ajoute un paragraphe avec le texte "Dashboard data for the students"
    $('body').append('<p>Dashboard data for the students</p>');

    // Ajoute un paragraphe avec le texte "Copyright - Holberton School"
    $('body').append('<p>Copyright - Holberton School</p>');
});
