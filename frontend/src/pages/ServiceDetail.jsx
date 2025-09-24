import { useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";
import { serviceImages } from "./data/images"; // ✅ import shared images

export default function ServiceDetail() {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const service = t.servicesData.find((s) => s.id === parseInt(id));

  if (!service) {
    return <h2 style={{ textAlign: "center" }}>{lang === "ar" ? "الخدمة غير موجودة" : "Service Not Found"}</h2>;
  }

  return (
    <section className="service-detail" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="service-detail-image">
        <img
          src={serviceImages[service.id]}
          alt={service.title}
          className="w-full h-150 object-cover rounded-t-lg rounded-b-lg pt-5"
        /> 
      </div>

      <div className="service-detail-content">
        <span className="service-label">
          {lang === "ar" ? "خدماتنا" : "OUR SERVICES"}
        </span>
        <h2 id="service-title">{service.title}</h2>
        <p
          className="service-description"
          dangerouslySetInnerHTML={{ __html: service.detail }}
        />
      </div>
    </section>
  );
}
