// Animação de entrada ao rolar a página
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    sections.forEach((section) => observer.observe(section));
  });
  // Função para mostrar/ocultar informações
function mostrarInfo(id) {
    const info = document.getElementById(id);
    info.classList.toggle("visible");
  }
  
  