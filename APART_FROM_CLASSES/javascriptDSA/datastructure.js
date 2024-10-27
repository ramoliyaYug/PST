/*
- a data structure is the way to store and organize the data so that it can be used efficiently
- a data structure is the collection of values, the relationship among them and a functional operation that can be applied to that data

- built in data structures:
 -arrays
 -objects
 -sets
 -maps

- custom data structures:
 -stacks
 -queues
 -circular queues
 -linked lists
 -hash tables
 -trees
 -graphs
*/

/*
1. Arrays:
- an array is the data structure that can hold the collection of the values
- arrays can contain a mix of data types.
- arrays are resizable.
- js arrays are zero-indexed and the insertion order is maintained
- arrays are iterable using for of loop.

- some worst case time complexity of some array methods
 - insert/remove from the end = O(1)
 - insert/remove from the beginning = O(n)
 - access = O(1)
 - search = O(n)
 - push/pop = O(1)
 - shift/unshif/concate/slice/splice = O(n)
 - forEach/map/filter/reduce = O(n)
*/

/*
2. Objects:
- an objects is an unordered collection of key value pair. the key must either be  a string or symbol datatype where as the value cab be of either any type
- to retrive a value, you can use the corresponding key. this can be done by either dot notation or a bracket notation
- an object is not an iterable

- some worst case time complexity of some object methods
 - insert/delete/access = O(1)
 - serach/Obj.keys/Obj.values/Obj.entries = O(n)
*/

/*
3. Sets:
- set is the data structure that can hold a collection of values. the values however must be unique
- set can contain mix type of different data types.
- sets are dynamically sized.
- sets do not maintain an insertion order
- sets are iterable

- set vs array:
 - arrays can contain duplicate values whereas sets cannot
 - insertion order is maintained in the array but it is not the case with sets
 - searching and deleting an element in the set is faster than the array
*/

const set = new Set([1,2,3]);
set.add(4);
console.log(set.has(4));
set.delete(4);
console.log(set.size);
set.clear();
console.log(set);
for(const items of set){
    console.log(items);
}

/*
4. Maps:
- a map is unordered collection of key/value pairs. both keys and values can be of any data type.
- to retrive a value, you can use the corresponging key
- maps are iterables.

- Objects vs maps
 - objects are unorderes whereas maps are ordered
 - keys in objcts can only be string or symbol type whereas in maps they can be of any type.
 - an object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful. a map on the other side does nor contain any keys by default.
 - objects are not iterable whereas maps are iterable
 - the number of items in an object must be determined manually where as it is readily available with the size property in a map.
 - apart from storing data, you can add functionality to an object whereas maps are resticted to just storing data.
*/

const map = new Map([['a',1],['b',2]]);
map.set('c', 3);
map.delete('c');
console.log(map.has('a'));
console.log(map.size);
map.clear();
for(const [key,value] of map){
    console.log(`${key} : ${value}`)
}

/*
5. Stacks:
- the stack data structure is a sequential collection of elements that follows the principle of last in first out (LIFO)
- the last elements inserted into the stack is the first element to be removed
- a stack of plates. the last plate placed on top of the stack is also the first plate removed from the stack.
- stack is an abstract data type. it define by its behaviour rather than being a mathematical model
- the stack data structure supports two main operations.
 - push, which adds an element to the collection
 - pop, which removes the most recently added element from the collection

- stack usage:
 - browser history tracking
 - undo operation when typing
 - expression converstion
 - call stack in javascript runtime
*/

let stack = [];
stack.push(1);
console.log(stack.pop()); // 1

/*
6. Queues:
- the queue data structure is a sequential collection of elements that follows the principle of first in first out (FIFO).
- the first element inserted into the queue is the first element to be removed.
- a queue is an abstract data type. it define by its behaviour rather than being a mathematical model.
- the queue data structure supports two main operations
 - enqueue, which adds an element to the rear/tail of the collection
 - dequeue, which removes the element from the front/head of the collection

- queue usage:
 - printers
 - cpu task scheduling
 - callback queue in js runtime
*/

/*
queue implementation:
- enqueue(element)-add an element to the queue
- dequeue()-remove an element from the queue
- peek()-get the value of an element at the front of the queue without removing it
- isEmpty()-check if the queue is empty
- size()-get the number of elements in the queue
- print()-visualize the element in the queue
*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
   if (!this.isEmpty()) {
     return this.items[0];
   }
   return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

//optimized queue implementation:

class Queue {
    constructor(){
        this.items = {}
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue(){
        const element = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return element;
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }
    
    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear - this.front;
    }

    print(){
        console.log(this.items)
    }
}

const queue2 = new Queue();

console.log(queue2.isEmpty());

queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
console.log(queue2.size());
queue2.print();
console.log(queue2.dequeue());
console.log(queue2.peek());

