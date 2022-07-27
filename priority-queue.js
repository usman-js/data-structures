//data=> collection (2d array that holds data and priority)
//func=> print, enqueue, dequeue, size, front, isEmpty

const PriorityQueue = function () {
  this.collection = [];

  this.print = () => {
    return this.collection;
  };

  this.enqueue = (data) => {
    if (this.size() === 0) {
      this.collection.push(data);
    } else {
      let added = false;
      for (let i = 0; i < this.size(); i++) {
        if (data[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, data);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(data);
      }
    }
  };

  this.dequeue = () => {
    const val = this.collection.shift();
    return val[0];
  };

  this.size = () => {
    return this.collection.length;
  };

  this.front = () => {
    if (this.size() > 0) {
      return this.collection[0][0];
    }

    return undefined;
  };

  this.isEmpty = () => {
    return this.size === 0;
  };
};

const pQ = new PriorityQueue();

pQ.enqueue(["usman", 1]);
pQ.enqueue(["Khan", 5]);
pQ.enqueue(["Bilal", 2]);
pQ.enqueue(["Khan", 3]);
console.log(pQ.print());
