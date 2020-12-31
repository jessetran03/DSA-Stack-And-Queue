class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

// 8. Queue implementation using a stack

class Queue {
  constructor() {
    this.firstStack = new Stack;
    this.secondStack = new Stack;
  }
  enqueue(data) {
    this.firstStack.push(data)
  }
  dequeue() {
    if (!this.firstStack.top) {
      return null;
    }
    while (this.firstStack.top) {
      this.secondStack.push(this.firstStack.pop())
    }
    let data = this.secondStack.pop()
    while (this.secondStack.top) {
      this.firstStack.push(this.secondStack.pop())
    }
    return data;
  }
  display() {
    let node = this.firstStack.top;
    while (node !== null) {
      console.log(node.data);
      node = node.next
    }
  }
}

const starTrek = new Queue;
starTrek.enqueue('Kirk')
starTrek.enqueue('Spock')
starTrek.enqueue('McCoy')
starTrek.enqueue('Scotty')
starTrek.display()
console.log('---')
starTrek.dequeue()
starTrek.dequeue()
starTrek.display()