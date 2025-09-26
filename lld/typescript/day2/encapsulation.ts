class Person{
    name:String;
    private userId:string
    constructor(name:string,userId:string){
        this.name = name;
        this.userId = userId;
    }

    intro():string{
        return `My name is ${this.name} and my userId is ${this.userId}`
    }
}

let p1:Person = new Person("Ananya","ms01");
console.log(p1.intro());

class Employee extends Person{
    
}

let e1:Employee = new Employee("Yug","ms02");
console.log(e1.intro());