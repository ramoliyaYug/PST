//Relative Sort Array

class RelSort {
    public static int[] RelativeSort(int[] arr1, int[] arr2) {
        int[] fr = new int[1001];
        int index = 0;
        for(int i = 0; i < arr1.length; i++) {
            fr[arr1[i]]++;
        }
        for(int a:arr2) {
            while(fr[a] > 0) {
                arr1[index++] = a;
                fr[a]--;
            }
        }
        for (int i = 0; i < fr.length; i++) {
            while (fr[i] > 0) {
                arr1[index++] = i;
                fr[i]--;
            }
        }
        return arr1;
        }
}
public class LeetCode {
    public static void main(String[] args) {
        int[] arr1 = {2,3,1,3,2,4,6,7,9,2,19};
        int[] arr2 = {2,1,4,3,9,6};

        int[] res = RelSort.RelativeSort(arr1, arr2);
        for(int i = 0; i < res.length; i++) {
            System.out.print(res[i] + " ");
        }
    }
}