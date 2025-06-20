"use client";

import { useEffect, useState, useRef } from "react";
import { Section, Container } from "@/components/craft";

const PrivacyPolicy = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const tableOfContents = [
    { id: "Overview", title: "Overview" },
    { id: "data", title: "Data Controller" },
    { id: "what", title: "Information We Collect" },
    { id: "how", title: "How We Use Your Data" },
    { id: "legal", title: "Legal Basis for Processing" },
    { id: "data-sharing", title: "Data Sharing" },
    { id: "storage", title: "Data Storage & Security" },
    { id: "right", title: " Your Rights" },
    { id: "cook", title: "Cookies" },
    { id: "third", title: "Third-Party Links" },
    { id: "childrens-privacy", title: "Children's Privacy" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact" },
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
            <h2 className="text-lg font-semibold text-[#5243FE] mb-4">PRIVACY POLICY</h2>
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
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Privacy Policy</h1>
          <p className="text-sm text-[#A79FFF] mb-6 text-center">
            Last Updated: May 12, 2025 | Effective Date: May 12, 2025
          </p>

          <section id="Overview" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">1. Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This Privacy Policy describes how <span className="font-semibold">Music Minds</span> (&apos;we,&apos; &apos;us,&apos; &apos;our&apos;) collects, uses, stores, and protects your personal information when you use our platform, including the website, mobile application, and related services (&apos;the Platform&apos;).
              We are committed to protecting your data in accordance with the <span className="font-semibold">EU General Data Protection Regulation (GDPR)</span> and other applicable data protection laws.
            </p>
          </section>

          <section id="data" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">2. Data Controller</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The data controller for all personal information processed through this platform is:
              <span className="font-semibold">[Your Company Name]</span>
              [Legal Address]
              [Email Address]
              [Business Registration Number]
            </p>
          </section>

          <section id="what" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">3. What Data We Collect</h2>
            <p>We may collect and process the following types of data:</p>
            <p className="font-semibold">a. Account Information</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Name, email address, phone number</li>
              <li>Username, profile photo, biography</li>
              <li>Location (city or country)</li>
            </ul>
            <p className="font-semibold">b. Booking & Payment Data</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Session history</li>
              <li>Payment status (via payment processor)</li>
              <li>Service category and transaction metadata</li>
            </ul>
            <p className="font-semibold">c. Usage & Device Data</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>App usage statistics</li>
              <li>IP address, device type, browser</li>
              <li>Language settings, time zone</li>
            </ul>
            <p className="font-semibold">d. Communication Data</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Messages between users (encrypted)</li>
              <li>Support requests</li>
              <li>Ratings and feedback</li>
            </ul>
            <p className="font-semibold">e. Media & Content</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Audio uploads, beats, demos, files shared through your profile</li>
            </ul>
            <p>We do <span className="font-semibold">not</span> collect sensitive personal data (e.g., health, religion, biometrics) unless you voluntarily provide it.</p>
          </section>

          <section id="how" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">4. How We Use Your Data</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Your data may be used for the following purposes:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>To provide core features of the platform (e.g., booking, messaging, coaching)</li>
              <li>To enable payments and invoice generation via external payment providers</li>
              <li>To personalize your experience and recommend relevant services</li>
              <li>To improve platform functionality through analytics and feedback</li>
              <li>To send transactional and occasional marketing emails (opt-in only)</li>
              <li>To comply with legal obligations (e.g., tax documentation, fraud prevention)</li>
            </ul>
          </section>

          <section id="legal" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">5. Legal Basis for Processing</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We process your data on one or more of the following legal bases:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li><span className="font-semibold">Performance of a contract</span> (Art. 6(1)(b) GDPR): when you register, book, or subscribe.</li>
              <li><span className="font-semibold">Legitimate interests </span>(Art. 6(1)(f)): to improve platform performance and protect users.</li>
              <li><span className="font-semibold">Consent </span>(Art. 6(1)(a)): for optional marketing and cookies.</li>
              <li><span className="font-semibold">Legal obligation </span>(Art. 6(1)(c)): e.g., when required by tax law or court order.</li>
            </ul>
          </section>

          <section id="data-sharing" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">6. Data Sharing</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We only share your data when necessary:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>With other users for agreed transactions (e.g., booking confirmation)</li>
              <li>With external services (e.g., Stripe or PayPal for payment)</li>
              <li>With service providers (e.g., cloud storage, analytics tools like Google Analytics)</li>
              <li>With authorities if legally required</li>
            </ul>
            <p>We never sell your personal data.</p>
          </section>

          <section id="storage" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">7. Data Storage & Security</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Data is stored on secure, GDPR-compliant servers within the EU or equivalent jurisdictions. </li>
              <li>Communication (e.g., messages, login) is encrypted using industry-standard protocols (SSL/TLS).</li>
              <li>Access to user data is restricted to authorized personnel only.</li>
            </ul>
            <p>We retain personal data as long as needed for your active account or for legal compliance (e.g., up to 10 years for financial records).</p>
          </section>

          <section id="right" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">8. Your Rights</h2>
            <p>As a user under GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li><span className="font-semibold">Access:</span> Request a copy of your personal data. </li>
              <li><span className="font-semibold">Rectify:</span> Correct inaccurate or outdated data. </li>
              <li><span className="font-semibold">Delete:</span> Request erasure of your data (“right to be forgotten”). </li>
              <li><span className="font-semibold">Restrict: </span>Limit the processing under certain conditions. </li>
              <li><span className="font-semibold">Portability:</span> Receive your data in a structured, machine-readable format. </li>
              <li><span className="font-semibold">Object:</span> Withdraw consent or oppose certain types of processing. </li>
            </ul>
            <p>To exercise your rights, please contact: [Insert Contact Email]</p>
          </section>

          <section id="cook" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">9. Cookies</h2>
            <p>The website and app may use cookies or similar technologies to:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Store session data </li>
              <li>Analyze traffic patterns </li>
              <li>Improve usability</li>
            </ul>
            <p>You can manage your cookie preferences via your browser settings or in-app options.</p>
          </section>

          <section id="third" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">10. Third-Party Links</h2>
            <p className="text-gray-700 dark:text-gray-300">Music Minds may contain links to external websites or platforms. We are not responsible for the privacy practices of third parties. Please review their respective policies.</p>
          </section>

          <section id="childrens-privacy" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">11. Children&apos;s Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300">The platform is intended for users <span className="font-semibold">16 years and older</span>. We do not knowingly collect data from minors. Parents may contact us to request deletion of data if needed..</p>
          </section>

          <section id="changes" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">12. Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">We may update this policy as our platform evolves. You will be notified of significant changes via email or app notification.</p>
          </section>

          <section id="contact" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">13. Contact</h2>
            <p className="text-gray-700 dark:text-gray-300">For questions about this Privacy Policy or data protection, contact us at:
              privacy@Musicmindz.com
              [Your Company Name]
              [Registered Address]</p>
          </section>
        </div>
      </Container>
    </Section>
  );
};

export default PrivacyPolicy;