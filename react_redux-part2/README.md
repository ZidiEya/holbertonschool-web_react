



🧠 Pourquoi ça marche ?

En dissociant la logique d’affichage (UI) de la logique de données (Redux), on empêche React de re-render le composant entier à chaque toggle de visibilité. useRef et classList.toggle() manipulent uniquement le DOM sans provoquer de cycle de rendu React.




4. 🧪 Tests unitaires
✅ Nettoyer les anciens tests :
Supprimer les tests basés sur showDrawer / hideDrawer.

🧪 Ajouter de nouveaux tests :
Utiliser enzyme ou @testing-library/react selon votre setup :

js
Copier
Modifier
test('Toggles Notifications visibility', () => {
  render(<Notifications />);
  const notifDiv = screen.getByRole('region'); // ou querySelector('.Notifications')
  expect(notifDiv).not.toHaveClass('visible');

  const toggleBtn = screen.getByRole('button');
  fireEvent.click(toggleBtn);

  expect(notifDiv).toHaveClass('visible');
});
5. ✅ Vérifications finales
 Le composant Notifications ne re-render plus à chaque toggle.

 Plus de console.log déclenché inutilement.

 ✅ Tous les tests passent.

 ✅ Aucun warning ou lint error.

 ✅ Bonne séparation UI/data dans le state Redux.



