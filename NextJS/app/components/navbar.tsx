"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // You can replace with any icon lib or SVGs

export default function Navbar() {
  const [scrollUps, setScrollUps] = useState(true);
  const [scrollDowns, setScrollDowns] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setScrollUps(true);
        setScrollDowns(false);
      } else {
        setScrollUps(false);
        setScrollDowns(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      className={`pt-5 w-full z-50 fixed transition-all duration-500 ${
        scrollUps ? "bg-transparent" : " md:bg-black/45  md:backdrop-blur-sm bg-[#133f3f]/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 bg-[url('/liyonta_tea_logo.webp')] bg-contain bg-no-repeat w-32 h-8" />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white text-lg font-bold hover:text-orange-300">
              Home
            </Link>
            <Link href="/about-us" className="text-white text-lg font-bold hover:text-orange-300">
              About
            </Link>
            <Link href="/shop" className="text-white text-lg font-bold hover:text-orange-300">
              Shop
            </Link>
            <Link href="/contact-us" className="text-white text-lg font-bold hover:text-orange-300">
              Contact
            </Link>
          </div>

          {/* Hamburger Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-800 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-#2b5c43/80 backdrop-blur-sm px-4`}
      >
        <div className="pt-2 pb-4 space-y-2">
          <Link href="/" className="block text-white text-lg font-bold hover:text-orange-300">
            Home
          </Link>
          <Link href="/about-us" className="block text-white text-lg font-bold hover:text-orange-300">
            About
          </Link>
          <Link href="/shop" className="block text-white text-lg font-bold hover:text-orange-300">
            Shop
          </Link>
          <Link href="/contact-us" className="block text-white text-lg font-bold hover:text-orange-300">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
