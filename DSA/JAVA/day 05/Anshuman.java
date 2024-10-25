public class Anshuman {
    static int[] arraysorting(int arr[], int arr2[]) {
        int array[] = new int[arr.length];
        int k = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (order(arr[i], arr2) > order(arr[j], arr2)) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        for (int num : arr) {
            array[k++] = num;
        }

        return array;
    }

    static int order(int num, int arr2[]) {
        for (int i = 0; i < arr2.length; i++) {
            if (arr2[i] == num) {
                return i;
            }
        }
        return arr2.length; 
    }

    public static void main(String[] args) {
        int arr[] = {2,3,1,3,2,4,6,7,9,2,19};
        int arr2[] = {2,1,4,3,9,6};

        int result[] = arraysorting(arr, arr2);

        for (int num : result) {
            System.out.print(num + " "); 
        }
    }
}
