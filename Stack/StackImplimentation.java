public class StackImplimentation {
    private int[] arr;
    private int top;
    private int capacity;

    public StackImplimentation(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }

    public void push(int x) {
        if (isFull()) {
            System.out.println("Stack Overflow");
            return;
        }
        arr[++top] = x;
    }

    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack Underflow");
            return -1;
        }
        return arr[top--];
    }

    public int peek() {
        if (isEmpty()) {
            System.out.println("Stack Underflow");
            return -1;
        }
        return arr[top];
    }

    public void display() {
        if (isempty()) {
            System.out.println("Stack Underflow");
            return;
        }
        for (int i = top; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
    public boolean isEmpty() {
        return top == -1;
    }
    public boolean isFull() {
        return top == capacity - 1;
    }
    public int size() {
        return top + 1;
    }
    public static void main(String[] args) {
        StackImplimentation stack = new StackImplimentation(5);
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.display(); // Output: 30 20 10 
        System.out.println("Top element is: " + stack.peek()); // Output: Top element is: 30
        System.out.println("Stack size is: " + stack.size()); // Output: Stack size is: 3
        System.out.println("Is stack empty? " + stack.isEmpty()); // Output: Is stack empty? false
        System.out.println("Is stack full? " + stack.isFull()); // Output: Is stack full? false
        System.out.println("Popped element is: " + stack.pop()); // Output: Popped element is: 30
        stack.display(); // Output: 20 10
    }
}
