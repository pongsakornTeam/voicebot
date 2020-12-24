import speech_recognition as sr

for index, name in enumerate(sr.Microphone.list_microphone_names()):
    print("Microphone with name \"{1}\" found for `Microphone(device_index={0})`".format(index, name))

listener = sr.Recognizer()
try:
    with sr.Microphone(device_index=14) as source:
        print('listening')
        voice = listener.listen(source,timeout=10,phrase_time_limit=10)
        command = listener.recognize_google(voice)
        command = command.lower()
        if 'alexa' in command :
            print(command)
        else :
            print('Hello')
except:
    pass