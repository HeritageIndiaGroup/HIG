// // Original
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Award, Globe, Target } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from 'swiper/modules';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Typewriter } from 'react-simple-typewriter';
// import 'swiper/css';
// import 'swiper/css/effect-fade';

// // ✅ Corrected: Import each local image directly for Vite to handle properly
// //    Specifically, changed 'traders.jpg' to 'dasandas.jpg' to match your actual file.
// import agroImage from '@/assets/hero/agro.jpg';
// import microImage from '@/assets/hero/micro.jpg';
// import mediaImage from '@/assets/hero/media.jpg';
// import hotelImage from '@/assets/hero/hotel.jpg';
// import infraImage from '@/assets/hero/infra.jpg';
// import glamImage from '@/assets/hero/glam.jpg'; // Ensure this file also exists as 'glam.jpg'
// import kashiKedarnathImage from '@/assets/hero/kashikedarnath.jpg';
// import financeImage from '@/assets/hero/finance.jpg';
// import martImage from '@/assets/hero/mart.jpg';
// import tradersImage from '@/assets/hero/dasandas.jpg'; // ⭐ CORRECTED THIS LINE ⭐
// import media2Image from '@/assets/hero/media2.jpg';

// const heroImages = [
//   agroImage, // HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED (Agriculture)
//   microImage, // HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION (Community/Social)
//   mediaImage, // HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED (Education/Media)
//   hotelImage, // HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED (Hospitality)
//   infraImage, // HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED (Infrastructure/Construction)
//   glamImage, // HIG - Glam Factory (Beauty/Fashion/Manufacturing)
//   kashiKedarnathImage, // KashiKedarnath (Pilgrimage/Tourism)
//   financeImage, // HIG - Finance (Finance)
//   martImage, // HIG - Mart (Retail/e-commerce)
//   tradersImage, // HIG - Dasandas Traders (Trading) - Now points to dasandas.jpg
//   media2Image,  // Additional Media image
// ];

// const taglines = [
//   'HIG Agro Producer: Cultivating prosperity, empowering farmers.',
//   'HIG Micro Services: Building resilient communities, fostering social change.',
//   'HIG Media & Education: Shaping minds, crafting stories.',
//   'HIG Hotel & Resort: Redefining luxury, creating memorable stays.',
//   'HIG Infra Venture: Constructing the future, one foundation at a time.',
//   // Note: The previous tagline was "HIG Film Production". If glam.jpg is for 'Glam Factory',
//   // and the 6th image is Glam Factory, ensure the 6th tagline matches its purpose.
//   // I've updated it based on your file list and the previous context of 'Glam Factory'.
//   'HIG Glam Factory: Innovating beauty, crafting excellence.',
//   'KashiKedarnath: Enriching spiritual journeys, promoting cultural heritage.',
//   'HIG Finance: Empowering financial growth, securing your future.',
//   'HIG Mart: Your daily essentials, delivered with ease.',
//   'HIG Dasandas Traders: Global trade, local impact.',
//   'HIG Media & Education: Shaping minds, crafting stories. (Additional Media)', // Added a tagline for media2Image, adjust as needed.
// ];

