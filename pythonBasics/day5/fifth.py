a = list()

# for i in range(5):
#     a.append(input())
    
# print(a) 

# cocottroifniwbldmnahhoifniwbltihtdfhidf

# dictionary

myDict = {
    "ananya" : 96,
    "yug" : 69,
    "anvita" : 99,
    "sneha" : 35,
    "annu" : 80
}
print(myDict["ananya"])
# dictionary methods

print(myDict.keys())
print(myDict.values())
print(myDict.items())

print(hash((1,2,3,4,5,6,7,8,9,10)))

# set

set1 = {1,2,3,4,5,"ananya",False}
print(set1)

set1.add(6)
print(set1)

set1.remove(6)
print(set1)

# union and intersection of the sets

set1 = {1,2,3,4,5}
set2 = {4,5,6,7,8}
print(set1.union(set2))
print(set1.intersection(set2))
print(set1 | set2)
print(set1 & set2)

