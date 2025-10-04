import Image from 'next/image'

import cet1 from '@/public/CEYLONTEA.png'
import cet2 from '@/public/ISO-2.png'
import cet3 from '@/public/OZONE.png'
import cet4 from '@/public/SGS.png'
import cet5 from '@/public/SLS.png'

import comp1 from '@/public/forbes-walker.webp'
import comp2 from '@/public/DIMO.webp'
import comp3 from '@/public/CIC.webp'
import comp4 from '@/public/bartely.webp'

import side1 from '@/public/tea_picker_woman_s_asian_hands_close_up_pretty_tea_picking_girl_plantation_4-1024x682.webp'
import side2 from '@/public/unrecognizable_woman_pouring_tea_into_glasses_1-1024x684.webp'
import side3 from '@/public/elevated_view_assortment_dry_tea_paper_bag_1-1024x684.webp'

import found from '@/public/Mr.-Ronnie-Liyanage.png'

import S1 from '../cs/about/slide1'
import S2H from '../cs/home/slide2'
import Form1 from '../cs/home/form1'

const Page = () => {
  return (
    <div className='bg-white'>
      <S1 />
      
      {/* Intro Paragraphs */}
      <div className='flex flex-col items-center text-center text-[#909090] text-base md:text-lg lg:text-[20px] px-4 md:px-10 lg:px-20 mb-12'>
        <p className='mt-4 lg:text-[24px] max-w-4xl'>
          Since 2005, Liyonta Tea has been a proud steward of Sri Lanka&apos;s rich tea heritage, bringing the finest handpicked teas from the lush highlands of Ceylon to tea lovers around the world.
        </p>
        <p className='mt-4 lg:text-[24px] max-w-4xl'>
          Our unwavering commitment to quality defines who we are. Every step reflects a passion for excellence—from delicate leaf plucking to bold, aromatic blends.
        </p>
        <p className='mt-4 lg:text-[24px] max-w-4xl'>
          Rooted in sustainability and ethics, we prioritize eco-friendly farming and fair grower partnerships to ensure every cup tells a story of care.
        </p>
        <p className='mt-4 lg:text-[24px] max-w-4xl'>
          Whether bold or aromatic, Liyonta Tea invites you to an unforgettable experience—quality, flavor, and tradition in every sip.
        </p>
      </div>

      <S2H />

      {/* Standards */}
      <div className='mt-20 text-center'>
        <h2 className='text-[#013D45] font-serif text-4xl md:text-5xl mb-4'>Our Standards.</h2>
        <p className='text-[#909090] text-base md:text-lg max-w-3xl mx-auto lg:text-[24px]'>
          We are committed to delivering excellence in every product, with trusted certifications that ensure quality and reliability.
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 md:px-20 mb-20'>
        {[cet1, cet2, cet3, cet4, cet5].map((cert, i) => (
          <Image key={i} src={cert} alt={`Certification ${i + 1}`} className='p-4' />
        ))}
      </div>

      {/* Process Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f7f5f1] px-6 py-16'>
        <Image src={side1} alt="Tea picking close-up" className='w-full h-auto' />
        <div className='flex flex-col justify-center text-center'>
          <h2 className='text-[#013D45] font-serif text-3xl md:text-4xl mb-4 '>Careful Selection of Tea Leaves</h2>
          <p className='text-[#909090] text-base md:text-lg px-4 lg:text-[22px] '>
            We source only the finest tea leaves from reputable Sri Lankan growers, carefully inspecting each batch to meet our high standards.
          </p>
        </div>

        <div className='flex flex-col justify-center text-center'>
          <h2 className='text-[#013D45] font-serif text-3xl md:text-4xl mb-4 '>Stringent Quality Control Measures</h2>
          <p className='text-[#909090] text-base md:text-lg px-4 lg:text-[22px]'>
            Every step—from harvest to packaging—is tested for purity, aroma, and flavor, ensuring exceptional tea every time.
          </p>
        </div>
        <Image src={side2} alt="Pouring tea into glasses" className='w-full h-auto' />

        <Image src={side3} alt="Assortment of dry tea in bags" className='w-full h-auto' />
        <div className='flex flex-col justify-center text-center'>
          <h2 className='text-[#013D45] font-serif text-3xl md:text-4xl mb-4'>Crafting Flavorful Experiences</h2>
          <p className='text-[#909090] text-base md:text-lg px-4 lg:text-[22px]'>
            We preserve freshness through quick processing and packaging, delivering rich, natural flavors in every cup.
          </p>
        </div>
      </div>

      {/* Our Partners */}
      <div className='text-center px-4 py-20'>
        <h2 className='text-[#013D45] font-serif text-4xl md:text-5xl mb-4'>Our Partners.</h2>
        <p className='text-[#909090] text-base md:text-lg max-w-3xl mx-auto mb-10 lg:text-[24px]'>
          We collaborate with respected partners to uphold our commitment to excellence.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-20'>
          {[comp1, comp2, comp3, comp4].map((comp, i) => (
            <Image key={i} src={comp} alt={`Partner ${i + 1}`} className='p-4' />
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <div className='flex flex-col items-center text-center px-4'>
        <h2 className='text-[#013D45] font-serif text-4xl md:text-5xl mt-12'>A Note From Our Founder.</h2>
        <Image src={found} alt="Ronnie Liyanage" className='w-[180px] h-[180px] rounded-full mt-6' />
        <h2 className='font-serif text-[60px] text-[#013D45] mt-4'>&ldquo;</h2>
        <p className='max-w-3xl text-[#909090] text-base md:text-lg px-4 mb-4 lg:text-[20px]'>
          Liyonta Tea is produced in an award-winning factory in Southern Sri Lanka. Combining traditional methods with modern technology, we create high-quality tea while protecting the environment.
        </p>
        <p className='text-[#54595f] text-sm font-bold mt-2 mb-8'>Ronnie Liyanage, Founder</p>
      </div>

      {/* Contact Form Section */}
      <div className="w-full bg-[url('/liyonta_tea_homepage_contact_us.webp')] bg-no-repeat bg-cover text-white py-20 px-4 text-center">
        <h2 className='text-4xl md:text-5xl font-serif mb-4'>Reach Us.</h2>
        <p className='text-base md:text-lg mb-6 lg:text-[22px]'>
          We&apos;re just a message away. Share your thoughts, inquiries, or feedback—we&apos;d love to connect with you.
        </p>
        <Form1 />
      </div>
    </div>
  )
}

export default Page
