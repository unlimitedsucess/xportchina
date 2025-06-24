"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Avoid multiple initialization
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      const container = document.getElementById("google_translate_element");
      if (container) container.innerHTML = ""; // Clear before reinitializing

      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,zh,pt,ar,ru",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="google_translate_element"
      className="ml-3 h-[57px] flex items-center w-fit text-nowrap [&>div]:!m-0 [&>div]:!p-0"
    />
  );
}
