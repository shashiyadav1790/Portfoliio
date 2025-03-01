import { images } from "../../images/images.js";
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants.js";

const Skills = () => {
  let skills = [
    { imglink: images.HTML, percent: 95, title: "HTML" },
    { imglink: images.CSS, percent: 90, title: "CSS" },
    { imglink: images.js, percent: 75, title: "JavaScript" },
    { imglink: images.react, percent: 85, title: "React.js" },
    { imglink: images.express, percent: 85, title: "Express" },
    { imglink: images.node, percent: 85, title: "Node.js" },
    { imglink: images.mongo, percent: 80, title: "MongoDB" }, // Updated to 80
    { imglink: images.bootstrap, percent: 95, title: "Bootstrap" },
    { imglink: images.tail, percent: 80, title: "Tailwind CSS" },
    { imglink: images.sql, percent: 45, title: "MySQL" }
  ];

  return (
    <div className="text-center m-4 h-lvh" id="skills">
      <h1 className="mb-8 font-bold text-2xl">Skills</h1>

      <div
        className="h-full mt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-6 justify-items-center"
      >
        {skills.map((skill) => (
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            key={skill.title} // Using skill.title as a unique key
            className="h-12 sm:h-16 md:h-20"
          >
            <img
              src={skill.imglink}
              alt={`${skill.title} logo`}
              className="h-full mx-auto"
            />
            <div
              className="progress w-28 h-2 my-2 mx-auto"
              role="progressbar"
              aria-valuenow={skill.percent}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label={`${skill.title} skill level`}
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
            <p>{skill.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
