//create the interfacea with methoda and interfaceb with methodb. then child class implements both interfaces and provides the implementation for the methods.
interface Interfacesa {
    void methoda();
}

interface Interfacesb {
    void methodb();
}

class Child implements Interfacesa, Interfacesb {
    public void methoda() {
        System.out.println("methoda");
    }

    public void methodb() {
        System.out.println("methodb");
    }
}
public class Interfaces {
    public static void main(String[] args) {
        Child child = new Child();
        child.methoda();
        child.methodb();
    }
}
