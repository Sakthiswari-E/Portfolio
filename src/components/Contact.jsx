import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_49v581c",
        "template_eqi3aew",
        form.current,
        "Sa8MwIWa3Q3PQ05S5"
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-pink-50 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold text-pink-600 mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-500 mb-6">
            I’m open to internships, full-time roles, and freelance work.
          </p>


          <div className="space-y-4 text-gray-700">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500 text-lg" />
              <p>Tamil Nadu, India</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500 text-lg" />
              <p>
                <a href="mailto:elansakthiswari@gmail.com" className="hover:underline">
                  elansakthiswari@gmail.com
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaBriefcase className="text-green-600 text-lg" />
              <p>Available for work</p>
            </div>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-pink-200 space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 border border-pink-300 rounded 
            focus:outline-none focus:ring-2 focus:ring-pink-400 
            focus:scale-[1.02] transition duration-300"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 border border-pink-300 rounded 
            focus:outline-none focus:ring-2 focus:ring-pink-400 
            focus:scale-[1.02] transition duration-300"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border border-pink-300 rounded h-32 
            focus:outline-none focus:ring-2 focus:ring-pink-400 
            focus:scale-[1.02] transition duration-300"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-5 right-5 px-6 py-3 rounded-lg shadow-lg text-white ${status === "success" ? "bg-green-500" : "bg-red-500"
              }`}
          >
            {status === "success"
              ? "Message sent successfully ✅"
              : "Failed to send ❌"}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}