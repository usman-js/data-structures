//data=> collection
//func=> has, values, add, remove,size , union, intersection, difference, subset
const MySet = function () {
  this.collection = [];

  this.has = (val) => {
    return this.collection.indexOf(val) !== -1;
  };

  this.values = () => {
    return this.collection;
  };

  this.add = (val) => {
    if (!this.has(val)) {
      this.collection.push(val);
      return true;
    }
    return false;
  };

  this.remove = (val) => {
    if (this.has(val)) {
      const index = this.collection.indexOf(val);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = () => {
    return this.collection.length;
  };

  this.union = (otherSet) => {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach((val) => {
      if (!unionSet.has(val)) {
        unionSet.add(val);
      }
    });

    secondSet.forEach((val) => {
      if (!unionSet.has(val)) {
        unionSet.add(val);
      }
    });
    return unionSet;
  };

  this.intersection = (otherSet) => {
    const intersectionSet = new MySet();
    const firstSet = this.values();

    firstSet.forEach((val) => {
      if (otherSet.has(val)) {
        intersectionSet.add(val);
      }
    });
    return intersectionSet;
  };

  this.difference = (otherSet) => {
    const intersectionSet = new MySet();
    const firstSet = this.values();

    firstSet.forEach((val) => {
      if (!otherSet.has(val)) {
        intersectionSet.add(val);
      }
    });
    return intersectionSet;
  };

  this.subSet = (otherSet) => {
    const firstSet = this.values();
    return firstSet.every((val) => otherSet.has(val));
  };
};

const firstSet = new MySet();
const secondSet = new MySet();

firstSet.add(1);
firstSet.add(2);
secondSet.add(1);
secondSet.add(3);
console.log(firstSet.values());
console.log(firstSet.has(1));
firstSet.remove(1);
console.log(firstSet.values());
console.log(firstSet.has(1));
console.log(firstSet.union(secondSet).values());
