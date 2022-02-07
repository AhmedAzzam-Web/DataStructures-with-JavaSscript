// Introductoin to understand stack method

/*
let letters = []

let word = 'racecar'

let rmWord = ''

// push method
for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
}
console.log(letters.join(''));

// pop method
for (let i = 0; i < word.length; i++) {
    rmWord += letters.pop(word[i])
}

if (rmWord === word) {
    console.log(`${word} is similar`);
}
else {
    console.log(`${word} is not similar`);
}
*/

class ArrayStack {
    constructor() {

        this.count = 0;
        this.memory = {};

        this.push = function (value) {
            this.memory[this.count] = value;
            this.count++;
        };

        this.pop = function () {
            if (this.count === 0) {
                return 'there is no item in the list to be deleted';
            }
            else {
                this.count--;
                let result = this.memory[this.count];
                delete this.memory[this.count];
                return result;
            }
        };

        this.length = function () {
            if (this.count === 0) {
                return 'there is no item in the list';
            }
            else {
                return this.count;
            }
        };

        this.lastItem = function () {
            if (this.count === 0) {
                return 'there is no item in the list';
            }
            else {
                return this.memory[this.count - 1];
            }
        };

        this.firstItem = function () {
            if (this.count === 0) {
                return 'there is no item in the list';
            }
            else {
                return this.memory[this.count - (this.count)];
            }
        };
    }
}
let stack = new ArrayStack();

stack.push('moamen');
stack.push('adel');
stack.push('kemo')
stack.push('azzam')

console.log(stack.memory);

// console.log(stack.count);
// console.log(stack.memory);

// stack.pop()
// console.log(stack.count);
// console.log(stack.memory);

// console.log(stack.lastItem());
// console.log(stack.firstItem());
// console.log(stack.memory);

// console.log(stack.length());