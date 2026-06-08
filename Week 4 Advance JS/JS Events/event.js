// Mouse Event
document.addEventListener("mousemove", (e) => {
    console.log(`Mouse moved to (\${e.clientX}, \${e.clientY})`);
});

// Keyboard Event
document.addEventListener("keydown", (e) => {
    console.log(`Key pressed: \${e.key}`);
});


// JavaScript Event Handlers
// 1. Inline HTML Handlers

<button onclick="alert('Button clicked!')">Click Me</button>

// 2. DOM Property Handlers

let btn = document.getElementById("myButton");
btn.onclick = () => {
      alert("Button clicked!");
};

// 3. addEventListener() (Preferred)

btn.addEventListener("click", () => {
    alert("Button clicked using addEventListener!");
});


// Event Propagation =>

document.querySelector("div").addEventListener("click", () => {
    console.log("Div clicked");
}, true); // Capturing phase

button.addEventListener("click", (e) => {
    console.log("Button clicked");
    e.stopPropagation(); // Stops propagation
});


// Event Delegation
document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(`Clicked on item: \${e.target.textContent}`);
    }
});


// Preventing Default Behavior
document.querySelector("a").addEventListener("click", (a) => {
    a.preventDefault();
    console.log("Link click prevented");
});