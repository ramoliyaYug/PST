/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]
Example 2:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]
Example 3:

Input: l1 = [0], l2 = [0]
Output: [0]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

import java.util.ArrayList;
import java.util.Collections;

class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }
 class Node {
    public int val;
    public Node prev;
    public Node next;
    public Node child;
};
public class LeetCode {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ArrayList<Integer> listA = convertLinkedListToArrayList(list1);
        ArrayList<Integer> listB = convertLinkedListToArrayList(list2);
        ArrayList<Integer> mergedList = new ArrayList<>();
        mergedList.addAll(listA);
        mergedList.addAll(listB);
        Collections.sort(mergedList);
        return convertArrayListToLinkedList(mergedList);

    }
    public static ArrayList<Integer> convertLinkedListToArrayList(ListNode head) {
        ArrayList<Integer> list = new ArrayList<>();
        ListNode current = head;
        while (current != null) {
            list.add(current.val);
            current = current.next;
        }
        return list;
    }
    public static ListNode convertArrayListToLinkedList(ArrayList<Integer> list){
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        for (int val : list) {
            current.next = new ListNode(val);
            current = current.next;
        }
        return dummy.next;
    }
    

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
