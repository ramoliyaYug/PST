import java.math.BigInteger;
class NormalFact {
    public static BigInteger normalFactorial(int n) {
        BigInteger fact = BigInteger.ONE;
        for (int i = 1; i <= n; i++) {
            fact = fact.multiply(BigInteger.valueOf(i));
        }
        return fact;
    }
}

class RecursiveFact {
    public static BigInteger recursiveFactorial(int n) {
        if (n == 0 || n == 1) {
            return BigInteger.ONE;
        }
        return BigInteger.valueOf(n).multiply(recursiveFactorial(n - 1));
    }
}

public class FactorialWithBigInteger {
    public static void main(String[] args) {
        int n = 100000;

        BigInteger normalFactResult = NormalFact.normalFactorial(n);
        System.out.println("Iterative Factorial of " + n + ": " + normalFactResult);

        BigInteger recursiveFactResult = RecursiveFact.recursiveFactorial(n);
        System.out.println("Recursive Factorial of " + n + ": " + recursiveFactResult);
    }
}
