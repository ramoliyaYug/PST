class Stack{
    int n = 10;
    int[] arr = new int[n];
    int top = -1;
    public void push(int data){
        //overglow
        if(top == n-1){
            System.out.println("Stack is full");
            return;
        }
        top++;
        arr[top] = data;
    }

    public void peek(){
        if(top == -1){
            System.out.println("Stack is empty");
            return;
        }
        System.out.println(arr[top]);
    }

    public void display(){
        if(top == -1){
            System.out.println("Stack is empty");
            return;
        }
        System.out.println("Stack elements are:");
        for(int i = 0; i <= top; i++){
            System.out.print(arr[i]);
        }
    }

    public void pop(){
        if(top == -1){
            System.out.println("Stack is empty");
            return;
        }
        System.out.println("Popped element is: "+arr[top]);
        top--;
    }

    public boolean isEmpty(){
        return top == -1;
    }

    public void size(){
        System.out.println("Size of stack is: "+(top+1));
    }
}
public class StackImplimentation {
    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(10);
        s.push(20);
        s.push(30);
        s.push(40);
        s.push(50);
        s.display();
        s.peek();
        s.pop();
        s.display();
        System.out.println(s.isEmpty());
    }
}
