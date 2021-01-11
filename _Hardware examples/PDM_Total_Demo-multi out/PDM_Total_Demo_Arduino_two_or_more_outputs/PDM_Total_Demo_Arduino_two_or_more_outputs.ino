// Jesse Allison & Anthony T. Marasco
// PDM Total Demo 

const int analogPin = A0;//the analog input pin sensor is attached to
const int digitalPin = 10;
const int outPin = 5;
const int outPin2 = 4;

int buttonState = LOW;
int sensorVal;

char incomingBytes[10];      // a variable to read incoming serial data into


void setup() {
  // put your setup code here, to run once:

  pinMode(analogPin, INPUT);
  pinMode(digitalPin, INPUT);
  pinMode(outPin, OUTPUT);
  pinMode(outPin2, OUTPUT);

  Serial.begin(9600);

  digitalWrite(outPin, HIGH);
  digitalWrite(outPin2, HIGH);
}

void loop() {
  // put your main code here, to run repeatedly:
  sensorVal = analogRead(analogPin);
  buttonState = digitalRead(digitalPin);

  sensorVal = map(sensorVal,0,1023,0,255);
  
  Serial.print(buttonState);
  Serial.print(",");
  Serial.println(sensorVal);



  if (Serial.available() > 0) {
    // read the oldest byte in the serial buffer:
     Serial.readBytesUntil(255, incomingBytes, 10);
    
    // if the first byte in the array is a 1, turn on the LED 1:
    if (incomingBytes[0] == '1') {
      digitalWrite(outPin, HIGH);
    }
    // if it's a 0 turn off the LED:
    if (incomingBytes[0] == '0') {
      digitalWrite(outPin, LOW);
    }

    // if the second byte in the array is a 1, turn on the LED 2:
    if (incomingBytes[1] == '1') {
      digitalWrite(outPin2, HIGH);
    }
    // if it's a 0 turn off the LED:
    if (incomingBytes[1] == '0') {
      digitalWrite(outPin2, LOW);
    }
    
  }

  
}
