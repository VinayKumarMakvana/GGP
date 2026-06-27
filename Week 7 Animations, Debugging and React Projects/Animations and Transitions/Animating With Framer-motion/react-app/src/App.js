// src/App.js
import React from 'react';
import Box from './Box';
import StaggeredBoxes from './StaggeredBoxes';

function App() {
    return (
        <div className="App">
            <h1>Framer-Motion Example</h1>
            <Box />
            <StaggeredBoxes />
        </div>
    );
}

export default App;