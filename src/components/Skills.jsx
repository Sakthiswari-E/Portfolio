import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-pink-50 px-6">

      {/* TITLE */}
      <motion.h2
        className="text-3xl md:text-4xl text-center font-bold text-pink-600 mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tech Stack
      </motion.h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(236,72,153,0.3)",
            }}
            className="bg-white p-6 rounded-xl text-center border border-pink-200 hover:border-pink-400 shadow-md transition duration-300"
          >
            {/* ICON */}
            <motion.div
              whileHover={{ rotate: 10 }}
              className="text-4xl text-pink-500 mb-3"
            >
              {s.icon}
            </motion.div>

            {/* NAME */}
            <p className="text-gray-700 font-medium">
              {s.name}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}