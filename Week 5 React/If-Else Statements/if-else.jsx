//* 1. Using If/Else Statements

function Item({ name, isPacked }) {
  if (isPacked) {
    //name="Book"
    return <li className="item">{name}✔</li>; 
  }
  return <li className="item">{name}</li>;
}


//* 2. Using Ternary Operator

function Greeting({ isLoggedIn }) {
    return <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>;
}


//* 3. Using Logical AND (&&) Operator


function Notification({ hasNotifications }) {
    return <div>{hasNotifications && <p>You have new notifications!</p>}</div>;
}


//* 4. Using Switch Case Statements

function StatusMessage({ status }) {
    switch (status) {
        case 'loading':
            return <p>Loading...</p>;
        case 'success':
            return <p>Data loaded successfully!</p>;
        case 'error':
            return <p>Error loading data.</p>;
        default:
            return <p>Unknown status</p>;
    }
}


//* 5. Conditional Rendering in Lists (Using .map())

const items = ["Apple", "Banana", "Cherry"];
const fruitList = items.map((item, index) =>
    item.includes("a") ? <p key={index}>{item}</p> : null
);


//* 6. Conditional Rendering with Component State

if (loading) {
  // Render Loading Component
} else {
  // Render Data Component
}

