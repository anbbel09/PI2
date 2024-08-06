document.addEventListener("DOMContentLoaded", (event) => {
    
    const flecha = document.querySelector('#flecha');
    const nav = document.querySelector('.nav');
    
    let mostrarMenu = false;
    
    flecha.addEventListener("click", () => {
      mostrarMenu = !mostrarMenu; 
    
      if (nav) {
        nav.style.visibility = mostrarMenu ? 'visible' : 'hidden';
      } else {
        console.warn("Navigation element not found. Check the selector.");
      }
    });
   
  });