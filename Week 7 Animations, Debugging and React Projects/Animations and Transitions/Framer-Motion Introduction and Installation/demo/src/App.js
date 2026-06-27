import React from "react";
import { motion } from "framer-motion";

function App() {
    return (
        <motion.div style={{
            color: 'green',
            fontSize: 20,
            width: '300px',
            height: '30px',
            textAlign: 'center',
            border: '2px solid green',
            margin: '40px'
        }}

            whileHover={{ scale: 0.5 }}
        >
            GeeksforGeeks
        </motion.div>
    );
}

export default App;