"use client";

import { useEffect, useState, useRef } from "react";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const t = useTranslations();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const tableOfContents = [
    { id: "Overview", title: t("privacy.table_of_contents.Overview") },
    { id: "data", title: t("privacy.table_of_contents.data") },
    { id: "what", title: t("privacy.table_of_contents.what") },
    { id: "how", title: t("privacy.table_of_contents.how") },
    { id: "legal", title: t("privacy.table_of_contents.legal") },
    { id: "data-sharing", title: t("privacy.table_of_contents.data_sharing") },
    { id: "storage", title: t("privacy.table_of_contents.storage") },
    { id: "right", title: t("privacy.table_of_contents.right") },
    { id: "cook", title: t("privacy.table_of_contents.cook") },
    { id: "third", title: t("privacy.table_of_contents.third") },
    { id: "childrens-privacy", title: t("privacy.table_of_contents.childrens_privacy") },
    { id: "changes", title: t("privacy.table_of_contents.changes") },
    { id: "contact", title: t("privacy.table_of_contents.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
        console.log(`PrivacyPolicy: Scroll progress: ${progress.toFixed(2)}%`);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
      console.log("PrivacyPolicy: Scroll event listener added");
      return () => {
        contentElement.removeEventListener("scroll", handleScroll);
        console.log("PrivacyPolicy: Scroll event listener removed");
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
            <h2 className="text-lg font-semibold text-[#5243FE] mb-4">{t("privacy.title")}</h2>
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
            {t("privacy.title")}
          </h1>
          <p className="text-sm text-[#A79FFF] mb-6 text-center">
            {t("privacy.last_updated", { date: "May 12, 2025" })}
          </p>

          <section id="Overview" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.Overview.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("privacy.Overview.content", { company: "Music Minds" })}
              <span className="font-semibold">{t("privacy.Overview.gdpr")}</span>
              {t("privacy.Overview.content_end")}
            </p>
          </section>

          <section id="data" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.data.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("privacy.data.content", {
                company: "Music Minds GmbH",
                address: "Reichsstr. 99, D-14052 Berlin",
                email: "privacy@musicminds.com",
                registration: "HRB 123456 B",
              })}
            </p>
          </section>

          <section id="what" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.what.title")}</h2>
            <p>{t("privacy.what.intro")}</p>
            <p className="font-semibold">{t("privacy.what.account_info.title")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("privacy.what.account_info.list.name")}</li>
              <li>{t("privacy.what.account_info.list.profile")}</li>
              <li>{t("privacy.what.account_info.list.location")}</li>
            </ul>
            <p className="font-semibold">{t("privacy.what.booking_data.title")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("privacy.what.booking_data.list.history")}</li>
              <li>{t("privacy.what.booking_data.list.payment")}</li>
              <li>{t("privacy.what.booking_data.list.metadata")}</li>
            </ul>
            <p className="font-semibold">{t("privacy.what.usage_data.title")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("privacy.what.usage_data.list.stats")}</li>
              <li>{t("privacy.what.usage_data.list.device")}</li>
              <li>{t("privacy.what.usage_data.list.settings")}</li>
            </ul>
            <p className="font-semibold">{t("privacy.what.communication_data.title")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("privacy.what.communication_data.list.messages")}</li>
              <li>{t("privacy.what.communication_data.list.support")}</li>
              <li>{t("privacy.what.communication_data.list.feedback")}</li>
            </ul>
            <p className="font-semibold">{t("privacy.what.media_content.title")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("privacy.what.media_content.list.uploads")}</li>
            </ul>
            <p>
              {t("privacy.what.sensitive_data")}
              <span className="font-semibold">{t("privacy.what.not")}</span>
              {t("privacy.what.sensitive_data_end")}
            </p>
          </section>

          <section id="how" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.how.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t("privacy.how.intro")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("privacy.how.list.features")}</li>
              <li>{t("privacy.how.list.payments")}</li>
              <li>{t("privacy.how.list.personalization")}</li>
              <li>{t("privacy.how.list.analytics")}</li>
              <li>{t("privacy.how.list.marketing")}</li>
              <li>{t("privacy.how.list.legal")}</li>
            </ul>
          </section>

          <section id="legal" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.legal.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t("privacy.legal.intro")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>
                <span className="font-semibold">{t("privacy.legal.list.contract")}</span>
                {t("privacy.legal.list.contract_desc")}
              </li>
              <li>
                <span className="font-semibold">{t("privacy.legal.list.interests")}</span>
                {t("privacy.legal.list.interests_desc")}
              </li>
              <li>
                <span className="font-semibold">{t("privacy.legal.list.consent")}</span>
                {t("privacy.legal.list.consent_desc")}
              </li>
              <li>
                <span className="font-semibold">{t("privacy.legal.list.obligation")}</span>
                {t("privacy.legal.list.obligation_desc")}
              </li>
            </ul>
          </section>

          <section id="data-sharing" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.data_sharing.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t("privacy.data_sharing.intro")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("privacy.data_sharing.list.transactions")}</li>
              <li>{t("privacy.data_sharing.list.payment_providers")}</li>
              <li>{t("privacy.data_sharing.list.service_providers")}</li>
              <li>{t("privacy.data_sharing.list.authorities")}</li>
            </ul>
            <p>{t("privacy.data_sharing.no_sell")}</p>
          </section>

          <section id="storage" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.storage.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("privacy.storage.list.servers")}</li>
              <li>{t("privacy.storage.list.encryption")}</li>
              <li>{t("privacy.storage.list.access")}</li>
            </ul>
            <p>{t("privacy.storage.retention")}</p>
          </section>

          <section id="right" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.right.title")}</h2>
            <p>{t("privacy.right.intro")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>
                <span className="font-semibold">{t("privacy.right.list.access")}</span>
                {t("privacy.right.list.access_desc")}
              </li>
              <li>
                <span className="font-semibold">{t("privacy.right.list.rectify")}</span>
                {t("privacy.right.list.rectify_desc")}
              </li>
              <li>
                <span className="font-semibold">{t("privacy.right.list.delete")}</span>
                {t("privacy.right.list.delete_desc")}
              </li>
              <li>
                <span className="font-semibold">{t("privacy.right.list.restrict")}</span>
                {t("privacy.right.list.restrict_desc")}
              </li>
              <li>
                <span className="font-semibold">{t("privacy.right.list.portability")}</span>
                {t("privacy.right.list.portability_desc")}
              </li>
              <li>
                <span className="font-semibold">{t("privacy.right.list.object")}</span>
                {t("privacy.right.list.object_desc")}
              </li>
            </ul>
            <p>{t("privacy.right.contact", { email: "privacy@musicminds.com" })}</p>
          </section>

          <section id="cook" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.cook.title")}</h2>
            <p>{t("privacy.cook.intro")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("privacy.cook.list.session")}</li>
              <li>{t("privacy.cook.list.analytics")}</li>
              <li>{t("privacy.cook.list.usability")}</li>
            </ul>
            <p>{t("privacy.cook.settings")}</p>
          </section>

          <section id="third" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.third.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t("privacy.third.content")}</p>
          </section>

          <section id="childrens-privacy" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.childrens_privacy.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("privacy.childrens_privacy.content")}
              <span className="font-semibold">{t("privacy.childrens_privacy.age")}</span>
              {t("privacy.childrens_privacy.content_end", { email: "privacy@musicminds.com" })}
            </p>
          </section>

          <section id="changes" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.changes.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t("privacy.changes.content")}</p>
          </section>

          <section id="contact" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("privacy.contact.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("privacy.contact.content", {
                email: "privacy@musicminds.com",
                company: "Music Minds GmbH",
                address: "Reichsstr. 99, D-14052 Berlin",
              })}
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}