"use client"
import { useEffect, useState } from "react";
import './design.css'
import Image from "next/image";
import scrollImg from '@/public/Scroll-Down-white.gif'


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
      <div className={`a1 flex flex-col items-center text-center pb-[10px] 
        ${scrollUps ? "sup" : ""} 
        ${scrollDowns ? "sdown" : ""}`}
        >
        
        <h2 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal  mt-6 mb-4">
          Our Journey in Every Sip
        </h2>

        <p className="text-white font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-6 px-2">
          Step into a world where passion meets perfection, crafting timeless teas from the heart of Sri Lanka.
        </p>

        <Image
          src={scrollImg}
          alt="Scroll Down Image"
          className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[136px] h-auto mx-auto"
        />
      </div>
    </div>);
}
