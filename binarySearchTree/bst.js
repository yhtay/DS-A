class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left

            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right

            }

        }
    }

    find (value) {
        if (!this.root) return undefined;
        let current = this.root
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false;
    }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(11)
tree.insert(9)
tree.insert(12)
tree.insert(14)
tree.insert(8)
tree.insert(15)

console.log(tree)
