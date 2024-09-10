/*
objects :
-in real life, objects are things like car,house,animals, etc.

object properties:
-the feature of things
-like this 
car.name=BMW, 
car.model=500,
car.weight=850kg,
car.color=white,

object methods or funtionality:
car.start()
car.drive()
car.accelerate()
car.brake()
car.changeGear(1)

object definations:
-to define object in js we use object literal syntax
*/

//first way of defining object
const person = {
  name: "John Doe",
  age: 30,
  eyeColor: "blue"
  }; 

// another way of defining same objects

const person2 = {};

person2.name = "Jane Doe";
person2.age = 28;
person2.eyeColor = "brown";

/*
*/

const car ={
    name: "BMW",
    model: "500",
    weight: 850,
    color: "white",
};

//if we want to add new value to object we can do this
car.isElectric = true // this will add new property and value to object

/*
accessing object properties:
general formate of access to properties
objectName.propertyName
*/
console.log(car); // output: whole car object
console.log(car.name); // output: BMW
console.log(car.model); // output: 500
console.log(car.weight); // output: 850
console.log(car.isElectric); // output: true //this is new value which we have inserted afterwards

console.log(person.name + " is " + person.age + " years old");

console.log(person.name + " is having " + car.name + " which is " + car.model + " which weighs " + car.weight + " kg");

/*
arrays :
array is the special variable which can store more than one value.

Array is a collection of element and the element which are stored must be of same data type like if we are storing age then the values stored must be numbers only.

insted of doing the declaring let variable for each ne car we define an array
let car1 = nissan;
let car2 = toyota;
let car3 = bmw;
don't do this , define array of car 
*/
let cars = ["nissan", "toyota", "bmw"];
/*
indexing:

-array length is the total number of elements present in the array

*/
console.log(cars.length); // output: 3  

//another way of creating array
const numbers =[];
numbers[0]=1;
numbers[1]=2;
numbers[2]=3;
/*
indexing starts from 0 in array like if we are storing data from 1 to 10 like(1,2,3....,10) no if i call the digit having index 0 it will print 1 or i call 9 then it will print 10.
*/

/*
calling array items:

- general formate of access to array items
 arrayName[index]
*/

console.log(cars[0]); // output: nissan, index of nissan is 0

console.log(cars[1]); // output: toyota, index of toyota is 1

console.log(cars[2]); // output: bmw, index of bmw is 2

//changing the value of array index
cars[1] = "ford";

console.log(cars[1]); // output: ford, now we have changed the value of toyota to ford


/*
array methods:
1.length:
-it returns the total number of elements in the array
*/
let size = cars.length; //output: 3 // last element = size(total elements) - 1

/*
2. push:
-it adds new element at the end of the array and returns the new lenght of the array
*/

cars.push("honda");

console.log(cars); // output: [ 'nissan', 'ford', 'bmw', 'honda' ]
console.log(cars.length); // output: 4

/*
3. pop:
-it removes the last element from the array and returns that element
*/

let removedCar = cars.pop();

console.log(cars); // output: [ 'nissan', 'ford', 'bmw' ]
console.log(removedCar); // output: honda 

/*
4. fill:
-it fills specific elements of an array with a specified value
*/

let fruits = ["apple", "orange", "watermaelon", "grapes", "cherry"];

fruits.fill("kiwi",2,4) ;

console.log(fruits);

//quick tips
/*
- we can change the length property of arrays but the original array will be removed permanently. to acccess the original array again then we have to create a copy of that array first.
*/

let arr = [1, 2, 3, 4, 5];
console.log(arr);// output: [1, 2, 3, 4, 5]

arr.length = 2;

console.log(arr); // output: [1, 2]

/*
when we try to stretch the length of a array
-we will get thr empty element at the end of the array
-and the length of the array will be changed also
*/
let arr1 = [1,2,3,4,5,6];
arr1.length = 9;

console.log(arr1); // output: [1, 2, 3, 4, 5, 6, empty slots]

console.log(arr1.length);

// bina bakchodi ka sidha sa explanation:
// Short-> Data Removed
// Extended-> Empty item
