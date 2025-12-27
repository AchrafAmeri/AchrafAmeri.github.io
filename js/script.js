// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// // hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// }

// // Close navbar when link is clicked
// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach((n) => n.addEventListener("click", closeMenu));

// function closeMenu() {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }

// // Event Listeners: Handling toggle event
// const toggleSwitch = document.querySelector(
//   '.theme-switch input[type="checkbox"]'
// );

// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute("data-theme", "dark");
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//   }
// }

// toggleSwitch.addEventListener("change", switchTheme, false);

// //  Store color theme for future visits

// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark"); //add this
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//     localStorage.setItem("theme", "light"); //add this
//   }
// }

// // Save user preference on load

// const currentTheme = localStorage.getItem("theme")
//   ? localStorage.getItem("theme")
//   : null;

// if (currentTheme) {
//   document.documentElement.setAttribute("data-theme", currentTheme);

//   if (currentTheme === "dark") {
//     toggleSwitch.checked = true;
//   }
// }

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;


//Switching from studies to experiences
const buttons = document.querySelectorAll('.switch-btn');
const sections = document.querySelectorAll('.timeline-section');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove active from all buttons
    buttons.forEach(b => b.classList.remove('active'));
    // Add active to clicked button
    btn.classList.add('active');

    // Show corresponding section
    const target = btn.getAttribute('data-target');
    sections.forEach(section => {
      section.classList.add('hidden');
      if (section.id === target) {
        section.classList.remove('hidden');
      }
    });
  });
});

// --- Gestion des Modales Projets ---

// Fonction pour ouvrir une modale spécifique
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Empêche le scroll derrière
  }
}

// Fonction pour fermer une modale
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Réactive le scroll
  }
}

// Fermer la modale si on clique en dehors du contenu
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
}