//question1: create a string which stores a names of a person and create a method which adds last name in original string
//question2: write a java program to reverse a string

class AddName{
    static String add(String Fname,String LName){
        return Fname+" "+LName;
    }
}

class RevStr{
    static String rev(String str){
        return new StringBuilder(str).reverse().toString();
    }
}

public class StringQuestion {
    public static void main(String[] args) {
        String Fname="Yug";
        String LName="Ramoliya";
        System.out.println(AddName.add(Fname,LName));

        String str="Yug Ramoliya";
        System.out.println(RevStr.rev(str));
    }
}
