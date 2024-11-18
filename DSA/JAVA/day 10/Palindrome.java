//check if string is palindrom or not and string can have anything like spaces and charachters and all and also do not use regex
public class Palindrome {
    public static void main(String[] args) {
        String str = "A man, a plan, a canal: Panama";
        int left = 0;
        int right = str.length() - 1;
        while (left < right) {
            while (!Character.isLetterOrDigit(str.charAt(left)) && left < right) {
                left++;
            }
            while (!Character.isLetterOrDigit(str.charAt(right)) && left < right) {
                right--;
            }
            if (Character.toLowerCase(str.charAt(left)) != Character.toLowerCase(str.charAt(right))) {
                System.out.println("false");
                return;
            }
            left++;
            right--;
        }
        System.out.println("true");
    }
}