// Filename App.js
import React from "react";

class App extends React.Component {
    render() {
        return <h1>VINAY</h1>;
    }
}
export default App;


// Class Declaration 

class Counter extends React.Component {
  // everything else goes inside this class
}

// Constructor:
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // initializing state
  }
}

// Render Method:
// render() {
//   return <div>Current count: {this.state.count} </div>;
// }

// State:
this.state = {
  count: 0
};

// Event Handlers
increment = () => {
  this.setState({ count: this.state.count + 1 });
};

// Props in Class Components: 
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}