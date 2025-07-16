"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "@/public/1.png";
import image2 from "@/public/2.png";
import image3 from "@/public/3.png";
import image4 from "@/public/4.png";
import image5 from "@/public/5.png";
import image6 from "@/public/6.png";
import image1i from "@/public/1i.png";
import image2i from "@/public/2i.png";
import image3i from "@/public/3i.png";
import image4i from "@/public/4i.png";
import image5i from "@/public/5i.png";
import image6i from "@/public/6i.png";

const CarouselComponent = () => {
  const activeImages = [
    { id: 1, src: image1, alt: "Image 1" },
    { id: 2, src: image2, alt: "Image 2" },
    { id: 3, src: image3, alt: "Image 3" },
    { id: 4, src: image4, alt: "Image 4" },
    { id: 5, src: image5, alt: "Image 5" },
    { id: 6, src: image6, alt: "Image 6" },
  ] as const;

  const inactiveImages = [
    { id: 1, src: image1i, alt: "Image 1 Inactive" },
    { id: 2, src: image2i, alt: "Image 2 Inactive" },
    { id: 3, src: image3i, alt: "Image 3 Inactive" },
    { id: 4, src: image4i, alt: "Image 4 Inactive" },
    { id: 5, src: image5i, alt: "Image 5 Inactive" },
    { id: 6, src: image6i, alt: "Image 6 Inactive" },
  ] as const;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === activeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2800); // 2.8 seconds total (2 seconds active + 0.8 seconds transition)
    return () => clearInterval(interval);
  }, [activeImages.length]);

  return (
    <div className="relative w-full h-110 flex overflow-hidden">
      {activeImages.map((image, index) => (
        <div
          key={image.id}
          className={`flex-shrink-0 h-full transition-all duration-800 ease-in-out ${
            index === activeIndex
              ? "w-[400px] opacity-100"
              : "w-[80px] opacity-95 grayscale"
          } ${index !== activeIndex ? "hidden md:flex" : ""}`}
          style={{ marginRight: "15px" }}
        >
          <Image
            src={index === activeIndex ? image.src : inactiveImages[index].src}
            alt={index === activeIndex ? image.alt : inactiveImages[index].alt}
            width={index === activeIndex ? 400 : 100}
            height={400}
            className={` h-full ${index === activeIndex ? "w-full" : "w-[100px]"}`}
          />
        </div>
      ))}
      {/* Slideshow for mobile */}
      <div className="md:hidden relative w-full h-110 overflow-hidden">
        <div className="absolute w-full h-full transition-all duration-800 ease-in-out">
          <Image
            src={activeImages[activeIndex].src}
            alt={activeImages[activeIndex].alt}
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;