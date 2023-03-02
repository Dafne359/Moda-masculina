var cnv;
let moverX = 100;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(tint(25,10,random(0, 255),255));
}

function windowResized() {
  centerCanvas();
}

function draw() {
  fill(random(255), random(255), random(255));
  ellipse(moverX, mouseY, 50, 50);
  moverX = moverX + 1;
}