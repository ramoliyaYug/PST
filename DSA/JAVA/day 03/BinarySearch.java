class BSearch{
    static int binarySearch(int[] arr, int target){
        int leftIndex = 0;
        int rightIndex = arr.length-1;

        while (leftIndex < rightIndex) { 
            int midIndex = (leftIndex+rightIndex)/2;
            if(target == arr[midIndex]){
                return midIndex;
            }

            if(target < arr[midIndex]){
                rightIndex = midIndex+1;
            }else{
                leftIndex = midIndex-1;
            }
        }
        return -1;
    }
}

public class BinarySearch {
    public static void main(String[] args) {
        int[] sortedData = {1,2,3,4,5,6,7,8,9};
        int target = 6;
        int res = BSearch.binarySearch(sortedData, target);
        System.out.println("Result: " + res);
    }
}
