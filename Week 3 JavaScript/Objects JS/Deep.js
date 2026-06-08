// Creating a Deep Copy

// Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods. Let us take an example to understand it better.
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

// Lodash To Deep Copy
const Denque = require("denque");

// Create a queue
const queue = new Denque();

// Enqueue
queue.push("g");
queue.push("f");
queue.push("g");

console.log("Initial queue:", queue.toArray());

// Dequeue
console.log("Dequeued:", queue.shift());
console.log("Queue after dequeue:", queue.toArray());