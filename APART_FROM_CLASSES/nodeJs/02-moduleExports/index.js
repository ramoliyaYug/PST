const addFunction = require('./add.js');

const sum1 = addFunction(1,2)
const sum2 = addFunction(4,5)

console.log(sum1, sum2);
console.log("hello from index.js")

//my tips:
//in the module exports we store the require function in the variables and also we use module.exports in the file from which we have to use the functionality.
//in this we just export the function and using that function in the index file to generate the output.