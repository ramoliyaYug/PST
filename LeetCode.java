/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
*/
import java.util.Arrays;
public class LeetCode {
  public static void main(String[] args) {
    int[] nums = {1,2,3,4,5};
    int[] res = FindPrefixSum(nums);
    System.out.println(Arrays.toString(res));
  }

  //find prefix sum array without taking new array
  static int[] FindPrefixSum(int[] nums) {
    int prev = 0;
    for(int i=0;i<nums.length;i++) {
      nums[i] = nums[i] + prev;
      prev = nums[i];
    }
    return nums;
  }

  public int subarraySum(int[] nums, int k) {
    int count = 0;
    int[] res = FindPrefixSum(nums);
    for(int i=0;i<res.length;i++) {
      for(int j=i+1;j<res.length;j++) {
        if(res[j] - res[i] == k) {
          count++;
        }
      }
    }
    return count;
  }
}
