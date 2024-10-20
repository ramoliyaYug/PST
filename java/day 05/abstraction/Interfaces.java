interface Contract{
    abstract void legacy();
    default public void message(){
        System.out.println("I am message");
    }
}

class HotelStaff implements Contract{

    public void legacy(){
        System.out.println("I am legacy");
    }
}

public class Interfaces {
    public static void main(String[] args) {
        HotelStaff obj = new HotelStaff();
        obj.legacy();
        obj.message();
    }
}