class Quick {
    public static void qSort(int[] arr, int low, int high) {
        if (low >= high) {
            return; // Terminate recursion if the array has zero or one element
        }
        int pIndex = partition(arr, low, high);
        qSort(arr, low, pIndex - 1);
        qSort(arr, pIndex + 1, high);
    }

    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // Choose the last element as the pivot
        int start = low; // Set start to the beginning of the subarray

        for (int i = low; i < high; i++) {
            // Move elements smaller than pivot to the left
            if (arr[i] < pivot) {
                int temp = arr[i];
                arr[i] = arr[start];
                arr[start] = temp;
                start++;
            }
        }

        // Place pivot in its correct position
        int temp = arr[high];
        arr[high] = arr[start];
        arr[start] = temp;

        return start; // Return the final position of the pivot
    }
}

public class QuickSort {
    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        Quick.qSort(arr, 0, arr.length - 1);
        
        // Print sorted array
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
