import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;


// <!-- HTML file -->
<body>
  <div id="root"></div> // React will inject content here 
</body>


import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));


function App() {
  return (
    <div className="container">
      <h1>Hello React</h1>
      <p>This is a component.</p>
    </div>
  );
}


import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}