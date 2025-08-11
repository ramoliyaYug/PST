public class FindFirstOccur {
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
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
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
                left = mid + 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
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
            if (arr[mid] > arr[mid + 1]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    } 
}
