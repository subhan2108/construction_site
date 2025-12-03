// src/pages/Certifications.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import { useLanguage } from "../context/LanguageProvider";

export default function Certifications() {
  const { t, lang } = useLanguage();
  
  const [loading, setLoading] = useState(true);

   const certs = [
    { id: 1, title: "ISO 9001", file: "cr1.jpg" },
    { id: 2, title: "ISO 14001", file: "cr2.jpg" },
    { id: 3, title: "OHSAS 18001", file: "cr3.jpg" },
    { id: 4, title: "OHSAS 18001", file: "cr4.jpg" },
    { id: 5, title: "OHSAS 18001", file: "cr5.jpg" },
    { id: 6, title: "OHSAS 18001", file: "cr6.jpg" },
    { id: 7, title: "OHSAS 18001", file: "cr7.jpg" },
  ];


    const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    async function fetchCerts() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/certifications/`);
        if (!res.ok) throw new Error("Failed to fetch certifications");
        const data = await res.json();
        setCerts(data);
      } catch (err) {
        console.error("❌ Error fetching certifications:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCerts();
  }, []);

  return (
    <div className="certifications-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      
{/* ✅ Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.certificationsPage.heroTitle.split(" ").map((word, idx) => {
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
            {t.certificationsPage.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* ✅ Certifications Grid */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          {t.certificationsPage.gridtitle}
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
                className="h-64 w-full object-contain p-4 transition-transform duration-500 hover:scale-105 cursor-zoom"
                onClick={() => setZoomImage(c.file)}
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






{zoomImage && (
  <div 
    className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999] p-4"
    onClick={() => setZoomImage(null)}
  >
    <motion.img
      src={zoomImage}
      alt="Zoomed Certificate"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg h-[100vh]"
    />

    {/* Close Button */}
    <button
      onClick={() => setZoomImage(null)}
      className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-500"
    >
      &times;
    </button>
  </div>
)}



    </div>
  );
}
