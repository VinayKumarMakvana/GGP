
class Dog {
  constructor(name) {
    this.name = name;
  }

  // Getter method
  get dogName() {
    return this.name;
  }

  // Setter method
  set dogName(newName) {
    this.name = newName;
  }

  // Regular method
  bark() {
    console.log(`\${this.name} says woof!`);
  }
}

// creating an object
let myDog = new Dog('Rayne');
console.log(myDog.name);

myDog.dogName = 'Buddy';
console.log(myDog.name);

myDog.bark();