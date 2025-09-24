import { useState } from "react";

export default function TranslateButton() {
  const [isArabic, setIsArabic] = useState(false);

  async function translateBulk(texts, targetLang) {
    try {
      const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: texts, // ✅ Send array of strings
          source: isArabic ? "ar" : "en",
          target: targetLang,
          format: "text",
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      // ✅ returns array of translations
      return data.map((item) => item.translatedText);
    } catch (err) {
      console.error("Translation failed:", err);
      return texts; // fallback
    }
  }

  async function handleTranslate() {
    const elements = document.querySelectorAll("#translate-area *");

    // ✅ Collect all visible texts
    const texts = Array.from(elements)
      .map((el) => el.innerText.trim())
      .filter((text) => text !== "");

    if (texts.length === 0) return;

    // ✅ Translate in one request
    const translated = await translateBulk(texts, isArabic ? "en" : "ar");

    // ✅ Replace texts back
    let i = 0;
    for (let el of elements) {
      if (el.innerText.trim() !== "") {
        el.innerText = translated[i];
        i++;
      }
    }

    // ✅ Flip direction
    const area = document.getElementById("translate-area");
    if (!isArabic) {
      area?.setAttribute("dir", "rtl");
    } else {
      area?.setAttribute("dir", "ltr");
    }

    setIsArabic(!isArabic);
  }

  return (
    <button
      onClick={handleTranslate}
      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {isArabic ? "English" : "عربي"}
    </button>
  );
}
