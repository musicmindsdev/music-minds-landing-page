"use client";

import { useEffect, useState, useRef } from "react";
import { Section, Container } from "@/components/craft";

const TermsOfUse = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const tableOfContents = [
    { id: "introduction", title: "Scope of Application" },
    { id: "definitions", title: "Role of Musical Minds" },
    { id: "User", title: "User Accounts & Eligibility" },
    { id: "Bookings", title: "Bookings & Payments" },
    { id: "Subscription", title: "Subscription Models" },
    { id: "ratings", title: "Ratings, Reviews & Content" },
    { id: "limitation", title: "Limitation of Liability" },
    { id: "platform", title: "Platform Availability & Updates" },
    { id: "termination", title: "Termination & Deletion" },
    { id: "law", title: "Applicable Law & Jurisdiction" },
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
            <h2 className="text-lg font-semibold text-[#5243FE] mb-4">Terms & Conditions </h2>
            <nav className="space-y-2  text-gray-600">
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
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Terms & Conditions </h1>
          <p className="text-sm text-[#A79FFF] mb-6 text-center">
            Last Updated: May 12, 2025 | Effective Date: May 12, 2025
          </p>

          <section id="introduction" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">1. Scope of Application</h2>
            <p className="text-gray-700 dark:text-gray-300">
              These Terms and Conditions govern the use of the Musical Minds platform (&apos;the Platform&apos;) operated by [Your Company Name], including the website, mobile application, and all related services. By registering or using the Platform, users accept these Terms in full.
              The Platform connects individuals seeking musical services (&apos;End Users&apos;) with service providers such as vocal coaches, producers, musicians, and studios (&apos;Providers&apos;).

            </p>
          </section>

          <section id="definitions" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">2. Role of Musical Minds</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Musical Minds is a <span className="font-semibold">neutral digital intermediary</span>. We <span className="font-semibold">do not provide musical services ourselves</span>, and we <span className="font-semibold">are not a contracting party</span> to agreements made between End Users and Providers.
            </p>
            <p className="text-gray-700 dark:text-gray-300">Musical Minds is <span className="font-semibold">not liable</span> for:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>The quality, execution, or delivery of services by Providers</li>
              <li>Any damages, financial losses, or disputes between users</li>
              <li>Cancellations, delays, or communication issues between parties</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">We offer <span className="font-semibold">technical infrastructure only</span>. Any support offered is purely voluntary and <span className="font-semibold">without legal obligation</span>.</p>
          </section>
          <section id="User" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">3. User Accounts & Eligibility</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Only individuals aged 16 or older may register.</li>
              <li>Users are responsible for ensuring that all information provided is accurate and up to date.</li>
              <li>Musical Minds may suspend or delete accounts in case of abuse, fraud, or breach of terms.</li>
            </ul>
          </section>
          <section id="Bookings" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">4. Bookings & Payments</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Bookings are made directly between End Users and Providers.</li>
              <li>Payment is processed through third-party services integrated into the Platform.</li>
              <li>Musical Minds charges a <span className="font-semibold">10%</span> service fee per successful booking.</li>
              <li>We reserve the right to adjust fees with prior notice.</li>
            </ul>
            <p>Providers are solely responsible for:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Service quality</li>
              <li>Fulfillment of agreed sessions</li>
              <li>Legal obligations such as tax reporting or invoicing</li>
            </ul>
            <p>Musical Minds is not liable for missed sessions, non-performance, or dissatisfaction unless caused by technical failures of the Platform.</p>
          </section>
          <section id="Subscription" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">5. Subscription Models</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Users can subscribe to premium features (e.g., ad-free use, loyalty rewards, messaging).</li>
              <li>Providers may choose a premium plan to unlock additional visibility and tools.</li>
              <li>Subscriptions renew monthly unless cancelled in advance.</li>
            </ul>
            <p>Refunds are generally excluded unless due to <span className="font-semibold">technical issues caused by Musical Minds.</span> Any <span className="font-semibold">goodwill refunds</span> are issued <span>without legal entitlement.</span></p>
          </section>
          <section id="ratings" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">6. Ratings, Reviews & Content</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Users may rate each other after completed bookings.</li>
              <li>Offensive, fake, or defamatory content is prohibited.</li>
              <li>Musical Minds reserves the right to moderate or delete content without justification.</li>
            </ul>
            <p>By uploading content (e.g., audio, images), users grant Musical Minds a <span className="font-semibold">non-exclusive, worldwide license</span> to display it on the Platform for promotional and functional purposes.</p>
          </section>
          <section id="limitation" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Musical Minds shall not be liable for:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Indirect or consequential damages</li>
              <li>Personal, legal, or financial disputes between users</li>
              <li>Data loss or third-party service failures (e.g., payment gateways)</li>
            </ul>
            <p>Our <span>total liability</span>, if any, is limited to <span>the amount paid by the user in the last 3 months.</span></p>
          </section>
          <section id="platform" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">8. Platform Availability & Updates</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>We aim to ensure 99% uptime but cannot guarantee uninterrupted service.</li>
              <li>Maintenance, updates, or external factors may cause outages.</li>
              <li>We reserve the right to modify, update, or discontinue features without prior notice.</li>
            </ul>
          </section>
          <section id="termination" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">9. Termination & Deletion</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Users may delete their account at any time.</li>
              <li>Musical Minds may terminate access in cases of fraud, abuse, or legal violations.</li>
              <li>Data retention follows GDPR-compliant standards.</li>
            </ul>
          </section>
          <section id="law" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">10. Applicable Law & Jurisdiction</h2>
            <p>These Terms are governed by the laws of the Federal Republic of Germany.
              Place of jurisdiction for all disputes is [Insert City, e.g., Berlin], Germany.
            </p>
          </section>
          <section id="contact" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">11. Contact</h2>
            <p>Musical Minds / [Your Company Legal Name]
              [Address]
              [Email]
              [Business Registration Info]
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
};

export default TermsOfUse;