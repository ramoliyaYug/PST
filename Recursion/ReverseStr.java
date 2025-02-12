//reverse string using recursion
public class ReverseStr {
    public static void main(String[] args) {
        System.out.println(rev("abc")); 
    }

    public static String rev(String str) {
        if (str.length() == 0) {
            return "";
        }
        return rev(str.substring(1)) + str.charAt(0);
    }
}
