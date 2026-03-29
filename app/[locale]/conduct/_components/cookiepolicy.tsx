"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { Section, Container } from "@/components/craft";

const CodeOfConduct = () => {
  const t = useTranslations();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const tableOfContents = [
    { id: "respect", title: t("code_of_conduct.table_of_contents.respect") },
    { id: "definitions", title: t("code_of_conduct.table_of_contents.definitions") },
    { id: "information-we-collect", title: t("code_of_conduct.table_of_contents.information-we-collect") },
    { id: "how-we-use", title: t("code_of_conduct.table_of_contents.how-we-use") },
    { id: "information-sharing", title: t("code_of_conduct.table_of_contents.information-sharing") },
    { id: "data-security", title: t("code_of_conduct.table_of_contents.data-security") },
    { id: "your Rights", title: t("code_of_conduct.table_of_contents.your Rights") },
    { id: "international-data", title: t("code_of_conduct.table_of_contents.international-data") },
    { id: "cookies", title: t("code_of_conduct.table_of_contents.cookies") },
    { id: "childrens-privacy", title: t("code_of_conduct.table_of_contents.childrens-privacy") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
        console.log(`CodeOfConduct: Scroll progress: ${progress.toFixed(2)}%`);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      console.log("CodeOfConduct: Scroll event listener added");
      contentElement.addEventListener("scroll", handleScroll);
      return () => {
        console.log("CodeOfConduct: Scroll event listener removed");
        contentElement.removeEventListener("scroll", handleScroll);
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
            <h2 className="text-lg font-semibold text-[#5243FE] mb-4">{t("code_of_conduct.title")}</h2>
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
            {t("code_of_conduct.title")}
          </h1>
          <h3 className="text-gray-700 dark:text-gray-300">{t("code_of_conduct.description")}</h3>
          <p className="text-sm text-[#A79FFF] mb-6 text-center">
            {t("code_of_conduct.last_updated", { date: "May 12, 2025" })}
          </p>

          <section id="respect" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("code_of_conduct.respect.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("code_of_conduct.respect.list.professionalism")}</li>
              <li>{t("code_of_conduct.respect.list.no_harassment")}</li>
              <li>{t("code_of_conduct.respect.list.no_pressure")}</li>
            </ul>
          </section>

          <section id="definitions" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("code_of_conduct.definitions.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("code_of_conduct.definitions.list.truthful_services")}</li>
              <li>{t("code_of_conduct.definitions.list.no_fake")}</li>
              <li>{t("code_of_conduct.definitions.list.clear_communication")}</li>
            </ul>
          </section>

          <section id="information-we-collect" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("code_of_conduct.information-we-collect.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("code_of_conduct.information-we-collect.list.honor_commitments")}</li>
              <li>{t("code_of_conduct.information-we-collect.list.punctuality")}</li>
              <li>{t("code_of_conduct.information-we-collect.list.suspension")}</li>
            </ul>
          </section>

          <section id="how-we-use" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("code_of_conduct.how-we-use.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("code_of_conduct.how-we-use.list.no_unauthorized_content")}</li>
              <li>{t("code_of_conduct.how-we-use.list.respect_work")}</li>
              <li>{t("code_of_conduct.how-we-use.list.originality")}</li>
            </ul>
          </section>

          <section id="information-sharing" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("code_of_conduct.information-sharing.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("code_of_conduct.information-sharing.list.no_circumvention")}</li>
              <li>{t("code_of_conduct.information-sharing.list.ethical_tools")}</li>
              <li>{t("code_of_conduct.information-sharing.list.honest_feedback")}</li>
            </ul>
          </section>

          <section id="data-security" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("code_of_conduct.data-security.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("code_of_conduct.data-security.list.professional_messages")}</li>
              <li>{t("code_of_conduct.data-security.list.no_inappropriate_content")}</li>
              <li>{t("code_of_conduct.data-security.list.moderation")}</li>
            </ul>
          </section>

          <section id="your Rights" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("code_of_conduct.your Rights.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("code_of_conduct.your Rights.list.no_sharing")}</li>
              <li>{t("code_of_conduct.your Rights.list.no_unauthorized_recording")}</li>
              <li>{t("code_of_conduct.your Rights.list.confidentiality")}</li>
            </ul>
          </section>

          <section id="international-data" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("code_of_conduct.international-data.title")}</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("code_of_conduct.international-data.list.respectful_recommendations")}</li>
              <li>{t("code_of_conduct.international-data.list.culture_of_growth")}</li>
              <li>{t("code_of_conduct.international-data.list.diversity")}</li>
            </ul>
          </section>

          <section id="cookies" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("code_of_conduct.cookies.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t("code_of_conduct.cookies.intro")}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("code_of_conduct.cookies.list.warnings")}</li>
              <li>{t("code_of_conduct.cookies.list.suspension")}</li>
              <li>{t("code_of_conduct.cookies.list.ban")}</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">{t("code_of_conduct.cookies.legal_action")}</p>
            <p
              className="text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: t("code_of_conduct.cookies.report") }}
            />
          </section>

          <section id="childrens-privacy" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("code_of_conduct.childrens-privacy.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t("code_of_conduct.childrens-privacy.content")}</p>
          </section>
        </div>
      </Container>
    </Section>
  );
};

export default CodeOfConduct;