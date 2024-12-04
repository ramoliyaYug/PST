//first we will learn about type conversion:

/*
1. implicit type conversion:
- when you assign a value of one data type to a variable of another data type, the value is automatically converted to the target data type.
- this is called implicit type conversion.

2. explicit type conversion:
- when you explicitly convert a value from one data type to another data type, the value is manually converted to the target data type.
- this is called explicit type conversion.
*/

//custom type conversion:
/*
1.Integer to String:
- using String.valueOf() method.
- using Integer.toString() method.
*/

/*
2.String to Integer:
- using Integer.parseInt() method.
- using Integer.valueOf() method.
- using Integer.decode() method.
*/

/*
3.String to array:
- using String.toCharArray() method.
- using String.split(delimiter) method.
*/

/*
4. Integer to array:
- char[] charArray = String.valueOf(number).toCharArray();
- String str = String.valueOf(number);
  String[] stringArray = str.split("");
*/
 
/*
5. array to String:
- String str = String.join(delimiter, array);
- String str = Arrays.toString(array);
*/

/*
6. array to Integer:
- int[] arr = {1, 2, 3, 4, 5};
  int sum = Arrays.stream(arr).sum();
*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//now we will learn about time complexity in java
/*
1.Constant Time Complexity (O(1)):
-The algorithm's running time does not change, no matter the size of the input.

2.Linear Time Complexity (O(n)):
-The running time grows directly in proportion to the size of the input.

3.Quadratic Time Complexity (O(n²)):
-The running time grows as the square of the input size. For example, if the input doubles, the time taken becomes four times longer.

4.Logarithmic Time Complexity (O(log n)):
-The running time grows very slowly as the input size increases, like cutting the input in half repeatedly.

5.Exponential Time Complexity (O(2ⁿ)):
-The running time doubles with every additional input element. This grows very fast and is not efficient for large inputs.

6.Polynomial Time Complexity (O(nᵏ)):
-The running time increases as a power of the input size (e.g., n², n³).

7.Factorial Time Complexity (O(n!)):
-The running time grows extremely fast, calculating all possible combinations. It’s the slowest and most inefficient.
*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//now its math time:

//number theory:

/*
1.GCD:
- The greatest common divisor (GCD) of two integers is the largest positive integer that divides both integers without a remainder.
- if gcd(a,b) = d it means that a is divisible by d and b is divisible by d. an the d is the greatest.

-facts:
 - gcd(a,0) = a
 - gcd(a,b) = gcd(a-b,b) if a>=b
 - gcd(a,b) = gcd(a%b,b)
 - assume a>=b it is the fact that a%b < a/2
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

//concepts of boolean arrays:
/*

*/
public class Revision {
    public static void main(String[] args) {

    }    
}
