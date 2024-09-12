function setup() {
  createCanvas(400, 400);
  background(255); // Fondo blanco
  noFill(); // No rellenar los cuadrados
  stroke(0); // Color de la línea: negro

  let numSquares = 10; // Número de cuadrados concéntricos
  let maxSize = width * 0.8; // Tamaño máximo de los cuadrados

  for (let i = 0; i < numSquares; i++) {
    let size = maxSize - (i * (maxSize / numSquares)); // Calcular tamaño de cada cuadrado
    rect(width / 2 - size / 2, height / 2 - size / 2, size, size); // Dibujar cuadrado centrado
  }
}
