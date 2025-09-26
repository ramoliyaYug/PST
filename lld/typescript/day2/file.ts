class Person{
    public name:string;
    protected userId:string;
    private account:number;
    constructor(name:string,userId:string,account:number){
        this.name = name;
        this.userId = userId;
        this.account = account;
    }
}

let p1:Person = new Person("Ananya","ms01",123);
console.log(p1);

class Employee extends Person{
    info():String{
        return `My name is ${this.name} and my userId is ${this.userId}`
    }
}

let e1:Employee = new Employee("Yug","ms02",123);
console.log(e1.info());