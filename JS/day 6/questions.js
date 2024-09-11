function sumEven () {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumEven());

function average (a, b, c) {
    let sum = a + b + c;
    return sum / 3;
}
console.log(average(10, 20, 30));

function large(a, b){
    let res = a<b ? `${b}` : `${a}`;
    return res;
}

console.log(large(20,10));

function discount (mulya){
    let discountPercentage = 25;
    let discountAmount = (mulya * discountPercentage) / 100;
    let discountedPrice = mulya - discountAmount;
    return discountedPrice;
}

console.log(discount(300));

/*
difference between var, let and const:

-variable can be declared without initializing the value.
-let also can be declared without initializing the value.
-but we cannot declare const without inializing the value.

-if we declare the variable in global scope then we can access that variable in anywhere in javascript, but if we declared the variable in scope then we only can access that variable in that scope only.

-var is functional scoped.

-let and const are block scoped. (inside scope we can access but outside scope we cannot)
*/

//declare two function f1 and f2, declare var in f1 scope and assign value 10, and try to print var value in f2 scope

function f1() {
    var x = 10;
}
f1();
function f2() {
    console.log(x); // output: ReferenceError: x is not defined
}
f2();