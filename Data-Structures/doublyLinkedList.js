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

    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let count;
        let current;
        if (index <= this.length / 2) {
            count = 0
            current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while (count !== index) {
                current = this.tail.prev
                count--
            }
        }
        return current
    }
}

let list = new DoublyLinkedList()
list.push("11")
list.push("22")
list.push("33")
list.push("44")
list.push("55")
list.push("66")

console.log(list.get(0))
console.log(list.get(2))
// console.log(list)
