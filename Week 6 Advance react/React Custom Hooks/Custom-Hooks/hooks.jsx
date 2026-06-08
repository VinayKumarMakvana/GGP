function useCustomHook() {
    // Use built-in hooks here
    return someValue;
}

// ? Steps to Create a Custom Hook

// ! 1. Define a Function That Starts with use

function useCustomHook() {
    // Hook logic here
    return someValue;
}

// ! 2. Use React's Built-in Hooks Inside Your Custom Hook

function useCounter() {
    const [count, setCount] = useState(0);
    return [count, () => setCount(count + 1)];
}

// ! 3. Add Logic Inside useEffect for Side Effects

function useFetchData(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url).then(response => response.json()).then(setData);
    }, [url]);
    return data;
}

// ! 4. Return Necessary Values

function useToggle(initialValue = false) {
    const [state, setState] = useState(initialValue);
    const toggle = () => setState(prev => !prev);
    return [state, toggle];
}

// ! 5. Use Your Custom Hook in Components

function ExampleComponent() {
    const [isOn, toggle] = useToggle();
    return <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>;
}