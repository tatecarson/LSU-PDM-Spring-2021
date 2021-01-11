const int numReadings = 10;

int readings[numReadings];      // the readings from the analog input
int readIndex = 0;              // the index of the current reading
int total = 0;                  // the running total
int average = 0;                // the average

const int buttonPin = 2;      // digital input

void setup() {
  // configure the serial connection:
  Serial.begin(9600);
  // configure the digital input:
  pinMode(buttonPin, INPUT_PULLUP);
  while (Serial.available() <= 0) {
    Serial.println("hello"); // send a starting message
    delay(300);              // wait 1/3 second
  }

  // initialize all the readings to 0:
  for (int thisReading = 0; thisReading < numReadings; thisReading++) {
    readings[thisReading] = 0;
  }
}

void loop() {
  if (Serial.available() > 0) {


    // read the incoming byte:
    int inByte = Serial.read();
    // read the sensor:
    //    int x = analogRead(A0);
    // print the results:
    //    Serial.print(x);
    // subtract the last reading:
    total = total - readings[readIndex];
    // read from the sensor:
    readings[readIndex] = analogRead(A0);
    // add the reading to the total:
    total = total + readings[readIndex];
    // advance to the next position in the array:
    readIndex = readIndex + 1;

    // if we're at the end of the array...
    if (readIndex >= numReadings) {
      // ...wrap around to the beginning:
      readIndex = 0;
    }

    // calculate the average:
    average = total / numReadings;
    // send it to the computer as ASCII digits
    Serial.println(average);
    Serial.print(",");
    // read the sensor:
    int y = analogRead(A1);
    // print the results:
    Serial.print(y);
    Serial.print(",");

    // read the sensor:
    int press = digitalRead(buttonPin);
    // print the results:
    Serial.println(press);
  }
}