// const descriptions = [
//   'Dedicated to sustainable agriculture, we empower farmers with modern techniques and market access, contributing to India\'s food security and rural development.',
//   'Through grassroots initiatives and support programs, we strive to uplift underprivileged communities, focusing on health, education, and livelihood generation.',
//   'We are committed to innovative education and impactful media production, fostering knowledge and entertainment that inspires and informs across diverse platforms.',
//   'Offering unparalleled comfort and exquisite experiences, our hotels and resorts provide a sanctuary of luxury and hospitality for every traveler.',
//   'Pioneering critical infrastructure projects, we build robust foundations for India\'s progress, from urban development to essential public works.',
//   // Note: The previous description was for "Film Production". Updated for 'Glam Factory'.
//   'At Glam Factory, we are dedicated to creating high-quality beauty and lifestyle products, blending innovation with tradition to meet contemporary demands.',
//   'We facilitate sacred pilgrimages and promote the vibrant cultural heritage of Kashi (Varanasi) and Kedarnath, offering spiritual journeys and tourism experiences.',
//   'Providing comprehensive financial solutions, we help individuals and businesses achieve their economic goals through trusted and accessible services.',
//   'A modern retail and e-commerce venture, HIG - Mart connects you to a wide range of quality products, making everyday shopping convenient and reliable.',
//   'Engaged in dynamic trading operations, Dasandas Traders ensures efficient supply chain management and delivers quality goods across various sectors.',
//   'We are committed to innovative education and impactful media production, fostering knowledge and entertainment that inspires and informs across diverse platforms. (Additional Media)', // Added a description for media2Image, adjust as needed.
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
//     <section id="home" className="relative w-full min-h-screen text-white">
//       {/* Background slideshow */}
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         effect="fade"
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop={true}
//         className="absolute inset-0 w-full h-full z-0"
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//       >
//         {heroImages.map((image, i) => (
//           <SwiperSlide key={i}>
//             <div
//               className="w-full h-full bg-cover bg-center"
//               // `image` here will directly be the URL string from Vite's import.
//               // `image.src || image` is robust, but for Vite direct imports, `image` alone is often sufficient.
//               style={{ backgroundImage: `url(${image})` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Centered content */}
//       <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 lg:px-8 pt-28">
//         <div className="space-y-6 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.8)] max-w-5xl mx-auto">
//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
//           >
//             <span className="text-[#FF9933] font-bold">Heritage</span>{' '}
//             <span className="text-white font-bold">India</span>{' '}
//             <span className="block font-extrabold text-[#138808]">Group</span>
//           </motion.h1>

//           {/* Dynamic Tagline with Framer Motion (Fade and Slide) */}
//           <AnimatePresence mode="wait">
//             {taglines.map((text, index) =>
//               index === activeIndex ? (
//                 <motion.h2
//                   key={`tagline-${index}`}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 20 }}
//                   transition={{ duration: 0.6 }}
//                   className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FFD700] min-h-[2.5rem]"
//                 >
//                   {text}
//                 </motion.h2>
//               ) : null
//             )}
//           </AnimatePresence>

//           {/* Description with typewriter */}
//           <motion.p
//             key={`desc-${activeIndex}`}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)] min-h-[5.5rem]"
//           >
//             <Typewriter
//               words={[descriptions[activeIndex]]}
//               loop={false}
//               cursor
//               cursorStyle="_"
//               typeSpeed={30}
//               deleteSpeed={20}
//               delaySpeed={2000}
//             />
//           </motion.p>

//           {/* Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="flex justify-center"
//           >
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
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 1 }}
//             className="grid grid-cols-3 gap-6 pt-10 max-w-3xl mx-auto"
//           >
//             <div className="text-center">
//               <Award className="h-8 w-8 mx-auto mb-2 text-[#00A859]" />
//               <div className="text-xl font-bold">Trust</div>
//               <div className="text-sm sm:text-base"> & Excellence</div>
//             </div>
//             <div className="text-center">
//               <Globe className="h-8 w-8 mx-auto mb-2 text-[#005BA1]" />
//               <div className="text-xl font-bold">{taglines.length}+</div>
//               <div className="text-sm sm:text-base">Companies</div>
//             </div>
//             <div className="text-center">
//               <Target className="h-8 w-8 mx-auto mb-2 text-[#F05A28]" />
//               <div className="text-xl font-bold">Vision</div>
//               <div className="text-sm sm:text-base">& Innovation</div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;








