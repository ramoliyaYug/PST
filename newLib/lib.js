const f=require('fs')

console.log("file reading started...");
let data = f.readFileSync('text.txt', 'utf8');
console.log(data);


