import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";
import { motion } from "framer-motion";
import { projectImages } from "./data/projectImages";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

export default function Projects() {
  const { t, lang } = useLanguage();
  const projects = t.projectsData;

  return (
    <div className="projects-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* ✅ Hero Banner */}
      {/* ✅ Hero Banner with Background Image */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: "url('/banner.jpg')" }} // ✅ replace with your banner
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-bold text-white mb-4"
    >
      {t.projectsPage.heroTitle.split(" ").map((word, idx) => {
        // ✅ Highlight "Projects" (EN) OR "مشاريعنا" (AR)
        const isHighlight =
          word.toLowerCase() === "projects" || word === "مشاريعنا";

        return (
          <span
            key={idx}
            className={`relative inline-block mx-2 ${
              isHighlight ? "text-red-600" : "text-white"
            }`}
          >
            {word}
            {isHighlight && (
              <span
                className={`absolute ${
                  lang === "ar" ? "right-0" : "left-0"
                } -bottom-1 w-0 h-[2px] bg-[#e63946] animate-underline`}
              ></span>
            )}
          </span>
        );
      })}
    </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {t.projectsPage.heroSubtitle}
          </motion.p>
        </div>
      </section>



      {/* ✅ Projects Grid */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
    {t.projectsPage.sectionTitle}
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {projects.map((project, idx) => (
      <motion.div
        key={project.id}
        className="group bg-white shadow-lg rounded-lg overflow-hidden transform 
                   transition-all duration-700 ease-in-out 
                   hover:scale-105 hover:shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        viewport={{ once: true }}
      >
        <Link to={`/projects/${project.id}`}>
          {/* ✅ Image */}
          <motion.img
            src={projectImages[project.id]}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          />

          {/* ✅ Content */}
          <div className="p-6">
            {/* Title */}
            <motion.h3
              className="text-xl font-semibold mb-2 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              {project.title}
            </motion.h3>

            {/* Detail */}
            <motion.p
              className="text-gray-600 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.4 }}
              viewport={{ once: true }}
            >
              {project.detail}
            </motion.p>
          </div>
        </Link>
      </motion.div>
    ))}
  </div>
</section>


      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
