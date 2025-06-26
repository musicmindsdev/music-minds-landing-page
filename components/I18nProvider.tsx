"use client";

import { useEffect, useState, Suspense } from "react";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import Loading from "./Loading";

// Preload translations
import deCommon from "../public/locales/de/common.json";
import enCommon from "../public/locales/en/common.json";

const resources = {
  de: { common: deCommon },
  en: { common: enCommon },
};

// Initialize i18next synchronously
i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Fallback, overridden by prop
    fallbackLng: "en",
    supportedLngs: ["de", "en", "fr"],
    defaultNS: "common",
    fallbackNS: "common",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // Handled manually
    },
  });

export default function I18nProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const [isInitialized, setIsInitialized] = useState(i18next.isInitialized);

  useEffect(() => {
    console.log(`I18nProvider: Setting locale=${locale}`);

    if (i18next.language !== locale) {
      i18next
        .changeLanguage(locale)
        .then(() => {
          console.log(`I18nProvider: Changed to locale=${locale}`);
          setIsInitialized(true);
        })
        .catch((error) => {
          console.error(`I18nProvider: Error changing to ${locale}:`, error);
          setIsInitialized(true); // Proceed to avoid infinite loading
        });
    } else {
      setIsInitialized(true);
    }
  }, [locale]);

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <I18nextProvider i18n={i18next}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </I18nextProvider>
  );
}