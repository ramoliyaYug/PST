//lecture 1
//basic printing things
//console can handle positive, negative, decimal, integer numbers
console.log("welcome to polaris school of technology");
console.log("hi, i'm Yug Ramoliya");
console.log("3");
console.log("2.5");
console.log("-123");
console.log("0.000");
console.log("0.5");

//literals : fixed values
console.log("hello PST") //string literals
console.log(42) //number literals

//variables : var. values
var age = 25
console.log(age); //output 25

/*
rules for declaring variables
these are case sensitive
only bigin with letter,underscore_,dollar$
only contain letter,underscore_,dollar$
can not be named wth reserved keywords

var, let, const
variables are the memory block which can be use to store data

const
constants are the variable whose values cannot be changed
pre defined meaning
cannot be re-declared
cannot be re-assigned

javascriopt can be run on 2 ways
1) browser
2) node.js

*/
const pi = 3.14;
console.log(pi); //output 3.14

//lecture 2
/*
1. what is the difference between scripting langauge and programming langauge?
2. how we decide which translator we shoud use? -> its depend on the langauge, different langauge use as per its use casees
3. is there any standerdization to call assembly langauge, medium level and low level? -> low level and machine lang are similar not same

compiler :
compiler create a seperate file which can be execute on any kind of device 
the langauges which use compiler is known as programming langauge
c, c++, java......

interpreter :
it convert the code written in high level language into machine language which can be understood by computer and directly run in the machine
the langauges which use interpreter is known as scripting langauge
python, javascript, php........

about javascript:
client side scripting langauge
brendan eich
netscape company in 1995
created in 10 days
mocha -> livescript -> javascript
ECMA gave standerdaization to javascript 
*/

//practices
console.log('YUG'); //YUG
console.log("YUG"); //YUG
console.log("'YUG'"); //'YUG'
console.log(`YUG`); //YUG
console.log(5+10); //15
console.log(-5+20); //15
console.log('5'+10); //510
console.log('10'-5); //5