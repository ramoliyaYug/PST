/*
-dfs:
- Inorder Traversal : Left, Root, Right
- Preorder Traversal : Root, Left, Right
- Postorder Traversal : Left, Right, Root
 */
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue; 
public class Bt {
    static class Node {
        int data;
        Node left;
        Node right;

        Node(int data) {
            this.data = data;
            left = null;
            right = null;
        }
    }

    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        root.right.left = new Node(6);
        root.right.right = new Node(7);

        System.out.println("Inorder Traversal:");
        inorder(root);
        System.out.println();
        System.out.println("Preorder Traversal:");
        preorder(root);
        System.out.println();
        System.out.println("Postorder Traversal:");
        postorder(root);
        System.out.println();
        System.out.println("Level Order Traversal:");
        levelOrder(root);
        System.out.println();
        System.out.println("Level Order Traversal Using ArrayList:");
        levelOrderArrayList(root);
        System.out.println();
        System.out.println("Size of the tree: " + size(root));
        System.out.println("Sum of the tree: " + sum(root));
        System.out.println("Height of the tree: " + height(root));
        System.out.println("Max value of the tree: " + max(root));
        System.out.println("Min value of the tree: " + min(root));
        System.out.println("Find 5 in the tree: " + find(root, 5));
        System.out.println("Find 10 in the tree: " + find(root, 10));
        System.out.println("Left view of the tree:");
        leftView(root);
        System.out.println();
    }

    public static void inorder(Node root) {
        if (root == null) {
            return;
        }
        inorder(root.left);
        System.out.print(root.data + " ");
        inorder(root.right);
    }

    public static void preorder(Node root) {
        if (root == null) {
            return;
        }
        System.out.print(root.data + " ");
        preorder(root.left);
        preorder(root.right);
    }
    public static void postorder(Node root) {
        if (root == null) {
            return;
        }
        postorder(root.left);
        postorder(root.right);
        System.out.print(root.data + " ");
    }
    //level order traversal using queue
    public static void levelOrder(Node root) {
        if (root == null) {
            return;
        }
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            Node current = queue.poll();
            System.out.print(current.data + " ");
            if (current.left != null) {
                queue.add(current.left);
            }
            if (current.right != null) {
                queue.add(current.right);
            }
        }
    }

    //level order traversal using arraylist
    public static void levelOrderArrayList(Node root) {
        if (root == null) {
            return;
        }
        ArrayList<Node> queue = new ArrayList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            Node current = queue.remove(0);
            System.out.print(current.data + " ");
            if (current.left != null) {
                queue.add(current.left);
            }
            if (current.right != null) {
                queue.add(current.right);
            }
        }
    }

    //find size of the tree
    public static int size(Node root) {
        if (root == null) {
            return 0;
        }
        return 1 + size(root.left) + size(root.right);
    }
    //find sum of the tree
    public static int sum(Node root) {
        if (root == null) {
            return 0;
        }
        return root.data + sum(root.left) + sum(root.right);
    }

    //find height of the tree
    public static int height(Node root) {
        if (root == null) {
            return 0;
        }
        return 1 + Math.max(height(root.left), height(root.right));
    }

    //find max value of the tree
    public static int max(Node root) {
        if (root == null) {
            return Integer.MIN_VALUE;
        }
        return Math.max(root.data, Math.max(max(root.left), max(root.right)));
    }

    //find min value of the tree
    public static int min(Node root) {
        if (root == null) {
            return Integer.MAX_VALUE;
        }
        return Math.min(root.data, Math.min(min(root.left), min(root.right)));
    }

    //find a value in the tree
    public static boolean find(Node root,int value){
        if (root == null) {
            return false;
        }
        if (root.data == value) {
            return true;
        }
        return find(root.left, value) || find(root.right, value);
    }

    //print only left view of the tree using bfs
    public static void leftView(Node root) {
        if (root == null) {
            return;
        }
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                Node current = queue.poll();
                if (i == 0) {
                    System.out.print(current.data + " ");
                }
                if (current.left != null) {
                    queue.add(current.left);
                }
                if (current.right != null) {
                    queue.add(current.right);
                }
            }
        }
    }

    //print only right view of the tree using bfs
    public static void rightView(Node root) {
        if (root == null) {
            return;
        }
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                Node current = queue.poll();
                if (i == size - 1) {
                    System.out.print(current.data + " ");
                }
                if (current.left != null) {
                    queue.add(current.left);
                }
                if (current.right != null) {
                    queue.add(current.right);
                }
            }
        }
    }
}