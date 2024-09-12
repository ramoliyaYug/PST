//write a program wheather the  year is leap year or not

let year = 2024;

if(year % 4 == 0) {
    if(year % 100 == 0) {
        if(year % 400 == 0) {
            console.log(year + " is a leap year");
        } else {
            console.log(year + " is not a leap year");
        }
    } else {
        console.log(year + " is a leap year");
    }
}

else {
    console.log(year + " is not a leap year");
}

// if (year%4==0 && year%100!=0 || year%400==0) {
//     console.log(year + " is a leap year");
// }

// else {
//     console.log(year + " is not a leap year");
// }

//color picker using switch cases: show the corrosponding color, use switch case which shows the color is red/green/blue on giving input of R,G,B respectively.

let color = "B";

switch(color) {
    case "R":
        console.log("Color is red");
        break;
    case "G":
        console.log("Color is green");
        break;
    case "B":
        console.log("Color is blue");
        break;
    default:
        console.log("Color is not found");
}

//season finder on the basis of entered the month number;

let month = 12;

switch(month){
    case 12:
    case 1:
    case 2:
        console.log("Season is Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Season is Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Season is Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Season is Fall");
        break;
    default:
        console.log("Invalid month number");
}
    
