"use client";

import { useEffect, useState, useRef } from "react";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";

export default function TermsOfUse() {
  const t = useTranslations();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);


  const tableOfContents = [
    { id: "introduction", title: t("terms.table_of_contents.introduction") },
    { id: "definitions", title: t("terms.table_of_contents.definitions") },
    { id: "User", title: t("terms.table_of_contents.User") },
    { id: "Bookings", title: t("terms.table_of_contents.Bookings") },
    { id: "Subscription", title: t("terms.table_of_contents.Subscription") },
    { id: "ratings", title: t("terms.table_of_contents.ratings") },
    { id: "limitation", title: t("terms.table_of_contents.limitation") },
    { id: "platform", title: t("terms.table_of_contents.platform") },
    { id: "termination", title: t("terms.table_of_contents.termination") },
    { id: "law", title: t("terms.table_of_contents.law") },
    { id: "contact", title: t("terms.table_of_contents.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
        console.log(`TermsOfUse: Scroll progress: ${progress.toFixed(2)}%`);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
      console.log("TermsOfUse: Scroll event listener added");
      return () => {
        contentElement.removeEventListener("scroll", handleScroll);
        console.log("TermsOfUse: Scroll event listener removed");
      };
    }
  }, []);

  return (
    <Section className="min-h-screen">
      <Container className="p-4 flex flex-col md:flex-row gap-6">
        {/* Sidebar with Progress Bar and Table of Contents */}
        <div className="w-full md:w-1/4 flex">
          {/* Progress Bar */}
          <div className="w-2 rounded-r-full mr-2 sticky top-0 h-full">
            <div
              className="bg-[#5243FE] rounded-r-full transition-all duration-300"
              style={{ height: `${scrollProgress}%`, width: "100%" }}
            />
          </div>
          <div
            className="w-full p-4 rounded-lg overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 100px)" }}
          >
            <h2 className="text-lg font-semibold text-[#5243FE] mb-4">{t("terms.title")}</h2>
            <nav className="space-y-2 text-gray-600">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block hover:text-[#5243FE] transition-colors md:mb-4"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div
          ref={contentRef}
          className="w-full md:w-3/4 bg-[#FBFAFF] dark:bg-[#1E1B2B] p-6 rounded-lg shadow overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 100px)" }}
        >
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
            {t("terms.title")}
          </h1>
          <p className="text-sm text-[#A79FFF] mb-6 text-center">
            {t("terms.last_updated", { date: "May 12, 2025" })}
          </p>

          <section id="introduction" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.introduction.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.introduction.content", { company: "Music Minds GmbH" })}
            </p>
          </section>

          <section id="definitions" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.definitions.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.definitions.paragraph1")}
              <span className="font-semibold">{t("terms.definitions.neutral_intermediary")}</span>.
              {t("terms.definitions.paragraph2")}
              <span className="font-semibold">{t("terms.definitions.no_services")}</span>,
              {t("terms.definitions.paragraph3")}
              <span className="font-semibold">{t("terms.definitions.no_contracting_party")}</span>.
            </p>
            <p className="text-gray-700 dark:text-gray-300">{t("terms.definitions.not_liable")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("terms.definitions.liability_list.quality")}</li>
              <li>{t("terms.definitions.liability_list.damages")}</li>
              <li>{t("terms.definitions.liability_list.cancellations")}</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.definitions.paragraph4")}
              <span className="font-semibold">{t("terms.definitions.technical_infrastructure")}</span>.
              {t("terms.definitions.paragraph5")}
              <span className="font-semibold">{t("terms.definitions.no_legal_obligation")}</span>.
            </p>
          </section>

          <section id="User" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.User.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("terms.User.list.age")}</li>
              <li>{t("terms.User.list.accurate_info")}</li>
              <li>{t("terms.User.list.suspension")}</li>
            </ul>
          </section>

          <section id="Bookings" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.Bookings.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("terms.Bookings.list.direct_bookings")}</li>
              <li>{t("terms.Bookings.list.payment_processing")}</li>
              <li>
                {t("terms.Bookings.list.service_fee", { fee: "10%" })}
              </li>
              <li>{t("terms.Bookings.list.fee_adjustment")}</li>
            </ul>
            <p>{t("terms.Bookings.providers_responsible")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("terms.Bookings.providers_list.quality")}</li>
              <li>{t("terms.Bookings.providers_list.fulfillment")}</li>
              <li>{t("terms.Bookings.providers_list.legal_obligations")}</li>
            </ul>
            <p>{t("terms.Bookings.liability")}</p>
          </section>

          <section id="Subscription" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.Subscription.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("terms.Subscription.list.premium_features")}</li>
              <li>{t("terms.Subscription.list.provider_plan")}</li>
              <li>{t("terms.Subscription.list.renewal")}</li>
            </ul>
            <p>
              {t("terms.Subscription.refunds")}
              <span className="font-semibold">{t("terms.Subscription.technical_issues")}</span>
              {t("terms.Subscription.goodwill_refunds")}
              <span className="font-semibold">{t("terms.Subscription.no_entitlement")}</span>
            </p>
          </section>

          <section id="ratings" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.ratings.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("terms.ratings.list.ratings")}</li>
              <li>{t("terms.ratings.list.content_policy")}</li>
              <li>{t("terms.ratings.list.moderation")}</li>
            </ul>
            <p>
              {t("terms.ratings.content_license")}
              <span className="font-semibold">{t("terms.ratings.non_exclusive_license")}</span>
              {t("terms.ratings.content_license_end")}
            </p>
          </section>

          <section id="limitation" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.limitation.title")}</h2>
            <p>{t("terms.limitation.intro")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("terms.limitation.list.indirect_damages")}</li>
              <li>{t("terms.limitation.list.disputes")}</li>
              <li>{t("terms.limitation.list.data_loss")}</li>
            </ul>
            <p>
              {t("terms.limitation.total_liability")}
              <span>{t("terms.limitation.liability_amount")}</span>
            </p>
          </section>

          <section id="platform" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.platform.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("terms.platform.list.uptime")}</li>
              <li>{t("terms.platform.list.outages")}</li>
              <li>{t("terms.platform.list.modifications")}</li>
            </ul>
          </section>

          <section id="termination" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.termination.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("terms.termination.list.delete_account")}</li>
              <li>{t("terms.termination.list.termination")}</li>
              <li>{t("terms.termination.list.data_retention")}</li>
            </ul>
          </section>

          <section id="law" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.law.title")}</h2>
            <p>{t("terms.law.content", { city: "Berlin" })}</p>
          </section>

          <section id="contact" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("terms.contact.title")}</h2>
            <p>
              {t("terms.contact.content", {
                company: "Music Minds GmbH",
                address: "Reichsstr. 99, D-14052 Berlin",
                email: "help@musicminds.com",
                registration: "HRB 123456 B",
              })}
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}