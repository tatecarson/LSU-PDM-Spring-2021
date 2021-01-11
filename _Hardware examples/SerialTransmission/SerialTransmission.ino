/*
  Programming Digital Media
  Serial datasend multiple sensor values 
  Receive multiple values from p5
  Set multiple physical pins (1 digital 1 PWM analog)

  For more information on serial communication: 
  https://www.arduino.cc/reference/en/language/functions/communication/serial/
*/

// These constants won't change. They're used to give names to the pins used:
//pins
const int analogInPin_1 = A0; // Analog input pin that the potentiometer is attached to
const int analogInPin_2 = A1;

const int analogOutPin = 10; // Analog output pin that the LED is attached to
const int digitalOutPin = 4;

//Read sensors
int sensorValue_1 = 0; // value read from the pot
int sensorValue_2 = 0;

//Send to p5
int outputValue_1 = 0; // value output to the PWM (analog out)
int outputValue_2 = 0;

//Read from p5
int messagesFromP5[2] = {1, 50};
int message1 = 0;
int message2 = 1;
int messageCounter = 0;

const int tx_flag = 255;
const int rx_flag = 255;

void setup()
{
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);

  pinMode(digitalOutPin, OUTPUT);
  pinMode(analogOutPin, OUTPUT);

  //test and see if it's working
  //this only happens once
  digitalWrite(digitalOutPin, messagesFromP5[message1]);
  analogWrite(analogOutPin, messagesFromP5[message2]);
}

void loop()
{
  //to p5
  // read the analog in value:
  sensorValue_1 = analogRead(analogInPin_1);
  sensorValue_2 = analogRead(analogInPin_2);

  // map it to the range of the analog out:
  outputValue_1 = map(sensorValue_1, 0, 1023, 0, 254);
  outputValue_2 = map(sensorValue_2, 0, 1023, 0, 254);

  //transmit all sensors to p5
  Serial.write(tx_flag);
  Serial.write(outputValue_1);
  Serial.write(outputValue_2);

  //from p5
  //Get the number of bytes (characters) available for reading from the serial port.
  //true if greater than 0
  while (Serial.available())
  {
    int temp = Serial.read();
    //read through the three things we sent from p5 and look for the flag
    if (temp == rx_flag)
    {
      //reset counter
      messageCounter = 0;
    }
    else
    {
      //assign current value being read from p5 to the correct index of an array
      messagesFromP5[messageCounter] = temp;

      //change to the next index
      //message1, message2, rx_flag
      messageCounter++;
    }
  }

  //change the analog out value
  digitalWrite(digitalOutPin, messagesFromP5[message1]);
  analogWrite(analogOutPin, messagesFromP5[message2]);
}
