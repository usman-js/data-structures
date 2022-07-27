//data=>collection, count
//func=> size, has, set, get, delete, values, clear

const MyMap = function () {
  this.collection = {};
  this.count = 0;

  this.size = () => {
    return this.count;
  };

  this.has = (key) => {
    return key in this.collection;
  };

  this.set = (key, val) => {
    this.collection[key] = val;
    this.count++;
  };

  this.get = (key) => {
    return this.has(key) ? this.collection[key] : null;
  };

  this.delete = (key) => {
    if (this.has(key)) {
      delete this.collection[key];
      this.count--;
    }
  };

  this.values = () => {
    const values = Object.keys(this.collection).map(
      (key) => this.collection[key]
    );
    return values.length > 0 ? values : null;
  };

  this.clear = () => {
    this.collection = {};
    this.count = 0;
  };
};

let map = new MyMap();
map.set("arms", 2);
map.set("fingers", 10);
map.set("eyes", 2);
map.set("belley button", 1);

console.log(map.get("fingers"));
console.log(map.size());
console.log(map.values());
