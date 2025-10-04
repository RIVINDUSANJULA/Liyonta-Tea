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
      <div className={`c1 self-center pb-[10px] 
        ${scrollUps ? "sup" : ""} 
        ${scrollDowns ? "sdown" : ""}`}
        >
        <div className="text-center">
      <h1 className="text-white font-serif leading-tight text-center mx-auto mb-8 sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide">
        Connect Over a Cup
      </h1>
      
      <p className="text-white font-light sm:text-1xl md:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto drop-shadow-lg opacity-95">
        We&apos;d love to hear from you! Reach out with your questions, feedback, or inquiries, and we&apos;ll be happy to assist.
      </p>
    </div>
        <div className="w-[135px] sm:w-[160px] md:w-[200px]">
          <Image
            src={scrollImg}
            alt="Scroll Down Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>);
}

