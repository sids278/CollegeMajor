import pywhatkit
number = "6283977373"
message = "HELLO"
# Send the message instantly (without scheduling)
pywhatkit.sendwhatmsg(number, message)
# Send the message at a specific time (schedule it for 9:30 AM)
pywhatkit.sendwhatmsg(number, message, 1, 20)
