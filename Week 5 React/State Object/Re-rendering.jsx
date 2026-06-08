import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;


// How to Control Re-rendering in React

// ? 1. React.memo

const MyComponent = React.memo((props) => {
  return <div>{props.name}</div>;
});

// ? 2. shouldComponentUpdate

class myComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Perform custom comparison and return true/false
    return nextState.someValue !== this.state.someValue;
  }

  render() {
    return <div>{this.state.someValue}</div>;
  }
}


// ? 3. useMemo

const compute = useMemo(() => {
  return val(props);
}, [props.someDependency]);


// ? 4. useCallback

const memoizedCallback = useCallback(() => {
  }, [props.someDependency]);


// ? 5. Lazy Loading and Suspense

const LazyComp = React.lazy(() => import('./LazyComponent'));

function MyComp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComp />
    </Suspense>
  );
}
