hello sir please see the code for screenreader extension. the main file is "screenreader.js".
some functions may be uncommented
or not described well. i am sorry for that. actually i made this for myself to avoid eyestrain
while reading webpages .
so see the video tutorial or a simple description below
----------KEYMAP-----------
usage is very simple. select any text and press 
, key .The text selection moves to next line and 'reads it'(i.e upto next full stop)
aloud i.e u will hear the sound from the speakers
similiarly 'm' key goes to previous line and reads it.(i.e upto previous full stop)
' to go upto next punctuation mark
; to go upto previous punctuation mark
 = key to increase speech rate
 - key to decrease speech rate
 ----------HOW IT WORKS------
 the extension works as a client server model. an injected javascript sends the selected text to a 
 (windows)application 
running a server with localhost://60024 using a GET request and hence the server processes it i.e 
converts into speech. i also have a platform independent one also
The server app (browserspeak.exe) is not mine fully. but i modified and added feautures for changing voices and volume, rate controls and a save webpage 'hack'
 