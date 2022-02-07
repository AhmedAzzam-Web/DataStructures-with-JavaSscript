let mySet = function () {

    var setArray = []
    
    // values method that returns the values of the setArray
    this.values = () => setArray

    // has method if setArray has the element return true if not return false
    this.has = (item) => {
        if (setArray.includes(item)) {
            return true
        }
        else {
            return false
        }
    }

    // add method it adds the new elements in the last of the array
    this.add = (element) => {
        if (!this.has(element)) {
            setArray.push(element);
            return true
        }
        else {
            return false
        }
    }

    // delete method it takse the last item in out [remove the last element added]
    this.delete = function (item) {
        if (setArray !== '' && this.has(item)) {
            let index = setArray.indexOf(item)
            // console.log(index);
            setArray.splice(index , 1)
            return true
        }
        else {
            return `your item not found`
        }
    }

    // size method of the array
    this.size = function () {
        return this.values.length
    }

    // reverse the last item in the array to the beginning of the array
    this.lastItemReverse = function () {
        
        let reversedArray;

        for (let i = setArray.length - 1; i >= 0 ; i--) {
            reversedArray = setArray.splice(i , 1).concat(...setArray);
        }
        return reversedArray
    }

    // reverse all elements in the array
    this.reverse = function () {
        let reversedArray = [];
        // let arr;
        for (let i = setArray.length; i >= 0 ; i--) {
            // let reversedArray = setArray.splice(i , 1).concat(...setArray);
            // return reversedArray
            // reversedArray.push(setArray.splice(i , setArray.length).concat(...setArray))
            [...setArray].map(function () {
                // arr += setArray.pop()
                reversedArray.push(setArray.pop())
            })
        }
        return reversedArray
    }

    // merge mehtod that concat the first array and the second array to a new object ,add the values to it
    this.merge = function(/*current,*/ otherSet) {
        
        // let val = [...newSet.values()];  (// No need to get the items form the newSet method as it exists in setArray)
        // setArray.push(val)

        otherSet.forEach((element) => {
            setArray.push(...[element])
        });
        
        return setArray

        // another things I thought about but did not work efficiently

        /*
        current.forEach(element => { (there was second parameter called current that will be pushed first into new array)
            arr.add(...[element])
        });

        otherSet.forEach(element => {
            arr.add(...[element])
        });

        return arr.values()

        let current = this.values() */
    };

}
var newSet = new mySet();
newSet.add('no-1')
newSet.add('no-2')
newSet.add('no-3')
newSet.add('no-4')
newSet.add('no-5')

// pay attention of the arrangement , if you put the val under the console.log() it won't work

let arr1 = ['no-6' , 'no-7', 'no-3']

console.log(newSet.merge(arr1));
