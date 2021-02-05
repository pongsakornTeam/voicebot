import speech_recognition as sr

#for index, name in enumerate(sr.Microphone.list_microphone_names()):
#    print("Microphone with name \"{1}\" found for `Microphone(device_index={0})`".format(index, name))
print('Start')
listener = sr.Recognizer()
try:
    with sr.Microphone() as source:
        print('listening')
        voice = listener.listen(source)
        command = listener.recognize_google(voice)
        command = command.lower()
        if 'alexa' in command :
            print(command)
        else :
            print('Hello')
except Exception as e:
    print(e)
    pass