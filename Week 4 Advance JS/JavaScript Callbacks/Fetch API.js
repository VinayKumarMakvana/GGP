// Basic Fetch Request
fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Handling Response Status Codes

// Example of using fetch() to get data from an API
// Note: The link used here (https://api.example.com/data) is just a placeholder.
// It’s not a real API, so this code will NOT show any output in the console.

fetch('https://api.example.com/data')
    .then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error('Network response was not ok'); 
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));

// ---Using async/await with Fetch API---
async function getP() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (response.ok) {
            const data = await response.json(); 
            console.log(data);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error:', error); 
    }
}
getP()


// Sending Custom Headers with Fetch API

//server.js
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request body

app.post('/test-api', (req, res) => {
    console.log('Received Headers:', req.headers);
    console.log('Received Body:', req.body);
    
    res.json({ message: 'Headers received successfully!', receivedHeaders: req.headers });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:\${PORT}`);
});

//client.js
fetch('http://localhost:3000/test-api', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-secret-token',
        'Custom-Header': 'HelloWorld'
    },
    body: JSON.stringify({ message: 'Hello API!' })
})
.then(response => response.json())
.then(data => console.log('Response:', data))
.catch(error => console.error('Error:', error));



// -----Handling Different Request Methods (POST, PUT, DELETE)-----

// 1. GET Request to Retrieve Data
fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(items => console.log(items));

// 2. POST Request to Submit Data
const data = { name: 'Pranjal', age: 25 };
fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(result => console.log(result));

// 3. PUT Request to Update Data
const updatedData = { id: 1, price: 300 };

fetch('https://fakestoreapi.com/products/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(result => console.log(result));

// 4. DELETE Request to Remove Data
fetch('https://fakestoreapi.com/products/1', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(result => console.log('Deleted:', result));




// ----- Handling Errors in Fetch API -----

// Example of using fetch() to get data from an API
// Note: The link used here (https://api.example.com/data) is just a placeholder.
// It’s not a real API, so this code will NOT show any output in the console.

fetch('https://api.example.com/data')
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: \${response.status}`);
      }
      return response.json();
  })
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Fetch error:', error.message));