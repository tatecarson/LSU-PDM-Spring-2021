let fft;
let waveform;
let player;

function setup() {
	createCanvas(800, 600);

	fft = new Tone.Analyser({ type: 'fft', size: 64 });

	// player = new Tone.Player('piano.wav').connect(fft).toMaster();
	player = new Tone
		.Player('dilla.mp3')
		.connect(fft)
		.toMaster();

	player.autostart = true;
	player.loop = true;
}

function draw() {
	// console.log(fft.getValue());
	background(100);

	fft
		.getValue()
		.forEach((y, i) => ellipse((i + 5) * 10, (y * 2) + 400, 10));
}
