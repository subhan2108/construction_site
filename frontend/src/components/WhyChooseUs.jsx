import { useLanguage } from "../context/LanguageProvider";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-subtitle">{t.whyChooseUs.title}</h2>

        <div className="grid">
          {t.whyChooseUs.items.map((item, idx) => (
            <div key={idx} className="choose-card">
              <i className={item.icon}></i>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
