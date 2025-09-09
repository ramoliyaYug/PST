#kinds of string declaration
# string is immutable in python
a = "Hello World"
b = 'Hello World'
c = """Hello World"""
d = '''Hello World'''

# length of string
print(len(a))

# indexing in python
print(a[0])
print(a[-1])

# cut string
print(a[0:4]) #[startidx:endidx] endidx is not included
print(a[:])
print(a[:4])
print(a[4:])

# ‍slicing with 3 params (startidx:endidx:step)​⁡⁡
numstr="0123456789"
print(numstr[0::2])
print(numstr[2::2])


# negative slice
exampleString = "Ananya Is Good Girl"
print(exampleString[-4:-1])

# capitalize
print(exampleString.capitalize())

print(exampleString.startswith("ananya"))
print(exampleString.endswith("Girl"))

print(exampleString.lower())
print(exampleString.upper())

print(exampleString.title())

print(exampleString.find("Good"))
print(exampleString.replace("Good","VeryVeryGood")) 

print(exampleString.split(" "))

print(exampleString.strip()) # removes spaces from start and end

print(exampleString.count("a"))

# conditional statements
#if if-else, if-elif-else
marks = 56
if(marks > 35):
    print("baccha pass hai")
elif(marks > 70):
    print("baccha good hai")
else:
    print("baccha fail hai")


# while loop
i = 0
while(i < 10):
    print(i)
    i = i + 1
    

# for loop
for i in range(10):
    print(i)
    


