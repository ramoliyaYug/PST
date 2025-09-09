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
        int arr1[] = {1,2,3,4,5,6,7};
        Node root = sortedArrayToBST(arr1);
        inorder(root);
        System.out.println();
        int arr2[] = {7,3,1,4,6,2,5};
        Node root2 = unsortedArrayToBST(arr2);
        inorder(root2);
        System.out.println();
        Node root3 = generateRandomBST(10,100);
        inorder(root3);
        System.out.println();
        System.out.println(searchInBST(root3,50));
    }    
}
