class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];

        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);

            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
}
public class LeetCode{
    public static void main(String[] args){
    int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

    Solution solution = new Solution();

    int maxSum = solution.maxSubArray(nums);

    System.out.println("Maximum subarray sum is: " + maxSum);
    }
}