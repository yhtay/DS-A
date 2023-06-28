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

    set(index, val) {
        let targetNode = this.get(index)
        if (targetNode) {
            targetNode.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) !!this.unshift(val);
        if (index === this.length) !!this.push(val);

        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let temp = prevNode.next

        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = temp
        temp.prev = newNode
        this.length++
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let targetNode = this.get(index);
        let beforeNode = targetNode.prev;
        let afterNode = targetNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        targetNode.next = null
        targetNode.prev = null
        this.length--
        return targetNode
    }
    reverse() {
        let currNode = this.head;
        let temp = null

        while (currNode !== null) {
            temp = currNode.prev;
            currNode.prev = currNode.next
            currNode.next = temp
            currNode = currNode.prev
        }
        if (temp !== null) {
            this.tail = this.head;
            this.head = temp;
        }
    }
    reverse() {
        let current = this.tail;
        this.tail = this.head;
        this.head = current;

        while (current !== null) {
            let prev = current.prev;
            current.prev = current.next;
            current.next = prev;

            current = current.next;
        }

    }

}

let list = new DoublyLinkedList()
list.push("11")
list.push("22")
list.push("33")
list.push("44")
list.push("55")
list.push("66")

console.log(list)
console.log(list.remove(10))
console.log(list)
