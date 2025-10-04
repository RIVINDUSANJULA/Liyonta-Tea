import './design.css'

import Image from 'next/image';
import S1 from '../cs/home/slide1';
import S2 from '../cs/home/slide2';
import S3 from '../cs/home/slide3';
import S4 from '../cs/home/slide4';
import Form1 from '../cs/home/form1';

import cet1 from '@/public/CEYLONTEA.png';
import cet2 from '@/public/ISO-2.png';
import cet3 from '@/public/OZONE.png';
import cet4 from '@/public/SGS.png';
import cet5 from '@/public/SLS.png';

export default function Page() {
  return (
    <div className="bg-white overflow-x-hidden max-w-full">
      <S1 />
      <S2 />
      <S3 />

      {/* Our Collection */}
      <div className="flex flex-col items-center justify-center text-center mt-8 px-4">
        <h2 className="text-[#013D45] text-[32px] md:text-[40px] lg:text-[56px] font-normal leading-tight font-serif">
          Our Collection.
        </h2>
        <p className="text-[#909090] font-light text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] md:leading-[30px] lg:leading-[32px] mt-6 max-w-[90%] md:max-w-[80%] lg:max-w-[610px] font-[Arial,Helvetica,sans-serif]">
          Each tea purchase comes with organically and ethically grown loose LIYONTA tea,
          carefully blended to create the perfect cup.
        </p>
      </div>

      <div>
        <S4 />
      </div>

      {/* Featured Products */}
      <div className="text-center mt-12 px-4">
        <h2 className="text-[#013D45] text-[32px] md:text-[40px] lg:text-[56px] font-normal leading-tight font-serif">
          Featured Products.
        </h2>
        <p className="text-[#909090] font-light text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] md:leading-[30px] lg:leading-[32px] mt-4 max-w-[90%] md:max-w-[80%] lg:max-w-[610px] mx-auto font-[Arial,Helvetica,sans-serif]">
          Each tea purchase comes with organically and ethically grown loose LIYONTA
          tea, carefully blended to create the perfect cup.
        </p>
      </div>

      {/* Our Standards */}
      <div className="text-center mt-16 px-4">
        <h2 className="text-[#013D45] text-[32px] md:text-[40px] lg:text-[56px] font-normal leading-tight font-serif">
          Our Standards.
        </h2>
        <p className="text-[#909090] font-light text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] md:leading-[30px] lg:leading-[32px] mt-4 max-w-[90%] md:max-w-[80%] lg:max-w-[610px] mx-auto font-[Arial,Helvetica,sans-serif]">
          We are committed to delivering excellence in every product, with trusted
          certifications that ensure quality and reliability.
        </p>
      </div>

      {/* Certification Logos - Inline and Responsive */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-10 px-6 md:px-16 lg:px-[120px] mb-16">
        <Image src={cet1} alt="Ceylon Tea" className="w-20 md:w-24 lg:w-28 object-contain" />
        <Image src={cet2} alt="ISO" className="w-20 md:w-24 lg:w-28 object-contain" />
        <Image src={cet3} alt="Ozone Friendly Pure Ceylon Tea" className="w-20 md:w-24 lg:w-28 object-contain" />
        <Image src={cet4} alt="SGS" className="w-20 md:w-24 lg:w-28 object-contain" />
        <Image src={cet5} alt="SLS" className="w-20 md:w-24 lg:w-28 object-contain" />
      </div>

      {/* Reach Us Section */}
      <div className="form1">
        <h2 className="text-white text-[32px] md:text-[48px] lg:text-[64px] font-normal leading-snug font-serif">
          Reach Us.
        </h2>
        <p className="text-white font-light text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] md:leading-[30px] lg:leading-[32px] mt-4 max-w-[90%] md:max-w-[700px] mx-auto font-[Arial,Helvetica,sans-serif]">
          We&apos;re just a message away. Share your thoughts, inquiries, or feedback; we&apos;d love to connect with you.
        </p>
        <div className="mt-8">
          <Form1 />
        </div>
      </div>
    </div>
  );
}
