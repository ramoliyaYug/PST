/*
We know that prime numbers are positive integers that have exactly two distinct positive divisors. Similarly, we'll call a positive integer t Т-prime, if t has exactly three distinct positive divisors.

You are given an array of n positive integers. For each of them determine whether it is Т-prime or not.

Input
The first line contains a single positive integer, n (1 ≤ n ≤ 105), showing how many numbers are in the array. The next line contains n space-separated integers xi (1 ≤ xi ≤ 1012).

Please, do not use the %lld specifier to read or write 64-bit integers in С++. It is advised to use the cin, cout streams or the %I64d specifier.

Output
Print n lines: the i-th line should contain "YES" (without the quotes), if number xi is Т-prime, and "NO" (without the quotes), if it isn't.

Examples
InputCopy
3
4 5 6
OutputCopy
YES
NO
NO
Note
The given test has three numbers. The first number 4 has exactly three divisors — 1, 2 and 4, thus the answer for this number is "YES". The second number 5 has two divisors (1 and 5), and the third number 6 has four divisors (1, 2, 3, 6), hence the answer for them is "NO".


*/
import java.util.*;

public class CodeForces {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();

        while (t-- > 0) {
            int n = scanner.nextInt(); 
            int[] result = new int[n]; 

            for (int i = n - 1; i >= 0; i--) { 
                String row = scanner.next();
                for (int j = 0; j < 4; j++) {
                    if (row.charAt(j) == '#') {
                        result[i] = j + 1;
                        break;
                    }
                }
            }
            for (int col : result) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
    }
}

