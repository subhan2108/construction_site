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
import { useEffect } from "react";

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

  return <motion.span
      initial={{ opacity: 1 }}
      whileInView={() => startAnimation()} // 🚀 triggers when visible
      viewport={{ once: true, amount: 0.6 }} // runs once, when 60% visible
    >
      {rounded}
    </motion.span>
}

export default function Home() {
  const slides = [
    {
      img: "/banner.jpg",
      heading: "Building the Future",
      text: "Trusted Partner in General Contracting & Compliance",
      animation: { x: -100 },
    },
    {
      img: "/banner.jpg",
      heading: "Shaping Modern Infrastructure",
      text: "Delivering excellence in every project we build",
      animation: { y: 100 },
    },
    {
      img: "/banner.jpg",
      heading: "Innovation & Sustainability",
      text: "Creating value through advanced construction solutions",
      animation: { x: 100 },
    },
  ];

  const stats = [
    { value: 10, suffix: "", label: "Class Contractor in Saudi Arabia" },
    { value: 100, suffix: "+", label: "Multinational Workforce" },
    { value: 6000, suffix: "+", label: "Machinery / Equipment" },
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 80, suffix: "+", label: "Production Plants" },
    { value: 50, suffix: "+", label: "Clients" },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* ✅ Hero Section */}
      <section className="relative h-screen w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-screen flex items-center overflow-hidden ">
                <motion.img
                  src={slide.img}
                  alt={`banner-${i}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 5, ease: "easeOut" }}
                />

                <div className="relative left-10 w-[500px] bg-black/10 shadow-lg p-8">
                  <motion.h1
                    key={slide.heading}
                    initial={{ opacity: 0, ...slide.animation }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-2xl md:text-4xl font-bold mb-4 text-white"
                  >
                    {slide.heading.split(" ").map((word, index) => {
                      const highlightWords = [
                        "Building",
                        "Infrastructure",
                        "Innovation",
                      ];
                      const isHighlight = highlightWords.includes(word);

                      return (
                        <span
                          key={index}
                          className={`relative inline-block mr-2 ${
                            isHighlight ? "text-red-600" : "text-white"
                          }`}
                        >
                          {word}
                          {isHighlight && (
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e63946] animate-underline"></span>
                          )}
                        </span>
                      );
                    })}
                  </motion.h1>

                  <motion.p
                    key={slide.text}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="text-lg md:text-xl mb-8 text-white"
                  >
                    {slide.text}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                    className="flex gap-4"
                  >
                    <Link
                      to="/services"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg font-medium transition"
                    >
                      Our Services
                    </Link>
                    <Link
                      to="/projects"
                      className="bg-white text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-md text-lg font-medium transition"
                    >
                      View Projects
                    </Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="about-intro">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Crafting structures that last a lifetime. We combine advanced
            materials, resilient design, and sustainable practices to create
            innovative and durable projects. With decades of expertise, our team
            ensures quality and precision at every stage.
          </p>
        </div>
      </section>

      {/* ✅ Stats Counter Section */}
      <section className="bg-gray-100 py-16 text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-12">
    We are a Leading Saudi Contracting Group
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
    Our Services
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
            src={service.image}
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
              Read More
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
          Featured Projects
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
                  src={project.image}
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
  );
}
