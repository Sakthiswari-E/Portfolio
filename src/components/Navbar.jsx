import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // ✅ BETTER SCROLL DETECTION
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed w-full bg-pink-50/80 backdrop-blur border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8 py-4">

     
        <h1 className="text-lg font-bold text-pink-600 tracking-wide">
        
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "home" ? "#" : `#${item}`}
              className={`relative transition duration-300 ${
                active === item
                  ? "text-pink-600"
                  : "hover:text-pink-600"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-pink-600 transition-all duration-300 ${
                  active === item ? "w-full" : "w-0 hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-pink-600"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 py-4" : "max-h-0"
        } bg-white/90 backdrop-blur-md`}
      >
        <div className="flex flex-col items-center gap-4 text-gray-700 font-semibold">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`${
                active === item ? "text-pink-600" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}