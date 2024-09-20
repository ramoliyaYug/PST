// console.log(Math.max(4,3,2,1)); //4
// console.log(Math.min(4,3,2,1)); //1
// console.log(Math.abs(-5)); //5
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(-4.1)); //-4
// console.log(Math.floor(-4.1)); //-5
// console.log(Math.trunc(-4.1)); //-4
// console.log(Math.pow(2,3)); //8
// console.log(Math.sqrt(2)); //1.41
// console.log(Math.random()); // 0 -> 1
// console.log(Math.random()*10); // 0 -> 10
// console.log(Math.floor(Math.random()*10)); // 0 -> 9

//generating otp:

let i = 100
// for(i; i>0; i++) {
//     let otp = Math.floor(Math.random()*100000);
//     console.log("Your OTP is: ", otp);
// }
while(i>10){
    let otp = Math.floor(Math.random()*100000)+10000;
    console.log("Your OTP is: ", otp);
}
i++;

function hlo(){
    var otp=Math.floor(Math.random()*100000);
    const str=String(otp);
    if (str.length==5){
        console.log(`Here is ur otp-> ${otp}`)
    } else {
        hlo();
    }
}
hlo();

//Math.floor(Math.random()*(max-min))+min 
//this is the code to generate random number between the perticular range

