// Filename - src/index.js:
import React from "react";
import ReactDOM from "react-dom/client";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    changeState = () => {
        this.setState({ hello: "Geek!" });
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }

    render() {
        return (
            <div>
                <h1>
                    GeeksForGeeks.org, Hello {this.state.hello}
                </h1>
                <h2>
                    <button onClick={this.changeState}>
                        Press Here!
                    </button>
                </h2>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<Test />);