/*
higher order function:
1.filter
2.map
3.reduce
4.some
*/

function area(radius) {
  let area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(Number((Math.PI * radius[i] * radius[i]).toFixed(2)));
  }
  return area;
}

function diameter(radius) {
  let diameter = [];
  for (let i = 0; i < radius.length; i++) {
    diameter.push(2 * radius[i]);
  }
  return diameter;
}

function circumference(radius) {
  let circumference = [];
  for (let i = 0; i < radius.length; i++) {
    circumference.push(Number((2 * Math.PI * radius[i]).toFixed(2)));
  }
  return circumference;
}

console.log(area([3, 6, 2, 4]));
console.log(diameter([3, 6, 2, 4]));
console.log(circumference([3, 6, 2, 4]));

//higher order function are that function take one or more function as arguments and parameters
//it can also return the function as a result

function f1(jp, kp) {
  console.log("Hey i am f1");
  console.log(jp());
  console.log(kp());
}

function f2() {
  return "Hey i am f2";
}

function f3() {
  return "Hey i am f3";
}
function f4() {
  return f1(f2, f3);
}

function f5() {
  return [f2(), f3()];
}

console.log(f4());
console.log(f5());

//now we will reduce the circle code using higher order functions

function area69(r) {
  return Math.PI * r * r;
}
function circumference69(r) {
  return 2 * Math.PI * r;
}
function diameter69(r) {
  return 2 * r;
}

function calculate(radius, func) {
  let result = [];
  for (let i = 0; i < radius.length; i++) {
    result.push(Number(func(radius[i]).toFixed(2)));
  }
  return result;
}
let rad = [2, 6, 4, 3];
console.log(calculate(rad, area69));
console.log(calculate(rad, diameter69));
console.log(calculate(rad, circumference69));

//more reducement of code using arrow function
let area96 = (r) => Math.PI * r * r;
let diameter96 = (r) => Math.PI * r * r;
let circumference96 = (r) => 2 * Math.PI * r;
let calculate96 = (r, func) => {
  let res = [];
  for (let i = 0; i < r.length; i++) {
    res.push(Number(func(r[i]).toFixed(2)));
  }
  return res;
};

console.log(calculate96(rad, area96));
console.log(calculate96(rad, diameter96));
console.log(calculate96(rad, circumference96));

/*
filter function:
- The filter() function takes an array and returns a new array with only the values that meet certain criteria.

-syntax:
  const newArray = array.filter(callback(element[, index[, array]])[, thisArg])
*/

let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.filter(f1);

function f1(ele, index, arr) {
  console.log(ele, index, arr);
}

function even(yug) {
  if (yug % 2 == 0) {
    return yug;
  }
}

let evenArr = arr.filter(even);
console.log(evenArr);

let oddArr = arr.filter((om) => om % 2 != 0);

console.log(oddArr);

//filtering words longer than 5 characters

let words = ["apple", "banana", "grape", "kiwi", "orange"];

let filtedWords = words.filter((priya) => priya.length > 5);

console.log(filtedWords);

//filtering people younger or eqal to 25

const people = [
  { name: "alice", age: 30 },
  { name: "bob", age: 20 },
  { name: "charlie", age: 25 },
  { name: "david", age: 40 },
];

let youngPeople = people.filter((choteLog) => choteLog.age <= 25);
console.log(youngPeople);

/*
map function:
-the map function takes an array of values and applies a tranformation to each value in the array.

-syntax:
  const newArray = array.map(callback(element[, index[, array]])[, thisArg])
*/

let arr2 = [1, 2, 3, 4, 5, 6];
let newArr2 = arr2.map((multiply) => multiply * 2);
console.log(newArr2);

let arr3 = people.map((janta) => janta.name);
console.log(arr3);

/*
some function:

- the some() method tests whether at least one element in the array passes the test implemented by the provided function.

-in short it return boolean values
*/

let arr4 = [1, 2, 3, 4, 8, 12];
let bigThanFiveSome = arr4.some((el) => el > 5);
console.log(bigThanFiveSome); //true

let bigThanFiveEvery = arr4.every((elem) => elem > 5);
console.log(bigThanFiveEvery); //false

/*
reduce function:

- The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.

- syntax:
  const result = array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
*/

const arr5 = [1, 2, 3, 4, 5];
let sum = arr5.reduce((total, val) => {
  total += val;
  return total;
}, 0);

console.log(sum); //15

//shashwat sir

//higher order functions
function createMultiplier(multiplier){
    return function(number){
        return multiplier * number;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); //10
console.log(triple(5)); //15

//using in discount 
function createDiscountCalculator(discountRate){
    return function(price){
        return price - (price * discountRate);
    }
}

const electronicDiscount = createDiscountCalculator(0.10); //10%
const fashionDiscount = createDiscountCalculator(0.20); //20%
const dailyUseDiscount = createDiscountCalculator(0.05); //5%

console.log(electronicDiscount(1000)); 
console.log(fashionDiscount(3999));
console.log(dailyUseDiscount(564));


