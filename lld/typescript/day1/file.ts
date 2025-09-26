console.log("this is typescript")

let value1 : number = 1;
let value2 : string = "ananya";
let value3 : boolean = true;
let value4 : number[] = [1,2,3];

function multiply(a:number ,b:number, c:number=1) : number{
    if(!c){
        return a*b;
    }
    return a*b*c
}

console.log(multiply(2,3))

let userId : number | string = 123;
userId = "ms01";

let val:any = "tring tring";

//any,unknown,void,never
val = 1;
val = true;

type ID = number | string;
let userId2 : ID = 123;
userId2 = "ms01";
