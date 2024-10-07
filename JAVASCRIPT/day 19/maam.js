/*
synchronous javascript:
- js runs in line by line and in seqence by seqence

drawback:
when dealing with time consuming data fetching it will stop at that line and further code won't be executed

asynchronous javascript:
- js runs in line by line but it can run multiple tasks at the same time independently from each other

advantages:
- it allows you to handle time consuming data fetching in the background without blocking the user interface
*/

// console.log("hi")
// setTimeout(() => {
//     console.log("geek");
// }, 2000); //this will print after 2 sec the time in the last is in millisecons.
// console.log("end");

/*
callback function:
-a function passed as an argument to another function. This function is called after the other function has finished executing.

*/

function greet(name, callback) {
  console.log(`hi ${name}`);
  callback();
}

function callMe() {
  console.log(`i am the callback function`);
}

greet("yug", callMe);

/*
callback hell:
-The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of the   resulting code structure resembles a pyramid and hence callback hell is also called the "pyramid of the doom".
It makes the code very difficult to understand and maintain.

-To understand the internal working of callback hell in javascript, assume we have to achieve a task say D. To achieve task D, we need to execute a series of dependent tasks ranging from A to C asynchronously. In short, first we execute task A, we get the result and task B need to depend on result A to start its execution. Similarly, unless result B is produced we can't execute task C. This leads to the chaining of tasks from A to D, which creates a set of nested
*/

// getArticle(20, (user) => {
//   console.log(`fetch articles ${user}`);
//   getUserData(user.username, (name) => {
//     console.log(name);
//     getAdress(name, (item) => {
//       console.log(item);
//       //.......this go on and on
//     });
//   });
// });

//In the example shown below, get User Data takes in an argument that is dependent or needs to be extracted from the result produced by getArticles which is inside user, The same dependency can be observed with getAddress also. This scenario is termed callback hell.

/*
promises:
-A promise in JavaScript is like a container for a future value. It is a way of saying, "I don't have this value right now, but I will have it later." Imagine you order a book online. You don't get the book right away, but the store promises to send it to you. While you wait, you can do other things, and when the book arrives, you can read it.

-In the same way, a promise lets you keep working with your code while waiting for something else to finish, like loading data from a server. When the data is ready, the promise will deliver it.

types:
1. Pending: The initial state of promise before the event happens.
2. Resolved/fullfilled: The promise operation has completed successfully.
3. Rejected: The promise has failed.
*/

let promise = new Promise(function (resolve, reject) {
  //... code
});

//wee have created a promise constroctor in that there are two function resolve and reject. if everything goes well then we call resolve and if something goes wrong then we call reject.

let myPromise = new Promise(function (resolve, reject) {
//some code that take time to load or likw that
let success = true; // change this to false to check the error

if(success){
    resolve("the data has loded successfully")
}else{
    reject("there was an error loading the data")
}
});

console.log(myPromise);

/*
Once you have a promise, you can use it to do something when it's fulfilled or rejected. You can do this using two methods: then and catch.
- The then method is called when the promise is fulfilled. It takes a function as an argument, which will run when the promise is successful. 
- The catch method is called when the promise is rejected. It also takes a function, which will run if there's an error.
*/

myPromise.then(function (message) {
    //this runs if the promis is fullfilled
  console.log(message);
}).catch(function (error) {
    //this runs if promise is rejected.
  console.log(error);
});

let promise2 = new Promise(function(resolve, reject){
    const x = "yug";
    const y = "yug";
    if(x === y){
        resolve();
    }else{
        reject();
    }
})

promise2.then(function(){
    console.log("dono barabar hai")
}).catch(function(){
    console.log("kuch barabar nai hai")
})



let p=new Promise(function(resolve,reject){
    let a=45;
    let b=98;
    if (a>b){
        resolve();
    } else {
        reject();
    }
});
p.then(function(){
    console.log("A is greater than B");
}).catch(function(){
    console.log("A is less than B");
})


/*
setTimeOut:

- setTimeout() is a function in JavaScript that allows you to delay the execution of a function by a specified number of milliseconds.

-syntax:

setTimeout(function, milliseconds);
*/

/*
 clearTimeout:

- clearTimeout() is a function in JavaScript that cancels a setTimeout() call.

-syntax:

clearTimeout(timeoutId);
*/

function delayedFunction(){
    console.log("this will not be executed")
}

let timeoutId = setTimeout(delayedFunction, 2000);

clearTimeout(timeoutId);
console.log("timeout canceled");

/*
 setInterval:

- setInterval() is a function in JavaScript that repeats a function at specified intervals.

- syntax:

setInterval(function, milliseconds);
*/

function greet(){
    console.log("hello")
}

setInterval(greet, 1000);

/*
 clearInterval:

- clearInterval() is a function in JavaScript that stops a setInterval() call.
*/

let intervalId = setInterval(greet, 1000);

clearInterval(intervalId);

console.log("interval canceled");

/*
try and catch:

- try and catch are used to handle errors in JavaScript.
*/

try {
    //code that might throw an error
    let result = riskyFunction();//this function does not exist
} catch (error) {
    //this block will run if an error occurs in the try block
    console.error("An error occured" , error.message)
}

try{
    let age = -1;
    if(age < 0){
        throw new Error("Age cannot be negative");
    }
    console.log("Age is valid");
} catch(error){
    console.error("An error occured", error.message);
}