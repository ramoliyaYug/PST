/*
You are given a string s consisting only lowercase alphabets and an integer k. Your task is to find the length of the longest substring that contains exactly k distinct characters.

Note : If no such substring exists, return -1. 

Examples:

Input: s = "aabacbebebe", k = 3
Output: 7
Explanation: The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.
Input: s = "aaaa", k = 2
Output: -1
Explanation: There's no substring with 2 distinct characters.
Input: s = "aabaaab", k = 2
Output: 7
Explanation: The entire string "aabaaab" has exactly 2 unique characters 'a' and 'b', making it the longest valid substring.
Constraints:
1 ≤ s.size() ≤ 105
1 ≤ k ≤ 26
*/
import java.util.*;

public class LeetCode {
    public int longestKSubstr(String s, int k) {
        // code here
        int n = s.length();
        if (k > 26) return -1;
        Map<Character, Integer> charCount = new HashMap<>();
        int i = 0;
        int j = 0;
        int maxLength = -1;
        int count = 0;
        while (j < n) {
            charCount.put(s.charAt(j), charCount.getOrDefault(s.charAt(j), 0) + 1);
            if (charCount.get(s.charAt(j)) == 1) {
                count++;
            }
            while (count > k) {
                charCount.put(s.charAt(i), charCount.get(s.charAt(i)) - 1);
                if (charCount.get(s.charAt(i)) == 0) {
                    charCount.remove(s.charAt(i));
                    count--;
                }
                i++;
            }
            if (count == k) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
            j++;
        }
        return maxLength;
    }

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
