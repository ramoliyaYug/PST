//passing function in object
let obj = {
    firstName: "Raj",
    secondName: "xyz",
    fullName(){
        console.log(this.firstName + this.secondName)
    }
}

obj.fullName(); // Outputs: Rajxyz

let object = {
    firstName: "Raj",
    secondName: "xyz",
    fullName:function(){
        console.log(this.firstName + this.secondName)
    }
}
object.fullName();
console.log(object.fullName); // Outputs: Rajxyz

//factory function:
function pststd(name,age,rollno,Fee){
    return {
        name : name, //if key name and value is same then we can write name,
        age : age,
        rollno : rollno,
        fees : Fee,
        // fullName: function(){
        //     console.log("My Name Is " + this.name + " I Am " + this.age + " Years Old, My RollNo. Is " + this.rollno);
        // }
    }
}

let std1 = pststd("Yug", 17, 81, 6000);
console.log(std1);
std1.adress = "Home" //dynamic nature of the object
console.log(std1);
delete std1.age
console.log(std1);

//constroctor function
function Person(name,age,roll){
    this.name = name;
    this.age = age;
    this.rollNo = roll;
    this.intro = function(){
        console.log("My Name Is " + this.name + " I Am " + this.age + " Years Old, My RollNo. Is " + this.rollNo);
    }  
}

let p1 = new Person("Yug", 17, 5);
p1.intro()
console.log(p1.rollNo);

//constructor function is faster than factory function but factory function has easy syntax