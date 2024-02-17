// Enregistre le titre de la page
var pageTitle = document.title;

// Écoute l'événement "blur" de la fenêtre du navigateur
window.addEventListener("blur", function() {
  // Change le titre de la page lorsque l'utilisateur change d'onglet
  document.title = "Site Officiel de Vincent MATIAS";
});

// Écoute l'événement "focus" de la fenêtre du navigateur
window.addEventListener("focus", function() {
  // Restaure le titre de la page lorsque l'utilisateur revient sur l'onglet
  document.title = pageTitle;
});

document.querySelector(".objet").value = "jhu"