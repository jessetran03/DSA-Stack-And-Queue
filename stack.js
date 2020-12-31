class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// 1. Create a stack class
// 2. Useful methods for a stack

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  peek() {
    const node = this.top;
    console.log(node.data)
    return node.data;
  }
  isEmpty() {
    if (this.top === null) {
      return true;
    }
    return false;
  }
  display() {
    let node = this.top;
    while (node !== null) {
      console.log(node.data);
      node = node.next
    }
  }
}

const starTrek = new Stack;
/*starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
starTrek.pop()
starTrek.pop()
starTrek.display()*/

// 3. Check for palindromes using a stack

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let palindrome = new Stack;
  let reverse = '';
  s.split('').map((char => palindrome.push(char)));
  for (let i = 0; i < s.length; i++) {
    reverse += palindrome.pop();
  }
  return s === reverse;
}

// True, true, true, false
/*console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));*/

// 4. Matching parentheses in an expression



// 5. Sort stack

function sortStack(stack) {
  const secondStack = new Stack;
  let sorted = false;
  while (!sorted) {
    sorted = true
    let temp = stack.pop();
    while (stack.top != null) {
      if (stack.top.data > temp) {
        secondStack.push(temp);
        temp = stack.pop();
      }
      else {
        secondStack.push(stack.pop())
        sorted = false;
      }
    }
    stack.push(temp)
    while (secondStack.top) {
      stack.push(secondStack.pop())
    }
  }
}

const numStack = new Stack;
numStack.push(5);
numStack.push(3);
numStack.push(4);
numStack.push(2);
numStack.push(6);
numStack.push(1);

//numStack.display(numStack)
sortStack(numStack)
//console.log('---')
//numStack.display();