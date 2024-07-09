class Collection {
  #arr;
  constructor(...args) {
    this.#arr = args || [];
  }

  get _arr() {
    return this.#arr;
  }

  toString() {
    if (this.#isStack()) {
      return this.#arr.join(',');
    }

    return this.#arr.join();
  }

  #isStack() {
    return this.constructor.name === 'Stack';
  }

  iterator() {
    return this[Symbol.iterator]();
  }
}

export class Stack extends Collection {
  push(v) {
  }

  pop() {
    
  }

  get peek() {}

  get poll() {}
}

export class Queue extends Collection {
  enqueue(v) {
    
  }

  dequeue() {
   
  }
}

export class ArrayList extends Collection {
  add(val, idx) {}

  remove(val) {}

  indexOf(val) {}

  set(idx, val) {}

  get(val) {}

  contains(val) {}

  toList() {}

  static listToArray(list) {}
  static arrayToList(arr) {}

  toString() {
    return ArrayList.arrayToList(this._arr);
  }
}

