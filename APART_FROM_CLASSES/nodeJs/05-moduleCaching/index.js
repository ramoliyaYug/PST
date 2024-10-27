const superHero = require('./superHero.js');

// console.log(superHero.getName());
// superHero.setName('SuperMan');
// console.log(superHero.getName());

// const newSuperHero = require('./superHero.js')
// console.log(newSuperHero.getName()); // this still prints the name superman because it is because of the module caching in nodeJs, once the module has been loaded one time then it will not be loaded again in the same file it will inherit from the previous call of that module. try the vs code run and debug mode to understand better.

//to solve this problem we are exporting the whole class instead of exporting with new keyword

const batman = new superHero("batman");
console.log(batman.getName());
batman.setName('Bruce Wyne');
console.log(batman.getName());

const superman = new superHero("superman");
console.log(superman.getName());
