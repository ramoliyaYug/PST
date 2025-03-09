/*
We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

 

Example 1:

Input: n = 1, k = 1
Output: 0
Explanation: row 1: 0
Example 2:

Input: n = 2, k = 1
Output: 0
Explanation: 
row 1: 0
row 2: 01
Example 3:

Input: n = 2, k = 2
Output: 1
Explanation: 
row 1: 0
row 2: 01
 

Constraints:

1 <= n <= 30
1 <= k <= 2n - 1
*/

import java.util.List;
import java.lang.classfile.constantpool.StringEntry;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Stack;
import java.math.BigInteger;

public class LeetCode {
    public int kthGrammar(int n, int k) {
        StringBuilder row = new StringBuilder("0");
        for (int i = 1; i < n; i++) {
            StringBuilder newRow = new StringBuilder();
            for (char c : row.toString().toCharArray()) {
                if (c == '0') {
                    newRow.append("01");
                } else {
                    newRow.append("10");
                }
            }
            row = newRow;
        }
        return row.charAt(k - 1) - '0';
    }

    public static void main(String[] args) {
        LeetCode sol = new LeetCode();
    }
}

