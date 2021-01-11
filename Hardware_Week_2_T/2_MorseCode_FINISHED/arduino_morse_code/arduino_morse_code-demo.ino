// Adapted from circuits.io user prabh mystry (https://circuits.io/circuits/1896273-morse)

String message = "SOS hello"; // test string
int timeUnit = 100;           // time units for morse

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  message.toLowerCase();
}

void loop()
{
  for (int i = 0; i < message.length(); i++)
  {
    switch (message.charAt(i))
    {
    case ' ':
      // gap between two words
      delay(timeUnit * 7);
      break;
    case 'a':
      dot();
      dash();
      break;
    case 'b':
      dash();
      dot();
      dot();
      dot();
      break;
    case 'c':
      dash();
      dot();
      dash();
      break;
    case 'd':
      dash();
      dot();
      dot();
      break;
    }
  }
}

void dot()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(timeUnit);
  digitalWrite(LED_BUILTIN, LOW);
  delay(timeUnit);
}

void dash()
{
  digitalWrite(LED_BUILTIN, HIGH);
  // three shorts = a long
  delay(timeUnit * 3);
  digitalWrite(LED_BUILTIN, LOW);
  delay(timeUnit);
}
