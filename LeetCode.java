/*
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

Example 1:

Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.
Example 2:

Input: nums = [1,2,1,10]
Output: 0
Explanation: 
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.
*/
public class LeetCode {
    public String addSpaces(String s, int[] spaces) {
        int i = 0, j = 0;
        StringBuilder res = new StringBuilder();
        
        while (i < s.length() && j < spaces.length) {
            if (i < spaces[j]) {
                res.append(s.charAt(i));
                i++;
            } else {
                res.append(' ');
                j++;
            }
        }
        
        if (i < s.length()) {
            res.append(s.substring(i));
        }
        
        return res.toString();
    }

  public static void main(String[] args) {
    LeetCode lc = new LeetCode();
    String s = "abcde";
    int[] spaces = {0,1,1,2};
    System.out.println(lc.addSpaces(s, spaces));
  }
}
  