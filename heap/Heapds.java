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

    //delete maxElement
    public void deleteMax(){
        if(size == 0){
            System.out.println("Heap is empty");
            return;
        }
        //step 1:
        heap[0] = heap[size-1];
        size--;
        //step 2:
        heapify(0);
    }

    //heapify function
    public void heapify(int i){
        int leftC = leftChild(i);
        int rightC = rightChild(i);
        int largest = i;
        if(leftC < size && heap[leftC] > heap[largest]){
            largest = leftC;
        }
        if(rightC < size && heap[rightC] > heap[largest]){
            largest = rightC;
        }
        if(largest != i){
            int temp = heap[i];
            heap[i] = heap[largest];
            heap[largest] = temp;
            heapify(largest);
        }
    }

    public void heapifyRange(int i,int limit){
        int leftC = leftChild(i);
        int rightC = rightChild(i);
        int largest = i;
        if(leftC < limit && heap[leftC] > heap[largest]){
            largest = leftC;
        }
        if(rightC < limit && heap[rightC] > heap[largest]){
            largest = rightC;
        }
        if(largest != i){
            int temp = heap[i];
            heap[i] = heap[largest];
            heap[largest] = temp;
            heapifyRange(largest, limit);
        }
    }
    public int getMax(){
        if(size == 0){
            System.out.println("Heap is empty");
            return -1;
        }
        return heap[0];
    }

    //heap sort
    /*
     - first if the arrays is not heapified then do it but in this case we already have that so no need to do that in sorting method
     - then for the sorting intutuion there is the max element at the 0th index of the array so what if we swap that with the last element of the array and forget about that
     - but by doing that jugadu move we lost the heap property so we need to heapify the array again 
     - to heapify the array we also have two way first we can always heapify whole array
     - but to optimize this further we can also heapify the array till the limit

     this was the intution behind the heap sort do this operations till the size of the array is greater than 1

     gfg link : https://www.geeksforgeeks.org/dsa/heap-sort/
    */
    public void heapSort(){
        int tempSize = size;
        for(int i=size-1; i>0; i--){
            int temp = heap[0];
            heap[0] = heap[i];
            heap[i] = temp;
            tempSize--;
            heapifyRange(0, tempSize);
        }
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
        heap.deleteMax();
        heap.printHeap();
        System.out.println(heap.getMax());
        heap.heapSort();
        heap.printHeap();
    }    
}