//pass with limit
let pass = 1234;

for(i = 1; i <=3; i++) {
let epass = prompt("Enter Password: ");
if(epass == pass){
    console.log("Access granted");
    break;
}else if(epass != pass){
    console.log("Access denied. You have " + (3-i) + " attempts left.");
};
}