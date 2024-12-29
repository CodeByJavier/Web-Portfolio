// MENU DESPLEGABLE

const menuBtn = document.getElementById("bar");
const menuContainer = document.getElementById("about_me")


// Función para controlar el estado del menú en función del tamaño de la ventana
const ajustarMenu = () => {
    const anchoVentana = window.innerWidth;
    
    // Si el ancho de la ventana es mayor a 860px, mostrar el menú como 'flex'
    if (anchoVentana > 860) {
        // Aseguramos que el menú sea visible (si es que no está en 'none')
        if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
            menuContainer.style.display = 'flex';
        }
    } else {
        // Si el ancho es menor o igual a 860px, dejamos que el menú sea ocultado por el botón
        if (menuContainer.style.display === 'flex') {
            menuContainer.style.display = 'none';
        }
    }
};
  
// Evento de clic para abrir y cerrar el menú
menuBtn.addEventListener("click", () => {
    // Mostrar o esconder el menú desplegable
    if (menuContainer.style.display === 'flex') {
        // Cerramos el menú con animación inversa
        menuContainer.classList.add('animate_reverse');
        menuContainer.classList.remove('animate');
  
        setTimeout(() => {
            menuContainer.style.display = 'none'; // Después de la animación, ocultamos el menú
            menuContainer.classList.remove('animate_reverse');
        }, 600);
    } else {
        menuContainer.style.display = 'flex';
        // Abrimos el menú con animación
        menuContainer.classList.add('animate');
        menuContainer.classList.remove('animate_reverse');
    }
});

// Ejecutamos la función de ajuste al cargar la página y al redimensionar
window.addEventListener('resize', ajustarMenu);
// Aseguramos que el menú se ajuste correctamente desde el inicio
ajustarMenu(); 


//-------------------------------------------------------------------------------------------------------------//

// EFECTO LINTERNA

const linter = document.getElementById("cursorlinter");

document.addEventListener("mousemove", (event) => {
     // Obtén la posición del mouse en relación con la página completa (incluye el scroll)
     const mouseX = event.pageX;
     const mouseY = event.pageY;

     // Obtener dimensiones del círculo (linterna)
     const linterWidth = linter.offsetWidth;
     const linterHeight = linterWidth;

     // Calcular los márgenes para que el círculo no se desborde fuera de la pantalla
     const minX = linterWidth / 2;
     const maxX = window.innerWidth + window.scrollX - linterWidth / 2;
     const minY = linterHeight / 2;
     const maxY = window.innerHeight + window.scrollY - linterHeight / 2;

     // Limitar la posición de la linterna para que no se salga de la ventana
     const limitedX = Math.max(minX, Math.min(mouseX, maxX));
     const limitedY = Math.max(minY, Math.min(mouseY, maxY));

     // Actualizar la posición del círculo (linterna) con las coordenadas limitadas
     linter.style.left = `${limitedX}px`;
     linter.style.top = `${limitedY}px`;
});


