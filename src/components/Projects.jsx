import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Personal Finance Manager",
      desc: "Full-stack app to track income, expenses, and manage financial data securely",
      tech: "Frontend, backend",
      live: "https://personal-finance-manager-frontend-3jfx.onrender.com/",
      github: "https://github.com/Sakthiswari-E/Personal-Finance-Manager-Frontend",
    },
    {
      title: "Expense Tracker",
      desc: "Track income and expenses with filters and local storage support",
      tech: "React, Frontend",
      live: "https://smartexpensetrackerrr.netlify.app/",
      github: "https://github.com/Sakthiswari-E/smart-expense-tracker",
    },
    {
      title: "Invoice Builder",
      desc: "Create and download professional invoices dynamically",
      tech: "Frontend, React",
      live: "https://invoicebuilder1.netlify.app/",
      github: "https://github.com/Sakthiswari-E/Invoice-Builder",
    },
    {
      title: "Movie Search App",
      desc: "Search movies using API with real-time results and UI filtering",
      tech: "React, API",
      live: "https://moviesearchapp00.netlify.app/",
      github: "https://github.com/Sakthiswari-E/movie-search",
    },
    {
      title: "Add to Cart",
      desc: "E-commerce cart system with routing and dynamic product handling",
      tech: "React, JavaScript",
      live: "https://add-to-cart-router0.netlify.app/",
      github: "https://github.com/Sakthiswari-E/add-to-cart-router",
    },
    {
      title: "Trabook Landing Page",
      desc: "Responsive travel landing page built from Figma design",
      tech: "HTML, CSS",
      live: "https://trabook0.netlify.app/",
      github: "https://github.com/Sakthiswari-E/Trabook",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-pink-50 px-6">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-center font-bold text-pink-600 mb-12"
      >
        Projects
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <motion.div
  key={i}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.15 }}
  whileHover={{ scale: 1.05, y: -10 }}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );
    e.currentTarget.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  }}
  className="relative bg-white rounded-2xl p-6 shadow-md border border-pink-200 transition overflow-hidden group"
>
  
  {/* 🔥 CURSOR GLOW */}
  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
    <div
      className="absolute w-[300px] h-[300px] bg-pink-400/30 rounded-full blur-3xl"
      style={{
        left: "var(--x)",
        top: "var(--y)",
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10">
    <h3 className="text-xl font-bold text-gray-800">
      {p.title}
    </h3>

    <p className="text-gray-500 text-sm mt-2">
      {p.desc}
    </p>

    <p className="text-pink-500 text-xs mt-3 font-medium">
      {p.tech}
    </p>

    <div className="flex gap-4 mt-5">
      <a
        href={p.live}
        target="_blank"
        className="text-sm text-pink-600 font-semibold hover:underline"
      >
        Live
      </a>

      <a
        href={p.github}
        target="_blank"
        className="text-sm text-gray-600 hover:text-pink-600"
      >
        GitHub
      </a>
    </div>
  </div>

</motion.div>
        ))}

      </div>
    </section>
  );
}