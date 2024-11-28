public class LeetCode {
    public static void main(String[] args) {
      int[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9};
      int k = 12;
  
      // Calling the twoSum function and printing the result
      int[] result = new LeetCode().twoSum(nums, k);
      System.out.println("Result: [" + result[0] + ", " + result[1] + "]");
    }
  
    public int[] twoSum(int[] numbers, int target) {
      int left = 0;
      int right = numbers.length - 1;
  
      // Print initial values of left and right indices
      System.out.println("Starting with left: " + left + " (value: " + numbers[left] + "), right: " + right + " (value: " + numbers[right] + ")");
      
      while (left < right) {
        int sum = numbers[left] + numbers[right];
        
        // Print the current sum and the indices of left and right
        System.out.println("Checking indices: left = " + left + ", right = " + right + " -> sum = " + sum);
  
        if (sum == target) {
          // Found the pair, return 1-based indices (left + 1, right + 1)
          System.out.println("Found target! left = " + (left + 1) + ", right = " + (right + 1));
          return new int[]{left + 1, right + 1};
        } else if (sum > target) {
          // If the sum is greater than the target, move the right pointer leftwards
          System.out.println("Sum is greater than target. Moving right pointer left.");
          right--;
        } else {
          // If the sum is less than the target, move the left pointer rightwards
          System.out.println("Sum is less than target. Moving left pointer right.");
          left++;
        }
      }
  
      // If no solution is found, return an indication of failure (this case should not happen for valid input)
      System.out.println("No solution found.");
      return new int[]{0, 0};
    }
  }
  