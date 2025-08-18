// ================================
// Interface MajorCredits
// ================================
// Représente une matière principale (Major).
// On utilise "brand: 'brandA'" comme "marqueur" 
// pour différencier ce type d'objet de MinorCredits 
// même si les deux ont la même structure (credits: number).
interface MajorCredits {
	credits: number; // nombre de crédits
	brand: 'brandA'; // identifiant unique pour MajorCredits
}

// ================================
// Interface MinorCredits
// ================================
// Représente une matière secondaire (Minor).
// Même principe que MajorCredits, mais avec un "brand" différent.
interface MinorCredits {
	credits: number; // nombre de crédits
	brand: 'brandB'; // identifiant unique pour MinorCredits
}

// ================================
// Fonction sumMajorCredits
// ================================
// A
