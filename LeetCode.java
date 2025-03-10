/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Stack;
import java.math.BigInteger;

public class LeetCode {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();
        bt("", n, n, res);
        return res;
    }

    public static void bt(String ans, int open, int close,List<String> res){
        if(open == 0 && close == 0){
            res.add(ans);
            return;
        }
        if(open > 0){
            bt(ans+"(", open-1, close, res);
        }
        if(close > open){
            bt(ans+")", open, close-1, res);
        }
    }

    public static void main(String[] args) {
        LeetCode sol = new LeetCode();
    }
}


