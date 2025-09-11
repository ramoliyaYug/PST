/*
make bst from preorder traversal
*/

import java.lang.reflect.Array;
import java.util.*;

import javax.swing.tree.Node;

public class LeetCode {
    public int inorderSuccessor(Node root, Node x) {
        // add code here.
        int val = x.data;
        ArrayList<Integer> list = new ArrayList<>();
        inorder(root,list);
        for(int i = 0; i < list.size(); i++){
            if(list.get(i) == val){
                if(i == list.size()-1) return -1;
                else return list.get(i+1);
            }
        }
        return -1;
    }
    public static ArrayList<Integer> inorder(Node root, ArrayList<Integer> list){ 
        if(root == null) return list;
        inorder(root.left,list);
        list.add(root.data);
        inorder(root.right,list);
        return list;
    }

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
