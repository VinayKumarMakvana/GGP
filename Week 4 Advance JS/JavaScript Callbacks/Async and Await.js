async function fetchData() {
  try {
    // Simulated API response (mock data)
    const response = await Promise.resolve({
      json: async () => ({
        userId: 1,
        id: 1,
        title: "Sample Post",
        body: "This is mock data for async/await demonstration"
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

// ----- Async Function -----
const getData = async () => {
    let data = "Hello World";
    return data;
}

getData().then(data => console.log(data));


// ----- Await Keyword -----
const GetData = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
GetData();
console.log(2);


// ----- Error Handling in Async/Await -----
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}