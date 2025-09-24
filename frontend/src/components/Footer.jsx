import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";

export default function footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer bg-gray-100 text-gray-800">
      <div className="footer-container grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12 max-w-7xl mx-auto">

        {/* Column 1: About */}
        <div className="footer-col text-center md:text-left">
          <h2 className="footer-logo text-xl font-bold text-red-600">
            {t.footer.aboutTitle}
          </h2>
          <p className="footer-sub text-gray-600">
            {t.footer.aboutTitleAr}
          </p>
          <p className="footer-desc mt-2 text-sm">{t.footer.aboutDesc}</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col text-center">
          <h3 className="font-semibold mb-3">{t.footer.quickLinksTitle}</h3>
          <ul className="space-y-2 list-none p-0">
            {t.footer.quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col text-center md:text-left">
          <h3 className="font-semibold mb-3">{t.footer.contactTitle}</h3>
          <p>📍 {t.footer.address}</p>
          <p>{t.footer.address2}</p>
          <p>📞 {t.footer.contact1}: <a href={`tel:${t.footer.phone1}`}>{t.footer.phone1}</a></p>
          <p>📞 {t.footer.contact2}: <a href={`tel:${t.footer.phone2}`}>{t.footer.phone2}</a></p>
          <p>{t.footer.telefax}</p>
          <p>{t.footer.poBox}</p>
        </div>

        {/* Column 4: Social */}
        <div className="footer-col text-center">
          <h3 className="font-semibold mb-3">{t.footer.followUs}</h3>
          <div className="social-icons flex justify-center space-x-4">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom text-center py-4 border-t text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} {t.footer.aboutTitle} — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
