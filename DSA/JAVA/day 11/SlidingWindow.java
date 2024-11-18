//used in subarray and substring
//used in finding minimum sum, maximum sum
//teo types of sliding window
//fixed size sliding window and variable size sliding window
//example of fixed size sliding window:maximum sum of subarray of size k
//example of variable size sliding window:longest substring without repeating characters,
public class SlidingWindow {
    public static void main(String[] args) {
        //fixed size sliding window
        //question 1:find maximum sum of subarray of size k
        int arr[] = {1,2,3,1,4,5,2,3,6};
        int k = 3;
        int sum = 0;
        int maxSum = 0;
        k%=arr.length;
        if(k==0) System.out.println(arr);
        for(int i=0;i<k;i++){
            sum += arr[i];
        }
        maxSum = sum;
        for(int i=k;i<arr.length;i++){
            sum = sum - arr[i-k] + arr[i];
            maxSum = Math.max(sum,maxSum);
        }
        System.out.println(maxSum);
    }
}
