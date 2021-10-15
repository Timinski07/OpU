import psutil
import time
import json
import usefullFuncs
import os
#C:\\Users\\helle\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Extension Settings\\nomfmnamedbinoleiincfomkbopjoogj\\000002.ldb

arr = 0

def check_vs_and_chrome():
    global arr
    for proc in psutil.process_iter():
         try:
            # Get process name & pid from process object.
            processName = proc.name()
            processID = proc.pid
            #if(processName == "chrome.exe" and len(arr) > 1):
            #    os.system("taskkill /F /PID " + str(processID))
            
            #if(processName == "chrome.exe" and arr > 13):
            #    #os.system("taskkill /F /PID " + str(processID))
            #    print("")
            if(processName == "chrome.exe"):
                arr = arr + 1
         except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass
    print(arr)
    arr = 0

            
while(True):
    check_vs_and_chrome()
    time.sleep(4);