"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const languages = [
  { code: "de", name: "GER", flag: "🇩🇪" },
  { code: "en", name: "ENG", flag: "🇺🇸" },
];

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const { i18n } = useTranslation("common");
  const router = useRouter();

  console.log(`LanguageSwitcher: currentLocale=${currentLocale}, i18n.ready=${i18n.isInitialized}`);

  const changeLanguage = (locale: string) => {
    try {
      console.log(`LanguageSwitcher: Changing to locale=${locale}`);
      i18n.changeLanguage(locale);
      document.cookie = `locale=${locale}; path=/; max-age=31536000`;
      router.refresh();
    } catch (error) {
      console.error(`LanguageSwitcher: Error changing language:`, error);
    }
  };

  return (
    <div className="flex items-center justify-center  space-x-2">
    {languages.map((lang, index) => (
      <div key={lang.code} className="flex items-center">
        <Button
          variant={"ghost"}
          className={`px-2 py-1 text-xs ${
            currentLocale === lang.code ? "text-[#5243FE] font-semibold" : "text-muted-foreground "
          }`}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.name}
        </Button>
        {index < languages.length - 1 && <span className="text-muted-foreground mr-[-7.5]">|</span>}
      </div>
    ))}
  </div>
  );
}