class MinSize{
    static int minSubArr(int[] arr, int target) {
        int ws = 0; //window sum
        int wsize = Integer.MAX_VALUE; //window size
        int left = 0;
        for(int right=0;right<arr.length;right++){
            ws+=arr[right];
            while(target<=ws){
                if(target == ws){
                    wsize = Math.min(wsize, right-left+1);
                }
                ws-=arr[left];
                left++;
            }
        }
        return wsize == Integer.MAX_VALUE ? 0 : wsize;
    }
}

public class MinSizeSubarray {
    public static void main(String[] args) {
        
    }    
}
