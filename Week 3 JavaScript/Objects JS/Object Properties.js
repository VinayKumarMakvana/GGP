// Defining Object Properties
let obj = {
    name: 'Sourav',
    age: 23,
    isActive: true
};
console.log(obj.name);

// Accessing Object Properties
let A = {
    name: 'Sourav',
    age: 23,
    isActive: true
};
console.log(A.age);  //dot notation
console.log(A['isActive']); //bracket notation

// Adding and Modifying Properties
let a = {
    name: 'Sourav',
    age: 23,
    isActive: true
};
a.gender = 'male'; // Adding a new property
a.age = 26;          // Modifying an existing property
console.log(a);

// Deleting Properties
let b = {
    name: 'Sourav',
    age: 23,
    isActive: true
};
delete b.isActive;
console.log(b);

// Checking Property Existence
let B = {
    name: 'Sourav',
    age: 23,
    gender: 'female'
};
console.log('age' in B);
console.log(B.hasOwnProperty('gender'));

// Enumerable vs Non-Enumerable Properties
let c = {
    name: 'Sourav',
    age: 23,
    gender: 'male'
};

Object.defineProperty(c, 'country', {
    value: 'India',
    enumerable: false
});

console.log(c.country); 
console.log(Object.keys(c));

// Property Attributes
let C = {
    name: 'Sourav',
    age: 23
};

Object.defineProperty(C, 'status', {
    value: 'active',
    writable: false,
    configurable: false,
    enumerable: true
});

C.status = 'inactive'; // Does not change due to `writable: false`
console.log(C.status);

// Accessors (Getters and Setters)
let d = {
    fName: 'Sourav',
    lName: 'Sharma',
    get fullName() {
        return `\${this.fName} \${this.lName}`;
    },
    set fullName(name) {
        [this.fName, this.lName] = name.split(' ');
    }
};

console.log(d.fullName);
d.fullName = 'Ravi Kumar';
console.log(d.fName);
console.log(d.lName);