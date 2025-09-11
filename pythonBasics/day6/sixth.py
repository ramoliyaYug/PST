'''
there is a function which solves a purpose.
tha plave of execution of any program would be your ram
the ram is volatile form of memory in which all your content are lost once program terminates
to store any form of a data permenetly you nee files
hdd is a form of permanent storage
'''
import json
f = open("file.txt")
print(f.read())

j = open("file.json")
jsondata = j.read()
strToJson = json.loads(jsondata)
print(strToJson)
print(strToJson[0])

photo = open("photo.png", "rb")
# print(photo.read())

animals = open("animals.txt")
print(animals.read().__contains__("sneha"))

# write to animals.txt
animals = open("animals.txt", "a")
animals.write("\nOm Sharma")
animals.close()

animals = open("animals.txt", "r")
print(animals.read())
animals.close()


'''
r = opens file in read mode
w = opens file in write mode + creates new file if does not exist
a = opens file in append mode
+- = opens file for updation mode
rb = opens file in read binary mode
rt = opens file in read text mode
r+w = opens file in modifyable mode
'''

#write a program to build the tables and store them in separate txt files 

for i in range(1,21):
    table = open(f"tables/{i}.txt", "w")
    for j in range(1,11):
        table.write(f"{i} * {j} = {i*j}\n")
    table.close()
