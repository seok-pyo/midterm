class Collection {
  #arr;
  constructor(...args) {
    if (this.#getConstructorName() === 'Collection') {
      throw ReferenceError('생성자 호출이 불가능합니다.');
    }
    this.#arr = args.length !== 0 ? this.#insertInitDate(...args) : [];
  }

  get _arr() {
    return this.#arr;
  }

  toString() {
    if (this.#isStack()) {
      return this.#arr.join(',');
    }
    if (this.#isQueue()) {
      return `[${this.#arr.join(',')}]`;
    }
    return this.#arr.join();
  }

  get size() {
    return this.#arr.length;
  }

  #isStack() {
    return this.#getConstructorName() === 'Stack';
  }

  #isQueue() {
    return this.#getConstructorName() === 'Queue';
  }

  #isArrayList() {
    return this.#getConstructorName() === 'ArrayList';
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  [Symbol.iterator]() {
    if (this.#isStack()) {
      let i = this.#arr.length - 1;
      const array = this.#arr;
      return {
        next() {
          return {
            value: array[i--],
            done: i < -1
          }
        }
      }
    }
    if (this.#isQueue() || this.#isArrayList()) {
      let i = 0;
      const array = this.#arr;
      return {
        next() {
          return {
            value: array[i++],
            done: i > array.length
          }
        }
      }
    }
  }

  get isEmpty() {
    return this.#arr.length === 0;
  }

  clear() {
    this.#arr = [];
  }

  #insertInitDate(...args) {
    return args.reduce((arr, cur) => {
      Array.isArray(cur) ? arr.push(...cur) : arr.push(cur);
      return arr;
    }, []);
  };

  #getConstructorName() {
    return this.constructor.name;
  }
}

export class Stack extends Collection {
  constructor(...args) {
    super(...args);
  }

  push(v) {
    this._arr.push(v);
    return this;
  }

  pop() {
    return this._arr.pop();
  }

  get peek() {
    return this._arr[this.size - 1];
  }

  get poll() {
    return this.pop();
  }
}

export class Queue extends Collection {
  constructor(...args) {
    super(...args);
  }
  enqueue(v) {
    this._arr.push(v);
    return this;
  }

  dequeue() {
    return this._arr.splice(0, 1)[0];
  }

  get peek() {
    return this._arr[0];
  }
}

export class ArrayList extends Collection {
  constructor(...args) {
    super(...args);
  }

  add(val, idx = this.size) {
    this._arr.splice(idx, 0, val);
    return this;
  }

  remove(val) {
    const deleteIndex = this._arr.indexOf(val);
    return this._arr.splice(deleteIndex, 1)[0];
  }

  indexOf(val) { }

  set(idx, val) { }

  get(val) { }

  contains(val) { }

  toList() { }

  toArray() {
    return [...this._arr];
  }

  get peek() {
    return this._arr[0];
  }

  static listToArray(list) {
    let node = list;
    const result = [];

    while (node !== undefined) {
      result.push(node.value);
      node = node.rest;
    }
    return result;
  }

  static arrayToList(arr) {
    let node = { value: arr[arr.length - 1] };
    arr.splice(arr.length - 1, 1);
    return arr.reduceRight((node, cur) => node = { value: cur, rest: node }, node);
  }

  toString() {
    return ArrayList.arrayToList(this._arr);
  }
}