// On crée une nouvelle instance de la classe Cpp dans le namespace Subjects
const cpp = new Subjects.Cpp();
// On crée une nouvelle instance de la classe Java
const java = new Subjects.Java();
// On crée une nouvelle instance de la classe React
const react = new Subjects.React();


// Déclaration d’un enseignant (teacher) avec ses informations
let cTeacher = {
	firstName: 'Pablo',
	lastName: 'Escobar',
	experienceTeachingC: 10, // Nombre d’années d’expérience en C
};


// =============================
// Test avec la matière C++
// =============================
console.log('C++');  // Affiche le titre de la matière
cpp.setTeacher = cTeacher;  // On assigne cTeacher comme professeur de C++
console.log(cpp.getRequirements());     // Affiche les prérequis pour le cours de C++
console.log(cpp.getAvailableTeacher()); // Affiche si un prof est dispo (selon experienceTeachingC)


// =============================
// Test avec la matière Java
// =============================
console.log('Java');  // Affiche le titre de la matière
java.setTeacher = cTeacher;  // On assigne cTeacher comme prof de Java
console.log(java.getRequirements());     // Affiche les prérequis pour Java
console.log(java.getAvailableTeacher()); // Vérifie si le prof est dispo


// =============================
// Test avec la matière React
// =============================
console.log('React');  // Affiche le titre de la matière
react.setTeacher = cTeacher;  // On assigne cTeacher comme prof de React
console.log(reac
