// Définition d’une fonction reportWebVitals qui prend en paramètre onPerfEntry
// -> onPerfEntry est une fonction de rappel (callback) que l’on peut fournir
//    pour traiter les résultats de mesure des performances
const reportWebVitals = onPerfEntry => {
  // Vérifie que onPerfEntry existe ET que c’est bien une fonction
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Import dynamique du package 'web-vitals' (chargé uniquement si nécessaire)
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Appelle chaque fonction de mesure avec onPerfEntry comme callback
      // CLS  = Cumulative Layout Shift
      // FID  = First Input Delay
      // FCP  = First Contentful Paint
      // LCP  = Largest Contentful Paint
      // TTFB = Time To First Byte
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Exporte la fonction pour qu’elle puisse être utilisée dans index.js
export default reportWebVitals;
