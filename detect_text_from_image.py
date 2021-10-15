import pytesseract as tess 
tess.pytesseract.tesseract_cmd = r'C:\Opu\Tesseract-OCR\tesseract.exe'
from PIL import Image
import pyautogui
import time
import json
import os
import usefullFuncs


def scan_picture():
    while(True):
        try:
            pyautogui.screenshot('C:\\Opu\\Docs\\text.png')
        except Exception as ex:
            print("standy-mode")
        img = Image.open('C:\\Opu\\Docs\\text.png')
        text = tess.image_to_string(img)
        usefullFuncs.Usefull_Functions.check_for_words(text);
        #os.remove('C:\\Opu\\Docs\\text.png')
scan_picture()