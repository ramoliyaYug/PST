class Quick {
    // Method to perform QuickSort on a given array within the specified range (low to high)
    public static void qSort(int[] arr, int low, int high) {
        // Base condition: if the range has zero or one element, it's already sorted
        if (low >= high) {
            return;
        }
        
        // Partition the array and get the index of the pivot element
        int pIndex = partition(arr, low, high);
        
        // Recursively apply QuickSort to the left subarray (elements less than pivot)
        qSort(arr, low, pIndex - 1);
        
        // Recursively apply QuickSort to the right subarray (elements greater than pivot)
        qSort(arr, pIndex + 1, high);
    }

    // Method to partition the array based on the pivot element
    public static int partition(int[] arr, int low, int high) {
        // Choose the last element in the range as the pivot
        int pivot = arr[high];
        
        // Initialize the start pointer to indicate the position of elements less than the pivot
        int start = low;

        // Iterate over each element in the range except the pivot
        for (int i = low; i < high; i++) {
            // If the current element is less than the pivot, swap it to the left partition
            if (arr[i] < pivot) {
                // Swap arr[i] with arr[start]
                int temp = arr[i];
                arr[i] = arr[start];
                arr[start] = temp;
                
                // Move the start pointer to the right to include the newly swapped element
                start++;
            }
        }

        // After the loop, swap the pivot element with the element at the start pointer
        // This places the pivot in its correct sorted position
        int temp = arr[high];
        arr[high] = arr[start];
        arr[start] = temp;

        // Return the final index of the pivot element, now correctly positioned
        return start;
    }
}

public class QuickSort {
    public static void main(String[] args) {
        // Example array to be sorted
        int[] arr = {10, 7, 8, 9, 1, 5};
        
        // Call the QuickSort method on the entire array
        Quick.qSort(arr, 0, arr.length - 1);
        
        // Print the sorted array
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
