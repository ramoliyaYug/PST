import java.util.Arrays;
public class Question2{
    public static void main(String[] args) {
        int arr[]={-1,2,3,-5,6,3,8,0,9,-5};
        int count=0;
        for(int i : arr){
            if(i<0){
                count++;
            }
        }
        int arr1[]=new int[count];
        for(int i=0,j=0;i<arr.length;i++){
            if(arr[i]<0){
                arr1[j]=arr[i];
                
                j++;
            }
        }
        System.out.println(Arrays.toString(arr1));
    }
}