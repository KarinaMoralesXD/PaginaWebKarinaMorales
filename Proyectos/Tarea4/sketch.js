let circles = []; // Array para almacenar círculos

function setup() {
  createCanvas(800, 800);
  
  // Crear un círculo estático en el centro
  circles.push({ x: width / 2, y: height / 2, size: 100 });
}

function draw() {
  background(255);
  
  // Dibujar el círculo estático
  fill(255, 0, 0); // Color rojo para el círculo estático
  noStroke(); // Sin borde para el círculo estático
  ellipse(circles[0].x, circles[0].y, circles[0].size, circles[0].size);
  
  // Comprobar si el mouse está dentro del círculo estático
  if (dist(mouseX, mouseY, circles[0].x, circles[0].y) < circles[0].size / 2) {
    // Agregar nuevos círculos que se agrandan
    let newCircle = { 
      x: circles[0].x, 
      y: circles[0].y, 
      size: 0, 
      growthRate: random(1, 3) // Tasa de crecimiento aleatoria
    };
    circles.push(newCircle);
  }

  // Dibujar los círculos en crecimiento
  for (let i = 1; i < circles.length; i++) {
    let circle = circles[i];
    
    // Incrementar el tamaño del círculo
    circle.size += circle.growthRate;
    
    // Dibujar el círculo en rojo
    noFill();
    stroke(255, 0, 0); // Color rojo para el borde
    ellipse(circle.x, circle.y, circle.size, circle.size);
    
    // Eliminar círculos que han crecido demasiado
    if (circle.size > 200) {
      circles.splice(i, 1);
      i--; // Decrementar el índice para evitar saltos
    }
  }
}
