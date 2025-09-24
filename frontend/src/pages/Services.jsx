import { Link } from "react-router-dom";
import services from "./data/services.js";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import { useLanguage } from "../context/LanguageProvider";
import { motion } from "framer-motion";
import { serviceImages } from "./data/images"; // ✅ import shared images

export default function Services() {
  const { t, lang } = useLanguage();
  const services = t.servicesData;

  return (
    <div className="services-page">
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
            {/* Highlight effect */}
            {t.servicesPage.heroTitle.split(" ").map((word, idx) => {
              const isHighlight = word === "Services" || word === "خدماتنا";
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
            {t.servicesPage.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <section className="services-list py-12 px-6" dir="ltr">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-600">
          {t.servicesPage.sectionTitle}
        </h2>
        <div className="services-grid grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className="service-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Link to={`/services/${service.id}`}>
                {/* In Services.jsx */}
                <img
                  src={serviceImages[service.id]}
                  alt={service.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-red-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-3">{service.description}</p>
                </div>
              </Link>
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
