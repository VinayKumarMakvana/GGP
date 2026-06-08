// TodoForm.js
import React, {useContext, useState} from "react";

import {TodoContext} from "./TodoContext";

const TodoForm = () => {
    const {addTodo} = useContext(TodoContext);
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
    type = "text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};
export default TodoForm;