import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";
import { useEffect, useState } from "react";

export default function Footer() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer bg-gray-100 text-gray-800">
        <div className="footer-container grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 max-w-7xl mx-auto">

          {/* Column 1: About */}
          <div className="footer-col text-center md:text-left">
            <h2 className="footer-logo text-xl font-bold text-red-600">
              {t.footer.aboutTitle}
            </h2>
            <p className="footer-sub text-gray-600">{t.footer.aboutTitleAr}</p>
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
            <p>
              📞 {t.footer.contact1}:{" "}
              <a href={`tel:${t.footer.phone1}`}>{t.footer.phone1}</a>
            </p>
            <p>
              📞 {t.footer.contact2}:{" "}
              <a href={`tel:${t.footer.phone2}`}>{t.footer.phone2}</a>
            </p>
            <p>
              📞 {t.footer.contact3}:{" "}
              <a href={`tel:${t.footer.phone3}`}>{t.footer.phone3}</a>
            </p>
            <p>{t.footer.telefax}</p>
            <p>{t.footer.poBox}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom text-center py-4 border-t text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} {t.footer.aboutTitle} — {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* Floating Buttons */}
<div className="fixed bottom-6 left-6 flex flex-col space-y-3 z-50">
  {/* WhatsApp Button */}
 {showTop && ( 
  <a
    href="https://wa.me/966560302049" // <-- Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg 
               transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-green-600"
  >
    <i className="fab fa-whatsapp text-2xl"></i>
  </a>
 )}

  {/* Call Button */}
 {showTop && ( 

  <a
    href="tel:+966560302049" // ✅ Direct dial
    className="bg-green-400 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg 
               transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-green-500"
  >
    <i className="fas fa-phone text-xl"></i>
  </a>
 )}
</div>


      {/* Scroll to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-orange-600 transition z-50
          transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
