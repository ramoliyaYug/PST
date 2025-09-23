
import java.util.ArrayList;
import java.util.List;

/*
make bst from preorder traversal
*/


class TreeNode {
     int val;
      TreeNode left;
      TreeNode right;
      TreeNode() {}
      TreeNode(int val) { this.val = val; }
      TreeNode(int val, TreeNode left, TreeNode right) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
  }
public class LeetCode {
    public TreeNode balanceBST(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        inorder(root, list);
        return makeBst(list, 0, list.size()-1);
    }

    public static List<Integer> inorder(TreeNode root, List<Integer> list){
        if(root == null) return list;
        inorder(root.left, list);
        list.add(root.val);
        inorder(root.right, list);
        return list;
    }

    public static TreeNode makeBst(List<Integer> list, int start, int end){
        if(start > end) return null;
        int mid = (start + end)/2;
        TreeNode node = new TreeNode(list.get(mid));
        node.left = makeBst(list, start, mid-1);
        node.right = makeBst(list, mid+1, end);
        return node;
    }

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
