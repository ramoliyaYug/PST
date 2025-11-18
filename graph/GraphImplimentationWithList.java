import java.util.ArrayList;
import java.util.List;
class AdjacencyList{
    List<List<Integer>> graph;
    AdjacencyList(int nodesCount){
        graph = new ArrayList<>();
        for(int i=0;i<nodesCount;i++){
            graph.add(new ArrayList<>());
        }
    }
    public void add(int a,int b){
        graph.get(a).add(b);
        graph.get(b).add(a);
    }
    public void remove(int a,int b){
        graph.get(a).remove(Integer.valueOf(b));
        graph.get(b).remove(Integer.valueOf(a));
    }
    public void printGraph(){
        for(int i=0;i<graph.size();i++){
            System.out.print(i + ": ");
            for(int j : graph.get(i)){
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}
public class GraphImplimentationWithList {
    public static void main(String[] args) {
        AdjacencyList graph = new AdjacencyList(4);
        graph.add(0, 1);
        graph.add(0, 2);
        graph.add(1, 2);
        graph.add(2, 3);
        graph.printGraph();
        System.out.println("After removing edge between 0 and 1:");
        
        graph.remove(0, 1);
        graph.printGraph();
    }
}
