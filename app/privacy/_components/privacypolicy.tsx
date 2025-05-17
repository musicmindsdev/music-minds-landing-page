"use client";

import { useEffect, useState, useRef } from "react";
import { Section, Container } from "@/components/craft";

const PrivacyPolicy = () => {
  const contentRef = useRef<HTMLDivElement>(null); 
  const [scrollProgress, setScrollProgress] = useState(0);

  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "definitions", title: "Definitions" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "information-sharing", title: "Information Sharing and Disclosure" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights" },
    { id: "international-data", title: "International Data Transfers" },
    { id: "cookies", title: "Cookies and Tracking Technologies" },
    { id: "childrens-privacy", title: "Children's Privacy" },
    { id: "user-generated", title: "User-Generated Content" },
    { id: "third-party", title: "Third-Party Services" },
    { id: "data-retention", title: "Data Retention" },
    { id: "changes", title: "Changes to This Privacy Policy" },
    { id: "contact-us", title: "Contact Us" },
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
                  className="block hover:text-[#5243FE] transition-colors"
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
          className="w-full md:w-3/4 bg-[#FBFAFF] p-6 rounded-lg shadow overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 100px)" }} 
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Privacy Policy</h1>
          <p className="text-sm text-[#A79FFF] mb-6 text-center">
            Last Updated: May 12, 2025 | Effective Date: May 12, 2025
          </p>

          <section id="introduction" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to Music Minds, a mobile application designed to connect musicians with
              professionals for coaching, bookings, and career growth. At Music Minds, we are
              committed to safeguarding your privacy and ensuring the security of your personal
              information. This Privacy Policy outlines how we collect, use, store, share, and
              protect your data when you use our app (&apos;Music Minds&apos; or &apos;the App&apos;). By using the
              App, you agree to the terms of this Privacy Policy.
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>
                Who We Are: Music Minds is operated by [Company Name], a company dedicated to
                empowering musicians through education and professional connections.
              </li>
              <li>
                What This Policy Covers: This policy applies to all personal information collected
                through the Music Minds mobile app, including during registration, use, and
                interactions with our services.
              </li>
              <li>
                Contact Us: For any questions or concerns about this Privacy Policy, please contact
                us at privacy@musicminds.com.
              </li>
            </ul>
          </section>

          <section id="definitions" className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">2. Definitions</h2>
            <p className="text-gray-700">
              For clarity, we define the following terms:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Personal Data: Any information relating to an identified or identifiable individual.</li>
              <li>Usage Data: Information automatically collected about how you use our App.</li>
              <li>Cookies: Small files stored on your device to remember preferences and track usage.</li>
              <li>Service: The Music Minds mobile app and all related services.</li>
            </ul>
          </section>

          {tableOfContents.slice(2).map((item) => (
            <section key={item.id} id={item.id} className="mb-6">
              <h2 className="text-xl font-semibold  mb-2">{item.title}</h2>
              <p className="text-gray-700">
                This is placeholder content for {item.title}. Add specific details as needed.
              </p>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PrivacyPolicy;