// Menu burger
const menuToggle = document.getElementById('menuToggle');
const menuMobile = document.getElementById('menuMobile');

menuToggle.addEventListener('click', () => {
  menuMobile.classList.toggle('active');
});

// Fermer le menu en cliquant sur un lien
function closeMenu() {
  menuMobile.classList.remove('active');
}

// Fermer le menu en cliquant en dehors
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !menuMobile.contains(e.target)) {
    menuMobile.classList.remove('active');
  }
});