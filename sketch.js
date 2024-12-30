function setup() {
  createCanvas(600, 600);
  background(0);
  noFill();
  strokeWeight(2);
}

function draw() {
  if (mouseIsPressed && mouseButton === LEFT) {
    let gon = int(map(mouseY, 0, height, 3, 10));
    let radius = dist(mouseX, mouseY, width / 2, height / 2);
    let col = color(random(255), random(255), random(255)); // ランダムな色を生成
    stroke(col);
    poly(mouseX, mouseY, radius, gon);
  }
}

function poly(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
