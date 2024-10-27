(function(message){
    const superHero = "batman";
    console.log(message,superHero);
})("hello")

(function(message){
    const superHero = "superman";
    console.log(message,superHero);
})("hey")

(function (exports ,require, module, __filename, __dirname){
    const superHero = "spiderman";
    console.log("hello",superHero);
})()

//IIFE helps to keep top level variables scoped to the module rather than the global object
//the IIFE wraps the each and every modules in the five parameters
