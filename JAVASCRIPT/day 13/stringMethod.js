//sting method

//toUpperCase()

let str1 = "hello world";

console.log(str1.toUpperCase()); //HELLO WORLD

//toLowerCase()

let str2 = "HELLO WORLD";

console.log(str2.toLowerCase()); //hello world

//trim()

let str3 = "   hello world   ";

console.log(str3.trim()); //hello world

//trimStart()

let str4 = "   hello world   ";

console.log(str4.trimStart()); //hello world  

//trimEnd()

let str5 = "   hello world   ";

console.log(str5.trimEnd()); //   hello world

//slice()

let str6 = "hello world";

console.log(str6.slice(6)); //world

console.log(str6.slice(0, 5)); //hello

let str7 = "hello";
console.log(str7.slice(-3)); //llo

//substr()

let str8 = "hello world";

console.log(str8.substr(6)); //world

console.log(str8.substr(0, 5)); //hello

//substring()

let str9 = "hello world";

console.log(str9.substring(6)); //world

console.log(str9.substring(0, 5)); //hello

//charAt()

let str10 = "hello world";

console.log(str10.charAt(6)); //w

console.log(str10.charAt(100)); //undefined

//replace()

let str11 = "hello yug";

console.log(str11.replace("yug", "yugji")); //hello ramoliya
console.log(str11); //we grt new string without changing old one so it mean the string is immutable

//replaceAll()

let str12 = "hello yug, hey yug"
console.log(str12.replaceAll("yug", "yugji"));

let str13 = "hello yug, hey Yug";
console.log(str13.replace("yug", "yugji"));
console.log(str13.replaceAll(/yug/gi, "yugji"));

//date methods

let date = new Date();
console.log(date);
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());


