/*
CommonJs:
- CommonJs is the standard that shows how a module should be structured and shared.
*/

require('./add.js');

console.log("hello from index.js");

/*
local module summary:
- in node.js, each file is a module that is isolated by default.
- to load a module into another file, we use the require function which is always available in javascript
- when index.js is executed, the code in the module is also executed
- if the file we are using is a javascript file, we can skip specifying the extension and nodeJs will infer it on our behalf
*/

//my tips:
//in local module we just use the require function not storing that into any variables and also we do not export the module from the file from which we have to use functionality.
//in this method we have to specify the output in the function file