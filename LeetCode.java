/*
You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair if i < j and j - i != nums[j] - nums[i].

Return the total number of bad pairs in nums.

 

Example 1:

Input: nums = [4,1,3,3]
Output: 5
Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
There are a total of 5 bad pairs, so we return 5.
Example 2:

Input: nums = [1,2,3,4,5]
Output: 0
Explanation: There are no bad pairs.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
Seen this question in a real interview before?
1/5
Yes
No
Accepted
66.6K
Submissions
138.7K
Acceptance Rate
48.0%
Topics
Array
Hash Table
Math
Counting
Companies
Hint 1
Would it be easier to count the number of pairs that are not bad pairs?
Hint 2
Notice that (j - i != nums[j] - nums[i]) is the same as (nums[i] - i != nums[j] - j).
Hint 3
Keep a counter of nums[i] - i. To be efficient, use a HashMap.
*/

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;

public class LeetCode {
    public long countBadPairs(int[] nums) {
        int n = nums.length;
        long total = (long) n * (n - 1) / 2;
        long good = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0;i<n;i++){
            int diff = nums[i] - i;
            good += map.getOrDefault(diff, 0);
            map.put(diff, map.getOrDefault(diff, 0) + 1); 
        }
        return total - good;
    }


    public static void main(String[] args) {
        LeetCode leetode = new LeetCode();
        int[] nums1 = {4,1,3,3};
        int[] nums2 = {1,2,3,4,5};
        System.out.println(leetode.countBadPairs(nums1));
        System.out.println(leetode.countBadPairs(nums2));
    }
}
