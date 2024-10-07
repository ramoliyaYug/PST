import problem from "lodash";
let std = {
    name: "Himkar",
    age: 15,
    address: {
        state:"karnataka",
        city:"banglore"
    },
    intro: function(){
        console.log("My name is "+ this.name);
    }
}

let copyStd = problem.cloneDeep(std);

console.log(std)
console.log(copyStd);

// Using Lodash we can create a perfect deep copy of an object including nested loops and functions.