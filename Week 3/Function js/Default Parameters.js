function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();
greet("Aman");

// Return Statement

function add(a, b) {
  return a + b; // returns the sum
}

let result = add(5, 10);
console.log(result);