import React from "react";
import "./AboutMe.css";
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants.js";

import { images } from "../../images/images.js";
const AboutMe = () => {
  return (
    <motion.div variants={fadeIn("up", 0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.8 }} id="about" className="aboutmeContainer w-full min-h-screen md:h-5/6">
      <div className="imgBox h-3/5 w-4/5 sm:w-1/4 md:h-64 lg:h-80 xl:h-84">
        <img src={images.about} className="img shadow-inline"></img>
      </div>
      <div className="text-box">
        <h1 className="font-bold text-2xl mb-4 ">ABOUT ME</h1>
        <p className="text">
          I'm a full stack developer passionate about creating stunning,
          responsive web applications. I’m mastering the latest technologies,
          turning creative ideas into engaging user experiences, and refining my
          skills with each project.<br></br> Explore my work and join me in turning code
          into dynamic, seamless websites. Let’s build something amazing
          together!
        </p>
        {/* <button sx={{ color: "white" }} className="resume-btn ml-8">
          Resume
        </button> */}
      </div>
    </motion.div>
  );
};

export default AboutMe;
