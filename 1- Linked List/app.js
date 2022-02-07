class LinkedList {
    constructor() {

        // this is the Node function that create the node(element , pointer)
        class Node {
            constructor(element) {
                this.element = element;
                this.next = null;
            }
        }

        // length is the number of nodes in the linked list
        let length = 0;

        // head is the pointer
        let head = null;

        // this returns the size of the linked list
        this.size = () => {
            return length;
        };

        // this return the head node
        this.head = () => {
            return head;
        };

        this.add = (element) => {

            // this will create the node from the last so the pointer next points to null
            var node = new Node(element);

            // if there is no node in the linked list that means head points to null so we add the new first node in the head
            if (head === null) {
                // the head will be the node. it will not equal null anymore.
                head = node;
            }
            else {
                // if there is head already and remember it doesnot queal null so it has pointer next so I want to make recrusive function that bring the last pointer in the linked list that has pointer next null. 
                let currentNode = head;

                while (currentNode.next) {
                    currentNode = currentNode.next;
                }

                // so it will add the node to the last of the linked list
                currentNode.next = node;

            }
            // in both cases the length will increase by one
            length++;
        };

        // remove function
        this.remove = (element) => {

            let currentNode = head;
            let desiredNode;

            if (head === null) {
                return `there is no element in the linked list`;
            }

            if (currentNode.element === element) {
                head = currentNode.next;
            }
            else {

                // this loop will check all nodes for the node that is previous to the node we want to delete and will save it in the desiredNode
                while (currentNode.element !== element) {
                    desiredNode = currentNode;
                    // after we ctach the desired node we want to delete point the current node to the node after it
                    currentNode = currentNode.next;
                    break;
                }

                // then point the previous to the next that is how it gets deleted
                desiredNode.next = currentNode.next;

            }

            length--;

        };

        this.isEmpty = () => {
            return length === 0;
        };

        // you pass the element and want the index
        this.indexOf = (element) => {

            let curretnNode = head;
            let index = -1;

            // this loop will start from index -1. -1 means there is no elemetn in the linked list so after adding one which is default is gonna be the head so it will move to 0 and after adding another one it will move to 1 ...
            while (curretnNode) {
                index++;

                if (curretnNode.element === element) {
                    return index;
                }

                curretnNode = curretnNode.next;
            }

            // if it did not return anything from the loop it will return -1 which means there is no element
            return -1;
        };

        // here you pass the index and want the element
        this.elementAt = (index) => {

            let curretnNode = head;
            let count = 0;

            // this loop will start counting till it reaches the node that is previous to desired node so it will catch it and get the next of it which will be the desired node which is the index node and will return index element
            while (count < index) {
                count++;
                curretnNode = curretnNode.next;
            }

            return curretnNode.element;
        };

        this.insert = (index, element) => {

            let node = new Node(element);

            let currentNode = head;
            let previousNode;
            let currentIndex = 0;

            if (index > length) {
                return -1;
            }

            if (index === 0) {
                node.next = currentNode;
                head = node;
            }
            else {
                while (currentIndex < index) {
                    currentIndex++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                node.next = currentNode;
                previousNode.next = node;
            }
            length++;
        };

        this.removeAt = function (index) {
            var currentNode = head;
            var previousNode;
            var currentIndex = 0;
            if (index < 0 || index >= length) {
                return null;
            }
            if (index === 0) {
                head = currentNode.next;
            }
            else {

                while (currentIndex < index) {

                    currentIndex++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;

                }
                previousNode.next = currentNode.next;
            }
            length--;
            return currentNode.element;
        };
    }
}

let types = new LinkedList()

types.add('person')
types.add('smart')
types.add('stupd')
types.add('animal')
types.add('dog')
types.add('cat')

console.log(types.isEmpty());
console.log(types.size());
console.log(types.elementAt(3));
console.log(types.indexOf('animal'));

types.insert(3 , 'inserted-element')
console.log(types.elementAt(3));

// types.removeAt(3)
// console.log(types.elementAt(3));

console.log('-'.repeat(20));

console.log(types.elementAt(0));
console.log(types.elementAt(1));
console.log(types.elementAt(2));
console.log(types.elementAt(3));
console.log(types.elementAt(4));
console.log(types.elementAt(5));
console.log(types.elementAt(6));

console.log('-'.repeat(20));

types.remove('smart')

console.log(types.elementAt(0));
console.log(types.elementAt(1));
console.log(types.elementAt(2));
console.log(types.elementAt(3));
console.log(types.elementAt(4));
console.log(types.elementAt(5));

try {
    console.log(types.elementAt(6));
} catch (error) {
    throw Error('these are all the elements in the linked list , there is not others')
}