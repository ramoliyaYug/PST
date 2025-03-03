//reverse the stack using recursion and without usirg any extra space
import java.util.Stack;
public class ReverseStack {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        int x = 5;
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);
        stack.push(50);
        reverseStack(stack, x);
        display(stack);
    }

    public static void display(Stack<Integer> stack) {
        while (!stack.isEmpty()) {
            System.out.println(stack.pop());
        }
    }

    public static void reverseStack(Stack<Integer> stack, int x) {
        if(stack.size() == 0) {
            stack.push(x);
            return;
        }
        int temp = stack.pop();
        reverseStack(stack, x);
        stack.push(temp);
    }
}
