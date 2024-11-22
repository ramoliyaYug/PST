//create a linked list having three node all three have three value name,roll no, ispresent and make three by default every student is absent
class Node{
    String name;
    int rollno;
    boolean ispresent = false;
    Node next;

    Node(String name,int rollno,boolean ispresent){
        this.name = name;
        this.rollno = rollno;
        this.ispresent = ispresent;
        this.next = null;
    }
}

public class List {
        public Node head;
        public void append(String name,int rollno,boolean ispresent){
            Node newNode = new Node(name,rollno,ispresent);
            if(head == null){
                head = newNode;
                return;
            }
            if(head.next == null){
                head.next = newNode;
                return;
            }
            Node dup = head;
            while(dup.next != null){
                dup = dup.next;
            }
            dup.next = newNode; 
        }

        //methods to insert the node in between two node
        public void insert(String name,int rollno,boolean ispresent){
            
        }

        public static void main(String[] args) {
            List list = new List();
            list.append("Yug", 1, false);
            list.append("Anvita", 2, true);
            list.append("Riya", 3, false);

            Node temp = list.head;
            while(temp != null){
                System.out.println(temp.name + " " + temp.rollno + " " + temp.ispresent);
                temp = temp.next;
            }
        }
}
