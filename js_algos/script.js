// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
console.log(maxChar("abcccccccd"))

function maxChar(str) {

    // needs a counter
    let max = 0
    let maxChar = ''
    const charMap = {}
    // loop over the string
    for (let char of str) {
        if(charMap[char]){
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    // need a way "look at each one"
    for (let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }

    //returns a char
    return maxChar
}

// --- Directions
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
class Queue {
    constructor(){
        this.data = []
    }

    add(record){
        this.data.unshift(record)
    }

    remove(){
        return this.data.pop()
    }

    peek(){
        return this.data[this.data.length - 1]
    }




}
    const q = new Queue();
    q.add(1);
    q.remove(); // returns 1;


// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

