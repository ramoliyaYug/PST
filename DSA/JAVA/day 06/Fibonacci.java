import java.util.Arrays;

class NormalFibbo {
    public int[] normalFibonacci(int n) {
        int[] arr = new int[n];
        arr[0] = 0;
        arr[1] = 1;
        for (int i = 2; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        return arr;
    }
}

class RecursiveFibbo {
    public int recursiveFibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
    }
}

public class Fibonacci {
    public static void main(String[] args) {
        int n = 10;
        NormalFibbo normalFibbo = new NormalFibbo();
        int[] normalResult = normalFibbo.normalFibonacci(n);
        System.out.print("Normal Fibonacci: ");
        System.out.println(Arrays.toString(normalResult));

        RecursiveFibbo recursiveFibbo = new RecursiveFibbo();
        System.out.print("Recursive Fibonacci: ");
        for (int i = 0; i < n; i++) {
            System.out.print(recursiveFibbo.recursiveFibonacci(i) + " ");
        }
    }
}
