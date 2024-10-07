let d = new Date();

// let year = d.getFullYear();

// if(year % 4 == 0) {
//     if(year % 100 == 0) {
//         if(year % 400 == 0) {
//             console.log(year + " is a leap year");
//         } else {
//             console.log(year + " is not a leap year");
//         }
//     } else {
//         console.log(year + " is a leap year");
//     }
// }

//set methods:
console.log(d)
d.setFullYear(2028);
d.setMonth("11");
d.setDate("25");
console.log(d);

d = new Date("2028-09-24");
console.log(d);

d = new Date(2023,9,24);
console.log(d)