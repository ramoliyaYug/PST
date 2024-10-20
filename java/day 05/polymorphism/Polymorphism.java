/*
Polymorphism:
1.compile time polymorphism:
 - if number of parameter are same then atleast one parameter should have different datatype.
 - if datatype is same then they should have different number of parameters.
 Ex:-
add(int a,int b)
add(int a,int b,int c)
*/
class Parent{
    public void mul(int a,int b){
        System.out.println("this is multiplication: "+(a*b));
    }
}

class Child extends Parent{
    public void mul(int a,int b){
        System.out.println("multiplication: "+(a*b));
    }
}
public class Polymorphism {
    //compiletime polymorphism
    static void add(int a,int b){
        System.out.println("this is sum: " + (a+b));
    }
    //overloading
    static void add(float a,int b){
        System.out.println("sum: " + (a+b));
    }
    public static void main(String[] args) {
        add(1,2);
        add(1,2);
        Child ch = new Child();
        Parent pt = new Parent();
        pt.mul(1,2);
        ch.mul(1,3);
    }
}