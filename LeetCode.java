/*
You are given the head of a Singly linked list. You have to reverse every k node in the linked list and return the head of the modified list.
Note: If the number of nodes is not a multiple of k then the left-out nodes at the end, should be considered as a group and must be reversed.

Examples:

Input: k = 2,
   
Output: 2 -> 1 -> 4 -> 3 -> 6 -> 5
Explanation: Linked List is reversed in a group of size k = 2.
   
Input: k = 4,
   
Output: 4 -> 3 -> 2 -> 1 -> 6 -> 5
Explanation: Linked List is reversed in a group of size k = 4.
   
Constraints:
1 ≤ size of linked list ≤ 105
0 ≤ node->data ≤ 106
1 ≤ k ≤ size of linked list 
*/

import java.util.*;

class Node
{
    int data;
    Node next;
    Node(int key)
    {
        data = key;
        next = null;
    }
}
public class LeetCode {
    public Node segregate(Node head) {
        // code here
        ArrayList<Integer> list = convertLinkedListToArrayList(head);
        Collections.sort(list);
        return convertArrayListToLinkedList(list);
    }

    public static ArrayList<Integer> convertLinkedListToArrayList(Node head) {
        ArrayList<Integer> result = new ArrayList<>();
        Node current = head;
        while (current != null) {
            result.add(current.data);
            current = current.next;
        }
        return result;
    }

    public static Node convertArrayListToLinkedList(ArrayList<Integer> list) {
        if (list.isEmpty()) {
            return null;
        }
        Node head = new Node(list.get(0));
        Node current = head;
        for (int i = 1; i < list.size(); i++) {
            current.next = new Node(list.get(i));
            current = current.next;
        }
        return head;
    }

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
