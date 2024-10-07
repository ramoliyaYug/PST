//questionn 1

let emp1Name = "YUG"
let emp1Age = 17
let emp1Salary = "200000lpd"

let emp2Name = "OM"
let emp2Age = 17
let emp2Salary = "300000lpw"

let emp3Name = "KEERTHIKA"
let emp3Age = 18
let emp3Salary = "400000lph"

// question 2
//with object
const employee = {
    person1 : {
        name : "YUG",
        age : 17,
        salary : "200000lpd"
    },
    person2 : {
        name : "OM",
        age : 17,
        salary : "300000lpw"
    },
    person3 : {
        name : "KEERTHIKA",
        age : 18,
        salary : "400000lph"
    }
}

//with array
const employee2 = [
    {
        name : "YUG",
        age : 17,
        salary : "200000lpd"
    },

    {
        name : "OM",
        age : 17,
        salary : "300000lpw"
    },
    {
        name : "KEERTHIKA",
        age : 18,
        salary : "400000lph"
    }
]

/*
DIFF B/W [] AND . when calling property:
-every key in object is a string
- if we have a key value with empty spaces inside and we want to cal that property then we use [] otherwise . is enough
- like this
const person78={
    "person name": "soumya",
    "age": 19, 
    "gender": "male",
    "color": "white",
};
*/
//what are the rule to define key in object
/*
what are the specific reasons to use object or array
when we want to store a values and order is also important then we use array
*/