import json
import pynput 
from pynput.keyboard import Key, Listener
from win10toast import ToastNotifier

toast = ToastNotifier()
toast.show_toast("Keylogger", "The Process has been started", duration=2)

count = 0
keys = []

def convert(s): 
    str1 = "" 
    return(str1.join(s)) 
        
def on_press(key):
    global keys, count

    k = str(key).replace("'","")
    if(k == 'Key.space'):
        k = ' '
    print(k)
    keys.append(k)
    count += 1

    with open('C:\\Lol\\forbidden_words.json') as json_file:
            data = json.load(json_file)
            forbidden_words = data["forbidden_words"]
    for word in forbidden_words:
        ks = convert(keys)
        if ks.find(word['w']) >= 0:
            toast.show_toast("Keylogger", f"Shutdown - forbidden word '{word['w']}' was written", duration=2)
            time.sleep(2)
            os.system("shutdown /s /t 1")
            keys = []

    if count >= 100:
        count = 0 
        keys = []


def on_release(key):
    if key == Key.esc:
        return False
 
with Listener(on_press = on_press, on_release = on_release) as listener:
    listener.join()

input()