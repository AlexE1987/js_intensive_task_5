class Node {
  constructor(elem) {
    this.elem = elem;
    this.prevElemLink = null;
  }
}

class Stack {
  constructor(stackMaxSize = 10) {
    this.stackMaxSize = stackMaxSize;
    this.stackSize = 0;
    this.top = null;
    if (!isFinite(this.stackMaxSize)) throw new Error('Max size value is invalid');
  }

  push(elem) {
    this.stackSize++;
    if (this.stackSize > this.stackMaxSize) throw new Error('The stack is full');

    const node = new Node(elem);
    node.prevElemLink = this.top;
    this.top = node;
  }
  pop() {
    this.stackSize--;
    if (this.stackSize === 0) throw new Error('The stack is empty');

    let topElem = this.top.elem;
    this.top = this.top.prevElemLink;

    return topElem;
  }
  peek() {
    if (this.stackSize === 0) return null;

    return this.top.elem;
  }
  isEmpty() {
    return this.stackSize === 0;
  }
  toArray() {
    const stackArray = [];
    let arrayElements = this.top;

    for (let i = 0; i < this.stackSize; i++) {
      stackArray.push(arrayElements.elem);
      arrayElements = arrayElements.prevElemLink;
    }

    return stackArray;
  }
  static fromIterable(iterable) {
    const iterableStack = new Stack();
    if (typeof iterable[Symbol.iterator] !== 'function') throw new Error('Data is not iterable');

    for (const iterator of iterable) {
      iterableStack.push(iterator);
    }

    return iterableStack;
  }
}

module.exports = { Stack };
