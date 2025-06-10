class Node {
    int data;
    Node next;
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
public class StackImplimentationUsingLinkedList {
    private Node top;
    public StackImplimentationUsingLinkedList() {
        this.top = null;
    }
    public void push(int x) {
        Node newNode = new Node(x);
        if (top == null) {
            top = newNode;
        } else {
            newNode.next = top;
            top = newNode;
        }
    }
    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack Underflow");
            return -1;
        }
        int x = top.data;
        top = top.next;
        return x;
    }
    public int peek() {
        if (isEmpty()) {
            System.out.println("Stack Underflow");
            return -1;
        }
        return top.data;
    }
    public void display() {
        if (isEmpty()) {
            System.out.println("Stack Underflow");
            return;
        }
        Node current = top;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }
    public boolean isEmpty() {
        return top == null;
    }
    public int size() {
        int count = 0;
        Node current = top;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
    public static void main(String[] args) {
        StackImplimentationUsingLinkedList stack = new StackImplimentationUsingLinkedList();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.display(); // Output: 30 20 10 
        System.out.println("Top element is: " + stack.peek()); // Output: Top element is: 30
        System.out.println("Popped element is: " + stack.pop()); // Output: Popped element is: 30
        stack.display(); // Output: 20 10 
        System.out.println("Stack size is: " + stack.size()); // Output: Stack size is: 2
        System.out.println("Is stack empty? " + stack.isEmpty()); // Output: Is stack empty? false
        System.out.println("Popped element is: " + stack.pop()); // Output: Popped element is: 20
        System.out.println("Popped element is: " + stack.pop()); // Output: Popped element is: 10
        System.out.println("Is stack empty? " + stack.isEmpty()); // Output: Is stack empty? true
        System.out.println("Popped element is: " + stack.pop()); // Output: Stack Underflow
        // Output: Popped element is: -1
        stack.display(); // Output: Stack Underflow
        // Output: Stack Underflow
        System.out.println("Top element is: " + stack.peek()); // Output: Stack Underflow
    }
}
