import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative text-center overflow-hidden bg-pink-50 px-4 sm:px-6">

      {/* 💗 RESPONSIVE GLOW */}
      <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-pink-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-2xl"
      >
        {/* NAME */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Hi, <br />
          I'm{" "}
          <span className="text-pink-600 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]">
            Sakthiswari
          </span>
        </h2>

        {/* ROLE */}
        <p className="mt-4 text-pink-600 text-lg sm:text-2xl md:text-5xl font-bold leading-tight">
          Full Stack Web Developer
        </p>

        {/* ICONS */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-6 text-xl sm:text-2xl">
          <motion.a
            href="https://github.com/Sakthiswari-E"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-700 hover:text-pink-600 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/elan-sakthiswari-468a20365"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-pink-500 hover:text-pink-700 transition"
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* BUTTON */}
        <motion.div className="mt-6 sm:mt-8" whileHover={{ scale: 1.05 }}>
          <a
            href="/resume.pdf"
            download
            className="bg-pink-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-pink-700 transition shadow-md inline-block text-sm sm:text-base"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}