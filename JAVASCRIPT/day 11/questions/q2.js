//question2
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

let copyStd = Object.assign({}, std);
copyStd.name = "xyz";
console.log(std);
console.log(copyStd);
copyStd.address.city = "xyz";
console.log(std);
console.log(copyStd);