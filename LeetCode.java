/*
A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

 

Example 1:

Input: n = 1
Output: 5
Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".
Example 2:

Input: n = 4
Output: 400
Example 3:

Input: n = 50
Output: 564908303
 

Constraints:

1 <= n <= 1015
*/

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;

public class LeetCode {
    int mod = (int)1e9 + 7;
    public int countGoodNumbers(long n) {
        long even = (n+1)/2;
        long odd = n/2;
        long a = pow(4,odd)%mod;
        long b = pow(5,even)%mod;
        return (int)((a*b)%mod);
    }

    public long pow(long a, long b) {
        if(b==0){
            return 1;
        }
        long x = pow(a,b/2);
        if(b%2==0){
            return (x*x)%mod;
        }else{
            return (a*x*x)%mod;
        }
    }

    public static void main(String[] args) {
        LeetCode sol = new LeetCode();
        System.out.println(sol.countGoodNumbers(1));
        System.out.println(sol.countGoodNumbers(4));
        System.out.println(sol.countGoodNumbers(50));
    }
}
