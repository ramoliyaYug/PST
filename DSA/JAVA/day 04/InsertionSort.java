import java.util.Arrays;
class InsSort{
    static int[] insertionSort(int[] arr){
        for(int i = 1; i < arr.length; i++){
            int temp = arr[i];
            int j = i - 1;
            while(j >= 0 && arr[j] > temp){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = temp;
        }
        return arr;
    }
}
public class InsertionSort {
    public static void main(String[] args) {
        int[] arr = {5,2,3,7,6,8,10,9,1,4};
        System.out.println(Arrays.toString(InsSort.insertionSort(arr)));
    }
}
