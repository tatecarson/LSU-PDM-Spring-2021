/*
See http://vanevery.github.io/p5.serialport/docs/classes/p5.serialport.html
for more information on p5.serialport 
*/

var serial; // the serial port for communication

// sensors[] will store all of the sensor data parsed from the arduino
// button, light, + user added variables refer to their index in sensorArray.
// To add more sensors, you'll need to add them to the arduino code, then
// reference them in the array.
var sensors = [];

var sensorValue1 = 0;
var sensorValue2 = 1;

//to arduino vars
var rx_flag = 255;
var tx_flag = 255;

var outMessage = 1;
var outMessage2 = 200;

function setup() {
  createCanvas(600, 400);

  textSize(24);

  // Instantiate our SerialPort object
  serial = new p5.SerialPort();

  // Let's list the ports available
  serial.list();

  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("/dev/cu.usbmodem142441");

  // Register some callbacks

  // When we connect to the underlying server
  serial.on("connected", serverConnected);

  // When we get a list of serial ports that are available
  serial.on("list", gotList);

  // When we some data from the serial port
  serial.on("data", gotData);

  // When or if we get an error
  serial.on("error", gotError);

  // When our serial port is opened and ready for read/write
  serial.on("open", gotOpen);
}

function draw() {
  background(100);
  textAlign(10, 10);
  text("Programming Digital Media Rocks!", 10, 50);
  text("button: " + sensors[sensorValue1], 40, 80);
  text("light: " + sensors[sensorValue2], 40, 110);
  text("outMessage: " + outMessage, 40, 150);
}

// We are connected and ready to go
function serverConnected() {
  println("We are connected!");
}

// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    println(i + " " + thelist[i]);
  }
}

// Connected to our serial device
function gotOpen() {
  println("Serial Port is open!");
}

// Uh oh, here is an error, let's log it
function gotError(theerror) {
  println(theerror);
}

// There is data available to work with from the serial port
//from arduino
function gotData() {
  var sensorCounter = 0;

  while (serial.available()) {
    var temp = serial.read();
    if (temp == rx_flag) {
      //reset counter
      sensorCounter = 0;
    } else {
      sensors[sensorCounter] = temp;
      sensorCounter++;
    }
  }
}

//to arduino
function mousePressed() {
  //simple toggle
  if (outMessage == 1) {
    outMessage = 0;
  } else {
    outMessage = 1;
  }

  //divide by size of canvas and scale to
  //similar or the same to the p5 map function
  outMessage2 = mouseX / 600 * 254;

  transmitSerial();
}

//in  a function so that we can use it in other computer interface applications
function transmitSerial() {
  //send all serial data

  serial.write(tx_flag);
  serial.write(outMessage);
  serial.write(outMessage2);
}
