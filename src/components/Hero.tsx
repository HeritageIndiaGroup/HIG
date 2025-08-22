// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Zap, TrendingUp, Trophy } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from 'swiper/modules';
// import { Typewriter } from 'react-simple-typewriter';
// import 'swiper/css';
// import 'swiper/css/effect-fade';

// // Local hero images (updated to use .avif)
// import agroImage from '@/assets/hero/agro.avif';
// import microImage from '@/assets/hero/micro.avif';
// import mediaImage from '@/assets/hero/media.avif';
// import hotelImage from '@/assets/hero/hotel.avif';
// import infraImage from '@/assets/hero/infra.avif';
// import glamImage from '@/assets/hero/glam.avif';
// import kashiKedarnathImage from '@/assets/hero/kashikedarnath.avif';
// import financeImage from '@/assets/hero/finance.avif';
// import martImage from '@/assets/hero/mart.avif';
// import tradersImage from '@/assets/hero/dasandas.avif';
// import media2Image from '@/assets/hero/media2.avif';

// const heroImages = [
//   agroImage,
//   microImage,
//   mediaImage,
//   hotelImage,
//   infraImage,
//   glamImage,
//   kashiKedarnathImage,
//   financeImage,
//   martImage,
//   tradersImage,
//   media2Image,
// ];

// const taglines = [
//   'HIG Agro Producer:',
//   'HIG Micro Services:',
//   'HIG Media & Education:',
//   'HIG Hotel & Resort:',
//   'HIG Infra Venture:',
//   'HIG Glam Factory:',
//   'KashiKedarnath:',
//   'HIG Finance:',
//   'HIG Mart:',
//   'HIG Dasandas Traders: ',
//   'HIG Media & Education:',
// ];

// const descriptions = [
//   'Cultivating prosperity, empowering farmers.',
//   ' Building resilient communities, fostering social change.',
//   'Shaping minds, crafting stories.',
//   'Redefining luxury, creating memorable stays.',
//   'Constructing the future, one foundation at a time.',
//   'Innovating beauty, crafting excellence.',
//   'Enriching spiritual journeys, promoting cultural heritage.',
//   'Empowering financial growth, securing your future.',
//   'Your daily essentials, delivered with ease.',
//   'Global trade, local impact.',
//   'Shaping minds, crafting stories. (Additional Media)',
// ];

// const Hero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const scrollToCompanies = () => {
//     const companiesSection = document.getElementById('companies');
//     if (companiesSection) {
//       companiesSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="relative w-full min-h-screen text-white pt-[50px]">
//       {/* Background slideshow */}
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         effect="fade"
//         autoplay={{ delay: 6000, disableOnInteraction: false }}
//         loop={true}
//         className="absolute inset-0 w-full h-full z-0"
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//       >
//         {heroImages.map((image, i) => (
//           <SwiperSlide key={i}>
//             <div
//               className="w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${image})` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Centered content */}
//       <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
//         <div className="space-y-6 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.8)] max-w-5xl mx-auto">
//           {/* Heading */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
//             <span className="text-[#FF9933] font-bold">Heritage</span>{' '}
//             <span className="text-white font-bold">India</span>{' '}
//             <span className="block font-extrabold text-[#138808]">Group</span>
//           </h1>

//           {/* Dynamic Tagline */}
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FFD700] min-h-[2.5rem]">
//             {taglines[activeIndex]}
//           </h2>

//           {/* Description */}
//           <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)] min-h-[5rem] sm:min-h-[6rem]">
//             <Typewriter
//               words={[descriptions[activeIndex]]}
//               loop={false}
//               cursor
//               cursorStyle="_"
//               typeSpeed={30}
//               deleteSpeed={20}
//               delaySpeed={3000}
//             />
//           </p>

//           {/* CTA Button */}
//           <div className="flex justify-center">
//             <Button
//               aria-label="Explore Our Companies"
//               onClick={scrollToCompanies}
//               className="inline-flex items-center gap-2 px-5 py-2 border border-white text-white text-sm font-semibold rounded-full bg-transparent hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300 group"
//             >
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 Explore Our Companies
//               </span>
//               <ArrowRight
//                 className="h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
//               />
//             </Button>
//           </div>

