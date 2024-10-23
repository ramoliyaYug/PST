/*
-Array as a frequency counter
- two pointer

- we could asked for duplicating, missing, repeated, max frequency,1 to n....
*/
public class FrequencyCounter {
    public static void main(String[] args) {
        int[] arr = {1,2,2,4,3,5,7};
        int[] res = new int[arr.length+1];
        for(int i=0; i<arr.length; i++){
            res[arr[i]]++;
        }

        for(int i=0; i<res.length; i++){
            if(res[i] > 1){
                System.out.println("repeated element is: " + i);
            }
        }
    }    
}
