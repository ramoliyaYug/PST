public class CheckPalindrome {
    public static void main(String[] args) {
        System.out.println(checkPalindromeWithRecursion("abcba"));
    }

    //check palindrome with recursion
    public static boolean checkPalindromeWithRecursion(String str) {
        int length = str.length();
        if (length == 0 || length == 1) {
            return true;
        }
        return str.charAt(0) == str.charAt(length - 1) && checkPalindromeWithRecursion(str.substring(1, length - 1));
    }
}
