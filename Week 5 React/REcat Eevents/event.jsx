import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, welcome to React!',
        };

        this.handleClick = this.handleClick.bind(this);
    }

  
    handleClick() {
      
        this.setState({
            message: 'You clicked the button!',
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* Add event handler to the button */}
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default App;