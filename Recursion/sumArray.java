public class sumArray {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8,9}; 
        System.out.println(sumArr(arr));
        printEleforward(arr);
        System.out.println("----------------------------");
        printElebackward(arr);
        System.out.println("----------------------------");
        printIncAndDec(arr);
    }
    
    public static int sumArr(int[] arr) { 
        if (arr.length == 0) {
            return 0;
        }
        // Create new array without first element since Java doesn't have slice method
        int[] newArr = new int[arr.length - 1];
        System.arraycopy(arr, 1, newArr, 0, arr.length - 1);
        return arr[0] + sumArr(newArr);
    }

    public static int printEleforward(int[] arr) {
        if (arr.length == 0) {
            return 0;
        }
        // Create new array without first element since Java doesn't have slice method
        int[] newArr = new int[arr.length - 1];
        System.arraycopy(arr, 1, newArr, 0, arr.length - 1);
        System.out.println(arr[0]);
        return printEleforward(newArr);
    }

    public static int printElebackward(int[] arr) {
        if (arr.length == 0) {
            return 0;
        }
        // Create new array without first element since Java doesn't have slice method
        int[] newArr = new int[arr.length - 1];
        System.arraycopy(arr, 1, newArr, 0, arr.length - 1);
        printElebackward(newArr);
        System.out.println(arr[0]);
        return 0;
    }

    public static int printIncAndDec(int[] arr) {
        if (arr.length == 0) {
            return 0;
        }
        // Create new array without first element since Java doesn't have slice method
        int[] newArr = new int[arr.length - 1];
        System.arraycopy(arr, 1, newArr, 0, arr.length - 1);
        System.out.println(arr[0]);
        printIncAndDec(newArr);
        System.out.println(arr[0]);
        return 0;
    }
}
