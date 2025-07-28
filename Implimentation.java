/*
There is a list of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

Design a list that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:

OrderedStream(int n) Constructs the list to take n values.
String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the list, then returns the largest possible chunk of currently inserted values that appear next in the order.
 

Example:



Input
["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
[[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
Output
[null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

Explanation
// Note that the values ordered by ID is ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"].
OrderedStream os = new OrderedStream(5);
os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns [].
os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].
os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns [].
os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
// Concatentating all the chunks returned:
// [] + ["aaaaa"] + ["bbbbb", "ccccc"] + [] + ["ddddd", "eeeee"] = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]
// The resulting order is the same as the order above.
 

Constraints:

1 <= n <= 1000
1 <= id <= n
value.length == 5
value consists only of lowercase letters.
Each call to insert will have a unique id.
Exactly n calls will be made to insert.
Hint 1
Maintain the next id that should be outputted.
Hint 2
Maintain the ids that were inserted in the list.
Hint 3
Per each insert, make a loop where you check if the id that has the turn has been inserted, and if so increment the id that has the turn and continue the loop, else break.
After any operation either a
 or b
 becomes a+b
. Out of the two options, clearly it is better to increase the smaller number. For example, with numbers 2,3
 we can either get a pair 2,5
 or 3,5
; to obtain larger numbers, the last pair is better in every way.

With this we can just simulate the process and count the number of steps. The worst case is a=b=1
, n=109
, where each new addition produces the next element of the Fibonacci sequence. At this point we can just run the simulation and find out that 43
 steps are always enough. In general, Fibonacci sequence grows exponentially, thus O(logn)
 steps are needed.
*/
import java.util.List;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Stack;
import java.math.BigInteger;
class OrderedStream {
    List<String> list;
    int pointer;

    public OrderedStream(int n) {
        list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            list.add(null);
        }
        pointer = 0;
    }

    public List<String> insert(int idKey, String value) {
        list.set(idKey - 1, value);
        List<String> result = new ArrayList<>();
        while (pointer < list.size() && list.get(pointer) != null) {
            result.add(list.get(pointer));
            pointer++;
        }
        return result;
    }
}


public class Implimentation {
    public static void main(String[] args) {
    }
}
