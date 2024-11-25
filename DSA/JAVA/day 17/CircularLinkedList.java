class Node{
    int data;
    Node next;
    Node(int data){
        this.data = data;
        this.next = null;
    }
}
//create a circular linked list has 5 node and print it twice
class CirLinkedList{
    Node head;
    
    public void insert(int data){
        Node newNode = new Node(data);
        if(head == null){
            head = newNode;
            newNode.next = head;
        }else{
            Node temp = head;
            while(temp.next != head){
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = head;
        }
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
public class CircularLinkedList {
    public static void main(String[] args) {
        CirLinkedList cl = new CirLinkedList();
        cl.insert(1);
        cl.insert(2);
        cl.insert(3);
        cl.insert(4);
        cl.insert(5);
        cl.display();
        cl.display();
    }
}
