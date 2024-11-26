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
    }
}
