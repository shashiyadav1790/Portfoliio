import './Experience.css';
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants.js";


import { images } from "../../images/images.js";
const Experience = () => {
  return (
    <div className="container" id="experience">
      <h1 className="heading">Experience and Education</h1>
      <div>
        <ul>
          
          <motion.li   variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}  className="card-box">
            <img src={images.aisect} alt="img" className="logo sm:h-24 sm:w-28 h-12 w-12" />
            <div className="sm:text-center md:text-left mx-8 w-5/6 md:w-2/5">
              <h1 className="text-lg font-bold">Bachelor Of Computer Application(2022-25)</h1>
              <p className="text-gray-400">Aisect University Hazaribag Jharkhand</p>
              <p className=" text-gray-400">CGPA: 7.3 (current) </p>
            </div>
          </motion.li>
          <motion.li   variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}  className="card-box">
            <img src={images.kbss} alt="img" className=" logo sm:h-24 sm:w-28 h-12 w-12" />
            <div className="sm:text-center md:text-left mx-8 w-5/6 md:w-2/5">
              <h1 className="text-lg font-bold">Intermediate (2020-22)</h1>
              <p className="text-gray-400">KBSS+2 Heigh School Chouparan Hazaribag</p>
              <p className="text-gray-400">Percentage: 76.80%</p>
            </div>
          </motion.li>
          <motion.li   variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}  className="card-box">
            <img src={images.nsa} alt="img" className=" logo sm:h-24 sm:w-28 h-12 w-12" />
            <div className="sm:text-center md:text-left mx-8 w-5/6 md:w-2/5">
              <h1 className="text-lg font-bold">High School (2020)</h1>
              <p className=" text-gray-400">Naya Savera Academy. Chouparan Hazaribag</p>
              <p className="text-gray-400">Percentage: 70.40 %</p>
            </div>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
