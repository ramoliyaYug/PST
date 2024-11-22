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
        LinkedList list = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        //printing the linked list
        Node temp = list.head;
        while(temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
    }
}

