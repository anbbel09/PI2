document.addEventListener("DOMContentLoaded", (event) => {
    
    const flecha = document.querySelector('#flecha');
    const nav = document.querySelector('.nav');
    
    let mostrarMenu = true; // Initial visibility state (hidden by default)
    
    flecha.addEventListener("click", () => {
      mostrarMenu = !mostrarMenu; // Toggle visibility state
    
      if (nav) {
        nav.style.visibility = mostrarMenu ? 'visible' : 'hidden';
      } else {
        console.warn("Navigation element not found. Check the selector.");
      }
    });
   
  });