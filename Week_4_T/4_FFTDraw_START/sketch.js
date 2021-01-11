let audioContext;
let resonanceAudioScene;

function setup() {
	audioContext = new AudioContext();
	Tone.setContext(audioContext);
	resonanceAudioScene = new ResonanceAudio(audioContext);
	resonanceAudioScene.output.connect(audioContext.destination);

	// Add the room definition to the scene.
}

// Define room dimensions.
// By default, room dimensions are undefined (0m x 0m x 0m).
const roomDimensions = {
	width: 20.1,
	height: 20.5,
	depth: 3.4,
};

// Define materials for each of the room’s six surfaces.
// Room materials have different acoustic reflectivity.
const roomMaterials = {
	// Room wall materials
	left: 'brick-bare',
	right: 'curtain-heavy',
	front: 'marble',
	back: 'glass-thin',
	// Room floor
	down: 'grass',
	// Room ceiling
	up: 'transparent',
};

resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);

const synth = new Tone.Synth().toMaster();
synth.triggerAttackRelease('C4', '8n');
