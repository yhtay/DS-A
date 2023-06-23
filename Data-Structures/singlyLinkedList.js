class Node {
    constructor (val) {
        this.val =  val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push (val) {
        let newNode = new Node (val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop () {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // console.log("current: ", current.val)
        // console.log("newTail: ", newTail.val)
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        // If there's one item left
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift () {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead;
    }


}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("GoodBye")
list.push("See")
list.push("You")

// console.log(list.pop())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())

list.unshift("hi")
console.log(list)
