import { motion } from "framer-motion";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import { useLanguage } from "../context/LanguageProvider";

export default function Certifications() {
  const { t, lang } = useLanguage();

  const certs = [
    { id: 1, title: "ISO 9001", file: "cr1.jpg" },
    { id: 2, title: "ISO 14001", file: "cr2.jpg" },
    { id: 3, title: "OHSAS 18001", file: "cr3.jpg" },
    { id: 4, title: "OHSAS 18001", file: "cr4.jpg" },
    { id: 5, title: "OHSAS 18001", file: "cr5.jpg" },
    { id: 6, title: "OHSAS 18001", file: "cr6.jpg" },
    { id: 7, title: "OHSAS 18001", file: "cr7.jpg" },
  ];

  return (
    <div className="certifications-page" dir={lang === "ar" ? "rtl" : "ltr"}>
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
            {["Our", "Achievements"].map((word, idx) => {
              const isHighlight = word === "Achievements" || word === "إنجازاتنا";
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
            Excellence proven by global standards
          </motion.p>
        </div>
      </section>

      {/* ✅ Certifications Grid */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          Certifications
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {certs.map((c, idx) => (
            <motion.div
              key={c.id}
              className="cert-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={c.file}
                alt={c.title}
                className="h-64 w-full object-contain p-4 transition-transform duration-500 hover:scale-105"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {c.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
