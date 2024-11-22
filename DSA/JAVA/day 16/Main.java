class Node {
    int data;  // Data field to store the value of the node
    Node next; // Pointer to the next node in the list
    Node prev; // Pointer to the previous node in the list

    // Constructor to initialize the data of the node
    Node(int data) {
        this.data = data;
        this.next = null; // Initialize next as null
        this.prev = null; // Initialize prev as null
    }
}

class DoublyLinkedList { // Corrected class name to start with an uppercase letter (Java convention)
    Node head; // Head of the doubly linked list

    // Method to insert a new node at the end of the list
    public void insert(int data) {
        Node newNode = new Node(data); // Create a new node
        if (head == null) { // If the list is empty, set the new node as head
            head = newNode;
        } else { // Traverse to the end of the list
            Node temp = head; 
            while (temp.next != null) {
                temp = temp.next; // Move to the next node
            }
            temp.next = newNode; // Link the new node at the end
            newNode.prev = temp; // Set the previous pointer of the new node
        }
    }
}

public class Main { // Updated class name to avoid confusion with the DoublyLinkedList class
    public static void main(String[] args) {
        // Create the doubly linked list and add elements
        DoublyLinkedList dll = new DoublyLinkedList();
        dll.insert(10); 
        dll.insert(20);
        dll.insert(30);

        // Print the elements of the doubly linked list
        Node temp = dll.head; // Start from the head node
        while (temp != null) { // Traverse until the end of the list
            System.out.println(temp.data); // Print the data of the current node
            temp = temp.next; // Move to the next node
        }
    }
}
