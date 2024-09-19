//question4
let std = {
    name: "Himkar",
    age: 15,
    address: {
        state:"karnataka",
        city:"banglore"
    }
};

let copyStd = JSON.parse(JSON.stringify(std));
copyStd.address.city = "xyz";
console.log(std);
console.log(copyStd);