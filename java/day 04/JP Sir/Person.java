package people;

public class Person{
    public String name="Om";
    protected int age=17;
    private String Atmpin="1234";

    public void getname()
    {
        System.out.println("name is :"+name);
    }

    protected void getage()
    {
        System.out.println("age is :"+age);
    }
    private void getatmpin()
    {
        System.out.println("Atm pin is :"+Atmpin);
    }

    public void getdetails()
    {
         System.out.println("name is :"+name);
         System.out.println("age is :"+age);
        System.out.println("Atm pin is :"+Atmpin);

        getatmpin();
    }
}