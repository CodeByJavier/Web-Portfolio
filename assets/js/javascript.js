const linter = document.getElementById("cursorlinter");

document.addEventListener("mousemove", (event) => {
     // Obtén la posición del mouse en relación con la página completa (incluye el scroll)
     const mouseX = event.pageX;
     const mouseY = event.pageY;

     // Obtener dimensiones del círculo (linterna)
     const linterWidth = linter.offsetWidth;
     const linterHeight = linter.offsetHeight;

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