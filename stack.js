//data=> count, storage
//func=> push, pop, size, peek

const Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = (val) => {
    this.storage[this.count] = val;
    this.count++;
  };

  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = () => {
    return this.count;
  };

  this.peek = () => {
    return this.storage[this.count - 1];
  };
};

const newStack = new Stack();

console.log(newStack.size());
newStack.push(1);
newStack.push(2);
console.log(newStack.size());
// console.log(newStack.pop());
console.log(newStack.size());
console.log(newStack.peek());
console.log(newStack.size());
