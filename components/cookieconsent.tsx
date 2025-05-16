"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Check if the user has already made a choice
  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setIsOpen(true);
    }
  }, []);

  // Handle cookie acceptance
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsOpen(false);
    // Add logic to enable cookies (e.g., set document.cookie)
  };

  // Handle cookie disable
  const handleDisable = () => {
    localStorage.setItem("cookieConsent", "disabled");
    setIsOpen(false);
    // Add logic to disable cookies (e.g., clear or restrict tracking)
  };

  // Handle cookie preference (e.g., open a settings modal or link to policy)
  const handlePreference = () => {
    // Implement preference settings or redirect to cookie policy page
    alert("Cookie Preference settings will open here.");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-[#09006E66] flex items-center justify-end z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center mb-4">
          <svg
            className="w-6 h-6 text-purple-600 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <h2 className="text-lg font-semibold text-gray-800">Cookie Statement</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Please note that we take your privacy seriously and only process your personal information
          following Nigeria Data Protection Act, 2025 and any applicable regulations. Your continued
          use of this platform indicates that you consent to the processing of your data by MusicMinds.
          Our site also uses cookies to enhance your experience on this platform. You can modify your
          preference using the option below. Please read our Cookie Policy for more information.
        </p>
        <div className="flex flex-col gap-2">
          <Button
            onClick={handleAccept}
            className=" text-white px-4 py-2 rounded  transition-colors"
          >
            Accept Cookies
          </Button>
          <Button
            onClick={handleDisable}
            className=" px-4 py-2 rounded bg-[#C9C5FF] transition-colors"
          >
            Disable Cookies
          </Button>
          <Button
            onClick={handlePreference}
            className="  text-gray-500"
            variant={"ghost"}
          >
            Cookie Preference
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;