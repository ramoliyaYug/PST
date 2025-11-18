class AdjacencyMatrix{
    int[][] matrix;
    AdjacencyMatrix(int nodesCount){
        matrix = new int[nodesCount][nodesCount];
    }

    public void add(int a,int b){
        matrix[a][b] = 1;
        matrix[b][a] = 1;
    }

    public void remove(int a,int b){
        matrix[a][b] = 0;
        matrix[b][a] = 0;
    }

    public void printGraph(){
        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<matrix[i].length;j++){
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println();
        }
    }
}

public class GraphImplimentationWithMatrix {
    public static void main(String[] args) {
        AdjacencyMatrix graph = new AdjacencyMatrix(4);
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
