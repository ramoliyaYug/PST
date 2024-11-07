import java.util.Arrays;
import java.util.HashSet;

public class Num {
    public static void main(String[] args) {
        int[] arr = {1,1,2,3,2,2,1,1,3};
        HashSet<Integer> unique = new HashSet<>();
        for(int i:arr){
            unique.add(i);
        }
        int res[] = new int[unique.size()];
        int ip=0;
        for(int i:unique){
            res[ip++] = i;
        }
        System.out.println(Arrays.toString(res));
    }
}

//you given a 2D array of integers that have multiple natural numbers now your task is to find an 1D array which has the max frequent element from 2D array. 
//Example: 
//Input: 
//2D array = {{1,2,3,1},{2,3,1,2},{3,1,2,3}}
//Output: {3,1,2,3}
