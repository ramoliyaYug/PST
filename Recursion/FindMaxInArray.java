public class FindMaxInArray {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8,9};
        System.out.println(findMax(arr, 0));
    }

    public static int findMax(int[] arr, int i){
        if(i==arr.length-1){
            return arr[i];
        }
        int max = findMax(arr, i+1);
        return Math.max(max,arr[i]);
    }
}
