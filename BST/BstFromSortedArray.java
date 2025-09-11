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
    // For sorted array
    public static Node sortedArrayToBST(int[] arr){
        if (arr.length == 0) return null;
        int mid = arr.length/2;
        Node root = new Node(arr[mid]);
        root.left = sortedArrayToBST(Arrays.copyOfRange(arr, 0, mid));
        root.right = sortedArrayToBST(Arrays.copyOfRange(arr, mid+1, arr.length));
        return root;
    }

    // For unsorted array
    public static Node unsortedArrayToBST(int[]arr){
        if(arr.length == 0) return null;
        Node root = null;
        for(int val : arr){
            root = insertIntoBST(root,val);
        }
        return root;
    }

    // Function to insert a new value in BST
    public static Node insertIntoBST(Node root, int val){
        if(root == null) return new Node(val);
        if(val < root.data){
            root.left = insertIntoBST(root.left,val);
        }else{
            root.right = insertIntoBST(root.right,val);
        }
        return root;
    }

    // Inorder traversal
    public static void inorder(Node root){
        if(root == null) return;
        inorder(root.left);
        System.out.print(root.data+" ");
        inorder(root.right);
    }
    
    //search in BST
    public static boolean searchInBST(Node root, int key){
        if(root == null) return false;
        if(root.data == key) return true;
        if(key < root.data){
            return searchInBST(root.left,key);
        }else{
            return searchInBST(root.right,key);
        }
    }

    //delete value from BST
    public static Node deleteFromBST(Node root, int value){
        if(root == null) return null;
        if(value < root.data){
            root.left = deleteFromBST(root.left,value);
        }else if(value > root.data){
            root.right = deleteFromBST(root.right,value);
        }else{
            // Node with only one child or no child
            if(root.left == null) return root.right;
            else if(root.right == null) return root.left;
            // Node with two children: Get the inorder successor (smallest in the right subtree)
            Node successor = minValueNode(root.right);

            // Replace root's data with successor's data
            root.data = successor.data;

            // Delete the inorder successor
            root.right = deleteFromBST(root.right, successor.data);
        }
        return root;
    }

    // Function to find the node with minimum value in a given BST
    public static Node minValueNode(Node node) {
        Node current = node;
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }

    //generate random bst
    public static Node generateRandomBST(int n, int range){
        Node root = null;
        Random rand = new Random();
        for(int i=0;i<n;i++){
            int val = rand.nextInt(range);
            root = insertIntoBST(root,val);
        }
        return root;
    }
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7};
        Node root = sortedArrayToBST(arr);
        inorder(root);
        System.out.println();
        System.out.println("--------------------------------");
        int[] unsortedArr = {7,3,1,5,2,4,6};
        Node root2 = unsortedArrayToBST(unsortedArr);
        inorder(root2);
        System.out.println();
        System.out.println("--------------------------------");
        System.out.println(searchInBST(root2,5)); // true
        System.out.println(searchInBST(root2,10)); // false
        root2 = deleteFromBST(root2,3);
        inorder(root2);
        System.out.println();
        System.out.println("--------------------------------");
        Node randomBST = generateRandomBST(10,100);
        inorder(randomBST);
        System.out.println();
    }    
}
