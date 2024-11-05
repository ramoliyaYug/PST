import java.util.Arrays;
class FindDuplicate{
    public boolean findDupe(int[] arr){
        Arrays.sort(arr);
        for(int i = 0; i < arr.length-1; i++){
            if(arr[i] == arr[i+1]){
                System.out.println(arr[i]);
                return true;
            }
        }
        return false;
    }
}
public class FindDupe {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,1};
        FindDuplicate obj = new FindDuplicate();
        System.out.println(obj.findDupe(arr));
    }
}
