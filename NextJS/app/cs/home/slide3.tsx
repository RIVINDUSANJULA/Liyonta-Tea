"use client";
import { useEffect, useState } from "react";
import './design.css'

export default function Slide2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: { number: string; text: string }[] = [
    { number: "19", text: "Years of Service" },
    { number: "60+", text: "Products Exported" },
    { number: "10K+", text: "Products Exported" },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="s3 relative w-full h-screen overflow-hidden bg-white-100 flex items-center justify-center">
      {/* Slides Wrapper */}
      <div
        className={`flex transition-transform duration-700 ease-in-out w-full h-full`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col justify-center items-center"
          >
            <h1 className="text-9xl text-white font-serif">{slide.number}</h1>
            <p className="text-4xl mt-4 text-white">{slide.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-4xl text-white hover:text-white z-10"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-4xl text-white hover:text-white z-10"
        aria-label="Next Slide"
      >
        &#8594;
      </button>
    </div>
  );
}
