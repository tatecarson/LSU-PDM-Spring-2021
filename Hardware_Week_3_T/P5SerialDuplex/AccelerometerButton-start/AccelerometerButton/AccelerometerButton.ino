const int buttonPin = 2;

void setup()
{
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);

  while (Serial.available() <= 0) {
    Serial.println("hello");
    delay(300);
  }
}

void loop()
{
  if (Serial.available() > 0 ) {
    int sensorValue = analogRead(A0);
    Serial.print(sensorValue);
    Serial.print(",");

    int sensorValue2 = analogRead(A1);
    Serial.print(sensorValue2);
    Serial.print(",");

    int button = digitalRead(buttonPin);
    Serial.println(button);
  }


  delay(100);
}
