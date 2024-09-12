let circles = [];
let numCircles = 30;
let circleSize = 30; // Tamaño uniforme de las esferas

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // Crear círculos con posiciones iniciales
  for (let i = 0; i < numCircles; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      xSpeed: random(-3, 3),
      ySpeed: random(-3, 3)
    });
  }
}

function draw() {
  background(255);

  // Actualizar y dibujar cada círculo
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    
    // Actualizar posición
    circle.x += circle.xSpeed;
    circle.y += circle.ySpeed;
    
    // Rebotar en los bordes
    if (circle.x > width || circle.x < 0) {
      circle.xSpeed *= -1;
    }
    if (circle.y > height || circle.y < 0) {
      circle.ySpeed *= -1;
    }
    
    // Dibujar círculo en color rojo con tamaño uniforme
    fill(255, 0, 0);
    ellipse(circle.x, circle.y, circleSize, circleSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

