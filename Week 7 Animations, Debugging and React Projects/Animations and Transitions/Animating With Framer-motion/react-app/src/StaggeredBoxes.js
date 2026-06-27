// src/StaggeredBoxes.js
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between each child animation
    },
  },
};

const boxVariants = {
  hidden: { x: 0 },
  show: { x: 200, transition: { type: "spring" } },
};

const StaggeredBoxes = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          variants={boxVariants}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "blue",
            margin: "10px",
          }}
        />
      ))}
    </motion.div>
  );
};

export default StaggeredBoxes;