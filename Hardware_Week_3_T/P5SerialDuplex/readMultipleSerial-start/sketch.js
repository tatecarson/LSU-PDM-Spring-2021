var serial;
var portName = '/dev/cu.usbmodem14201'
var locX, locY;
var visibility = 1;

function setup() {
  createCanvas(500, 600);
  // background(0);

  smooth(); // antialias drawing lines
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port


}

function draw() {
  background(0);
  fill(255);

  console.log(locX, locY, visibility);
  ellipse(locX, locY, 50);
  if (visibility == 1) {}
}
// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + " " + portList[i]);
  }
}

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  var inString = serial.readStringUntil('\r\n');

  if (inString.length > 0) {
    if (inString !== 'hello') {

      var sensors = split(inString, ',');

      if (sensors.length > 2) {
        locX = map(sensors[0], 0, 1023, 0, width);
        locY = map(sensors[1], 0, 1023, 0, height);
        visibility = sensors[2];
      }
    }
    serial.write('x');
  }
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}