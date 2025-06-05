class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
public class Queueusinglinkedlist {
    Node front;
    Node rear;
    
    public Queueusinglinkedlist() {
        this.front = null;
        this.rear = null;
    }

    public boolean isEmpty(){
        return front == null;
    }

    public void enqueue(int data){
        Node newNode = new Node(data);
        if(rear == null){
            front = rear = newNode;
            return;
        }
        rear.next = newNode;
        rear = newNode;
    }

    public void dequeue(){
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }
        int removedElement = front.data;
        System.out.println("Dequeued element is: " + removedElement);
        front = front.next;
        if (front == null) {
            rear = null; // If the queue becomes empty, reset rear
        }
    }

    public void peek(){
        if(isEmpty()){
            System.out.println("Queue is empty");
            return;
        }
        System.out.println("Front element is: " + front.data);
    }

    public void display(){
        if(isEmpty()){
            System.out.println("Queue is empty");
            return;
        }
        System.out.println("Queue elements are:");
        Node temp = front;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public int size(){
        int count = 0;
        Node temp = front;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    public static void main(String[] args) {
        Queueusinglinkedlist queue = new Queueusinglinkedlist();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.display();
        queue.peek();
        queue.dequeue();
        queue.display();
        System.out.println("Size of queue is: " + queue.size());
    }
}
