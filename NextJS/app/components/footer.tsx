import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#013d45] text-white relative">
      {/* Yellow line at the top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#ffd99c]"></div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Left section */}
        <div className="md:col-span-2 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Image src="/liyonta_tea_logo.webp" alt="Liyonta Logo" width={100} height={100} />
          </div>
          <p className="mt-4 leading-relaxed text-[17px]">
            Liyonta Tea brings the finest handpicked Ceylon teas from Sri Lanka&apos;s lush highlands to your cup.
            With a commitment to quality, sustainability, and community, we offer an exceptional tea experience 
            rooted in tradition and passion.
          </p>
        </div>

        {/* Middle section */}
        <div className="text-center md:text-left">
          <h3 className="text-1xl md:text-2xl lg:text-3xl mb-7 font-semibold">General</h3>
          <ul className="space-y-5 text-[15px]">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold">Contact</h3>
          <p className="text-[15px]">
            Tel: +94 41 313 0665<br />| +94 41 228 2268
          </p>
          <p className="text-[15px] mt-4">
            Email: <a href="mailto:liyonta@gmail.com" className="hover:underline">liyonta@gmail.com</a>
          </p>
          <p className="text-[15px] mt-4">
            Liyonta Tea Factory,<br />Dangala, Alapaladeniya
          </p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-teal-800"></div>
    </footer>
  );
}
