public class Queueusingarrays {
    private int front;
    private int rear;
    private int capacity;
    private int size;
    private int[] arr;

    public Queueusingarrays(int capacity) {
        this.capacity = capacity;
        this.front = 0;
        this.rear = -1;
        this.size = 0;
        this.arr = new int[capacity];
    }

    public boolean isFull(){
        return size == capacity;
    }

    public boolean isEmpty(){
        return size == 0;
    }

    public void enqueue(int data){
        if(isFull()){
            System.out.println("Queue is full");
            return;
        }
        rear++;
        arr[rear] = data;
        size++;   
    }

    public void dequeue(){
        if(isEmpty()){
            System.out.println("Queue is empty");
            return;
        }
        int removedElement = arr[front];
        System.out.println("Dequeued element is: " + removedElement);
        front++;
        size--;
    }

    public void peek(){
        if(isEmpty()){
            System.out.println("Queue is empty");
            return;
        }
        System.out.println("Front element is: " + arr[front]);
    }

    public void display(){
        if(isEmpty()){
            System.out.println("Queue is empty");
            return;
        }
        System.out.println("Queue elements are:");
        for(int i = front; i <= rear; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public int size(){
        return size;
    }

    public static void main(String[] args) {
        Queueusingarrays queue = new Queueusingarrays(5);
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.display();
        queue.peek();
        queue.dequeue();
        queue.display();
        System.out.println("Size of queue: " + queue.size());
        System.out.println("Is queue empty? " + queue.isEmpty());
    }
}
