import { useEffect } from "react";
import { Link } from "react-router-dom";
import services from "./data/services";
import projects from "./data/projects";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLanguage } from "../context/LanguageProvider";
import { serviceImages } from "./data/images"; // ✅ import shared images
import { projectImages } from "./data/projectImages";
import { Helmet } from "react-helmet";


// ✅ Counter: animates only when section in view
function Counter({ target, duration = 2, inView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [target, duration, count, inView]);

  const startAnimation = () => {
    animate(count, target, { duration, ease: "easeOut" });
  };

  return (
    <motion.span
      initial={{ opacity: 1 }}
      whileInView={() => startAnimation()} // 🚀 triggers when visible
      viewport={{ once: true, amount: 0.6 }} // runs once, when 60% visible
    >
      {rounded}
    </motion.span>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const services = t.servicesData;
  const projects = t.projectsData;

  const slides = [
    { img: "/banner5.jpg", animation: { x: -100 }, key: "slide1" },
    { img: "/banner1.jpg", animation: { y: 100 }, key: "slide2" },
    { img: "/banner3.jpg", animation: { x: 100 }, key: "slide3" },
  ];

  const stats = [
    { value: 300, suffix: "+", label: t.stats1 },
    { value: 50, suffix: "+", label: t.stats2 },
    { value: 100, suffix: "+", label: t.stats3 },
    
  ];

  return (
  <>
      <Helmet>
        <title>Al Tawafuk – Construction & Contracting</title>
        <meta
          name="description"
          content="Al Tawafuk offers professional contracting, construction, and engineering services with quality and reliability."
        />
        <meta
          name="keywords"
          content="Construction, Contracting, Engineering, Civil Works, Projects, Services, Saudi Arabia"
        />
        <meta property="og:title" content="Al Tawafuk – Construction & Contracting" />
        <meta property="og:description" content="Professional contracting and engineering services." />
        <meta property="og:url" content="https://www.al-tawafuk.com/" />
        <meta property="og:type" content="website" />

        {/* Facebook / LinkedIn Open Graph */}
  <meta property="og:title" content="Al Tawafuk Contracting Company" />
  <meta
    property="og:description"
    content="Leading contracting and construction services in Saudi Arabia."
  />
  <meta property="og:image" content="https://www.al-tawafuk.com/banner1.jpg" />
  <meta property="og:url" content="https://www.al-tawafuk.com/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Al Tawafuk Contracting Company" />
  <meta
    name="twitter:description"
    content="Trusted partner in construction and engineering solutions."
  />
  <meta name="twitter:image" content="https://www.al-tawafuk.com/banner1.jpg" />

  <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Al Tawafuk Contracting Company",
  "url": "https://www.al-tawafuk.com",
  "logo": "https://www.al-tawafuk.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/yourpage",
    "https://www.linkedin.com/company/yourcompany"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": ["+966-571-496-701", "+966-535-007-727", "+966-556-655-605"],
    "contactType": "Customer Service",
    "areaServed": "SA",
    "availableLanguage": ["English", "Arabic"]
  }
}
`}
</script>

      </Helmet>
    <div
      id="translate-area"
      className="font-sans text-gray-800"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* ✅ Hero Section */}
      <section className="relative h-screen w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          dir="ltr" // ✅ Keep stable, we'll flip arrows manually
          className="h-full w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.key}>
              <div className="relative h-screen flex items-center overflow-hidden">
                {/* ✅ Replace motion.img with img inside motion.div */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 5, ease: "easeOut" }}
                >
                  <img
                    src={slide.img}
                    alt={`banner-${i}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* ✅ Text changes only */}
                <div className="relative left-10 w-[500px] bg-black/10 shadow-lg p-8">
                  <motion.h1
                    initial={{ opacity: 0, ...slide.animation }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-2xl md:text-4xl font-bold mb-4 text-white"
                  >
                    {t.slides[i].heading.split(" ").map((word, index) => {
                      const isHighlight = t.highlightWords.includes(word);
                      return (
                        <span
                          key={index}
                          className={`relative inline-block mr-2 ${
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="text-lg md:text-xl mb-8 text-white"
                  >
                    {t.slides[i].text}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                    className="flex gap-4"
                  >
                    <Link
                      to="/services"
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-4 rounded-md text-lg font-medium transition"
                    >
                      {t.btnServices}
                    </Link>
                    <Link
                      to="/projects"
                      className="bg-white text-gray-800 hover:bg-gray-200 px-4 py-4 rounded-md text-lg font-medium transition"
                    >
                      {t.btnProjects}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* ✅ Custom Prev Button */}
          <div className="custom-prev absolute top-1/2 left-4 z-50 flex items-center justify-center w-15 h-15 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="url(#gradient)"
              strokeWidth={1.5}
              className="w-15 h-15"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
                  <stop offset="100%" stopColor="#06b6d4" /> {/* cyan-400 */}
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          {/* ✅ Custom Next Button */}
          <div className="custom-next absolute top-1/2 right-4 z-50 flex items-center justify-center w-15 h-15 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="url(#gradient)"
              strokeWidth={1.5}
              className="w-15 h-15"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Swiper>
      </section>

      {/* ✅ about us section */}
      <section className="about-intro">
        <div className="container">
          <h2>{t.whoWeAre}</h2>
          <p>{t.whoWeAreText}</p>
        </div>
      </section>

      {/* ✅ Stats Counter Section */}
      <section className="bg-gray-100 py-16 text-center" dir="ltr">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          {t.headingstats}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-700">
                <Counter target={stat.value} duration={2} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Services Section (staggered content animation) */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          {t.servicesPage.heroTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.id}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }} // ✅ stagger effect
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link to={`/services/${service.id}`}>
                {/* Image */}
                <img
                  src={serviceImages[service.id]}
                  alt={service.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-6">
                  <h3 className="text-2xl font-semibold mb-2 text-red-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{service.description}</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium">
                    {t.servicebtn}
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Projects Section (same staggered idea) */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          {t.projectsPage.sectionTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              className="group bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to={`/projects/${project.id}`}>
                {/* Image first */}
                <motion.img
                  src={projectImages[project.id]}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <div className="p-6">
                  {/* Title second */}
                  <motion.h3
                    className="text-xl font-semibold mb-2 text-red-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>
                  {/* Paragraph third */}
                  <motion.p
                    className="text-gray-600 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
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

      {/* ✅ Why Choose Us */}
      <section className="py-16 px-6 md:px-12 shadow-inner">
        <WhyChooseUs />
      </section>

      {/* ✅ Testimonials */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <Testimonials />
      </section>
    </div>
  </>
  );
}
