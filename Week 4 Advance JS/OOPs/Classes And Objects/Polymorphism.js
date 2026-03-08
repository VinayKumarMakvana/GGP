// Method Overriding
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
dog.speak(); 

const cat = new Cat();
cat.speak();

// Method Overloading (Compile-time Polymorphism)
class Calculator {
    add(a, b) {
        if (b === undefined) {
            return a + a; 
        }
        return a + b; 
    }
}

const calc = new Calculator();
console.log(calc.add(2)); 
console.log(calc.add(2, 3));


// ----Polymorphism with Functions and Objects----
class A {
    area(x, y) {
        console.log(x * y);
    }
}
class B extends A {
    area(a, b) {
        super.area(a, b);
        console.log('Class B')
    }
}

let ob = new B();
let output = ob.area(100, 200);