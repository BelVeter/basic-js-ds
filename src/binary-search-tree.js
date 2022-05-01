const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.head;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.head = addInto(this.head, data);
    //console.log(this.head);

    function addInto(node, value){
      if(!node){//empty
        return new Node(value);
      }
      else if(node.data===value){//equal
        return node;
      }
      else if(value<node.data){//less tha node data => go to left
        node.left = addInto(node.left, value);
      }
      else{//grater than node.data => go to right
        node.right = addInto(node.right, value);
      }

      return node;
    }

  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return lookInside(this.head, data);

    function lookInside(node, value){
      if(!node) return false;
      else if(node.data==value) return true;
      else if (value < node.data) return lookInside(node.left, value);
      else return lookInside(node.right, value);
    }

  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return lookInside(this.head, data);

    function lookInside(node, data){
      if(!node) return null;
      else if(node.data==data) return node;
      else if (data < node.data) return lookInside(node.left, data);
      else return lookInside(node.right, data);
    }
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.head = removeNode(this.head, data);

    function removeNode(node, data) {
      if(!node){
        return null;
      }
      else if(data<node.data) {//less than node
        node.left = removeNode(node.left, data);
        return node;
      }
      else if(data>node.data) {//grater than node
        node.right = removeNode(node.right, data);
        return node;
      }
      else{ // found! = equal
        if(node.left === null && node.right === null) {//no children => replace with null
          return null;
        }
        else if(node.left === null) { //no left => right only => assign right node
          node = node.right;
          return node;
        }
        else if(node.right === null){//no right => left only => assign left node
          node=node.left;
          return node;
        }
        else{//both left and right children present
          let minFromRight = node.right;
          while(minFromRight.left) {
            minFromRight=minFromRight.left;
          }
          node.data=minFromRight.data;

          node.right=removeNode(node.right, minFromRight.data);

          return node;
        }
      }

    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.head) return;
    let node = this.head;
    while(node.left){
      node=node.left;
    }
    return node.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.head) return;
    let node = this.head;
    while(node.right){
      node=node.right;
    }
    return node.data;
  }

  constructor(){
    this.head = null; 
  }
}

// let tree = new BinarySearchTree();
// tree.add(7);
// //tree.add(2);
// tree.add(9);

// function printNode(node){
//   console.log(`data:${node.data}, left-value:${node.left?.data}, right-value:${node.right?.data}`);
// }
// printNode(tree.head);

//console.log(new Node(7));

module.exports = {
  BinarySearchTree
};
