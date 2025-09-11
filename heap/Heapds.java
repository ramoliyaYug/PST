class MaxHeap{
    int[] heap;
    int size;
    int heapCapacity;

    MaxHeap(int capacity){
        heap = new int[capacity];
        size = 0;
        heapCapacity = capacity;
    }
    public int parent(int i){
        return (i-1)/2;
    }
    public int leftChild(int i){
        return 2*i + 1;
    }
    public int rightChild(int i){
        return 2*i + 2;
    }

    public void insert(int val){
        //heap overflow condition
        if(size == heapCapacity){
            System.out.println("Heap Overflow");
            return;
        }
        heap[size] = val;
        int index = size;
        size++;
        while(index != 0 && heap[index] > heap[parent(index)]){
            //swap
            int temp = heap[index];
            heap[index] = heap[parent(index)];
            heap[parent(index)] = temp;
            index = parent(index);
        }
    }
    public int getMax(){
        if(size == 0){
            System.out.println("Heap is empty");
            return -1;
        }
        return heap[0];
    }

    public void printHeap(){
        for(int i=0; i<size; i++){
            System.out.print(heap[i]+" ");
        }
        System.out.println();
    }
}
public class Heapds {
    public static void main(String[] args) {
        MaxHeap heap = new MaxHeap(10);
        heap.insert(10);
        heap.insert(20);
        heap.insert(30);
        heap.insert(40);
        heap.insert(50);
        heap.insert(60);
        heap.insert(70);
        heap.insert(80);
        heap.insert(90);
        heap.insert(100);
        heap.printHeap();
        System.out.println(heap.getMax());
    }    
}