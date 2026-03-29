"use client";

import { useLocale } from "next-intl";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
  { code: "de", name: "GER" },
  { code: "en", name: "ENG" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex items-center justify-center  space-x-2">
      {languages.map((lang, index) => (
        <div key={lang.code} className="flex items-center">
          <Button
            variant={"ghost"}
            className={`px-2 py-1 text-xs ${
              locale === lang.code
                ? "text-[#5243FE] font-semibold"
                : "text-muted-foreground "
            }`}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.name}
          </Button>
          {index < languages.length - 1 && (
            <span className="text-muted-foreground mr-[-7.5]">|</span>
          )}
        </div>
      ))}
    </div>
  );
}
