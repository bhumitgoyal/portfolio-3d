
import { technologies } from '../constants';
import { BallCanvas } from './canvas';
import { styles } from '../styles';

import { motion } from "framer-motion";
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import React from 'react';
import 'react-vertical-timeline-component/style.min.css';


const Tech = () => {
  const frontendSkills = ["React", "HTML", "JavaScript", "TailwindCSS", "WebSockets"];
  const backendSkills = ["Kotlin", "Firebase", "Flask", "Python", "Spring Boot", "LangChain", "Node.js"];
  
  return (
    <div className="flex flex-col items-center py-10">
      <div className="max-w-3xl mx-auto px-4 mb-10">
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I learn so far.</p>
                <h2 className={styles.sectionHeadText}>Skills</h2>
              </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Skills */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;