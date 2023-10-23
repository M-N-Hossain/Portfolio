import React from "react";

import { motion } from "framer-motion";

import "./HexagonStyles.css";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Hexagon({ icon, name, index }) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="hexagon"
    >
      <img className="icon" src={icon} alt="" />
      <p>{name}</p>
    </motion.div>
  );
}
