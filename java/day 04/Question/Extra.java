/*
nums =[0,0,1,5,1,3,3]
find unique value;

2 arrays are arr1,arr2
find comman elements in both arrays.
Ex: arr1=[1,2,3]
arr2=[1,2,5]
res=[1,2]

both array are sorted
*/


// -------------------1----------------------
// public class Extra {
//     public static void main(String[] args) {
//         int nums[]={0,0,1,5,1,3,3};
//         for(int i : nums){
//             int count=0;
//             for(int j : nums){
//                 if(i==j){
//                     count++;
//                 }
//             }
//             if(count==1){
//                 System.out.println("Unique value: "+i);
//             }
//         }
//     }
// }


// -------------------2----------------------
// import java.util.*;
// public class Extra{
//     public static void main(String[] args) {
//         int arr1[]={1,2,3,5};
//         int arr2[]={1,2,5};
//         int count =0;
//         for(int i : arr1){
//             for(int j : arr2){
//                 if(i==j){
//                 count++;
//                 }
//             }
//         }
//         int finalArr[]=new int[count];
//         int index=0;
//         for(int i=0;i<arr1.length;i++){
//             for(int j=0;j<arr2.length;j++){
//                 if(arr1[i]==arr2[j]){
//                     finalArr[index]=arr1[i];
//                     index++;
//                 }
//             }
//         }
//         System.out.println(Arrays.toString(finalArr));
//     }
// }