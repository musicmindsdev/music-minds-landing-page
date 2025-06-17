"use client";

import { useEffect, useState, useRef } from "react";
import { Section, Container } from "@/components/craft";

const CookiePolicy = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const tableOfContents = [
    { id: "respect", title: "Respect All Users" },
    { id: "definitions", title: "Be Honest & Transparent" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "Respect Intellectual Property" },
    { id: "information-sharing", title: "Use the Platform Fairly" },
    { id: "data-security", title: "Keep Communication Appropriate" },
    { id: "your-rights", title: "Protect Privacy" },
    { id: "international-data", title: "Support Community Growth" },
    { id: "cookies", title: "Violations & Consequences" },
    { id: "childrens-privacy", title: "Final Note" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
      return () => contentElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Section className="min-h-screen ">
      <Container className="p-4 flex flex-col md:flex-row gap-6">
        {/* Sidebar with Progress Bar and Table of Contents */}
        <div className="w-full md:w-1/4 flex">
          {/* Progress Bar */}
          <div className="w-2  rounded-r-full mr-2 sticky top-0 h-full">
            <div
              className="bg-[#5243FE] rounded-r-full transition-all duration-300"
              style={{ height: `${scrollProgress}%`, width: "100%" }}
            />
          </div>
          <div
            className="w-full  p-4 rounded-lg overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 100px)" }} // Adjust based on header/footer height
          >
            <h2 className="text-lg font-semibold text-[#5243FE] mb-4">CODE OF CONDUCT</h2>
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
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Music Mind - Code of Conduct</h1>
          <h3 className="text-gray-700 dark:text-gray-300">Musical Minds is more than a marketplace. It&apos;s a community built on trust, creativity, and mutual respect. This Code of Conduct defines how we expect users to behave when using our platform, to ensure a safe, inclusive, and empowering space for all.
            By using Musical Minds, you agree to follow these principles.
          </h3>
          <p className="text-sm text-[#A79FFF] mb-6 text-center">
            Last Updated: May 12, 2025 | Effective Date: May 12, 2025
          </p>

          <section id="respect" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">1. Respect All Users</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>
                Treat all artists, coaches, producers, and learners with professionalism and kindness.
              </li>
              <li>
                Harassment, discrimination, hate speech, or offensive behavior of any kind will not be tolerated.
              </li>
              <li>
                Do not pressure, insult, or exploit other users — either in communication or transactions.
              </li>
            </ul>
          </section>

          <section id="definitions" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">2. Be Honest & Transparent</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Only offer services you can actually deliver, and represent your skills truthfully.</li>
              <li>Do not create fake accounts, fake reviews, or misleading profiles.</li>
              <li>Communicate clearly and professionally when booking or being booked.</li>
            </ul>
          </section>

          <section id="information-we-collect" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">3. Show Up, Follow Through</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>If you agree to a session or service, honor it — or cancel with reasonable notice.</li>
              <li>End users and providers alike are expected to be on time and prepared.</li>
              <li>Missed appointments without valid reason may lead to suspension.</li>
            </ul>
          </section>

          <section id="how-we-use" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">4. Respect Intellectual Property
            </h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Do not upload or share music, beats, vocals, or samples you do not own or have rights to.</li>
              <li>Respect the creative work of others — including feedback, drafts, and demo files.</li>
              <li>Musical Mindz supports original work and protects against plagiarism and content theft.</li>
            </ul>
          </section>

          <section id="information-sharing" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">5. Use the Platform Fairly
            </h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Do not attempt to circumvent payment systems (e.g., by moving off-platform for deals).</li>
              <li>Paid visibility tools must be used ethically — no keyword spam or misleading campaigns.</li>
              <li>Feedback systems should reflect real experiences — not be used for retaliation or manipulation.</li>
            </ul>
          </section>

          <section id="data-security" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">6. Keep Communication Appropriate
            </h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Messages should remain professional and relevant to bookings, learning, or collaboration.</li>
              <li>Sexual content, unsolicited promotions, or aggressive tone will lead to immediate action.</li>
              <li>Our moderation team reviews flagged content regularly and reserves the right to intervene.</li>
            </ul>
          </section>

          <section id="your-rights" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">7. Protect Privacy
            </h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Do not share personal information of others without consent.</li>
              <li>Do not record sessions without permission from all parties.</li>
              <li>Keep platform conversations confidential unless agreed otherwise.</li>
            </ul>
          </section>

          <section id="international-data" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">8. Support Community Growth
            </h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Recommend others respectfully and truthfully.</li>
              <li>Contribute to a culture of learning, openness, and growth.</li>
              <li>Celebrate diversity — in sound, identity, and origin.</li>
            </ul>
          </section>

          <section id="cookies" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">Violations & Consequences
            </h2>
            <p className="text-gray-700 dark:text-gray-300">Musical Minds reserves the right to:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Issue warnings or remove content.</li>
              <li>Temporarily suspend accounts.</li>
              <li>Permanently ban users in case of serious or repeated violations.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">Repeated or serious breaches may result in legal action if applicable.</p>
          </section>

          <section id="cookies" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">Violations & Consequences
            </h2>
            <p className="text-gray-700 dark:text-gray-300">If you experience or witness behavior that violates this Code, please report it via:
              <span className="font-semibold"> report@musicalmindz.com</span> or use the in-app reporting function.
              Our team treats all reports seriously and confidentially.
            </p>
          </section>

          <section id="childrens-privacy" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">Final Note
            </h2>
            <p className="text-gray-700 dark:text-gray-300">This platform was built to break barriers — not to create new ones.
              Let&apos;s keep Musical Minds a safe, collaborative, and empowering space for everyone.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
};

export default CookiePolicy;