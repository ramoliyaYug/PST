/*
Given the head of a linked list, rotate the list to the right by k places.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
*/

class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }
public class LeetCode {
    public ListNode rotateRight(ListNode head, int k) {
        int size = 0;
        ListNode temp = head;
        while (temp != null) {
            size++;
            temp = temp.next;
        }
        if (size == 0 || size == 1 || k % size == 0) {
            return head;
        }
        k = k % size;
        while(k-- > 0){
            ListNode first = head;
            ListNode last = null;
            while (first.next != null) {
                last = first;
                first = first.next;
            }
            first.next = head;
            head = first; 
            last.next = null;
        }
        return head;
    }

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
