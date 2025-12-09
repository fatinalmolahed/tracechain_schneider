// Toggle del menú mòbil
const toggleBtn = document.querySelector(".nav-menu-toggle");
const navRight = document.querySelector(".nav-right");

if (toggleBtn && navRight) {
  toggleBtn.addEventListener("click", () => {
    navRight.classList.toggle("open");
  });

  // Tancar el menú quan es fa clic en un enllaç
  document.querySelectorAll(".nav-right a").forEach((link) => {
    link.addEventListener("click", () => {
      navRight.classList.remove("open");
    });
  });
}
