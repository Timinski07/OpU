from tkinter import *
import json

class GUI_Input_json():
    def __init__(self, label, path, key1, key2):
        self.root = Tk()
        self.label = label
        header = Label(self.root, text=self.label)
        header.pack()
        self.e = Entry(self.root, width=50)
        self.e.pack()
        self.path = path
        self.key1 = key1
        self.key2 = key2
        myButton = Button(self.root, text="Enter", command= self.add_to_banned)
        myButton.pack()
        self.root.mainloop()

    def add_to_banned(self):
        word = self.e.get()
        try: 
            print(word)
            temp = []
            with open(self.path) as json_file:
                data = json.load(json_file)
                temp = data[self.key1]
            with open(self.path, 'w') as json_file:
                print(self.e.get())
                y = {self.key2 : word}
                temp.append(y)
                data = {self.key1 : temp}
                json.dump(data, json_file)
        except:
            with open(self.path, 'w') as json_file:
                y = [{self.key2 : word}]
                data = {self.key1 : y}
                json.dump(data, json_file)
        self.e.delete(0, "end")
        censor =""
        for cs in range(len(word) - 1):
            censor = censor + '*'

        header = Label(self.root, text=f"{word[0]}{censor}{word[-1]} added to{self.path}")
        header.pack()

if __name__ == '__main__':
    GUI_Input_json("Which word do you want to ban?:",'C:\\Opu\\Docs\\forbidden_words.json', "forbidden_words", "w")
    
    GUI_Input_json("Enter bad website:",'C:\\Opu\\Docs\\forbidden_sites.json', "forbidden_sites", "w")