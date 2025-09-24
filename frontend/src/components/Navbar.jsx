import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const navRef = useRef(null);
  const { t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.projects, path: "/projects" },
    { name: t.nav.certifications, path: "/certifications" },
  ];

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
        setIsJoinUsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Active state for Join Us
  const joinUsActive =
    location.pathname === "/careers" || location.pathname === "/contact";

  return (
    <header
      ref={navRef}
      className="w-full fixed top-0 left-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* ✅ Left → Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <a href="/">
            <img src="/lg.png" alt="Logo" className="h-10 w-auto" />
          </a>
          <span className="text-[1.3rem] font-bold text-[#e63946]">
            {t.nav.Companyname}
            <br />
            <span className="text-xl font-bold text-600 text-[#0a1f44] text-[.95rem]">
              {t.nav.Companyname2}
            </span>
          </span>
        </div>

        {/* ✅ Center → Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 items-center">
          {/* Regular nav links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `uppercase font-semibold transition relative px-2 py-1
                 after:block after:h-[2px] after:w-0 after:bg-red-600 
                 after:transition-all after:duration-300 hover:after:w-full
                 ${
                   isActive
                     ? "text-red-600 after:w-full"
                     : "text-gray-800 hover:text-red-600"
                 }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* 🔽 Join Us dropdown (DESKTOP ONLY) */}
          <div
            className="relative group"
            onMouseEnter={() => setIsJoinUsOpen(true)}
            onMouseLeave={() => setIsJoinUsOpen(false)}
          >
            <button
              className={`uppercase font-semibold transition relative px-2 py-1 
                after:block after:h-[2px] after:w-0 after:bg-red-600 
                after:transition-all after:duration-300 group-hover:after:w-full
                ${
                  joinUsActive
                    ? "text-red-600 after:w-full"
                    : "text-gray-800 hover:text-red-600"
                }`}
            >
              {t.nav.joinUs || "Join Us"}
            </button>

            <AnimatePresence>
  {isJoinUsOpen && (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.25 }}
      className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50"
    >
      <NavLink
        to="/careers"
        className={({ isActive }) =>
          `block px-4 py-2 transition
           ${isActive ? "text-red-600 bg-gray-100 font-semibold" : "text-gray-800 hover:bg-gray-100"}`
        }
      >
        {t.nav.career || "Career"}
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `block px-4 py-2 transition
           ${isActive ? "text-red-600 bg-gray-100 font-semibold" : "text-gray-800 hover:bg-gray-100"}`
        }
      >
        {t.nav.contact || "Contact Us"}
      </NavLink>
    </motion.div>
  )}
</AnimatePresence>

          </div>

          {/* ✅ Language Toggle */}
          <LanguageToggle />
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

      {/* ✅ Mobile Dropdown (NO "Join Us" label, but shows Career + Contact) */}
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
              {/* Normal links */}
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `uppercase font-semibold transition
                     ${
                       isActive
                         ? "text-red-600"
                         : "text-gray-800 hover:text-red-600"
                     }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Direct Career + Contact (no Join Us label) */}
              <NavLink
                to="/careers"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `uppercase font-semibold transition
                   ${
                     isActive
                       ? "text-red-600"
                       : "text-gray-800 hover:text-red-600"
                   }`
                }
              >
                {t.nav.career || "Career"}
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `uppercase font-semibold transition
                   ${
                     isActive
                       ? "text-red-600"
                       : "text-gray-800 hover:text-red-600"
                   }`
                }
              >
                {t.nav.contact || "Contact Us"}
              </NavLink>

              {/* ✅ Language Toggle */}
              <LanguageToggle />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
