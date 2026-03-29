"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Link as I18nLink } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { cn } from "@/lib/utils";

const APP_STORE = "https://apps.apple.com/us/app/music-minds/id6755591778";
const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.ims.mminds";

type Props = {
  /** Wrapper link classes; default `w-full` for stacked layouts */
  className?: string;
  buttonClassName?: string;
  iconClassName?: string;
};

export function DownloadAppButton({
  className = "w-full",
  buttonClassName,
  iconClassName = "text-lg",
}: Props) {
  const t = useTranslations();
  const [isAppleDevice, setIsAppleDevice] = useState<boolean | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera || "";
    setIsAppleDevice(/iPad|iPhone|iPod|Macintosh/.test(ua));
  }, []);

  const href = isAppleDevice === null ? "/" : isAppleDevice ? APP_STORE : PLAY_STORE;

  const label = (
    <>
      <FaApple className={cn("shrink-0", iconClassName)} aria-hidden />
      <span className="opacity-80" aria-hidden>
        |
      </span>
      <IoLogoGooglePlaystore className={cn("shrink-0", iconClassName)} aria-hidden />
      <span className="truncate">{t("cta.download_app")}</span>
    </>
  );

  const button = (
    <Button
      className={
        buttonClassName ??
        "h-12 min-h-[48px] w-full px-4 text-white flex items-center justify-center gap-2"
      }
    >
      {label}
    </Button>
  );

  if (href.startsWith("http")) {
    return (
      <NextLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("inline-flex max-w-full", className)}
      >
        {button}
      </NextLink>
    );
  }

  return (
    <I18nLink href={href} className={cn("inline-flex max-w-full", className)}>
      {button}
    </I18nLink>
  );
}
