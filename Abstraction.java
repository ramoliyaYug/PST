abstract class Moblie{
    abstract void call();
    abstract void message();
    abstract void camera();
}

class Iphone extends Moblie{
    void call(){
        System.out.println("Calling from Iphone");
    }
    void message(){
        System.out.println("Messaging from Iphone");
    }
    void camera(){
        System.out.println("Taking photo from Iphone");
    }
}

class Samsung extends Moblie{
    void call(){
        System.out.println("Calling from Samsung");
    }
    void message(){
        System.out.println("Messaging from Samsung");
    }
    void camera(){
        System.out.println("Taking photo from Samsung");
    }
}

public class Abstraction {
    public static void main(String[] args) {
        Moblie moblie1 = new Iphone();
        moblie1.call();
        moblie1.message();
        moblie1.camera();

        Moblie moblie2 = new Samsung();
        moblie2.call();
        moblie2.message();
        moblie2.camera();
    }
}
