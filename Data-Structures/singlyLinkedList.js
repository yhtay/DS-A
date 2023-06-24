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
    unshift (val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }
    /*
        Get: Retrieve a node by it's position in the Linked List!
        not efficient with linked list, array is preferred
    */
    get (index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count !== index) {
            current = current.next
            count++
        }
        return current
    }
    /*
        Set: Change the value of a node based on it's position in the Linked List
    */
    set (index, val) {
        let targetNode = this.get(index)
        if (targetNode) {
            targetNode.val = val
            return true;
        }
        return false;
    }

}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("GoodBye")
list.push("See")
list.push("You")
list.push("Later")

// console.log(list.pop())
// console.log(list.shift())
// list.unshift("Hi")
list.set(4 , "Her")
console.log(list)
