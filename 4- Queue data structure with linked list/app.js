function Queue() {
    
    var array = []

    // this function will display the array items
    this.display = function () {
        console.log(array);
    }

    // this function checks whether the array is empty or not
    this.isEmpty = function () {
        return (array.length === 0) ? true : false
    }

    // -------------------------------------------
    // this function adds the element to the end of the array to apply the concept lilo(last-in-last-out) i made that concept. without proritising the indexes like the first , the secod if you inserted the value as an array [index, value]

    /* this.inqueue = function (element) {
        return array.push(element)
    } */
    // -----------------------------------------


    // this function on the other hand proritise the indexes it will make the first element in front of the array if it has the least index which comes first. it sort them in ascending order
    this.inqueue = function (element) {
        if (this.isEmpty()) {
            array.push(element)
        }
        else {
            var isAdded = false;

            for (var i = 0; i < array.length; i++) {

                if (element[0] < array[i][0]) {     //this will check if the index of the element is less than other indexes

                    array.splice(i, 0, element)     //at positoin i add the elements

                    console.log(`i = ${i}`);        //this show what i refers to will explain the splice above it
                    console.log(`element = ${element}`);    // show where element will be in array[i] the place it'll be put
                    
                    isAdded = true;
                    break;
                }
                
            }

            if (!isAdded) {    //if is added = true ,it will push the element to the array that means it passed the condition
                array.push(element)
            }

        }
    }
    
    
    // this function removes the first element from the begining of the array to apply the concept fifo (first-in-first-out)
    this.dequeue = function () {
        return array.shift()
    }

    // this brings the first element of the array the front of it
    this.front = function () {
        return array[0]
    }
    
    // this will bring the last element of the array
    this.last = function () {
        return array[ array.length - 1 ]
    }

    // this function will return the size of the array
    this.size = function () {
        return array.length
    }

}

let queue = new Queue()

// this adds the elements to the array without sorting the order ascendingly
/* queue.inqueue('no-1')
queue.inqueue('no-2')
queue.inqueue('no-3')
queue.inqueue('no-4')
queue.inqueue('no-5') */

// this adds the elements to the array with sorting the order ascendingly
queue.inqueue([1 , 'no-1'])
queue.inqueue([4 , 'no-4'])
queue.inqueue([3 , 'no-3'])
queue.inqueue([2 , 'no-2'])
queue.inqueue([5 , 'no-5'])
queue.inqueue([7 , 'no-7'])
queue.inqueue([6 , 'no-6'])

// this will return the array elements
queue.display()

// this removes the elements form the begining of the array
// queue.dequeue()

// this will bring the first element of the array
console.log( queue.front() );

// this brings the last element in the array
console.log( queue.last() );

// this returns the size of the array
console.log( queue.size() );

// this returns `array is empty` if empty and returns array elements if not empty
console.log( queue.isEmpty() );
