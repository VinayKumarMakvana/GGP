
import ErrorBoundary from "./Components/ErrorBoundary";
import BuggyComponent from "./Components/BuggyComponent";

const App = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h1>React Error Boundaries Example</h1>
            <ErrorBoundary>
                <BuggyComponent />
            </ErrorBoundary>
        </div>
    );
};

export default App;