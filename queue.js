//data=> collection
//func=> print, enqueue, dequeue, size, front,isEmpty
const Queue = function () {
  this.collection = [];

  this.print = () => {
    return this.collection;
  };

  this.enqueue = (val) => {
    this.collection.push(val);
  };

  this.dequeue = (val) => {
    this.collection.shift(val);
  };

  this.size = () => {
    return this.collection.length;
  };

  this.front = () => {
    if (!this.isEmpty()) {
      return this.collection[0];
    }
    return undefined;
  };

  this.isEmpty = () => {
    return this.collection.length === 0;
  };
};
