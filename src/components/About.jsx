import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-16 sm:py-20 bg-pink-50 px-4 sm:px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 sm:mb-6">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            I am a passionate MERN Stack Developer with a strong foundation in building
            responsive and scalable web applications. I enjoy creating clean user interfaces
            and developing efficient backend systems. I am always eager to learn new
            technologies and grow as a full stack developer.
            <br /><br />
            I am a well-qualified Full Stack Developer familiar with a wide range of programming
            utilities and languages. I handle both frontend and backend development with ease
            and enjoy collaborating and learning continuously.
          </p>
        </motion.div>

        {/* RIGHT SIDE (3D ORBIT) */}
        <div className="relative w-full max-w-[400px] sm:max-w-[500px] mx-auto h-[220px] flex items-center justify-center perspective-[1200px]">

          {/* GLOW */}
          <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-pink-200 blur-3xl opacity-30 rounded-full"></div>

          {/* 3D ROTATION */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "linear",
            }}
            className="relative w-40 sm:w-52 h-40 sm:h-52 scale-x-[0.6] rotate-x-[12deg]"
            style={{
              transformStyle: "preserve-3d",
            }}
          >

            {[
              { icon: FaHtml5, color: "text-orange-500" },
              { icon: FaCss3Alt, color: "text-blue-500" },
              { icon: SiJavascript, color: "text-yellow-400" },
              { icon: FaReact, color: "text-sky-400" },
              { icon: FaNodeJs, color: "text-green-500" },
              { icon: SiExpress, color: "text-gray-700" },
              { icon: SiMongodb, color: "text-green-600" },
              { icon: FaGitAlt, color: "text-orange-600" },
            ].map((item, i) => {
              const Icon = item.icon;
              const angle = (i / 8) * 360;

              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `
                      rotateY(${angle}deg)
                      translateZ(230px)
                      translate(-20%, -20%)
                    `,
                  }}
                >
                  <Icon className={`${item.color} text-[70px] sm:text-[100px] md:text-[170px]`} />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}