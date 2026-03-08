// Create objects
let dog1 = new Dog("Rayne");
let dog2 = new Dog("Buddy");

console.log(dog1.name);
console.log(dog2.name);
console.log(Dog.sound);

// JavaScript Nested Objects
const dog = {
    name: "Rayne",
    breed: "Husky",
    details: {
        height: "18 inches",
        weight: "30 pounds"
    }
};

// JavaScript Object Methods
const Dog = {
    breed: 'Husky',
    color: 'Gray & White',
    details: {
        height: '18 inches',
        weight: '30 pounds'
    }
};

console.log(Dog.breed);         
console.log(Dog.details.height);    
console.log(Dog["color"]);          
console.log(Dog.details["weight"]);