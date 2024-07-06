class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args || [];
  }

  get _arr() {
    return this.#arr;
  }

  get _len() {
    return this.#arr.length;
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

  *[Symbol.iterator]() {
    for (let i = this._len - 1; i >= 0; i -= 1) {
      yield this._arr[i];
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }
}

export class Stack extends Collection {
  push(v) {
    // this._arr.push(v);
    this._arr.push(v);
    return this._arr;
  }

  pop() {
    return this._arr.pop();
  }

  get peek() {
    return this._arr[this._arr.length - 1];
  }

  get poll() {
    return this._arr.pop();
  }
}

export class Queue extends Collection {
  enqueue(v) {
    this._arr.shift(v);
    return this._arr;
  }

  dequeue() {
    return this._arr.pop();
  }
}

export class ArrayList extends Collection {
  add(val, idx) {
    return this._arr.splice(idx, 0, val);
  }

  remove(val) {
    const idx = this._arr.indexOf(val);
    return this._arr.splice(idx, 1);
  }

  indexOf(val) {
    return this._arr.indexOf(val);
  }

  set(idx, val) {
    return this._arr.splice(idx, 0, val);
  }

  get(val) {
    return this._arr;
  }

  contains(val) {
    return this._arr.includes(val);
  }

  toList() {
    return ArrayList.arrayToList(this._arr);
  }

  static listToArray(list) {
    let ret = [];
    let node = list;
    while (true) {
      ret.push(node.value);
      node = node?.rest;

      if (!node) break;
    }
    return ret;
  }
  static arrayToList(arr) {
    const len = arr.length;
    let node = { value: arr[len - 1] };
    for (let i = len - 2; i >= 0; i -= 1) {
      node = { value: arr[i], rest: node };
    }

    return node;
  }

  toString() {
    return ArrayList.arrayToList(this._arr);
  }
}
