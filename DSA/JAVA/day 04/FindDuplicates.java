import java.util.Arrays;
class Duplicates{
    static boolean findDupe(int[] arr){
        for(int i = 0; i < arr.length; i++){
            for(int j = i+1; j < arr.length; j++){
                if(arr[i] == arr[j]){
                    return true;
                }
            }
        }
        return false;
    }
}

class FindDuplicatesUsingSortOptimization{
    static boolean findDupel(int[] arr){
        Arrays.sort(arr);
        for(int i = 0; i < arr.length-1; i++){
            if(arr[i] == arr[i+1]){
                return true;
            }
        }
        return false;
    }
}

public class FindDuplicates {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5,6,5};
        System.out.println(Duplicates.findDupe(nums));
        System.out.println(FindDuplicatesUsingSortOptimization.findDupel(nums));
    }
}