// // Updated 
// components/Hero.jsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Globe, Target } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Local hero images
import agroImage from '@/assets/hero/agro.jpg';
import microImage from '@/assets/hero/micro.jpg';
import mediaImage from '@/assets/hero/media.jpg';
import hotelImage from '@/assets/hero/hotel.jpg';
import infraImage from '@/assets/hero/infra.jpg';
import glamImage from '@/assets/hero/glam.jpg';
import kashiKedarnathImage from '@/assets/hero/kashikedarnath.jpg';
import financeImage from '@/assets/hero/finance.jpg';
import martImage from '@/assets/hero/mart.jpg';
import tradersImage from '@/assets/hero/dasandas.jpg';
import media2Image from '@/assets/hero/media2.jpg';

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
  'HIG Agro Producer: Cultivating prosperity, empowering farmers.',
  'HIG Micro Services: Building resilient communities, fostering social change.',
  'HIG Media & Education: Shaping minds, crafting stories.',
  'HIG Hotel & Resort: Redefining luxury, creating memorable stays.',
  'HIG Infra Venture: Constructing the future, one foundation at a time.',
  'HIG Glam Factory: Innovating beauty, crafting excellence.',
  'KashiKedarnath: Enriching spiritual journeys, promoting cultural heritage.',
  'HIG Finance: Empowering financial growth, securing your future.',
  'HIG Mart: Your daily essentials, delivered with ease.',
  'HIG Dasandas Traders: Global trade, local impact.',
  'HIG Media & Education: Shaping minds, crafting stories. (Additional Media)',
];

const descriptions = [
  'Dedicated to sustainable agriculture, we empower farmers with modern techniques and market access, contributing to India\'s food security and rural development.',
  'Through grassroots initiatives and support programs, we strive to uplift underprivileged communities, focusing on health, education, and livelihood generation.',
  'We are committed to innovative education and impactful media production, fostering knowledge and entertainment that inspires and informs across diverse platforms.',
  'Offering unparalleled comfort and exquisite experiences, our hotels and resorts provide a sanctuary of luxury and hospitality for every traveler.',
  'Pioneering critical infrastructure projects, we build robust foundations for India\'s progress, from urban development to essential public works.',
  'At Glam Factory, we are dedicated to creating high-quality beauty and lifestyle products, blending innovation with tradition to meet contemporary demands.',
  'We facilitate sacred pilgrimages and promote the vibrant cultural heritage of Kashi (Varanasi) and Kedarnath, offering spiritual journeys and tourism experiences.',
  'Providing comprehensive financial solutions, we help individuals and businesses achieve their economic goals through trusted and accessible services.',
  'A modern retail and e-commerce venture, HIG - Mart connects you to a wide range of quality products, making everyday shopping convenient and reliable.',
  'Engaged in dynamic trading operations, Dasandas Traders ensures efficient supply chain management and delivers quality goods across various sectors.',
  'We are committed to innovative education and impactful media production, fostering knowledge and entertainment that inspires and informs across diverse platforms. (Additional Media)',
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCompanies = () => {
    const companiesSection = document.getElementById('companies');
    if (companiesSection) {
      companiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen text-white">
      {/* Background slideshow */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 w-full h-full z-0"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {heroImages.map((image, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Centered content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        <div className="space-y-6 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.8)] max-w-5xl mx-auto">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-[#FF9933] font-bold">Heritage</span>{' '}
            <span className="text-white font-bold">India</span>{' '}
            <span className="block font-extrabold text-[#138808]">Group</span>
          </motion.h1>

          {/* Dynamic Tagline */}
          <AnimatePresence mode="wait">
            {taglines.map((text, index) =>
              index === activeIndex ? (
                <motion.h2
                  key={`tagline-${index}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FFD700] min-h-[2.5rem]"
                >
                  {text}
                </motion.h2>
              ) : null
            )}
          </AnimatePresence>

          {/* Description */}
          <motion.p
            key={`desc-${activeIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)] min-h-[5rem] sm:min-h-[6rem]"
          >
            <Typewriter
              words={[descriptions[activeIndex]]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={30}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <Button
              aria-label="Explore Our Companies"
              onClick={scrollToCompanies}
              className="inline-flex items-center gap-2 px-5 py-2 border border-white text-white text-sm font-semibold rounded-full bg-transparent hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300 group"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Explore Our Companies
              </span>
              <ArrowRight
                className="h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
              />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="grid grid-cols-3 gap-6 pt-10 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-[#00A859]" />
              <div className="text-xl font-bold">Trust</div>
              <div className="text-sm sm:text-base"> & Excellence</div>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 text-[#005BA1]" />
              <div className="text-xl font-bold">{taglines.length}+</div>
              <div className="text-sm sm:text-base">Companies</div>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-[#F05A28]" />
              <div className="text-xl font-bold">Vision</div>
              <div className="text-sm sm:text-base">& Innovation</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
