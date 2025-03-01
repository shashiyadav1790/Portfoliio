import React from "react";
import './Service.css';
import { images } from "../../images/images.js";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

const Service = () => {
  return (
    <div className="text-center min-h-screen px-4" id="services">
      <h1 className="mb-8 font-bold text-2xl">Services</h1>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="card-grid"
      >
        <div className="service-card">
          <img className="h-48 w-full rounded-md mb-2" src={images.fd} alt="Front End Development"></img>
          <h1 className="text-xl font-bold">Front End Development</h1>
          <p className="card-text">
            I am good at creating responsive, user-friendly, and dynamic
            components for websites or web applications, ensuring a smooth user
            experience (UI/UX). I have skills like HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap.
          </p>
        </div>

        <div className="service-card">
          <img className="h-48 w-full rounded-md mb-2" src={images.fsd} alt="Full Stack Development"></img>
          <h1 className="text-xl font-bold">Full Stack Development</h1>
          <p className="card-text">
            Using the MERN Stack, I can handle all aspects of a web project, from creating responsive designs, to
            managing servers, handling business logic, database management, and API integration. I have built various projects using MERN.
          </p>
        </div>

        {/* <div className="service-card">
          <img className="h-48 w-full rounded-md mb-2" src={images.yu} alt="YouTube Videos"></img>
          <h1 className="text-xl font-bold">YouTube Videos</h1>
          <p className="card-text">
            I also upload teaching content on YouTube, mainly focused on Data Structures and Algorithms, solving DSA questions, and explaining different approaches with solutions (in Java). I have also completed a 100-day DSA challenge.
          </p>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Service;
