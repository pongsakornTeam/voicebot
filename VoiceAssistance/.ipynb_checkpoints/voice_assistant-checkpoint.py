import pyttsx3
import datetime
import speech_recognition as sr
import webbrowser
import wikipedia

engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices') #getting details of the current voice
engine.setProperty('voice', voices[0].id)

def speak(audio):   
    engine.say(audio)    
    engine.runAndWait() #Without this command, speech will not be audible to us.

def wishMe():
    hour = int(datetime.datetime.now().hour)
    if hour>=0 and hour<12:
        speak("Good Morning!")    
    elif hour>=12 and hour<18:
        speak("Good Afternoon!")       
    else:
        speak("Good Evening!") 
    speak("Welcome! Please tell me how may I help you")

def takeCommand():
    #It takes microphone input from the user and returns string output    
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)
        
        try:
            print("Recognizing...") 
            r.adjust_for_ambient_noise(source, duration=1)  #decrese noise effect
            query = r.recognize_google(audio, language='en-US') #Using google for voice recognition.
            print(f"User said: {query}\n")  #User query will be printed.    
            print("Success")
        except Exception as e:
            #print(e)  use only if you want to print the error!
            print("Say that again please...")   #Say that again will be printed in case of improper voice 
            traceback.printed
            return "what teamy" #None string will be returned
        
    return query
        
if __name__=="__main__" :    
    speak("Hello World! Hope you all are doing well.")
    wishMe()
    while True:

        query = takeCommand().lower() #Converting user query into lower case        # Logic for executing tasks based on query
 
        if 'wikipedia' in query:  #if wikipedia found in the query then this block will be executed
            speak('Searching Wikipedia...')
            query = query.replace("wikipedia", "")
            results = wikipedia.summary(query, sentences=2) 
            speak("According to Wikipedia")
            print(results)
            speak(results)
            print (query)
        elif 'open youtube' in query:
            webbrowser.open("youtube.com")
        elif 'open google' in query:
            webbrowser.open("google.com")
        elif 'play music' in query:
            music_dir = 'D:\\Non Critical\\songs\\Favorite Songs2'
            songs = os.listdir(music_dir)
            print(songs)    
            os.startfile(os.path.join(music_dir, songs[0]))
        elif 'the time' in query:
            strTime = datetime.datetime.now().strftime("%H:%M:%S")    
            speak(f"Ma'am, the time is {strTime}")
        elif 'hello' in query :
            speak('Hello')      
        else :
            speak('Fail 2')  
            speak(query) 