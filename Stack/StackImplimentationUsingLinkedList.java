class Node {
    int data;
    Node next;
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList{
    Node top;
    public void push(int data){
        //overflow
        if(top == null){
            top = new Node(data);
            return;
        }
        Node newNode = new Node(data);
        newNode.next = top;
        top = newNode;
    }

    public void peek(){
        //underflow
        if(top == null){
            System.out.println("Stack is empty");
            return;
        }
        System.out.println(top.data);
    }

    public void display(){
        //underflow
        if(top == null){
            System.out.println("Stack is empty");
            return;
        }
        System.out.println("Stack elements are:");
        Node temp = top;
        while(temp != null){
            System.out.print(temp.data+" ");
            temp = temp.next;
        }
        System.out.println();
    }
    public void pop(){
        //underflow
        if(top == null){
            System.out.println("Stack is empty");
            return;
        }
        System.out.println("Popped element is: "+top.data);
        top = top.next;
    }

    public boolean isEmpty(){
        return top == null;
    }
}
public class StackImplimentationUsingLinkedList {
    public static void main(String[] args) {
        StackLinkedList s = new StackLinkedList();
        s.push(10);
        s.push(20);
        s.push(30);
        s.push(40);
        s.push(50);
        s.display();
        s.peek();
        s.pop();
        s.display();
    }
}
