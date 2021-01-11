let button; 
let slider; 

function setup() {
  createCanvas(500, 500); 
  background(200, 230, 10); 

  // Test sound -> if you hear it everything is working
  const synth = new Tone.Synth().toMaster();

  synth.triggerAttackRelease('c4', '8n');

  // p5 button
  button = createButton('click me')
  button.position(19, 19);
  button.mousePressed(() => console.log('clicked!'));

  // p5 slider
  slider = createSlider();
  slider.position(19, 50); 
}

function draw() {
  // print the value of the slider
  console.log(slider.value());
}