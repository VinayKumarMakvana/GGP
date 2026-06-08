import React, { useState, useRef } from "react";
function App() {
  const countRef = useRef(0);
  const [forceRender, setForceRender] = useState(false);
  const increment = () => {
    countRef.current += 1;
    setForceRender(!forceRender);
  };
  return (
    <div>
      {" "}
      <h1>Count: {countRef.current}</h1> {/* Display count value */}{" "}
      <button onClick={increment}>Increment</button>{" "}
    </div>
  );
}
export default App;
