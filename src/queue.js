const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.first;
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.first === null) {
      this.first = new ListNode;
      this.first.value=value;
    }
    else{
      let node = this.first;
      while(node.next) {
        node=node.next;
      }
      node.next = new ListNode;
      node.next.value=value;
    }
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let value = this.first.value;
    this.first=this.first.next;
    return value;
  }
  constructor(){
    this.first=null;
  }
}

// queue = new Queue;
// //console.log(queue);
// queue.enqueue(1); // adds the element to the queue
// queue.enqueue(3); // adds the element to the queue
// console.log(queue.dequeue());

// console.log(queue.first, queue.first.next);

module.exports = {
  Queue
};
