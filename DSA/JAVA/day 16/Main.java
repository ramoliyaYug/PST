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

    public void delete(int data) {
        Node temp = head;
        while (temp.next != null) {
            if (temp.next.data == data) {
                temp.next = temp.next.next;
                temp.next.prev = temp;
                break;
            }
            temp = temp.next;
        }
    }

    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("null");
    }
}

public class Main { // Updated class name to avoid confusion with the DoublyLinkedList class
    public static void main(String[] args) {
        // Create the doubly linked list and add elements
        DoublyLinkedList dll = new DoublyLinkedList();
        dll.insert(10); 
        dll.insert(20);
        dll.insert(30);

        // Display the linked list
        dll.display();

        // Delete an element from the linked list
        dll.delete(20);

        // Display the updated linked list
        dll.display();
    }
}
