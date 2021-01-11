let bubbles = [];

function setup() {
	createCanvas(600, 400);
	for (let i = 0; i < 10; i++) {
		let x = random(width);
		let y = random(height);
		let r = random(20, 60);
		let b = new Bubble(x, y, r);
		bubbles.push(b);
	}

	bubbles.forEach(e => e.initSound())
}

function draw() {
	background(0);
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].rollover(mouseX, mouseY);
		bubbles[i].move();
		bubbles[i].show();
	}
}

class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}

	rollover(px, py) {
		let d = dist(px, py, this.x, this.y);
		if (d < this.r) {
			this.brightness = 255;
			this.playSound()
		} else {
			this.brightness = 0;
			this.stopSound()
		}
	}

	move() {
		this.x = this.x + random(-2, 2);
		this.y = this.y + random(-2, 2);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		fill(this.brightness, 125);
		ellipse(this.x, this.y, this.r * 2);
	}

	initSound() {
		this.synth = new Tone.Synth().toMaster();
		this.synth.triggerAttack();
		this.synth.volume.value = -60;
	}

	playSound() {
		this.synth.volume.rampTo(-6, 1);
		this.synth.setNote('G4');
	}

	stopSound() {
		this.synth.volume.rampTo(-60, 1)
	}
}