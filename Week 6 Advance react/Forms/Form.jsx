import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, \${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Adding Forms in React

// Filename - src/index.js: 

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    onInputChange(event)
    {
        console.log(event.target.value);
    }

    render()
    {
        return (<div><form><label>Enter text<
                /label>
                    <input type="text"
                        onChange={this.onInputChange}/>
                </form>
            </div>);
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));


 {/*Handling React Forms  */}

 // Filename - index.js

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    state = {inputValue : ""};

    render()
    {
        return (
            <div><form><label>Enter text<
                /label>
                    <input type="text"
                        value={this.state.inputValue}
                        onChange={(e) => this.setState(
                            { inputValue: e.target.value })} />
            </form>
                <br />
            <div>Entered Value:
                {this.state
                     .inputValue}</div>
            </div>);
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
export default MyForm;



{/* Multiple Input Fields */}

// import ReactDOM from 'react-dom/client';
import "./index.css";

import React from "react";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// Filename - index.js

import ReactDOM from "react-dom";

class App extends React.Component {
    state = {username : "", email: ""};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            username : "gfg123",
            email : "abc@gfg.org",
        });
    };

    render()
    {
        return (
            <div
                style={{
            margin: "auto", marginTop: "20px",
                textAlign: "center",
                }}
            >
                <form onSubmit={this.onFormSubmit}>
                    <label> Enter username: </label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={(e) =>
                            this.setState((prev) => ({
                                ...prev,
                                username: e.target.value,
                            }))
                        }
                    />
                    <br />
                    <br />
                    <label>Enter Email Id:</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={(e) =>
                            this.setState((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                    ></input>
                    <br />
                    <br />
                    <input type="submit" value={
            "Submit"} />
                </form>
                <br />
                <div>
                    Entered Value: {this.state.username}
                </div>
            </div>
        );
    }
}
const root
    = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);