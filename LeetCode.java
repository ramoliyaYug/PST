/*
Given an integer num, return the number of digits in num that divide num.

An integer val divides nums if nums % val == 0.

 

Example 1:

Input: num = 7
Output: 1
Explanation: 7 divides itself, hence the answer is 1.
Example 2:

Input: num = 121
Output: 2
Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.
Example 3:

Input: num = 1248
Output: 4
Explanation: 1248 is divisible by all of its digits, hence the answer is 4.
 

Constraints:

1 <= num <= 109
num does not contain 0 as one of its digits.
*/

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Stack;
import java.lang.reflect.Array;
import java.math.BigInteger;


public class LeetCode {
    public int countDigits(int num) {
        int n =
        List<Integer> arr = new ArrayList<>();
        while (num > 0) {
            int digit = num%10;
            arr.add(digit);
            num/=10;
        }
        int count = 0;
        for(int i = 0;i<arr.size();i++){
            if(num%arr.get(i)==0){
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        LeetCode sol = new LeetCode();
    }
}