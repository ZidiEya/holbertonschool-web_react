// Définition d'une interface Teacher
interface Teacher {
	readonly firstName: string;     // prénom (non modifiable après création)
	readonly lastName: string;      // nom (non modifiable après création)
	fullTimeEmployee: boolean;      // obligatoire
	yearsOfExperience?: number;     // optionnel
	location: string;               // obligatoire
	[propName: string]: any;        // permet d’ajouter d'autres propriétés dynamiques
}

// Interface Directors qui hérite de Teacher
interface Directors extends Teacher {
	numberOfReports: number;  // en plus, les directeurs ont un nombre de rapports
}

// Définition d'une interface pour typer une fonction
interface printTeacherFunction {
	(firstName: string, lastName: string): string; // prend 2 strings et renvoie un string
}

// Implémentation de la fonction printTeacher
const printTeacher: printTeacherFunction = function (
	firstName: string,
	lastName: string
): string {
	// Retourne "J. Peterson" par ex.
	return `${firstName[0]}. ${lastName}`;
}

// Interface qui décrit un constructeur
interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

// Interface que la classe StudentClass doit respecter
interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

// Implémentation de StudentClass avec le constructeur
const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor (firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// Méthode obligatoire définie dans l'interface
	workOnHomework() {
		return 'Currently working';
	}

	// Méthode obligatoire définie dans l'interface
	displayName() {
		return `${this.firstName}`;
	}
}

// Exportation des éléments (si tu es en module ES)
export {
	printTeacher,
	StudentClass
}

// Exemple d'utilisation
const obj: StudentClassInterface = new StudentClass('Jordan', 'Peterson');
console.log(obj);  // affiche l'objet avec ses propriétés et méthodes
