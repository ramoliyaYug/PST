//question 1
// create a function that takes stringNum as parameter and returns a number multiplied by 2:
function product(stringNum){
    return stringNum*2;
};

let result = product(2);
console.log(result);

// question 2
// find a middle number from input string and print the output by multiplying by 2

// Math.floor(splitStr.length / 2); //math.floor will round of the values

function opr(a){
    let len = a.length;
    let idx = Math.floor(len/2);
    let value = a[idx];
    return value;
}

let res = opr("12345");

console.log(res*2);

//questio 2
// write a js function which takes 4 parameters name,class,rollNo,age and print an introduction sentence
function intro(name, cls, rollNo, age,){
    console.log(`My Name is ${name} and I'am ${age} years old, I am studing in ${cls} and my rollno is ${rollNo}`);
}

intro("YUG", "Btech 1st sem", 5, 17);

//question 3
//