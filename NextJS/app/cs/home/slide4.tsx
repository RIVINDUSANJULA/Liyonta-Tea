"use client"
import { useEffect, useRef, useState } from "react";
import './design.css';

export default function Slide4() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6, // Adjust as needed (0.3 means 30% of the div is visible)
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div ref={divRef} className="">
      <div
        className={`s4 self-center pb-[10px] text-center 
        ${isVisible ? "s4up" : "s4down"}`}
      >
        <h2 className="text-white box-border font-normal text-center align-middle self-center mx-auto my-2 pt-40 text-3xl md:text-5xl lg:text-6xl font-serif">
          Handpicked with Care, <br /> Crafted with Passion.
        </h2>
        <p className="p1 pt-2 pb-20 text-[20px] md:text-1xl lg:text-2xl ml-[50px] mr-[50px] md:ml-[85px] md:mr-[85px]">
          Grown in the heart of Sri Lanka&apos;s lush hills, our tea tells a story of heritage,
          handpicked excellence, and the timeless craft of tea-making.
        </p>

      </div>
    </div>
  );
}
