public class FindFirstOccur {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8,2};
        System.out.println(find(arr, 0, 8));
        System.out.println(lastOccur(arr, arr.length-1, 2));
    }

    public static int find(int[] arr , int i, int target){
        if(arr.length==i){
            return -1;
        }
        if(arr[i]==target){
            return i;
        }
        return find(arr, i+1, target);
    }

    public static int lastOccur(int[] arr , int i, int target){
       if(i==0){
           return -1;
       }
       if(arr[i]==target){
           return i;
       }
       return lastOccur(arr, i-1, target);
    }
}
