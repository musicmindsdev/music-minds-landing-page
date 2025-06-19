"use client";


export function GoogleTranslateWidget() {
//   useEffect(() => {
//     // Ensure Google Translate script is loaded before initializing
//     if (typeof window.google?.translate?.TranslateElement === "function") {
//       const widget = document.getElementById("google_translate_element");
//       if (widget && !widget.querySelector(".goog-te-combo")) {
//         new window.google.translate.TranslateElement(
//           {
//             pageLanguage: "en",
//             includedLanguages: "en,es,fr,de,ja",
//             layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//           },
//           "google_translate_element"
//         );
//       }
//     }
//   }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[100] bg-card p-3 rounded-lg shadow-lg border  border-opacity-20 flex items-center space-x-2">
      <span className="text-sm font-medium text-foreground font-campton"></span>
      <div id="google_translate_element" className="inline-block"></div>
    </div>
  );
}