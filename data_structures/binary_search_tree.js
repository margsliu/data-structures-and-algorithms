class BinarySearchTree {
  constructor () {
    this._root = null;
  }

  add (value) {
    const newNode = new Node(value);
    if (!this._root) {
      this._root = newNode;
    } else {
      let currentNode = this._root;
      while (true) {
        if (newNode.value < currentNode.value) { // left
          if (!currentNode.leftChild) {
            currentNode.leftChild = newNode;
            break;
          } else {
            currentNode = currentNode.leftChild;
          }
        } else { // right
          if (!currentNode.rightChild) {
            currentNode.rightChild = newNode;
            break;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }

  contains (desiredValue) {
    if (!this._root) {
      return false;
    } else {
      let currentNode = this._root;
      while (true) {
        if (currentNode.value === desiredValue) return true;
        if (desiredValue < currentNode.value) { // left
          if (!currentNode.leftChild) {
            return false;
          } else {
            currentNode = currentNode.leftChild;
          }
        } else { // right
          if (!currentNode.rightChild) {
            return false;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }

  findLargest () {
    let largest = this._root;
    if (!largest) return null;
    while (true) {
      if (!largest.rightChild) return largest.value;
      else largest = largest.rightChild;
    }
  }

  findSmallest () {
    let smallest = this._root;
    if (!smallest) return null;
    while (true) {
      if (!smallest.leftChild) return smallest.value;
      else smallest = smallest.leftChild;
    }
  }

}


class Node {
  constructor (value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

module.exports = BinarySearchTree;