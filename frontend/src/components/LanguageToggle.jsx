import { useLanguage } from "../context/LanguageProvider";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="ml-4 px-3 py-1 text-sm font-medium bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer"
    >
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
}
