/*
Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 

Example 1:

Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.
Example 2:

Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.
Example 3:

Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.
 

Constraints:

1 <= nums1.length, nums2.length, nums3.length <= 100
1 <= nums1[i], nums2[j], nums3[k] <= 100
Hint 1
What data structure can we use to help us quickly find whether an element belongs in an array?
Hint 2
Can we count the frequencies of the elements in each array?
*/
import java.util.*;
import java.io.*;
import java.math.*;
import java.util.stream.*;
import java.util.function.*;
import java.util.regex.*;
import java.lang.*;
import java.lang.reflect.Array;
import java.time.*;

public class LeetCode {
    public List<Integer> twoOutOfThree(int[] nums1, int[] nums2, int[] nums3) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        Set<Integer> set3 = new HashSet<>();
        
        for (int num : nums1) set1.add(num);
        for (int num : nums2) set2.add(num);
        for (int num : nums3) set3.add(num);
        
        Set<Integer> result = new HashSet<>();
        
        for (int num : set1) {
            if (set2.contains(num) || set3.contains(num)) {
                result.add(num);
            }
        }
        
        for (int num : set2) {
            if (set1.contains(num) || set3.contains(num)) {
                result.add(num);
            }
        }
        
        for (int num : set3) {
            if (set1.contains(num) || set2.contains(num)) {
                result.add(num);
            }
        }
        
        return new ArrayList<>(result);
    }


    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
