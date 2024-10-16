//used to initialize the properties of class
/*
rules:
1. constructor name should similar to class name
2. constroctor do not have return type.
3. they are called automatically, when object is created.
*/    
public class Constroctors {
    int x;
    public Constroctors() {
        x = 5;
    }
    public static void main(String[] args) {
        Constroctors obj = new Constroctors();
        System.out.println(obj.x);
    }
}
