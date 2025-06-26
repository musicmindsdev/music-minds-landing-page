import { cookies } from "next/headers";

const supportedLngs = ["de", "en", "fr"];
const defaultLocale = "en";

export async function getServerLocale(): Promise<string> {
  try {
    const cookieStore = await cookies();
    const locale = cookieStore.get("locale")?.value;

    if (locale && supportedLngs.includes(locale)) {
      return locale;
    }
  } catch (error) {
    console.error("Error reading locale cookie on server:", error);
  }

  return defaultLocale;
}

export function getClientLocale(): string {
  if (typeof window === "undefined") {
    console.warn("getClientLocale called on server side, returning default");
    return defaultLocale;
  }

  try {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];

    if (cookieLocale && supportedLngs.includes(cookieLocale)) {
      return cookieLocale;
    }
  } catch (error) {
    console.error("Error reading locale cookie on client:", error);
  }

  return defaultLocale;
}

export { supportedLngs, defaultLocale };