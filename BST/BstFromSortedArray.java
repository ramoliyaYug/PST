import java.util.*;
class Node{
    int data;
    Node left, right;
    Node(int data){
        this.data = data;
        left = right = null;
    }
}
public class BstFromSortedArray {
    public static Node sortedArrayToBST(int[] arr){
        if (arr.length == 0) return null;
        int mid = arr.length/2;
        Node root = new Node(arr[mid]);
        root.left = sortedArrayToBST(Arrays.copyOfRange(arr, 0, mid));
        root.right = sortedArrayToBST(Arrays.copyOfRange(arr, mid+1, arr.length));
        return root;
    }
    public static void inorder(Node root){
        if(root == null) return;
        inorder(root.left);
        System.out.print(root.data+" ");
        inorder(root.right);
    }
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5,6,7};
        Node root = sortedArrayToBST(arr);
        inorder(root);   
    }    
}
