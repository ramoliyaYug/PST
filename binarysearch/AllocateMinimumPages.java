
import java.util.Arrays;

/*
Given an array arr[] of integers, where each element arr[i] represents the number of pages in the i-th book. You also have an integer k representing the number of students. The task is to allocate books to each student such that:

Each student receives atleast one book.
Each student is assigned a contiguous sequence of books.
No book is assigned to more than one student.
The objective is to minimize the maximum number of pages assigned to any student. In other words, out of all possible allocations, find the arrangement where the student who receives the most pages still has the smallest possible maximum.

Note: If it is not possible to allocate books to all students, return -1.

Examples:

Input: arr[] = [12, 34, 67, 90], k = 2
Output: 113
Explanation: Allocation can be done in following ways:
=> [12] and [34, 67, 90] Maximum Pages = 191
=> [12, 34] and [67, 90] Maximum Pages = 157
=> [12, 34, 67] and [90] Maximum Pages = 113.
The third combination has the minimum pages assigned to a student which is 113.
Input: arr[] = [15, 17, 20], k = 5
Output: -1
Explanation: Since there are more students than total books, it's impossible to allocate a book to each student.
Constraints:
1 ≤ arr.size() ≤ 106
1 ≤ arr[i], k ≤ 103


*/
public class AllocateMinimumPages {
    public static int findPages(int[] arr, int k) {
        // code here
        int n = arr.length;
        if (n < k) return -1; // More students than books

        int left = Arrays.stream(arr).max().getAsInt(); // Minimum pages a student can get is the max book size
        int right = Arrays.stream(arr).sum(); // Maximum pages a student can get is the sum of all books
        int ans = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (isPossible(arr, mid, k)) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    }

    public static boolean isPossible(int[] arr, int mid, int k) {
        int studentCount = 1;
        int currentSum = 0;
        for (int i = 0; i < arr.length; i++) {
            currentSum += arr[i];
            if (currentSum > mid) {
                studentCount++;
                currentSum = arr[i]; // Start new allocation with the current book
            }
        }
        return studentCount <= k;
    }
    
    public static void main(String[] args){
        int[] arr = {12, 34, 67, 90};
        int k = 2;
        int result = findPages(arr, k);
        System.out.println(result); // Output: 113

        int[] arr2 = {15, 17, 20};
        int k2 = 5;
        int result2 = findPages(arr2, k2);
        System.out.println(result2); // Output: -1
    }
}