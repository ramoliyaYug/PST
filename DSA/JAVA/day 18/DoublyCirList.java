//create the doubly circular linked list having n nodes and delete the n-1 th node
class Node{
    int data;
    Node next;
    Node prev;
    Node(int data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyCircularLinkedList{
    Node head;
    public void insert(int data){
        Node newNode = new Node(data);
        if(head ==null){
            head = newNode;
            head.next = head;
            head.prev = head;
        }else{
            Node temp = head;
            while(temp.next != head){
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.prev = temp;
            newNode.next = head;
            head.prev = newNode;
        }
    }
    //method to insert at kth node
    public void insertAt(int data, int k){
        Node newNode = new Node(data);
        Node temp = head;
        for(int i=1;i<k-1;i++){
            temp = temp.next;
        }
        newNode.next = temp.next;
        newNode.prev = temp;
        temp.next = newNode;
        newNode.next.prev = newNode;
    }

    public void delete(int data){
        Node temp = head;
        while(temp.next != head){
            if(temp.next.data == data){
                temp.next = temp.next.next;
                temp.next.prev = temp;
                break;
            }
            temp = temp.next;
        }
    }
    //methods for deleting the first and last node
    public void deleteFirst(){
        head = head.next;
        head.prev = head;
    }
    public void deleteLast(){
        Node temp = head;
        while(temp.next != head){
            temp = temp.next;
        }
        temp.prev.next = head;
        head.prev = temp.prev;
    }

    //finding the length of the list
    public int length(){
        Node temp = head;
        int count = 0;
        while(temp.next != head){
            count++;
            temp = temp.next;
        }
        return count;
    }

    public void display(){
        Node temp = head;
        while(temp.next != head){
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println(temp.data);
    }
}
public class DoublyCirList {
    public static void main(String[] args) {
        DoublyCircularLinkedList list = new DoublyCircularLinkedList();
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        list.insert(5);
        list.display();
        list.delete(4);
        list.display();
        list.deleteFirst();
        list.display();
        list.deleteLast();
        list.display();
        list.insertAt(6,3);
        list.display();
        System.out.println(list.length());
    }
}
