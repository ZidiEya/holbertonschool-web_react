// =============================
// Interfaces : définissent un contrat pour chaque type d'employé
// =============================

// Interface pour un Directeur
interface DirectorInterface {
	workFromHome(): string;       // Le directeur peut travailler à domicile
	getCoffeeBreak(): string;     // Le directeur peut prendre une pause café
	workDirectorTasks(): string;  // Le directeur a des tâches spécifiques
}

// Interface pour un Enseignant
interface TeacherInterface {
	workFromHome(): string;       // L'enseignant peut-il travailler à domicile ?
	getCoffeeBreak(): string;     // L'enseignant peut-il avoir une pause café ?
	workDirectorTasks(): string;  // Ici c'est un peu générique, mais représente les tâches de l’enseignant
}


// =============================
// Classes : implémentent les comportements définis dans les interfaces
// =============================

// Classe Directeur qui implémente DirectorInterface
class Director implements DirectorInterface {
	workFromHome() {
		return `Working from home`; // Le directeur peut travailler depuis chez lui
	}

	getCoffeeBreak() {
		return `Getting a coffee break`; // Le directeur peut prendre un café
	}

	workDirectorTasks() {
		return `Getting to director tasks`; // Tâches spécifiques de directeur
	}
}

// Classe Enseignant qui implémente TeacherInterface
class Teacher implements TeacherInterface {
	workFromHome() {
		return `Cannot work from home`; // L’enseignant ne peut pas travailler de chez lui
	}

	getCoffeeBreak() {
		return `Cannot have a break`; // L’enseignant n’a pas de pause café
	}

	workDirectorTasks() {
		return `Getting to work`; // Les tâches de l’enseignant (nom pas idéal mais ça fonctionne)
	}
}


// =============================
// Fonction factory : crée un employé selon le salaire
// =============================

// Retourne un objet Director ou Teacher selon le salaire
function createEmployee(salary: number): Director | Teacher {
	if (salary < 500) {
		// Si le salaire est inférieur à 500 → on crée un enseignant
		return new Teacher();
	}
	// Sinon → c’est un directeur
	return new Director();
}


// =============================
// Fonction utilitaire : vérifie si l’employé est un directeur
// =============================

// Retourne true si l’employé est un Directeur
function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
	return (employee instanceof Director);
}


// =============================
// Fonction exécute les tâches en fonction du type d’employé
// =============================

// Exécute les tâches de travail selon si c’est un Directeur ou un Enseignant
function executeWork(employee: DirectorInterface | TeacherInterface): string {
	if (employee instanceof Director) {
		return employee.workDirectorTasks(); // Si Directeur → exécute tâches de directeur
	} else if (employee instanceof Teacher) {
		return employee.workDirectorTasks(); // Si Enseignant → exécute tâches d’enseignant
	}
}


// =============================
// Type alias pour restreindre les valeurs possibles
// =============================

// Le type Subjects ne peut valoir que "Math" ou "History"
type Subjects = "Math" | "History";


// =============================
// Fonction pour enseigner un cours selon la matière donnée
// =============================

// Retourne une chaîne selon la matière du jour
function teachClass(todayClass:Subjects): string {
	if (todayClass === "Math") {
		return `Teaching Math`; // Si c’est un cours de Maths
	} else if (today
