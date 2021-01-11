// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/40Me1-yAtTc

// The snake
var s;
// The scale of the grid
var scl = 20;
var cols;
var rows;

var eatSound;
var startOverSound;
var hello;
var music
var distortion;

var fr = 3;

// This is the food location
var food;

var musicRate = 1;

function setup() {
  createCanvas(300, 300);
  // music.play();
  //hello.playMode('sustain');
  colorMode(HSB, 255);
  noStroke();
  cols = floor(width / scl);
  rows = floor(height / scl);

  s = new Snake();
  frameRate(fr);

  // Pick a food location
  pickLocation();

  distortion = new Tone.Distortion(0.8).toMaster();
  distortion.wet.value = 0.1;

  eatSound = new Tone.Player('sounds/Alert/Alert - 06.mp3')
  eatSound.connect(distortion)

  startOverSound = new Tone.Player('sounds/Voice/Voice - Cartoon Laugh 01.mp3').toMaster();
}

// Pick a food location
function pickLocation() {
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

// Animation loop
function draw() {
  background(51);

  // If the snake eats the food
  if (s.eat(food)) {
    eatSound.start();
    musicRate += 0.05;
    eatSound.playbackRate = musicRate;
    distortion.wet.value = constrain(musicRate / 2, 0, 1);
    console.log(distortion.wet.value);
    fr += 2;
    frameRate(fr);
    pickLocation();
  }

  // Check if the snake hits itself or a wall
  s.death();
  // Update snake
  s.update();
  // Draw snake
  s.show();


  fill(150, 255, 255);
  rect(food.x, food.y, scl, scl);
}




// Moving the snake
function keyPressed() {
  //if (!hello.isPlaying()) {
  //hello.play();
  //}

  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }

  if (key == ' ') {
    s.total++;
  }
}