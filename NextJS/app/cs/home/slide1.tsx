"use client"
import { useEffect, useState } from "react";
import './design.css'

export default function Slide1() {
  const [scrollUps, setScrollUps] = useState(true);
  const [scrollDowns, setScrollDowns] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 250) {
        setScrollUps(true);
        setScrollDowns(false);
      } else {
        setScrollUps(false);
        setScrollDowns(true);
      }
      if (window.scrollY === 0) {
        setScrollUps(false);
        setScrollDowns(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className={`s1 self-center relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center
        ${scrollUps ? "sup" : ""} 
        ${scrollDowns ? "sdown" : ""}`}>
        
         <div className="text-center px-4 max-w-4xl mx-auto">
          
          {/* Main Heading */}
          <h1 className="text-white font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-8 drop-shadow-lg">
            Want To Taste<br />
            Our Tea?
          </h1>
          
          {/* Description */}
          <p className="text-white font-light text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto drop-shadow-md">
            Each tea purchase comes with organically and ethically grown loose<br className="hidden sm:block" />
            LIYONTA tea, carefully blended to create the perfect cup.
          </p>

          {/* Shop Now Button */}
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-gray-800 font-medium text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            Shop Now
            <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>

        </div>

      </div>
    </div>
  );
}
