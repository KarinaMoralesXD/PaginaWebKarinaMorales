function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0); // Fondo negro
  fill(255, 0, 0); // Color rojo

  // Primer conjunto de transformaciones
  push(); // Guardamos el estado actual del lienzo

  translate(width / 2, height / 2); // Centro del lienzo
  rotate(frameCount * 0.01); // Rotación lenta
  for (let i = 0; i < 10; i++) {
    push(); // Guardamos el estado antes de cada círculo

    rotate((TWO_PI / 10) * i); // Rotación para cada círculo
    translate(100, 0); // Traslación radial
    ellipse(0, 0, 50, 50); // Círculo

    pop(); // Restauramos el estado después de cada círculo
  }

  pop(); // Restauramos el estado del lienzo después del primer conjunto

  // Segundo conjunto de transformaciones
  push(); // Guardamos el estado actual del lienzo

  translate(width / 2, height / 2); // Centro del lienzo
  rotate(-frameCount * 0.02); // Rotación inversa
  scale(0.5); // Escalado al 50%
  for (let i = 0; i < 6; i++) {
    push(); // Guardamos el estado antes de cada cuadrado

    rotate((TWO_PI / 6) * i); // Rotación para cada cuadrado
    translate(200, 0); // Traslación radial más grande
    rectMode(CENTER);
    rect(0, 0, 40, 40); // Cuadrado

    pop(); // Restauramos el estado después de cada cuadrado
  }

  pop(); // Restauramos el estado del lienzo después del segundo conjunto

  // Tercer conjunto de transformaciones
  push(); // Guardamos el estado actual del lienzo

  translate(width / 2, height / 2); // Centro del lienzo
  rotate(frameCount * 0.05); // Rotación rápida
  scale(1.2); // Escalado al 120%
  for (let i = 0; i < 8; i++) {
    push(); // Guardamos el estado antes de cada triángulo

    rotate((TWO_PI / 8) * i); // Rotación para cada triángulo
    translate(150, 0); // Traslación radial intermedia
    triangle(-20, 20, 0, -40, 20, 20); // Triángulo

    pop(); // Restauramos el estado después de cada triángulo
  }

  pop(); // Restauramos el estado del lienzo después del tercer conjunto
}
