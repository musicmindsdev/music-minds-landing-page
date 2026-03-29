import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { mergeMessages } from "./merge-messages";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const en = (await import("../public/locales/en/common.json")).default as Record<
    string,
    unknown
  >;
  const localized = (await import(`../public/locales/${locale}/common.json`))
    .default as Record<string, unknown>;

  const messages =
    locale === routing.defaultLocale ? localized : mergeMessages(en, localized);

  return {
    locale,
    messages,
  };
});
