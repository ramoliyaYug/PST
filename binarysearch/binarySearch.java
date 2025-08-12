public class binarySearch {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 2, 3, 4, 5};
        int target = 2;
        int result = findFirstOccurrence(arr, target);
        System.out.println("First occurrence of " + target + " is at index: " + result);
        result = findLastOccurrence(arr, target);
        System.out.println("Last occurrence of " + target + " is at index: " + result);
        int[] peakArr = {1,2,1,3,5,6,4};
        int peakIndex = findPeakElement(peakArr);
        System.out.println("Peak element is at index: " + peakIndex + " with value: " + peakArr[peakIndex]);
    }
    public static int findFirstOccurrence(int[] arr,int target){
        int left = 0;
        int right = arr.length - 1;
        int res = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) {
                res = mid;
                right = mid - 1; // Continue searching in the left half for the first occurrence
            } else if (arr[mid] < target) { // Target is in the right half
                left = mid + 1;
            } else { // Target is in the left half
                right = mid - 1;
            }
        }
        return res;
    }
    public static int findLastOccurrence(int[] arr,int target){
        int left = 0;
        int right = arr.length - 1;
        int res = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) { 
                res = mid;
                left = mid + 1; // Continue searching in the right half for the last occurrence
            } else if (arr[mid] < target) { // Target is in the right half
                left = mid + 1; 
            } else { // Target is in the left half
                right = mid - 1;
            }
        }
        return res;
    }

    public static int findPeakElement(int[] arr){
        int left = 0;
        int right = arr.length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] > arr[mid + 1]) { // Left side is decreasing, peak is on the left or at mid
                right = mid;
            } else { // Right side is increasing, peak is on the right or at mid + 1
                left = mid + 1;
            }
        }
        return left;
    }

    public static int searchInRotatedSortedArray(int[] nums, int target){
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            }

            // Check if the left half is sorted
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1; // Target is in the left half
                } else {
                    left = mid + 1; // Target is in the right half
                }
            } else { // Right half is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1; // Target is in the right half
                } else {
                    right = mid - 1; // Target is in the left half
                }
            }
        }
        return -1; // Target not found
    }

    public static int findMinimuminRotatedSortedArray(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            // If mid is greater than the rightmost element, the minimum is in the right half
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else { // Otherwise, the minimum is in the left half or at mid
                right = mid;
            }
        }
        return nums[left]; // The minimum element
    }
}
