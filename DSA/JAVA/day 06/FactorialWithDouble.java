class NormalFact {
    public static double normalFactorial(int n) {
        double fact = 1.0;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}

class RecursiveFact {
    public static double recursiveFactorial(int n) {
        if (n == 0 || n == 1) {
            return 1.0;
        }
        return n * recursiveFactorial(n - 1);
    }
}

public class FactorialWithDouble {
    public static void main(String[] args) {
        int n = 10;

        double normalFactResult = NormalFact.normalFactorial(n);
        System.out.println("Iterative Factorial of " + n + ": " + normalFactResult);

        double recursiveFactResult = RecursiveFact.recursiveFactorial(n);
        System.out.println("Recursive Factorial of " + n + ": " + recursiveFactResult);
    }
}
