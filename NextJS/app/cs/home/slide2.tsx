import './design.css'
import Link from "next/link";

export default function Slide1() {

  return (
    <div className="">
  <div className='self-center'>
    <div className="relative w-full flex flex-col items-center justify-center text-center transition-opacity duration-700 ease-in-out">
      {/* Background image with opacity */}
      <div className="absolute inset-0 bg-[url('/liyonta_tea_home_about_us_image-scaled.webp')] bg-no-repeat bg-cover bg-[position:bottom_20%_center] opacity-15"></div>
      
      {/* Content with full opacity */}
      <div className="relative z-10">
        <p className="lg:w-[700px] text-[#000000] box-border block font-[Helvetica] text-[20px] sm:text-[22px] md:mb-4 ml-5 mr-5 md:ml-3 md:mr-3 mt-3 lg:text-[38px] leading-[35px] lg:leading-[60.8px] lg:mx-0 text-center">
          Liyonta Tea brings the finest teas from Sri Lanka&apos;s lush highlands to the world. With a legacy rooted in tradition and a commitment to quality, we craft exceptional blends that deliver bold flavors and authentic experiences, cherished by tea enthusiasts everywhere.
        </p>
        <div className="flex justify-center mt-3 lg:mt-13 mb-15">
          <Link href="/about-us" className="flex items-center gap-2 px-6 py-3 bg-white border border-black rounded-full text-black font-sans text-[18px] font-medium shadow-sm hover:shadow-md transition">
            Read More<span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
