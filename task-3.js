class Storage {
  constructor(obinitialItems = []) {
    this.item = obinitialItems;
  }
  getItems() {
    return this.item;
  }
  addItem(item) {
    this.item.push(item);
  }
  removeItem(item) {
    const index = this.item.indexOf(item);
    if (index !== -1) {
      this.item.splice(index, 1);
    }
  }
}
const storage = new Storage(['apple', 'banana', 'orange']);
console.log(storage.getItems());

storage.addItem('pear');
console.log(storage.getItems());

storage.removeItem('banana');
console.log(storage.getItems());