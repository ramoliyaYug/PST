import java.util.Arrays;
class selSort{
    static int[] sort(int[] arr){
        for(int i=0;i<arr.length-1;i++){
            int min = i;
            for(int j=i+1;j<arr.length;j++){
                if(arr[j]<arr[min]){
                    min = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        return arr;
    }
}
public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {5,2,3,7,6,8,10,9,1,4};
        System.out.println(Arrays.toString(selSort.sort(arr)));
    }
}
