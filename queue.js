// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 6. Create a queue using a Singly linked list

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  console.log(queue.first.value);
  return queue.first.value;
}

function isEmpty(queue) {
  console.log(!queue.first);
  return !queue.first;
}

function display(queue) {
  let node = queue.first;
  while (node !== null) {
    console.log(node.value);
    node = node.next
  }
}

let starTrekQ = new Queue;
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
//peek(starTrekQ)
//isEmpty(starTrekQ)
//display(starTrekQ)
starTrekQ.dequeue();
starTrekQ.dequeue();
//display(starTrekQ)


// 9. Square dance pairing

const men = new Queue;
const women = new Queue;

// 10. Ophidian Bank

function ophidianBank(queue)