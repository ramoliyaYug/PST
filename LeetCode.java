/*
Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

 

Example 1:

Input: n = 8
Output: 6
Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
Example 2:

Input: n = 1
Output: 1
Explanation: 1 is the pivot integer since: 1 = 1.
Example 3:

Input: n = 4
Output: -1
Explanation: It can be proved that no such integer exist.
 

Constraints:

1 <= n <= 1000
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
    public int pivotInteger(int n) {
        int x = -1;
        for(int i = 1; i <= n; i++) {
            if(sum(1, i) == sum(i, n)) {
                x = i;
                break;
            }
        }
        return x;
    }

    public static int sum(int start, int end) {
        int res = 0;
        for(int i = start; i <= end; i++) {
            res += i;
        }
        return res;
    }

    public static void main(String[] args) {
        LeetCode lc = new LeetCode();
        System.out.println(lc.pivotInteger(8)); // Output: 6
        System.out.println(lc.pivotInteger(1)); // Output: 1
        System.out.println(lc.pivotInteger(4)); // Output: -1
    }
}