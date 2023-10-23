import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Hexagon from "./Hexagon/Hexagon";

import "../components/Hexagon/HexagonStyles.css";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-28 h-32" key={technology.name}>
            <Hexagon
              icon={technology.icon}
              name={technology.name}
              index={index}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

/* 

<div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-32" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

*/
