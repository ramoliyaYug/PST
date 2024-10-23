/*
FizzBuzz:
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/
// public class LeetCode {

//     public String[] fizzBuzz(int n) {
//         String[] result = new String[n];
//         for (int i = 1; i <= n; i++) {
//             if (i % 3 == 0 && i % 5 == 0) {
//                 result[i - 1] = "FizzBuzz";
//             } else if (i % 3 == 0) {
//                 result[i - 1] = "Fizz";
//             } else if (i % 5 == 0) {
//                 result[i - 1] = "Buzz";
//             } else {
//                 result[i - 1] = String.valueOf(i);
//             }
//         }
//         return result;
//     }
// }

/*
Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1 
*/

public class LeetCode {
    public static int main(int[] nums) {
        int[] res = new int[nums.length+1];
        int a = -1;
        for(int i = 0; i<nums.length; i++){
            res[nums[i]]++;
        }
        for(int i = 0;i<nums.length;i++){
            if(res[i] == 0){
                a=i;
                break;
            }
        }
        return a;
    }
}