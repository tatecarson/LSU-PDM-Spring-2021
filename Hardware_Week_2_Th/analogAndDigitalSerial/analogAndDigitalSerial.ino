// Read a pot as analog data in
// read a button as digital in
// only print pot data if button is pressed
// then turn on light if button is pressed

// bottom right leg to digital pin 2
// bottom left leg to 10k then ground
// top left to 5v --

void setup()
{
  Serial.begin(9600);
  pinMode(2, INPUT);
  pinMode(13, OUTPUT);
}

void loop()
{
  int pot = analogRead(A0);

  // first just read the sensor value
  // the put it in the if statement
  int sensorValue = digitalRead(2);

  // only read the pot if button is pressed
  // then add in digitalWrite
  if (sensorValue)
  {
    Serial.println(pot);
    digitalWrite(13, HIGH);
  }
  else
  {
    digitalWrite(13, LOW);
  }
  delay(1);
}
