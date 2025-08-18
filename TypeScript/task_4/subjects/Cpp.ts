// On définit un namespace "Subjects" qui va regrouper nos classes et interfaces
namespace Subjects {
	// ================================
	// Interface TeacherInterface
	// ================================
	// On étend l’interface des professeurs pour y ajouter
	// une propriété optionnelle (experienceTeachingC)
	// Cela représente le nombre d’années d’expérience
	export interface TeacherInterface {
		experienceTeachingC?: number;  // le ? signifie que cette propriété est optionnelle
	}


	// ================================
	// Classe Cpp
	// ================================
	// Cette classe hérite de Subject (classe parent déjà définie dans le projet).
	// Elle représente un cours spécifique : le C++
	export class Cpp extends Subject {
		
		// Méthode pour afficher les prérequis d’un cours de C++
		getRequirements(): string {
			return `Here is the list of requirements for Cpp`;
		}

		// Méthode pour vérifier si un enseignant est disponible pour ce cours
		getAvailableTeacher(): string {
			// Si le professeur n’a pas d’expérience en C, on renvoie "No available teacher"
			if (!this.teacher.experienceTeachingC) {
				return `No available teacher`;
			}
			// Sinon, on affiche le prénom du professeur disponible
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}
