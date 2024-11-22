// Node class represents a single node in the linked list
class Node {
    int data; // Stores the data
    Node next; // Points to the next node in the list

    // Constructor to initialize the node with data and no next reference
    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class contains methods to manipulate the linked list
class LinkedList {
    Node head; // Points to the first node in the list

    // Method to insert a new node at the end of the list
    public void insert(int data) {
        Node newNode = new Node(data); // Create a new node
        if (head == null) { // If the list is empty, set the new node as head
            head = newNode;
        } else {
            Node temp = head;
            while (temp.next != null) { // Traverse to the last node
                temp = temp.next;
            }
            temp.next = newNode; // Link the last node to the new node
        }
    }

    // Method to insert a new node at the start of the list
    public void insertAtStart(int data) {
        Node newNode = new Node(data); // Create a new node
        newNode.next = head; // Point the new node to the current head
        head = newNode; // Update head to the new node
    }

    // Method to insert a new node at a specific position
    public void insertAt(int index, int data) {
        if (index < 0) {
            System.out.println("Invalid index");
            return;
        }
        Node newNode = new Node(data); // Create a new node
        if (index == 0) { // If inserting at the start, reuse insertAtStart
            insertAtStart(data);
        } else {
            Node temp = head;
            int i = 0; // Initialize counter
            while (i < index - 1) { // Traverse to the node before the target position
                if (temp == null) { // If index is out of bounds
                    System.out.println("Index out of bounds");
                    return;
                }
                temp = temp.next;
                i++; // Increment counter
            }
            newNode.next = temp.next; // Link the new node to the next node
            temp.next = newNode; // Link the current node to the new node
        }
    }

    // Method to delete a node at a specific position
    public void delete(int index) {
        if (index < 0 || head == null) {
            System.out.println("Invalid index or list is empty");
            return;
        }
        if (index == 0) { // If deleting the head
            head = head.next; // Update head to the next node
        } else {
            Node temp = head;
            int i = 0; // Initialize counter
            while (i < index - 1) { // Traverse to the node before the target position
                if (temp == null || temp.next == null) { // If index is out of bounds
                    System.out.println("Index out of bounds");
                    return;
                }
                temp = temp.next;
                i++; // Increment counter
            }
            temp.next = temp.next.next; // Link the current node to the next-next node
        }
    }

    // Method to display the linked list
    public void display() {
        Node temp = head;
        while (temp != null) { // Traverse and print each node
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("null"); // End of the list
    }
}
    

// Main class to test the LinkedList implementation
public class LinkedListDemo {
    public static void main(String[] args) {
        LinkedList list = new LinkedList(); // Create a new linked list

        // Insert nodes and display the list
        list.insert(10);
        list.insert(20);
        list.insert(30);
        System.out.print("After inserting elements: ");
        list.display();

        // Insert at the start and display the list
        list.insertAtStart(5);
        System.out.print("After inserting at the start: ");
        list.display();

        // Insert at a specific index and display the list
        list.insertAt(2, 15);
        System.out.print("After inserting at index 2: ");
        list.display();

        // Delete a node and display the list
        list.delete(3);
        System.out.print("After deleting node at index 3: ");
        list.display();
    }
}
