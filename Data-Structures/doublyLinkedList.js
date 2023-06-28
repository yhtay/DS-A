class Node {
    constructor (val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let targetNode = this.tail
        if (this.length === 1) {
            this.head === null;
            this.tail === null;
        } else {
            this.tail = targetNode.prev
            this.tail.next = null
            targetNode.prev = null
        }
        this.length--
        return targetNode
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--
        return oldHead
    }
}

let list = new DoublyLinkedList()
list.push("11")
list.push("22")
list.push("33")
list.push("44")
list.push("55")

console.log(list.shift())
console.log(list.shift())
