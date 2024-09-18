/*
factory function and constructor functions:
-factory function are the function which return objects. They're called like regular functions and don't use the new keyword
-they provide a simple way to create objects
-factory function are the function like normal one only, just returns object
*/
function createCircle(){
    return{
        radius:1,
        draw: function(){
            console.log('draw');
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

/*
constructor function:
-constructor functions are used to create & initialize objects.
-they use the 'new' keyword to create objects.
-they use the 'this' keyword to refer to the newly created object.
-constructor functions have a name which starts with a capital letter.
*/

function person(name, age){
    this.name= name;
    this.age= age;

    this.greet = function greet(){
        console.log('Hello, ' + this.name);
    }
}

const person1 = new person("Yug", 17.5);
console.log(person1.name);
console.log(person1.greet);

const person2 = new person("Om", 17);
console.log(person2.name);
console.log(person2.greet);

//this is not a variable. It is a keyword. You cannot change the value of this.this reffres the currunt object

//dynamic nature of object:
const circle3 = new createCircle(3);

circle3.color = 'purple';
circle3.radius = 10;
console.log(circle3);

delete circle3.color;
delete circle3.radius
console.log(circle3);

delete circle3.draw
console.log(circle3);