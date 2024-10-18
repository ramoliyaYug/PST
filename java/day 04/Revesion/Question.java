package Revesion;
import java.util.Arrays;


public class Question {
    public static void main(String[] args) {
        // Given an arrat of numbers find the avg of all the numbers.
        // Eg: arr=[1,2,3,4,5,6,7,8,9,10]
        // if array has 1 to n elements and there is no repeated elements (don't use loop)
        // if there are randomm elements i.e [4,3,9]

        int[] arr = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20};
        // AVG:
        int sum=0;
        // int sum=arr[arr.length-1]*(arr[arr.length-1]+1)/2;
        for(int val:arr){
            // this is the for each loop of java to sum all the elements
            // Basically works same as for of loop of js.
            sum+=val;
        }
        System.out.println("Here is the Avg-> "+sum/arr.length);
        
        // RANDOM:
        int n=3;
        int Arr1[]= new int[n];
        for(int i=0;i<n;i++){
        int randomNum=(int)((Math.random()*20)+1);
        Arr1[i]=arr[randomNum];
        }
        System.out.println(Arrays.toString(Arr1));
    }
}