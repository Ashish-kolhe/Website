"use client"
import { useEffect, useState } from "react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "./html.png",
    "./css.png",
    "./js.png",
    "./next-js.png",
    "./daisy.png",
    "./GitHub-logo.png",
   "./tailwind.png",
    "./Netlify.png",
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="relative w-32 overflow-hidden ">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
