
import java.util.Arrays;

public class Javaarrays {
    /*
    array: group of some data values
    creating array:
     - Datatype arrayName[] = {elements....}
     - Datatype arrayName[] = new Datatype {elements....}
    */
    public static void main(String[] args) {
        // int arr[] = {1, 2, 3, 4, 5};
        // int length = arr.length;
        // for (int i = 0; i < length; i++) {
        //     System.out.println(arr[i]);
        // }
        // System.out.println(length);
        // System.out.println(Arrays.toString(arr));

        String names[] = new String[5]; //arrays of null
        int nums[] = new int[5]; //arrays of zero
        
        names[0] = "gandu";
        nums[0] = 1;
        System.out.println(Arrays.toString(names)); // for objects the default value is null
        System.out.println(Arrays.toString(nums)); // for primitives the default value is 0
    }

    /*
    rules:
    - fix in size, you cannot update the size of it so push and pop is not available in java
    - you cannnot directly print array like js
    - it store the same data type values
    */
}
