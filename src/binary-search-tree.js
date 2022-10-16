const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 **/


class BinarySearchTree extends Node {

    constructor() {
        super();
        this.treeRoot = null;

    }

    root() {
        return this.treeRoot;
    }

    add(data) {
        let node = new Node(data);
        if (this.treeRoot !== null) {

            this.addToTree(this.treeRoot, node);
        } else {
            this.treeRoot = node;
        }
    }

    addToTree(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.addToTree(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.addToTree(node.right, newNode);
            }
        }
    }
    has(data) {
        let current = this.treeRoot;
        while (current != null) {
            if (data > current.data) { current = current.right } else {
                if (data < current.data) { current = current.left; } else { return true; }
            }

        }
        return false;
    }

    find(data) {
        let current = this.treeRoot;
        while (current !== null) {
            if (data > current.data) { current = current.right } else {
                if (data < current.data) { current = current.left; } else { return current; }
            }

        }
        return null;
    }
    remove(data) {
        this.treeRoot = this.removeNode(this.treeRoot, data);
    }

    minNode(node) {
       
        if (node.left === null)
            return node;
        else
            return this.minNode(node.left);
    }

    removeNode(node, data) {
        if (node === null) {
            return null;

        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
            
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
            
        } else {
          
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
          
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            
            let newNode = this.minNode(node.right);
            node.data = newNode.data;
            node.right = this.removeNode(node.right, newNode.data);
            return node;
        }
    }

    min() {
        let current = this.treeRoot;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    max() {
        let current = this.treeRoot;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
}

module.exports = {
    BinarySearchTree
};
