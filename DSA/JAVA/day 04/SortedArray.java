class SortedArr {
    static boolean isSorted(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }
}

public class SortedArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 5, 4};
        System.out.println(SortedArr.isSorted(arr));
    }
}
