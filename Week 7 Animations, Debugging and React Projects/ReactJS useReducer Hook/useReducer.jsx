// ! 1. Basic Counter using useReducer

import React, { useReducer } from 'react';
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};
function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
}
export default Counter;


// ! 2. Managing Complex State with Multiple Actions

import React, { useReducer } from 'react';
const initialState = { name: '', age: 0, submitted: false };
const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_AGE':
            return { ...state, age: action.payload };
        case 'SUBMIT':
            return { ...state, submitted: true };
        default:
            return state;
    }
};
function Form() {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleSubmit = () => {
        dispatch({ type: 'SUBMIT' });
    };
    return (
        <div>
            <input
                type="text"
                value={state.name}
                onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                placeholder="Enter your name"
            />
            <input
                type="number"
                value={state.age}
                onChange={(e) => dispatch({ type: 'SET_AGE', payload: e.target.value })}
                placeholder="Enter your age"
            />
            <button onClick={handleSubmit}>Submit</button>
            {state.submitted && <p>Form Submitted!</p>}
        </div>
    );
}
export default Form;