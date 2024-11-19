class Node {
    int data;
    Node next; // Reference to the next node

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedList {
    public Node head;

    public void append(int data) {
        Node newNode = new Node(data);
        if(head == null) {
            head = newNode;
            return;
        }
        if(head.next == null) {
            head.next = newNode;
            return;
        }
        Node dup = head;
        while(dup.next != null){
            dup = dup.next;
        }
        dup.next = newNode;
    }

    public static void main(String[] args) {
        
    }
}

