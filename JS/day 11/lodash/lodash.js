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