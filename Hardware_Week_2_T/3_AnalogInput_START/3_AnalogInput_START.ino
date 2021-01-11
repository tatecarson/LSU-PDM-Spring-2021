int sensorPin = A0; 
int ledPin = 13; 
int sensorValue = 0; 

void setup()
{
  pinMode(ledPin, OUTPUT);

  Serial.begin(9600); 
}

void loop()
{
  sensorValue = analogRead(sensorPin); 

  Serial.println(sensorValue); 

  digitalWrite(ledPin, HIGH); 
  delay(sensorValue); 

  digitalWrite(ledPin, LOW); 
  delay(sensorValue); 
  
}
