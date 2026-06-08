// A JavaScript Iterator is an object that lets you traverse through a list or collection one item at a time. It follows the iterator protocol, meaning it must have a next() method that returns an object in the form:

// Using for.of loop, we can iterate over any entity (for eg: an object) which follows iterable protocol. The for.of loop is going to pull out the value that gets a return by calling the next() method each time.

const array = ['a', 'b', 'c'];
const it = array[Symbol.iterator]()
for (let value of it) {
    console.log(value)
}

// Create our own iterable object:
// Iterable protocol: The object must define a method with 'Symbol.iterator' the key which returns an object that itself follows iterator protocol. The object must define the 'next' method which returns an object having two properties 'value' and 'done'

// {value: 'item value', done: boolean}
// var newIt = arr[Symbol.iterator]

// newIt()

//Because it does not properly bind
// Uncaught TypeError: Cannot convert undefined or null to object 
//How we can fix this 
//var newIt = arr[Symbol.iterator].bind(arr); 

// newIt()
// Array Iterator { }

// { value: <currentItem>, done: <boolean> }
// typeof obj?.[Symbol.iterator] === "function"

let obj = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        value: this.data[i],
        done: i++ >= this.data.length
      })
    };
  }
};

for (let x of obj) 
  console.log(x);

