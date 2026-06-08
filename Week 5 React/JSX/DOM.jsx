import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Only re-render if count is an even number
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate called');
    if (nextState.count % 2 === 0) {
      return true;  // Allow re-render
    }
    return false;   // Skip re-render
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('Render called');
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;