import { useLanguage } from "../context/LanguageProvider";
import { motion } from "framer-motion";

export default function About() {
  const { t, lang } = useLanguage();

  // ✅ Reusable animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y
      : 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  const Onlyhover = {
    hidden: { opacity: 0, x: -40 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <div className="about-page" dir={lang === "ar" ? "rtl" : "ltr"}>
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
            initial="hidden"
            animate="visible"
            variants={Onlyhover}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.aboutPage.heroTitle.split(" ").map((word, idx) => {
              const isHighlight = word === "About" || word === "من";
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {t.aboutPage.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* ✅ Company Intro */}
      <section className="about-intro py-16 px-6 md:px-12">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            {t.aboutPage.whoWeAre.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t.aboutPage.whoWeAre.text}
          </p>
        </motion.div>
      </section>

      {/* ✅ About Section */}
      <section className="about-section grid md:grid-cols-2 gap-12 px-6 md:px-12 py-16 items-center">
        {/* Left Text */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="uppercase tracking-widest text-red-600 font-semibold">
            {t.aboutPage.section.label}
          </span>
          <h2 className="text-3xl font-bold">{t.aboutPage.section.title}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t.aboutPage.section.text}
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img
            src="bl.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* ✅ About Detail */}
      <section className="about-detail alt-layout grid md:grid-cols-2 gap-12 px-6 md:px-12 py-16 items-center bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img
            src="ll.jpg"
            alt="Our Team at Work"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-red-600">
            {t.aboutPage.detail.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t.aboutPage.detail.text}
          </p>
        </motion.div>
      </section>
{/* ✅ Mission & Vision */}
<section className="mission-vision py-20 px-6 md:px-12 bg-gradient-to-r from-gray-50 to-white">
  <motion.div
    className="max-w-6xl mx-auto text-center mb-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-red-600">
      {lang === "ar" ? "مهمتنا ورؤيتنا" : "Our Mission & Vision"}
    </h2>
  </motion.div>

  <div className="grid md:grid-cols-2 gap-8">
    {t.aboutPage.missionVision.map((card, idx) => (
      <motion.div
        key={idx}
        className="bg-white rounded-xl shadow-md hover:shadow-xl p-10 transition transform hover:-translate-y-2 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={idx}
      >
        {/* ✅ Red icons */}
        <i className={`${card.icon} text-5xl text-red-600 mb-6`}></i>
        <h3 className="text-xl font-semibold mb-4 text-yellow-500">
          {card.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{card.text}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* ✅ Values */}
<section className="values py-20 px-6 md:px-12 bg-gray-50">
  <motion.div
    className="max-w-6xl mx-auto text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-16">
      {t.aboutPage.values.title}
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      {t.aboutPage.values.items.map((value, idx) => (
        <motion.div
          key={idx}
          className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={idx}
        >
          {/* ✅ Blue icons */}
          <i className={`${value.icon} text-4xl text-blue-600 mb-6`}></i>
          <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
          <p className="text-gray-600">{value.text}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

{/* ✅ Members */}
<section className="members py-20 px-6 md:px-12">
  <motion.div
    className="max-w-6xl mx-auto text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-16">
      {t.aboutPage.members.title}
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      {t.aboutPage.members.items.map((member, idx) => (
        <motion.div
          key={idx}
          className="bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition transform hover:-translate-y-2 flex flex-col items-center p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={idx}
        >
          {/* ✅ Small circular centered photo */}
          <img
            src={member.image}
            alt={member.name}
            className="w-28 h-28 object-cover rounded-full mb-6 shadow-md"
          />
          <h4 className="text-lg font-semibold text-red-600 mb-2">
            {member.name}
          </h4>
          <p className="text-gray-600">{member.role}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


    </div>
  );
}
