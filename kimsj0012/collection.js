class Collection {
  #arr;
  constructor(...args) {
    return (this.#arr = Array.isArray(...args) ? args[0] : [...args]);
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
    let stackArr = [v, ...this._arr];
    return stackArr.toReverse();
  }

  pop() {
    console.log('pop');
    return this.shift();
  }

  // get peek() {}

  // get poll() {}

  clear() {
    this._arr.length = 0;
    return this;
  }
}

export class Queue extends Collection {
  enqueue(v) {}

  dequeue() {}
}

export class ArrayList extends Collection {
  add(val, idx) {}

  remove(val) {
    return this._arr.filter((e) => e !== val);
  }

  indexOf(val) {}

  set(idx, val) {}

  get(val) {}

  contains(val) {}

  toList() {}

  static listToArray(list) {}
  static arrayToList(arr) {
    let node;
    for (let i = arr.length; i >= 0; i -= 1) {
      node = !node ? { value: arr[i] } : { value: arr[i], rest: node };
    }
  }

  toString() {
    return ArrayList.arrayToList(this._arr);
  }
}
