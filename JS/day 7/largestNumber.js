//question : write a js program to find largest number among three numbers
//with operators 
function maxNum(a, b, c) {  
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}

maxNum(10,30,20);

//with nested if else 
function maxNum2(d, e, f) {
    if (d > e) {
        if (d > f) {
            console.log(d);
        } else {
            console.log(f);
        }
    } 
    else {
        if (e > f) {
            console.log(e);
        } else {
            console.log(f);
        }
    }
}

maxNum2(15,25);