const int buttonPin = 2;      // digital input

void setup() {
  // configure the serial connection:
  Serial.begin(9600);
  // configure the digital input:
  pinMode(buttonPin, INPUT);
  while (Serial.available() <= 0) {
    Serial.println("hello"); // send a starting message
    delay(300);              // wait 1/3 second
  }
}

void loop() {
  if (Serial.available() > 0) {
    // read the incoming byte:
    int inByte = Serial.read();
    // read the sensor:
    int x = analogRead(A0);
    // print the results:
    Serial.print(x);
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
