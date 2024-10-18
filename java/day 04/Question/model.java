/*
 * Question 1
 * create a base class Vehical with property make and modelYear.
 * Derive a class Car from Vehical and adds a property numDoors.
 * Write a program that demonstates creating object of car and assigning values to its properties then print them
 */
class Vehical{
    String make="BMW";
    int modelYear=2020;
}
class Car extends Vehical{
    String make1=make;
    int modelYear1=modelYear;
    int numDoors=4;
}
public class model {
    public static void main(String[] args) {
        Car obj1=new Car();
        System.out.println(obj1.make1);
        System.out.println(obj1.modelYear1);
        System.out.println(obj1.numDoors);
    }
}
