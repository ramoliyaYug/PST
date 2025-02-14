public class RatOnMatrix {
    public static void main(String[] args) {
        int n = 4;
        int[][] matrix = {{1,0,0,0,},{1,1,0,1},{1,1,0,0},{0,1,1,1}};
        findPath(n,matrix);
    }

    public static void findPath(int n,int[][]matrix){
        int[][] visited = new int[n][n];
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                visited[i][j] = 0;
            }
        }
        solve(0,0,matrix,n,"",visited);
    }

    public static void solve(int i,int j, int[][] matrix,int n, String move, int[][] visited){
        if(i==n-1 && j==n-1){
            System.out.println(move+" ");
            return;
        }
        //downwards
        if(i+1<n && visited[i+1][j]==0 && matrix[i+1][j]==1){
            visited[i][j] = 1;
            solve(i+1,j,matrix,n,move+"D",visited);
            visited[i][j] = 0;
        }
        //leftwards
        if(j-1>=0 && visited[i][j-1]==0 && matrix[i][j-1]==1){
            visited[i][j] = 1;
            solve(i,j-1,matrix,n,move+"L",visited);
            visited[i][j] = 0;
        }
        //rightwards
        if(j+1<n && visited[i][j+1]==0 && matrix[i][j+1]==1){
            visited[i][j] = 1;
            solve(i,j+1,matrix,n,move+"R",visited);
            visited[i][j] = 0;
        }
        //upwards
        if(i-1>=0 && visited[i-1][j]==0 && matrix[i-1][j]==1){
            visited[i][j] = 1;
            solve(i-1,j,matrix,n,move+"U",visited);
            visited[i][j] = 0;
        }
        return;
    }
}