//           {/* Hindi/English Stat Icons - Fixed 3 Columns on All Screens */}
//           <div className="grid grid-cols-3 gap-6 pt-10 max-w-3xl mx-auto text-center">
//             <div className="flex flex-col items-center">
//               <Zap className="h-8 w-8 mb-2 text-[#FFD700]" />
//               <div className="text-xl font-bold">शक्ति</div>
//               <div className="text-xl font-normal">Power</div>
//             </div>
//             <div className="flex flex-col items-center">
//               <TrendingUp className="h-8 w-8 mb-2 text-[#00A859]" />
//               <div className="text-xl font-bold">प्रगति</div>
//               <div className="text-xl font-normal">Progress</div>
//             </div>
//             <div className="flex flex-col items-center">
//               <Trophy className="h-8 w-8 mb-2 text-[#F05A28]" />
//               <div className="text-xl font-bold">विजय</div>
//               <div className="text-xl font-normal">Victory</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Trophy } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Virtual } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Images
import agroImage from '@/assets/hero/agro.avif';
import microImage from '@/assets/hero/micro.avif';
import mediaImage from '@/assets/hero/media.avif';
import hotelImage from '@/assets/hero/hotel.avif';
import infraImage from '@/assets/hero/infra.avif';
import glamImage from '@/assets/hero/glam.avif';
import kashiKedarnathImage from '@/assets/hero/kashikedarnath.avif';
import financeImage from '@/assets/hero/finance.avif';
import martImage from '@/assets/hero/mart.avif';
import tradersImage from '@/assets/hero/dasandas.avif';
import media2Image from '@/assets/hero/media2.avif';

const heroImages = [
  agroImage,
  microImage,
  mediaImage,
  hotelImage,
  infraImage,
  glamImage,
  kashiKedarnathImage,
  financeImage,
  martImage,
  tradersImage,
  media2Image,
];

const taglines = [
  'HIG Agro Producer:',
  'HIG Micro Services:',
  'HIG Media & Education:',
  'HIG Hotel & Resort:',
  'HIG Infra Venture:',
  'HIG Glam Factory:',
  'KashiKedarnath:',
  'HIG Finance:',
  'HIG Mart:',
  'HIG Dasandas Traders:',
  'HIG Media & Education:',
];

const descriptions = [
  'Cultivating prosperity, empowering farmers.',
  'Building resilient communities, fostering social change.',
  'Shaping minds, crafting stories.',
  'Redefining luxury, creating memorable stays.',
  'Constructing the future, one foundation at a time.',
  'Innovating beauty, crafting excellence.',
  'Enriching spiritual journeys, promoting cultural heritage.',
  'Empowering financial growth, securing your future.',
  'Your daily essentials, delivered with ease.',
  'Global trade, local impact.',
  'Shaping minds, crafting stories. (Additional Media)',
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentTagline = useMemo(() => taglines[activeIndex], [activeIndex]);
  const currentDescription = useMemo(() => [descriptions[activeIndex]], [activeIndex]);

  const scrollToCompanies = () => {
    const section = document.getElementById('companies');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  // Preload all hero images (after mount)
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen text-white pt-[50px]"
      role="banner"
      aria-label="Heritage India Group Hero Section"
    >
      {/* Background slideshow with Virtual rendering */}
      <Swiper
        modules={[Autoplay, EffectFade, Virtual]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        virtual
        className="absolute inset-0 w-full h-full z-0"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        aria-hidden="true"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})`, willChange: 'transform' }}
              role="img"
              aria-label={`Heritage India Group company showcase image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        <div className="space-y-6 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.8)] max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-heritage-saffron">Heritage</span>{' '}
            <span className="text-white">India</span>{' '}
            <span className="block text-heritage-green font-extrabold">Group</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-accent min-h-[2.5rem]">
            {currentTagline}
          </h2>

          {/* Typewriter description */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)] min-h-[5rem] sm:min-h-[6rem]">
            <Typewriter
              words={currentDescription}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={30}
              deleteSpeed={20}
              delaySpeed={3000}
            />
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              onClick={scrollToCompanies}
              className="inline-flex items-center gap-2 px-5 py-2 border border-white text-white text-sm font-semibold rounded-full bg-transparent hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300 group"
              aria-label="Scroll to explore our companies section"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Explore Our Companies
              </span>
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
            </Button>
          </div>

          {/* Hindi/English Stats */}
          <div className="grid grid-cols-3 gap-6 pt-10 max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <Zap className="h-8 w-8 mb-2 text-accent" aria-hidden="true" />
              <div className="text-xl font-bold">शक्ति</div>
              <div className="text-xl font-normal">Power</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-8 w-8 mb-2 text-success" aria-hidden="true" />
              <div className="text-xl font-bold">प्रगति</div>
              <div className="text-xl font-normal">Progress</div>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="h-8 w-8 mb-2 text-heritage-saffron" aria-hidden="true" />
              <div className="text-xl font-bold">विजय</div>
              <div className="text-xl font-normal">Victory</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
