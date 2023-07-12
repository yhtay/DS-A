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
    breadthFirstSearch() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value); //pushing value for data visulaization
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() { // Left side first then right side
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    DFSPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(current);
        return data;
    }
    DFSInOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log("BFS: ", tree.breadthFirstSearch())
console.log("DFS-PreOrder: ", tree.DFSPreOrder())
console.log("DFS-PostOrder: ", tree.DFSPostOrder())
console.log("DFS-InOrder: ", tree.DFSInOrder())

/*
Time complexity for all of the tree Traversal: O(N + E) where N is number of nodes and E is number of edges.
Space complexity:

BFS: Preferred for deep long tree, where you aren't storing as many nodes in the queue.
    If the tree is wide, using BFS will store too many nodes in the queue, takes more space.

Applications:
    DFS-Pre: Used to export the tree structure so it is easily reconstructed or copied. - you know the root of the tree, which is the first item.
    DFS-Post: Used for deleting nodes from a tree
    DFS-InOrder: Used if you want data to return "in order"
*/
