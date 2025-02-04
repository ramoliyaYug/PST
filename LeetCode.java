/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

public class LeetCode {
    public String gcdOfStrings(String str1, String str2) {
        int len1 = str1.length();
        int len2 = str2.length();
        String res = "";
        for (int i = 0; i < len1; i++) {
            String sub1 = str1.substring(i);
            for (int j = 0; j < len2; j++) {
                String sub2 = str2.substring(j);
                if (sub1.equals(sub2)) {
                    res = sub1;
                }
            }
        }
        return res;
    }

    public static void main(String[] args) {
        LeetCode leetCode = new LeetCode();
        String str1 = "ABCABC";
        String str2 = "ABC";
        System.out.println(leetCode.gcdOfStrings(str1, str2));
    }
}
