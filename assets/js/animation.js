// animations.js
document.addEventListener("DOMContentLoaded", () => {
  // Ajouter la classe d'animation au header
  const header = document.querySelector(".main-header");
  header.classList.add("header-animated");

  // Ajouter la classe d'animation aux sections
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => {
    section.classList.add("section-animated");
  });
});

// section-reveal.js
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          // Arrête d'observer une fois la section animée
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Déclenche quand 10% de la section est visible
    }
  );

  // Sélectionne toutes les sections à animer
  const sections = document.querySelectorAll("#profile, #skills, #experience");

  sections.forEach((section) => {
    // Ajoute une classe de préparation pour l'animation
    section.classList.add("section-hidden");
    // Commence à observer la section
    observer.observe(section);
  });
});
function createParticles() {
  const background = document.getElementById("home-background");
  const particleCount = window.innerWidth < 768 ? 20 : 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Taille aléatoire entre 5 et 15 pixels
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Position horizontale aléatoire
    particle.style.left = `${Math.random() * 100}%`;

    // Durée d'animation aléatoire entre 10 et 20 secondes
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

    // Décalage aléatoire de l'animation
    particle.style.animationDelay = `-${Math.random() * 10}s`;

    background.appendChild(particle);
  }
}

// Crée les particules au chargement
createParticles();

// Recrée les particules si la fenêtre est redimensionnée
window.addEventListener("resize", () => {
  const background = document.getElementById("home-background");
  background.innerHTML = "";
  createParticles();
});
