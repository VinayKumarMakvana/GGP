// [Approach 1]: Using for...in Loop

// A for..in loop iterates over all enumerable properties of an object, including inherited ones. Use hasOwnProperty() to filter only the object’s own properties, and access each value using the key.
function iterateObject() {
    let exampleObj = {
        book: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    };

    for (let key in exampleObj) {
        if (exampleObj.hasOwnProperty(key)) {
            value = exampleObj[key];
            console.log(key, value);
        }
    }
}
iterateObject();

// [Approach 2]: Using Object.entries() and map()
// Object.entries() returns an array of an object’s own enumerable key-value pairs. Use map() to access each pair, where index 0 is the key and index 1 is the value.
function iterateObject() {
    let exampleObj = {
        book: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    };

    Object.entries(exampleObj).map(entry => {
        let key = entry[0];
        let value = entry[1];
        console.log(key, value);
    });
}
iterateObject();

// [Approach 3]: Using forEach() and object.keys() Method
// object.keys() Method returns an array of keys of the object and forEach() method is an array method that allows you to iterate over each element in the array.
function IterateObject() {
    let exampleObj = {
        book: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    };

    Object.keys(exampleObj).forEach(key => {
        const value = exampleObj[key];
        console.log(`\${key}: \${value}`);
    });

}
IterateObject();