/*
given an array find the second largest number
*/
class SLarge{
    public static int SecondLargestNumber(int[] arr) {

        int largest = arr[0];
        int secondLargest = arr[1];

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] < largest && arr[i] > secondLargest) {
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }
}

public class SecondLarge {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        System.out.println(SLarge.SecondLargestNumber(arr));
    }
}
