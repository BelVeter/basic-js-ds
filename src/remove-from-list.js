const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

 class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }

 function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

function removeKFromList(l, k) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // printListNode(l);

  let current=l;
  let previous = null;
  while(current) {
    if(current.value==k) {
      if(previous==null) l=current.next;
      else{
        previous.next=current.next;
        current=previous;
      }
    }
    previous=current;
    current=current.next;
  }
  // console.log('----');
  // printListNode(l);

  return l;

  function printListNode(list){
    let current=list;
    while(current) {
      console.log(current);
      current=current.next;
    }
  }
}


removeKFromList(convertArrayToList([1, 2, 3, 3, 4, 5]), 3);

module.exports = {
  removeKFromList
};
