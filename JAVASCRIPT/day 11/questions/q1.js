//queation1:
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

let copyStd = std;
copyStd.name = "tanishq"
console.log(std);
console.log(copyStd);