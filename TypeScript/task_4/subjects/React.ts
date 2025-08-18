// Définition d’un namespace "Subjects" pour regrouper les cours et les interfaces liées
namespace Subjects {

	// ================================
	// Interface TeacherInterface
	// ================================
	// On ajoute une nouvelle propriété optionnelle
	// "experienceTeachingReact" pour indiquer l’expérience
	// d’un enseignant en React.
	export interface TeacherInterface {
		experienceTeachingReact?: number; // "?" = optionnel
	}

	// ================================
	// Classe React
	// ================================
	// Cette classe représente un cours spécifique : "React".
	// Elle hérite de la classe "Subject" (commune à tous les cours).
	export class React extends Subject {
		
		// Méthode pour afficher les prérequis nécessaires au cours de React
		getRequirements(): string {
			return `Here is the list of requirements for React`;
		}

		// Méthode qui vérifie si un professeur est disponible pour enseigner React
		getAvailableTeacher(): string {
			// Si l’enseignant n’a pas d’expérience en React, on affiche un message
			if (!this.teacher.experienceTeachingReact) {
				return `No available teacher`;
			}
			// Sinon, on affiche le prénom du professeur disponible
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}
