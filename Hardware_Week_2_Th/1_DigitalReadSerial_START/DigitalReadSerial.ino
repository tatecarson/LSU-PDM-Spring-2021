int pushButton = 2;

// the setup routine runs once when you press reset:
void setup()
{
	Serial.begin(9600);

	pinMode(pushButton, INPUT);
}

// the loop routine runs over and over again forever:
void loop()
{
	int buttonState = digitalRead(pushButton);
	Serial.println(buttonState);
	delay(1);
}
