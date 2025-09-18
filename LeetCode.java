/*
make bst from preorder traversal
*/

import java.util.*;


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
    public TreeNode reverseOddLevels(TreeNode root) {
        List<List<Integer>> levels = levelOrder(root);
        reverseOddLevels(root, levels);
        return build(levels);
    }
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> ans = new ArrayList<>();
        if(root == null) return ans;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while(!q.isEmpty()){
            int size = q.size();
            List<Integer> level = new ArrayList<>();
            for(int i = 0; i < size; i++){
                TreeNode node = q.poll();
                level.add(node.val);
                if(node.left != null) q.offer(node.left);
                if(node.right != null) q.offer(node.right);
            }
            ans.add(level);
        }
        return ans;
    }

    public void reverseOddLevels(TreeNode root,List<List<Integer>> levels){
        int n = levels.size();
        for(int i = 1; i < n; i += 2){
            Collections.reverse(levels.get(i));
        }
    }
    public static TreeNode build(List<List<Integer>> levels) {
        if (levels == null || levels.isEmpty() || levels.get(0).isEmpty()) return null;

        // create root
        TreeNode root = new TreeNode(levels.get(0).get(0));
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);

        // start from second level
        for (int i = 1; i < levels.size(); i++) {
            List<Integer> level = levels.get(i);
            Queue<TreeNode> nextParents = new LinkedList<>();
            int idx = 0;

            // attach children to current parents
            while (!q.isEmpty() && idx < level.size()) {
                TreeNode parent = q.poll();

                // left child
                if (idx < level.size() && level.get(idx) != null) {
                    parent.left = new TreeNode(level.get(idx));
                    nextParents.offer(parent.left);
                }
                idx++;

                // right child
                if (idx < level.size() && level.get(idx) != null) {
                    parent.right = new TreeNode(level.get(idx));
                    nextParents.offer(parent.right);
                }
                idx++;
            }
            q = nextParents;
        }
        return root;
    }

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
