"use client";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import {  useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { GoArrowUpRight } from "react-icons/go";
import Phone from "@/public/phones.png";





const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations (in milliseconds)
            offset: 50, // Start animation 50px before the element is in view
            once: false, // Allow animations to replay on scroll
            mirror: true, // Replay animations when scrolling back up
        });

        return () => {
            AOS.refreshHard(); // Clean up AOS on component unmount
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
                    <Button
                        variant={"outline"}
                        className="rounded-full"
                        data-aos="fade-down"
                        data-aos-delay="200"
                    >
                        Join Waitlist
                    </Button>
                    <h1
                        className="text-4xl sm:text-5xl md:text-7xl font-bold w-[80%] text-center"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        Connect with Pros, {" "}
                        <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                            Collaborate
                        </span>{" "}
                        Seamlessly
                    </h1>

                    <p className="w-[45%] text-center line-clamp-3"
                        data-aos="fade-up"
                        data-aos-delay="400">As we connect aspiring musicians with top professionals for coaching, bookings, and collabs we look to you to join the vibrant community built by music lovers for music lovers.</p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Input
                            className="w-full sm:w-[400px] bg-[#FFFFFF66] max-h-[50px] "
                            placeholder="Enter email address.."
                        />
                        <Button className="w-full sm:w-auto">Get early access <GoArrowUpRight /></Button>
                    </div>

                    <div className="w-full" data-aos="fade-up" data-aos-delay="400">
                        {/* Placeholder div, can be removed if not needed */}
                    </div>
                  
                    <Image src={Phone} alt={""} className="h-auto w-full sm:mb-[-32px] lg:mb-[-80px] md:mb-[-80px]" />
                </div>
            </Container>
        </Section>
    );
};

export default Hero;