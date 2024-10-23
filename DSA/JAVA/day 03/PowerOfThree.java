/*
   Given an integer n, return true if it is a power of three, and false otherwise.
*/
class POT {
    static boolean isPowerOfThree(int n) {
        if (n < 1) {
            return false;
        }
        while (n > 1) {
            if (n % 3 != 0) {  
                return false;
            }
            n = n / 3;
        }
        return true;
    }
}

public class PowerOfThree {
    public static void main(String[] args) {
        int n = 248;
        System.out.println(POT.isPowerOfThree(n));
    }
}
