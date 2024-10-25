class Something{
    static boolean isWeird(int[] arr, int k){
        for(int i=0;i<arr.length;i++){
            for(int j = i+1;j<arr.length;j++){
                if(arr[i] == arr[j] && (i+j)<=k){
                    return true;
                }
            }
    }
    return false; 
    }
}
public class Weird {
    public static void main(String[] args) {
        int[] nums = {1,2,2,4,5,6,7,8,9};
        int n=5;
        System.out.println(Something.isWeird(nums,n));
    }
}
