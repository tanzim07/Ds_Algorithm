/*
 * File           : linked_list.constructor.js
 * Project        : ds_and_algorithm
 * Created Date   : Th 14 Mar 2024 10:04:06
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Mar 14 2024
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

class LinkedList {
  // A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.

  // In this constructor we are creating a linked list with a single node.
  // The node has a value and a pointer to the next node.
  // The head and tail are the same node.
  // The length of the linked list is 1.
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }
  push(value) {
    const newNode = {
      value: value,
      next: null,
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.head !== null) {
      let temp = this.head;
      let pre = this.head;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      //   if only one element in the linked list
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return temp;
    } else {
      console.log("Empty linked list");
    }
  }

  unshift(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

function linked_list() {
  let myLinkedList = new LinkedList(4);
  myLinkedList.push(5);
  myLinkedList.push(32);
  myLinkedList.pop();
  myLinkedList.pop();
  myLinkedList.pop();
  myLinkedList.pop();
  myLinkedList.pop();
  myLinkedList.pop();
  myLinkedList.unshift(23);
  //   myLinkedList.unshift(231);
  //   myLinkedList.pop();
  //   myLinkedList.pop();
  //   console.log("Linked List:");

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  myLinkedList.printList();
}

linked_list();
