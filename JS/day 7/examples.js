/*
find the bugs

1
if ("hello"){
    console.log(10);
}

2
if (10=5){
    console.log("test1");
}
else{
    console.log("test2");
}

3
switch(true){
    case 1: console.log(1);
    case 2: console.log(2);
    case 3: console.log(3);break;
    default: console.log("?");
}

4
if (8&2){
    console.log("test3");
}
if else(1) {
    console.log("test4");
}
*/

//1
if ("hello"){ //if can take condition and boolean value as arguments
    console.log(10);
} //no bugs here

//2
if (10==5){ // ==
    console.log("test1");
}
else{
    console.log("test2");
}

//3
switch(true){ //switch mostly take patterns as arguments 
    case 1: console.log(1);break;//break;
    case 2: console.log(2);break;//break;
    case 3: console.log(3);break;
    default: console.log("?");
}

//4
if (8&2){ // 8&2=0 which is falcy value so this if will not be executed
    console.log("test3");
}
else if(1) { // else if 
    console.log("test4");
}

//demo of javascript is interpreter langauge

console.log(5);
console.log(6);
console.log(a);
console.log(7);

//code runs line by line as you can see above
//we take control of javascript code execution by putting some condition that's why is called control flow statement

//5
function test(){
    var a = 5
    console.log("func1");
}
console.log(a); //var is a global & functional scope so we can't access it here
//we can redeclare the var;
//we can reasign the let but not const
//

//6
{var b = 5}
console.log(b);

//7
console.log(a); //error : a is not defined

// 8
console.log(a);  
var a = 5; 

//9
console.log(b); //referance error
let b = 5;
 
//TDZ(temporal dead zone) and housting:
//if we can access the value before declaration it is called housting
//var support housting and let and const also supprot housting but in partial way

//TDZ : it is the time period between variable accesibility and declaration
console.log(a);
console.log("hello");
console.log("test");

var a = 5;
//with var we can see undefined : value is somewhere in the code but we can't access it
//with let it gives referenceError which is different with the previous ones which is we can't access variable before declaration

//question : write a js program to find largest number among three numbers

function maxNum(a, b, c) {  
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}

maxNum(10, 20, 30);