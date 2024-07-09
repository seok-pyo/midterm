class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args || []
  }

  get _arr() {
    return this.#arr;
  }

  toString() {
    if (this.#isStack()) {
      return this.#arr.join(',');
    }

    return `[${this.#arr.join()}]`;
  }

  #isStack() {
    return this.constructor.name === 'Stack';
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this._arr.length; i += 1) {
      yield this._arr[i]
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  get size() {
    return this._arr.length
  }

  clear() {
    this.#arr.length = 0
  }

  get isEmpty() {
    return this._arr.length === 0
  }

  get peek() {
    return this._arr[0]
  }

  get poll() {
    return this._arr.shift()
  }
}

export class Stack extends Collection {
  push(v) {
    super._arr.unshift(v)
    return this
  }

  pop() {
    return this._arr.shift()
  }
}

export class Queue extends Collection {
  enqueue(v) {
    super._arr.push(v)
    return this
  }

  dequeue() {
    return this._arr.shift()
  }


}

export class ArrayList extends Collection {
  add(val, idx) {
    this._arr.splice(idx ?? this._arr.length, 0, val)
    return this
  }

  remove(val) {
    let idx  = this._arr.indexOf(val)
    return this._arr.splice(idx, 1)
  }

  indexOf(val) {
    return this._arr.indexOf(val)
  }

  set(idx, val) {}

  get(val) {}

  contains(val) {}

  toList() {}
  
  toArray(){
    return this._arr
  }

  static listToArray(list) {
    const arr = []
    let node = list
    while (true) {
      arr.push(node.value)
      if (!node.rest) break
      node = node?.rest
    }
    return arr
  }
  static arrayToList(arr) {
    let node = {value : arr.at(-1)}
    for (let i = arr.length - 2;  i >= 0; i -= 1) {
      node = {value: arr[i], rest: node}
    }
    return node
  }

  toString() {
    return ArrayList.arrayToList(this._arr);
  }
}
