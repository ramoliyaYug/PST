//functions declarations
function greetDeclaration() {
    console.log("hi");
}

//functions expressions
const greet = function(name) {
    console.log("hello " + name);
}
greet("yug");

//we can call function before initialization it but we can't call function expression before initialization

// Arrow function ()=>{}
const greet2 = (name) => `Hi ${name}!`;
// introduce a constant with the parameter name in () and then put => after that
// code will return the code {}

//default parameter
function calculateArea(length = 5 , width = 1) {
    return length * width;
}

console(calculateArea());
console(calculateArea(7));
console(calculateArea(7,3));
