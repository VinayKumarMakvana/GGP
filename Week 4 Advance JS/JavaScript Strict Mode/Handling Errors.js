// 1. Using try catch and finally statement
try {
    const a = b
    console.log(a)
}
catch (error) {
    console.log('The error found here is', error)

}
finally {
    console.log('runs each and every time')
}

// 2. Explicitly causing errors using throw statement
try {
    const a = 10;
    {
        if (a === 10) {
            throw Error("Error is caused due to throw statement");
        }
    }
    console.log(a);
} catch (error) {
    console.log("The error found here is", error);
} finally {
    console.log("runs each and every time");
}

// 3. Errors using Error Object
function A() {
    B()
}
function B() {
    C()
}
function C() {
    throw new Error('Hello Error hai yahan pai')
}
try {
    A()
}
catch (error) {
    console.log(error.stack)
    console.log(error.message)
    console.log(error.name)
}

// 4. Handling Asynchronous Errors with Promises
fetch('https://invalid.url')
    .then(response => response.json())
    .catch(error => {
        console.error('Fetch failed:', error.message);
    });


// 5. Handling Asynchronous Errors with async/await
async function f() {
    try {
        let response = await fetch('https://invalid.url');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

f();

