import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8,9};
        int[] reversed = reverseArrau(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(reversed));
    }

    // Reverse an array using recursion
    public static int[] reverseArrau(int[] arr, int low,int high) {
        if (low >= high) {
            return arr;
        }
        int temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        return reverseArrau(arr, low + 1, high - 1);
    }
}
