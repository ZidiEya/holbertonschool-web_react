// Définition d’un namespace "Subjects" pour regrouper les cours et les interfaces liées
namespace Subjects {
	
	// ================================
	// Interface TeacherInterface
	// ================================
	// On étend l’interface d’un enseignant pour y ajouter
	// une propriété optionnelle "experienceTeachingJava".
	// Cela représente le nombre d’années d’expérience dans l’enseignement de Java.
	export interface TeacherInterface {
		experienceTeachingJava?: number; // le ? = optionnel
	}

	// ================================
	// Classe Java
	// ================================
	// Cette classe représente un cours spécifique : "Java".
	// Elle hérite de la classe "Subject" déjà définie dans le projet.
	export class Java extends Subject {
		
		// Méthode pour afficher les prérequis nécessa
