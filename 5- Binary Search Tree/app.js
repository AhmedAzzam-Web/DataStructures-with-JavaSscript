class Node {
    constructor (data, left = null , right = null) {        //the data we are trying to store either on the right or the left
        this.data = data;
        this.left = left;       //left is always less than its parent node
        this.right = right;     //right is always greater than its parent node
    }
}

class Bst {     //binary search tree
    
    constructor() {
        this.root = null        //create the root which on the top of the tree
    }

    //this is a function add
    add (data) {
        
        //point the node to the root data
        const node = this.root;
        
        //if the node that points to the root is null that means the tree has no value
        if (node === null) {

            //so we point the root to the first new created node which will be the root
            this.root = new Node(data);
            return;
        }
        else {

            //this function will search the tree to place new data in, the node is currently this.root
            const searchTree = function (node) {
                
                //if data provided is less than the parent node place the new node to the left 
                if (data < node.data) {

                    //if there is no node on the left create it and store the date in it
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    }
                    //if there is node on the left run the function again and keep searching but with the node.left which means the node will point to left of the root
                    else if(node.left !== null) {
                        return searchTree(node.left);
                    }
                    
                }
                //if data provided is greater than the parent node place the new node to right 
                else if (data > node.data) { 
                    
                    //if there is no node on the right create it and store the date in it
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    }
                    //if there is node on the right run the function again and keep searching but with the node.right which means the node will point to right of the root
                    else if (node.right !== null) {
                        return searchTree(node.right);
                    }

                }
                else {
                    return null;
                }

            }

            return searchTree(node);
        }


    }

    findMin () {

        // create new pointer that points to root
        let current = this.root;        

        // get last item in the left of the left of the left ... ,left has the lowest value
        while (current.left !== null) {
            current = current.left
        }

        // if (current === null) {
        //     return null
        // }
        return current.data

    }

    findMax () {

        // create new pointer that points to root
        let current = this.root;

        // get last item in the right of the right ... ,right has the lowest value
        while (current.right !== null) {
            current = current.right
        }

        // if (current === null) {
        //     return null
        // }
        return current.data
    }

    find (data) {
        let current = this.root;
        
        while (current.data !== data) {
            
            if (data < current.data) {
                current = current.left
            }

            else {
                current = current.right
            }

            // if (current === null) {
            //     return null
            // }
            return current
        }
    }

    // check if element is in the tree or not 
    isExist (data) {
        let current = this.root;
        console.log(current);

        while (current !== null) {
            
            if (data === current.data) {
                return true
            }

            if (data < current.data) {
                current = current.left
            }
            else {
                current = current.right
            }
        }

        return false
        
    }


    remove(data) {

        // the remove function the data is the element you provide , the node is the pointer you will work with;
        const removeNode = function (node , data) {
            
            if (node === null) {
                return null;
            }
            else {

                if (data === node.data) {

                    // if node has no children
                    if (node.left === null && node.right === null) {
                        return null
                    }
                    
                    // if node has no left children
                    else if (node.left === null) {
                        return node.right
                    }
                    
                    // if node has no right children
                    else if (node.right === null) {
                        return node.left
                    }

                    // if node has two children left and right
                    else {
                        // temp node points to right node
                        let tempNode = node.right
                        
                        // tempNode will point to the left node of the (right node which it currently points at) so if there is left node, tempNode will point to it
                        while (tempNode.left !== null) {
                            tempNode = tempNode.left
                        }
                        node.data = tempNode.data   //so the value of node will change data to left of the right node
    
                        //the function will keep running through node right then node left then node right then node left ... until it reaches the last left of the right
                        node.right = removeNode(node.right , tempNode.data)
    
                        return node;
                    }

                    // return node

                }

                // if data is less than node.data
                else if(data < node.data) {
                    
                    // it will start from the left node so it will go like left node (the root or the parent node) then right node then left node ...
                    
                    node.left = removeNode(node.left , data)
                    return node;
                }

                // if data is greater than node.data
                else if(data > node.data) {
                    
                    // it will start from the right node so it will go like right node (the root or the parent node) then left node then right node then left node ...
                    
                    node.right = removeNode(node.right , data)
                    return node;
                }

                else {
                    return null;
                }

            }
            // the end of the big else
        }
        // after the function call it
        this.root = removeNode(this.root , data)
    }

    // this function checks if the tree is balanced (has node on the left and node on the right that means it is balanced)
    isBalanced () {
        // this'll check if the height of the tree on the right side is equal to the left side
        // console.log(`the left side height of the tree is : ${this.leftHeight()}`);     //run it to see the result height
        // console.log(`the righth height of the tree is : ${this.rightHeight()}`);    //run it to see the result height
        return (this.leftHeight() === this.rightHeight())
    }

    leftHeight (node = this.root) {
        
        if (node === null) {
            return null;
        }

        let left = this.leftHeight(node.left)
        let right = this.leftHeight(node.right)

        // this will check the left side height because left is always less than right
        if (left < right) {
            // console.log(`left in the leftHeight ${left + 1}`);
            return left + 1
        }
        else {
            // console.log(`right in the leftHeight ${right + 1}`);
            // console.log("-".repeat(20));
            return right + 1
        }
    }

    rightHeight (node = this.root) {
    
        if (node === null) {
            return null;
        }

        let left = this.rightHeight(node.left)
        let right = this.rightHeight(node.right)

        // this will check the right side height because right is always greate than right
        // left side will never be bigger than right so it will go to else and apply it
        if (left > right) {
            // console.log(`left in the rightHeight ${left + 1}`);
            // console.log("-".repeat(20));
            return left + 1
        }
        else {
            // console.log(`right in the rightHeight ${right + 1}`);
            // console.log("-".repeat(20));
            return right + 1
        }

    }

    // this will display the element from the last leaf on the left and will go like left then right ...
    inOrder() {

        if (this.root == null) {
            return null;
        }
        
        else {
            var result = new Array();

            function traverse(node) {

                // if there is node on the left replace node with it, continue recursive function till get the last left item
                (node.left) ? traverse(node.left) : false;
                
                // we will push the value of node to the array
                result.push(node.data);
                
                // after reaching the last left element check the right so it goes like left then right ...
                // if there is node on the right of the left replace node with it, continue recursive function
                (node.right) ? traverse(node.right) : false;
            }
            traverse(this.root);
            return result;
        }
    }





    
}



const bst = new Bst();

bst.add(20);
bst.add(6);
bst.add(26);
bst.add(3);
bst.add(9);
bst.add(36);
bst.add(5);
bst.add(21);


console.log(bst.findMin());    //this will print 3
console.log(bst.findMax());    //this will print 36

bst.remove(3)       //this will remove the min value
console.log(bst.findMin());     //this will print 5 after removing the the lowest element

console.log(bst.isExist(3));    //this checks if 3 exists or not

console.log(`the left side height of the tree is : ${bst.leftHeight()}`);
console.log(`the righth height of the tree is : ${bst.rightHeight()}`);

console.log(`is binary search tree balanced : ${bst.isBalanced()}`);
