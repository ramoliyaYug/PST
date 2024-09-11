console.log(NaN==NaN); //false
console.log(NaN===NaN); //false
console.log(undefined==null); //true
console.log(typeof(+[])); //number
console.log(1+true) //2
//difference betweeen == and ===
//how to understand bitwise conversions
//how to find cube root of a number using operatants
console.log(27 ** (1/3));

console.log(2**3**2); //512
console.log(4&2/5*2+2); //0
console.log(3|2*(4**2)); //35
console.log(5&&3); //3
console.log(3||""); //3

//falsy values : undefined, null, NaN, "", 0, -0, false
//all others are truthy values

//how to evaluate chain breaking rules
console.log("hello" && 0 && 5 && 9); //0 //after false value code stops executing
console.log((5 || false || "hello") && true);  //true //after true value code stops executing
console.log(9 && true || false && true); //true
console.log(5||6||7||8||9||false); //5
console.log(5&&7&&9&&true); //true

// in and it return last truthy value and first falcy value
//in or it eont be loking for us.
//calculate from left to right

//decimal to binary:

