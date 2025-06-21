"use client";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { GoArrowUpRight } from "react-icons/go";
import Phone from "@/public/phones.png";

const UserForm = () => (
  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
    <Input
      className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px]"
      placeholder="Enter email address.."
    />
    <Button className="w-full sm:w-auto">Get early access <GoArrowUpRight /></Button>
  </div>
);

const BusinessForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessEmail: "",
    businessName: "",
    businessWebsite: "",
    businessPhone: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); // Clear error on input change
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const payload = {
      email: formData.businessEmail,
      type: "BUSINESS",
      businessName: formData.businessName,
      phone: formData.businessPhone,
      website: formData.businessWebsite,
    };

    try {
      const response = await fetch("https://music-minds-backend.onrender.com/api/v1/waitlist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 201) {
        setSuccess(true);
        setStep(1);
        setFormData({
          businessEmail: "",
          businessName: "",
          businessWebsite: "",
          businessPhone: "",
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to join waitlist. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Input
              className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px]"
              placeholder="Enter business email.."
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleInputChange}
            />
            <Button className="w-full sm:w-auto" onClick={handleNext}>
              Next
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Input
              className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px]"
              placeholder="Enter business name.."
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
            />
            <Button className="w-full sm:w-auto" onClick={handleNext}>
              Next
            </Button>
            <span className="text-[#5243FE]">{step}/4</span>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Input
              className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px]"
              placeholder="Enter business website URL.."
              name="businessWebsite"
              value={formData.businessWebsite}
              onChange={handleInputChange}
            />
            <Button className="w-full sm:w-auto" onClick={handleNext}>
              Next
            </Button>
            <span className="text-[#5243FE]">{step}/4</span>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Input
                className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px]"
                placeholder="Enter business phone number.."
                name="businessPhone"
                value={formData.businessPhone}
                onChange={handleInputChange}
              />
              <Button className="w-full sm:w-auto" onClick={handleSubmit}>
                Get early access <GoArrowUpRight />
              </Button>
              <span className="text-[#5243FE]">{step}/4</span>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && (
              <p className="text-green-500 text-center">
                Successfully joined the waitlist!
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

const Hero = () => {
  const [activeForm, setActiveForm] = useState("users");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      once: false,
      mirror: true,
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <Section
      className="w-full bg-[url('/bg4.png')] bg-no-repeat bg-cover px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8 pb-0"
      data-aos="fade-in"
    >
      <Container className="flex items-center justify-center gap-6 md:grid-cols-2 md:gap-12 pb-0 mt-9">
        <div className="flex flex-col items-center gap-4 pt-4 sm:gap-6 sm:pt-6">
          <div className="h-[50px]"></div>
          <div className="flex items-center gap-1 border rounded-full bg-[#FFFFFF33] p-1">
            <Button
              variant={activeForm === "users" ? "secondary" : "ghost"}
              className="rounded-full"
              onClick={() => setActiveForm("users")}
            >
              For users
            </Button>
            <Button
              variant={activeForm === "businesses" ? "secondary" : "ghost"}
              className="rounded-full"
              onClick={() => setActiveForm("businesses")}
            >
              For businesses
            </Button>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold w-[80%] text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Connect with Pros,{" "}
            <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              Collaborate
            </span>{" "}
            Seamlessly
          </h1>

          <p
            className="w-[45%] text-center line-clamp-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            As we connect aspiring musicians with top professionals for coaching, bookings, and collabs we look to you to join the vibrant community built by music lovers for music lovers.
          </p>

          {activeForm === "users" ? <UserForm /> : <BusinessForm />}

          <div className="w-full" data-aos="fade-up" data-aos-delay="400">
            {/* Placeholder div, can be removed if not needed */}
          </div>

          <Image
            src={Phone}
            alt=""
            className="h-auto w-full sm:mb-[-32px] lg:mb-[-80px] md:mb-[-80px]"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;