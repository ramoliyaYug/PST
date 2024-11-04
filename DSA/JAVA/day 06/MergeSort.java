import java.util.Arrays;

class MSort {
    // Method to recursively divide the array into smaller halves
    public static void divide(int arr[], int low, int high) {
        // Base case: If the array has only one element, return as it's already sorted
        if (low == high) {
            return;
        }
        
        // Calculate the mid-point of the current array section
        int mid = (high - low) / 2 + low;

        // Recursively divide the left half of the array
        divide(arr, low, mid);

        // Recursively divide the right half of the array
        divide(arr, mid + 1, high);

        // Merge the two halves in a sorted manner
        conquer(arr, low, mid, high);
    }

    // Method to merge two sorted halves of the array into a single sorted section
    public static void conquer(int arr[], int low, int mid, int high) {
        // Temporary array to store merged results
        int temp[] = new int[high - low + 1];
        
        // Pointers for traversing the left and right halves of the array
        int lp = low; // left pointer starting from 'low'
        int rp = mid + 1; // right pointer starting from 'mid + 1'
        int tp = 0; // temp pointer for filling the temporary array

        // Merge elements by comparing values from left and right halves
        while (lp <= mid && rp <= high) {
            if (arr[lp] < arr[rp]) {
                temp[tp] = arr[lp]; // Smaller element goes into the temp array
                lp++;
            } else {
                temp[tp] = arr[rp];
                rp++;
            }
            tp++;
        }

        // Copy any remaining elements from the left half
        while (lp <= mid) {
            temp[tp] = arr[lp];
            lp++;
            tp++;
        }

        // Copy any remaining elements from the right half
        while (rp <= high) {
            temp[tp] = arr[rp];
            rp++;
            tp++;
        }

        // Copy sorted elements from the temp array back to the original array
        int op = low; // original pointer for the array section starting at 'low'
        for (int val : temp) {
            arr[op] = val;
            op++;
        }
    }
}

public class MergeSort {
    public static void main(String[] args) {
        int arr[] = {4, 5, 1, 2, 3}; // Array to be sorted
        int low = 0;
        int high = arr.length - 1; // Highest index in the array

        // Print the array before sorting
        System.out.print("Before sorting: ");
        System.out.println(Arrays.toString(arr));

        // Call the divide function to start the merge sort process
        MSort.divide(arr, low, high);

        // Print the array after sorting
        System.out.print("After sorting: ");
        System.out.println(Arrays.toString(arr));
    }
}
