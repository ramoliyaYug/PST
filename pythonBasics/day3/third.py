# functions
def add(num1, num2):
    return num1 + num2

print(add(2, 3))

def calculateAvg():
    n1 = input("Enter number 1: ")
    n2 = input("Enter number 2: ")
    n3 = input("Enter number 3: ")
    avg = (int(n1) + int(n2) + int(n3)) / 3
    return avg

def cube(num):
    return num * num * num

# two types of functions
# 1. built-in functions
# 2. user-defined functions

def greet(name):
    print(f"Hello {name}")

greet("Ananya")

def factorial(num):
    if(num == 1 or num == 0):
        return 1
    return num * factorial(num - 1)

print(factorial(5))


# collections

# list
list1 = [1,2,"hi",4.5,True,None]
print(list1)
print(list1[0])
print(list1[-1])
print(list1[0:3])
print(list1[::-1])
print(list1[0:3:2])

for i in list1:
    print(i)

# functions in list
sampleList = [1,2,3,4,5]
print(len(sampleList))
print(max(sampleList))
print(min(sampleList))
print(sum(sampleList))
print(sampleList.count(5))
sampleList.append(6)
print(sampleList)
sampleList.insert(2, 7)
print(sampleList)
sampleList.remove(7)
print(sampleList)
sampleList.pop()
print(sampleList)
sampleList.reverse()
print(sampleList)
sampleList.sort()
print(sampleList)


