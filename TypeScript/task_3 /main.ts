/// <reference path="crud.d.ts" />
// Cette directive dit à TypeScript d’utiliser les définitions de types (d.ts) pour CRUD
// Elle permet de connaître les types des fonctions insertRow, updateRow, deleteRow
// sans avoir besoin de leur implémentation exacte.

import { RowElement, RowID } from './interface';
// On importe les types définis dans "interface.ts"
// RowElement = type représentant une ligne (objet avec firstname, lastname, etc.)
// RowID = type représentant un identifiant unique d’une ligne

import * as CRUD from './crud';
// On importe toutes les fonctions exportées par "crud.ts" (insertRow, updateRow, deleteRow)
// et on les regroupe dans l’objet CRUD


// =============================
// Création d'une nouvelle ligne
// =============================
const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva',
}
// Ici on crée un objet de type RowElement
// Ce type exige au minimum : firstName et lastName


// =============================
// Insertion de la ligne
// =============================
const newRowID: RowID = CRUD.insertRow(row);
// insertRow retourne un RowID (probablement un number ou string unique)
// On stocke cet identifiant dans la variable newRowID


// =============================
// Mise à jour de la ligne
// =============================
const updatedRow: RowElement = {
	...row,    // On reprend toutes les propriétés de "row"
	age: 23,   // On ajoute une nouvelle propriété "age"
};
// On crée une version modifiée de "row" en lui ajoutant un âge


CRUD.updateRow(newRowID, updatedRow);
// On appelle la fonction updateRow pour mettre à jour la ligne
/
