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

const dancers = [
  {
    name: 'Jane',
    gender: 'female',
  },
  {
    name: 'Frank',
    gender: 'male',
  },
  {
    name: 'John',
    gender: 'male',
  },
  {
    name: 'Sherlock',
    gender: 'male',
  },
  {
    name: 'Madonna',
    gender: 'female',
  },
  {
    name: 'David',
    gender: 'male',
  },
  {
    name: 'Christopher',
    gender: 'male',
  },
  {
    name: 'Beyonce',
    gender: 'female',
  }
]

function pair(people) {
  const spares = new Queue;
  for (let i = 0; i < people.length; i++) {
    if (spares.first === null) {
      spares.enqueue(people[i]);
    }
    else if (people[i].gender !== spares.first.value.gender) {
      console.log(people[i].name + ' is paired with ' + spares.first.value.name);
      spares.dequeue();
    }
    else {
      spares.enqueue(people[i]);
    }
  }
  display(spares);
}

//pair(dancers);

// 10. Ophidian Bank

function ophidianBank() {
  const customers = new Queue;
  for (let i = 0; i < 6; i++) {
    customers.enqueue({
      customer: i + 1, 
      appropiatePaperwork: Math.random() > 0.25
    })
  }
  display(customers)
  while (customers.first) {
    if (customers.first.value.appropiatePaperwork) {
      console.log(`Customer ${customers.first.value.customer} has been served.`)
      customers.dequeue();
    }
    else {
      console.log(`Customer ${customers.first.value.customer} sent to the back`)
      customers.first.value.appropiatePaperwork = true;
      customers.enqueue(customers.dequeue())
    }
  }
}

ophidianBank();