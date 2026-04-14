// 1. Functional Components
function Greet(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// 2. Class Components
class Greet extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
  }
}

// ?  Core Concepts in React Components

// 1. Props in React Components
function Greet(props) {
    return <h2>Welcome, {props.username}!</h2>;
}

// Usage
<Greet username="Adam" />;

// 2. State in React Components
function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => 
                setCount(count + 1)}>Increment</button>
        </div>
    );
}

// 3. Rendering a Component
ReactDOM.render(<Greeting name="Emma" />, document.getElementById('root'));

// 4. Components in Components
function Header() {
    return <h1>Welcome to My Site</h1>;
}

function Footer() {
    return <p>© 2024 My Company</p>;
}

function App() {
    return (
        <div>
            <Header />
            <p>This is the main content.</p>
            <Footer />
        </div>
    );
}

export default App;

