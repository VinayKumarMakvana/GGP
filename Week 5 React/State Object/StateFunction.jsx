import React, { useState } from 'react';
function App() {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => 
            	setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default App;


