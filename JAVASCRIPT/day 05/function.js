/*
what are functions ? :

- functions are reusable pieces or block of code that perform a specific task
- we can define function once and we can use it whenever we want by calling that function

-Inside a function if we call "let x = 44" then then the value x will be assigned through out the function and if we call "var x = 44" then the value of x will be assigned through out the code

need of funtions :
-code reusability
-organized code
-redability

how to declare a function:

-general syntax to define function
function functionName(Parameter1, Parameter2,...) {
   code to be executed
}
*/
//example of one function

function greetings() {
    console.log("Hello Yug Ramoliya");
    console.log("before calling greetings");
}

greetings();
console.log("after calling greetings");
/*
-the function keyword is used to declare a function
-the name of this function is greetings
-if we want to use function we have to call it by writing the functionName().
*/

/*
control flow of a function :
-for ex that before greet and after greet thing
*/

/*
function argumaents:
-arguments are the values to be passed to the function when we call it


*/

function greet (name){
    console.log("Hello " + name);
}

// calling the function with argument

greet("Yug Ramoliya");
greet("OM SHARMA");
/*
-here the name is parameter of the function wheenever we call function, we have define a parameter value in brackets().
*/

//class question
function sum (num1, num2){
    console.log(num1 + num2);
}

sum(5, 7);
sum(6, 9);

//return value in function
function hello (){
    console.log("hello world");
    return "I am Yug" // <- this will not be printed
    console.log("after return");
}

hello();

//template litertal

let name = "Yug Ramoliya";
let age = 17;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

//class question 2

function multiplyNum (n1, n2, n3){
    console.log(n1*n2*n3);
}

multiplyNum(2, 3, 4);

//class question 3
function avgFinder(sub1, sub2, sub3, sub4, sub5){
    const student1 = {
        name: "Yug Ramoliya",
        gender: "male",
        rollNo:81,
        age: 17,
        gradYear:2027,
        marks: [sub1, sub2, sub3, sub4, sub5],
    };

    let sum = student1.marks[0] + student1.marks[1] + student1.marks[2] + student1.marks[3] + student1.marks[4];
    let totalSub = student1.marks.length;
    let avg = sum / totalSub;
    console.log(avg);
}

avgFinder(100, 96, 88, 99, 100);

//class question 4
function priceCalculator(p1, p2, p3, p4, p5, p6){
    const buyer = {
        name: "YUG RAMOLIYA",
        items : [p1, p2, p3, p4, p5, p6], 
    }
    
    let totalItem = buyer.items.length;
    buyer.totalItemsOfCart = totalItem;
    let totalPrice = buyer.items[0] + buyer.items[1] + buyer.items[2] + buyer.items[3] + buyer.items[4] + buyer.items[5];
    // console.log(totalPrice);
    return totalPrice;
}

priceCalculator(1000, 300, 598, 395, 4000, 4923);

//class question 5
