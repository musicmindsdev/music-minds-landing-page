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
import { Toaster, toast } from "sonner";
import { useTranslation } from "react-i18next";

const UserForm = ({  }: { locale: string }) => {
  const { t } = useTranslation("common");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(t(`herod.errors.${error}`), { position: "top-right" });
      setError(null); // Clear error after displaying toast
    }
    if (success) {
      toast.success(t("herod.success_message"), { position: "top-right" });
      setSuccess(false); // Clear success after displaying toast
    }
  }, [error, success, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      setError("email_required");
      setLoading(false);
      return;
    }

    const payload = {
      email,
      type: "USER",
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
        setEmail(""); // Clear the form
      } else {
        const errorData = await response.json();
        setError(errorData.message || "failed_to_join");
      }
    } catch (err) {
      setError("network_error");
      console.error("Error submitting user waitlist form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Input
          className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px]"
          placeholder={t("herod.user_form.email_placeholder")}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button className="w-full sm:w-auto" onClick={handleSubmit} disabled={loading}>
          {loading ? t("herod.user_form.submitting") : t("herod.user_form.submit_button")} <GoArrowUpRight />
        </Button>
      </div>
    </div>
  );
};

const BusinessForm = ({  }: { locale: string }) => {
  const { t } = useTranslation("common");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessEmail: "",
    businessName: "",
    businessWebsite: "",
    businessPhone: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(t(`herod.errors.${error}`), { position: "top-right" });
      setError(null); // Clear error after displaying toast
    }
    if (success) {
      toast.success(t("herod.success_message"), { position: "top-right" });
      setSuccess(false); // Clear success after displaying toast
    }
  }, [error, success, t]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.businessEmail) {
      setError("business_email_required");
      return;
    }
    if (step === 2 && !formData.businessName) {
      setError("business_name_required");
      return;
    }
    if (step === 3 && !formData.businessWebsite) {
      setError("business_website_required");
      return;
    }
    if (step < 4) setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.businessPhone) {
      setError("business_phone_required");
      setLoading(false);
      return;
    }

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
        setError(errorData.message || "failed_to_join");
      }
    } catch (err) {
      setError("network_error");
      console.error("Error submitting business waitlist form:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Input
                className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px]"
                placeholder={t("herod.business_form.email_placeholder")}
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleInputChange}
              />
              <Button className="w-full sm:w-auto" onClick={handleNext} disabled={loading}>
                {loading ? t("herod.business_form.processing") : t("herod.business_form.next_button")}
              </Button>
              <span className="text-[#5243FE]">{step}/4</span>
                </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Input
                className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px]"
                placeholder={t("herod.business_form.name_placeholder")}
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
              />
              <Button className="w-full sm:w-auto" onClick={handleNext} disabled={loading}>
                {loading ? t("herod.business_form.processing") : t("herod.business_form.next_button")}
              </Button>
              <span className="text-[#5243FE]">{step}/4</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Input
                className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px]"
                placeholder={t("herod.business_form.website_placeholder")}
                name="businessWebsite"
                value={formData.businessWebsite}
                onChange={handleInputChange}
              />
              <Button className="w-full sm:w-auto" onClick={handleNext} disabled={loading}>
                {loading ? t("herod.business_form.processing") : t("herod.business_form.next_button")}
              </Button>
              <span className="text-[#5243FE]">{step}/4</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Input
                className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px]"
                placeholder={t("herod.business_form.phone_placeholder")}
                name="businessPhone"
                value={formData.businessPhone}
                onChange={handleInputChange}
              />
              <Button className="w-full sm:w-auto" onClick={handleSubmit} disabled={loading}>
                {loading ? t("herod.business_form.submitting") : t("herod.business_form.submit_button")} <GoArrowUpRight />
              </Button>
              <span className="text-[#5243FE]">{step}/4</span>
              </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default function Herod({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  console.log(`Herod: locale=${locale}, t is function: ${typeof t === "function"}`);

  const [activeForm, setActiveForm] = useState("users");

  useEffect(() => {
    try {
      AOS.init({
        duration: 1000,
        offset: 50,
        once: false,
        mirror: true,
      });
      console.log("Herod: AOS initialized");
      return () => {
        AOS.refreshHard();
        console.log("Herod: AOS cleaned up");
      };
    } catch (error) {
      console.error("Herod: AOS initialization error:", error);
    }
  }, []);

  if (typeof t !== "function") {
    console.warn(`Herod: t is not a function for locale ${locale}`);
    return null;
  }

  return (
    <>
      <Toaster richColors position="top-right" />
      <Section
        className="w-full bg-[url('/bg4.png')] dark:bg-[url('/darkbg.png')] bg-no-repeat bg-cover px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8 pb-0"
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
                {t("herod.users_button")}
              </Button>
              <Button
                variant={activeForm === "businesses" ? "secondary" : "ghost"}
                className="rounded-full"
                onClick={() => setActiveForm("businesses")}
              >
                {t("herod.businesses_button")}
              </Button>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold w-[80%] text-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              {t("herod.main_title")}{" "}
              <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                {t("herod.main_title_highlight")}
              </span>{" "}
              {t("herod.main_title_part2")}
            </h1>

            <p
              className="w-[45%] text-center line-clamp-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t("herod.description")}
            </p>

            {activeForm === "users" ? <UserForm locale={locale} /> : <BusinessForm locale={locale} />}

            <div className="w-full" data-aos="fade-up" data-aos-delay="400">
              {/* Placeholder div, can be removed if not needed */}
            </div>

            <Image
              src={Phone}
              alt={t("herod.phone_alt")}
              className="h-auto w-full sm:mb-[-32px] lg:mb-[-80px] md:mb-[-80px]"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}