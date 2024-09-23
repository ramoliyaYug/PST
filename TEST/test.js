let obj = {
    1:"yug",
    age:17,
    isStudent:true,
}

// console.log(obj.1);
console.log(obj[1]);

let arr = ["yug", "om", "anshuman"];

console.log(arr[1]);
arr.push("gautam");
console.log(arr);
arr.unshift("soumyaditya");
console.log(arr);
arr.fill("aaditya",2,3);
console.log(arr);

/*
Create a constructor function called Book that takes title and author as parameters
and assigns them as properties to the book object. Then, create two book objects using the
Book constructor and display their details on the console.
*/

function Book(title,author){
    this.title = title,
    this.author = author
}

const book1 = new Book("meditations", "marcus aurelius");
const book2 = new Book("beyond good and evil" , "neithche");


/*
What’s the key difference between value and reference types in JavaScript, and how
does that impact object cloning? Can you demonstrate how to properly clone an object?
*/

let std = {
    name:"yug",
    age:17,
    hobbies : {
        hobby1:"singing",
        hobby2:"dancing",
        achivement : {
            achivement1 : undefined,
        }
    }
}

let copystd = JSON.parse(JSON.stringify(std));

copystd.hobbies.achivement.achivement1 = "codi";

// console.log(std);
console.log(copystd);

/*
the monthly cost of a subscription plan based on the user's
choice. The options are:
1. Basic Rs.9.99 per month
2. Standard Rs.14.99 per month
3. Premium Rs.19.99 per month
The user inputs a number corresponding to their choice, and the "switch" case statement
displays the monthly cost. If the number is not between 1 and 3, display "Invalid plan."
*/

// let plan = 2;
function subPlan (plan){
switch(plan){
    case 1 :
        console.log("Basic Rs.9.99 PER MONTH");
        break;
    case 2 :
        console.log("Standard Rs.14.99 PER MONTH");
        break;
    case 3 :
        console.log("premium ")
    default:
        console.log(object)
}
}