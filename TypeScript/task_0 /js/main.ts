// Définition de l'interface Student : chaque étudiant doit avoir ces propriétés
interface Student {
	firstName: string;  // prénom
	lastName: string;   // nom de famille
	age: number;        // âge
	location: string,   // lieu
}

// Création d'un premier étudiant conforme à l'interface
const studentOne: Student = {
	firstName: 'James',
	lastName: 'Joyce',
	age: 90,
	location: 'Europe'
}

// Création d'un deuxième étudiant conforme à l'interface
const studentTwo: Student = {
	firstName: 'Jordan',
	lastName: 'Peterson',
	age: 57,
	location: 'Canada'
}

// On regroupe les deux étudiants dans un tableau typé avec l'interface
const studentsList: Array<Student> = [studentOne, studentTwo];

// On définit les colonnes qu'on veut afficher dans le tableau (ici seulement prénom et localisation)
const labels: string[] = ['firstName', 'location'];

// Création des éléments de base du tableau HTML
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const thead: HTMLTableSectionElement = document.createElement('thead');

// Ajout du tableau à la page
document.body.appendChild(table);
// Ajout de l'en-tête et du corps au tableau
table.appendChild(thead);
table.appendChild(tbody);

// --- Création de la ligne d'en-tête ---
for (let i: number = 0; i < labels.length; i++) {
	const th: HTMLTableCellElement = document.createElement('th');
	th.appendChild(document.createTextNode(`${labels[i]}`)); // On ajoute le titre de colonne
	thead.appendChild(th);
}

// --- Création des lignes avec les données des étudiants ---
for (let i: number = 0; i < studentsList.length; i++) {
	const tr: HTMLTableRowElement = document.createElement('tr');
	tbody.appendChild(tr);

	// On récupère uniquement le prénom et la localisation
	const values: string[] = [studentsList[i].firstName, studentsList[i].location]

	// Création des cellules pour chaque valeur
	for (let j: number = 0; j < values.length; j++) {
		const td: HTMLTableCellElement = document.createElement('td');
		td.appendChild(document.createTextNode(`${values[j]}`));
		tr.appendChild(td);
	}
}
