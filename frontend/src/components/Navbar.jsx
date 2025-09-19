import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={navRef}
      className="w-full fixed top-0 left-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* ✅ Left → Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <a href="/">  <img src="/lg.png" alt="Logo" className="h-10 w-auto" /> </a>
          <span className="text-[1.3rem] font-bold text-[#e63946]">Al Tawafuq Advance <br /><span className="text-xl font-bold text-600 text-[#0a1f44] text-[.95rem]">Contracting Company</span></span>
        </div>

        {/* ✅ Center → Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `uppercase font-semibold transition relative px-2 py-1
                 after:block after:h-[2px] after:w-0 after:bg-red-600 
                 after:transition-all after:duration-300 hover:after:w-full
                 ${isActive
                  ? "text-red-600 after:w-full"
                  : "text-gray-800 hover:text-red-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* ✅ Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? "✕" : "☰"}
          </motion.div>
        </button>
      </div>

      {/* ✅ Animated Red Line Under Navbar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2 }}
        className="h-[3px] bg-red-600"
      ></motion.div>

      {/* ✅ Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white shadow-inner"
          >
            <nav className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)} // close on click
                  className={({ isActive }) =>
                    `uppercase font-semibold transition
                     ${isActive
                      ? "text-red-600"
                      : "text-gray-800 hover:text-red-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
