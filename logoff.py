import datetime
import time
import os
import json

timer = 0

json_path = "C:\\Opu\\Dates\\date1.json"
json_paths = "C:\\Opu\\Dates\\date"
now = datetime.datetime.now()
today = now.strftime("%y-%m-%d %H:%M:%S")
date_today = today[0:8]
saved_date = ""

json_paths = "C:\\Opu\\Dates\\date"

def sync_files(num, path):
    global timer, today
    x = 1
    while(x <= num):
        path2 = path + str(x) + ".json"
        with open(path2, 'w') as json_file:
               json.dump({'limits':[{'date':today},{'timer' : timer}]}, json_file)
        x = x + 1


def correct_files(num, path):
    global timer
    x = 1
    tmp_time = 0
    tmp_date = ""
    try:
        while(x <= num):
            path2 = path + str(x) + ".json"
            with open(path2) as json_file:
                data = json.load(json_file)
                limits = data['limits']
                saved_time = limits[1]
                saved_time = saved_time['timer']
                print(f"{tmp_time}   :  {saved_time}")
                if( x != 1 and tmp_time != saved_time):
                    timer = 5400
                    sync_files(3, path)
                    break
                print(f"time {path2} ok")
                tmp_time = saved_time
                saved_date = limits[0]
                saved_date = saved_date['date']
                print(f"{tmp_date}   :  {saved_date}")
                if(x != 1 and saved_date != tmp_date):
                    timer = 5400
                    sync_files(3, path)
                    break
                print(f"date {path2} ok")
                tmp_date = saved_date
            x = x + 1
    except Exception as ex:
        print("illegal: file was corrupted")
        timer = 5400
        sync_files(3, path)

if __name__ == "__main__":
    correct_files(3, "C:\\Opu\\Dates\\date")