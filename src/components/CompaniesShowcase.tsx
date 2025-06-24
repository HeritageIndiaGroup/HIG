//  // Original
// import { useEffect } from 'react';
// import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
// import {
//   Card, CardContent, CardDescription, CardHeader, CardTitle
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// // Local Images
// import agro from '@/assets/hero/agro.jpg';
// import micro from '@/assets/hero/micro.jpg';
// import media from '@/assets/hero/media.jpg';
// import hotel from '@/assets/hero/hotel.jpg';
// import infra from '@/assets/hero/infra.jpg';
// import glam from '@/assets/hero/glam.jpg';
// import kashikedarnath from '@/assets/hero/kashikedarnath.jpg';
// import finance from '@/assets/hero/finance.jpg';
// import mart from '@/assets/hero/mart.jpg';
// import traders from '@/assets/hero/dasandas.jpg';
// import media2 from '@/assets/hero/media2.jpg';

// const PRIMARY_COLOR = '#4A90E2';
// const SECONDARY_COLOR = '#50E3C2';
// const ACCENT_COLOR = '#FFC107';

// const CATEGORY_COLORS_NEW = {
//   Agriculture: SECONDARY_COLOR,
//   'Community Services': PRIMARY_COLOR,
//   'Education & Media': ACCENT_COLOR,
//   Hospitality: ACCENT_COLOR,
//   Infrastructure: SECONDARY_COLOR,
//   Entertainment: PRIMARY_COLOR,
//   'Spiritual Tourism': ACCENT_COLOR,
//   Finance: PRIMARY_COLOR,
//   Retail: SECONDARY_COLOR,
//   'Trading & Logistics': ACCENT_COLOR,
//   'Beauty & Lifestyle': PRIMARY_COLOR,
// };

// const companies = [
//   { id: 1, name: "HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED", description: "Agricultural production and farming solutions for sustainable growth, contributing to food security and rural prosperity across India.", image: agro, website: "https://heritageindiaagro.com/", category: "Agriculture" },
//   { id: 2, name: "HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION", description: "Empowering communities through accessible micro-services and fostering grassroots development initiatives.", image: micro, website: "https://heritage-microservices.com", category: "Community Services" },
//   { id: 3, name: "HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED", description: "Delivering innovative educational services and engaging media solutions that inform, educate, and inspire.", image: media, website: "https://heritage-media-education.com", category: "Education & Media" },
//   { id: 4, name: "HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED", description: "Crafting unparalleled hospitality experiences with luxury resorts and hotels that blend comfort with cultural richness.", image: hotel, website: "https://heritage-hotels.com", category: "Hospitality" },
//   { id: 5, name: "HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED", description: "Leading infrastructure development and construction ventures, building the foundations for a stronger, modern India.", image: infra, website: "https://heritage-infra.com", category: "Infrastructure" },
//   { id: 6, name: "HIG - HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED", description: "Bringing captivating stories to life through high-quality film production and entertainment industry services.", image: media2, website: "https://heritage-films.com", category: "Entertainment" },
//   { id: 7, name: "HIG - KashiKedarnath", description: "Providing specialized services and curated spiritual tourism solutions, connecting travelers with India's sacred heritage.", image: kashikedarnath, website: "https://kashikedarnath.com", category: "Spiritual Tourism" },
//   { id: 8, name: "HIG - Finance", description: "Offering comprehensive financial services and strategic investment solutions for individual and corporate growth.", image: finance, website: "https://heritage-finance.com", category: "Finance" },
//   { id: 9, name: "HIG - Mart", description: "A dynamic retail and consumer goods marketplace, delivering quality products and convenient shopping experiences.", image: mart, website: "https://heritage-mart.com", category: "Retail" },
//   { id: 10, name: "HIG - Dasandas Traders", description: "Expert trading and distribution services, ensuring efficient supply chain management and market reach.", image: traders, website: "https://dasandas-traders.com", category: "Trading & Logistics" },
//   { id: 11, name: "HIG - Glam Factory", description: "Curating premium beauty and lifestyle products and services, fostering self-expression and well-being.", image: glam, website: "https://glamfactory.com", category: "Beauty & Lifestyle" },
// ];

// const SwiperNavButtons = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="absolute top-1/2 left-0 right-0 z-10 flex items-center justify-between px-4 -translate-y-1/2 pointer-events-none">
//       <Button variant="ghost" size="icon" onClick={() => swiper.slidePrev()} className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 hidden md:flex items-center justify-center p-2" aria-label="Previous slide">
//         <ChevronLeft className="h-6 w-6 text-gray-700" />
//       </Button>
//       <Button variant="ghost" size="icon" onClick={() => swiper.slideNext()} className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 hidden md:flex items-center justify-center p-2" aria-label="Next slide">
//         <ChevronRight className="h-6 w-6 text-gray-700" />
//       </Button>
//     </div>
//   );
// };

// const CompaniesShowcase = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section id="companies" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16" data-aos="fade-up">
//           <h2 className="text-5xl font-extrabold mb-5 text-gray-900 leading-tight">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Diverse</span> Portfolio
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
//             Explore the vast network of Heritage India Group companies, each a beacon of innovation and a driving force in India's journey towards growth and prosperity.
//           </p>
//         </div>

//         <div className="relative">
//           <Swiper
//             modules={[Autoplay, Pagination, Navigation]}
//             slidesPerView={1}
//             spaceBetween={30}
//             loop={true}
//             breakpoints={{
//               640: { slidesPerView: 1.5, spaceBetween: 20 },
//               768: { slidesPerView: 2, spaceBetween: 30 },
//               1024: { slidesPerView: 3, spaceBetween: 40 },
//               1280: { slidesPerView: 4, spaceBetween: 40 },
//             }}
//             autoplay={{ delay: 3500, disableOnInteraction: false }}
//             pagination={{ clickable: true, dynamicBullets: true }}
//             className="!pb-16"
//           >
//             {companies.map((company) => {
//               const color = CATEGORY_COLORS_NEW[company.category] || PRIMARY_COLOR;
//               return (
//                 <SwiperSlide key={company.id} className="h-auto">
//                   <Card data-aos="fade-up" data-aos-delay={company.id * 50} className="h-full flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-gray-100 bg-white">
//                     <CardHeader className="p-0 relative">
//                       <div className="w-full h-40 bg-gray-100 overflow-hidden flex items-center justify-center">
//                         <img src={company.image} alt={company.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
//                       </div>
//                       <div className="absolute top-4 left-4">
//                         <div className="px-3 py-1 text-xs font-semibold rounded-full shadow-sm" style={{ backgroundColor: color, color: 'white' }}>
//                           {company.category}
//                         </div>
//                       </div>
//                     </CardHeader>
//                     <CardContent className="flex-grow flex flex-col p-6">
//                       <CardTitle className="text-xl font-bold mb-2 text-gray-800">
//                         {company.name}
//                       </CardTitle>
//                       <CardDescription className="text-sm text-gray-600 flex-grow mb-4 leading-relaxed">
//                         {company.description}
//                       </CardDescription>
//                       <Button
//                         asChild
//                         className="w-full text-white font-semibold py-2 rounded-lg flex items-center justify-center transition-all duration-300 group mt-auto"
//                         style={{ backgroundColor: PRIMARY_COLOR }}
//                         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = SECONDARY_COLOR)}
//                         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}
//                       >
//                         <a href={company.website} target="_blank" rel="noopener noreferrer">
//                           Visit Website
//                           <ExternalLink className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
//                         </a>
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </SwiperSlide>
//               );
//             })}
//             <SwiperNavButtons />
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompaniesShowcase;



// // Updated
import { useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import agro from '@/assets/hero/agro.jpg';
import micro from '@/assets/hero/micro.jpg';
import media from '@/assets/hero/media.jpg';
import hotel from '@/assets/hero/hotel.jpg';
import infra from '@/assets/hero/infra.jpg';
import glam from '@/assets/hero/glam.jpg';
import kashikedarnath from '@/assets/hero/kashikedarnath.jpg';
import finance from '@/assets/hero/finance.jpg';
import mart from '@/assets/hero/mart.jpg';
import traders from '@/assets/hero/dasandas.jpg';
import media2 from '@/assets/hero/media2.jpg';

const PRIMARY_COLOR = '#4A90E2';
const SECONDARY_COLOR = '#50E3C2';
const ACCENT_COLOR = '#FFC107';

const CATEGORY_COLORS_NEW = {
  Agriculture: SECONDARY_COLOR,
  'Community Services': PRIMARY_COLOR,
  'Education & Media': ACCENT_COLOR,
  Hospitality: ACCENT_COLOR,
  Infrastructure: SECONDARY_COLOR,
  Entertainment: PRIMARY_COLOR,
  'Spiritual Tourism': ACCENT_COLOR,
  Finance: PRIMARY_COLOR,
  Retail: SECONDARY_COLOR,
  'Trading & Logistics': ACCENT_COLOR,
  'Beauty & Lifestyle': PRIMARY_COLOR,
};

const companies = [
  { id: 1, name: "HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED", description: "Agricultural production and farming solutions for sustainable growth, contributing to food security and rural prosperity across India.", image: agro, website: "https://heritageindiaagro.com/", category: "Agriculture" },
  { id: 2, name: "HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION", description: "Empowering communities through accessible micro-services and fostering grassroots development initiatives.", image: micro, website: "https://heritage-microservices.com", category: "Community Services" },
  { id: 3, name: "HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED", description: "Delivering innovative educational services and engaging media solutions that inform, educate, and inspire.", image: media, website: "https://heritage-media-education.com", category: "Education & Media" },
  { id: 4, name: "HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED", description: "Crafting unparalleled hospitality experiences with luxury resorts and hotels that blend comfort with cultural richness.", image: hotel, website: "https://heritage-hotels.com", category: "Hospitality" },
  { id: 5, name: "HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED", description: "Leading infrastructure development and construction ventures, building the foundations for a stronger, modern India.", image: infra, website: "https://heritage-infra.com", category: "Infrastructure" },
  { id: 6, name: "HIG - HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED", description: "Bringing captivating stories to life through high-quality film production and entertainment industry services.", image: media2, website: "https://heritage-films.com", category: "Entertainment" },
  { id: 7, name: "HIG - KashiKedarnath", description: "Providing specialized services and curated spiritual tourism solutions, connecting travelers with India's sacred heritage.", image: kashikedarnath, website: "https://kashikedarnath.com", category: "Spiritual Tourism" },
  { id: 8, name: "HIG - Finance", description: "Offering comprehensive financial services and strategic investment solutions for individual and corporate growth.", image: finance, website: "https://heritage-finance.com", category: "Finance" },
  { id: 9, name: "HIG - Mart", description: "A dynamic retail and consumer goods marketplace, delivering quality products and convenient shopping experiences.", image: mart, website: "https://heritage-mart.com", category: "Retail" },
  { id: 10, name: "HIG - Dasandas Traders", description: "Expert trading and distribution services, ensuring efficient supply chain management and market reach.", image: traders, website: "https://dasandas-traders.com", category: "Trading & Logistics" },
  { id: 11, name: "HIG - Glam Factory", description: "Curating premium beauty and lifestyle products and services, fostering self-expression and well-being.", image: glam, website: "https://glamfactory.com", category: "Beauty & Lifestyle" },
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-1/2 left-0 right-0 z-10 flex items-center justify-between px-4 -translate-y-1/2 pointer-events-none">
      <Button variant="ghost" size="icon" onClick={() => swiper.slidePrev()} className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 hidden md:flex items-center justify-center p-2" aria-label="Previous slide">
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => swiper.slideNext()} className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 hidden md:flex items-center justify-center p-2" aria-label="Next slide">
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </Button>
    </div>
  );
};

const CompaniesShowcase = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="companies" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold mb-5 text-gray-900 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Diverse</span> Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
            Explore the vast network of Heritage India Group companies, each a beacon of innovation and a driving force in India's journey towards growth and prosperity.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
              1280: { slidesPerView: 4, spaceBetween: 40 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="!pb-16"
          >
            {companies.map((company) => {
              const color = CATEGORY_COLORS_NEW[company.category] || PRIMARY_COLOR;
              return (
                <SwiperSlide key={company.id} className="h-auto">
                  <Card data-aos="fade-up" data-aos-delay={company.id * 50} className="h-full flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-gray-100 bg-white">
                    <CardHeader className="p-0 relative">
                      <div className="w-full h-40 bg-gray-100 overflow-hidden flex items-center justify-center">
                        <img src={company.image} alt={company.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 text-xs font-semibold rounded-full shadow-sm" style={{ backgroundColor: color, color: 'white' }}>
                          {company.category}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col p-6">
                      <CardTitle className="text-xl font-bold mb-2 text-gray-800">
                        {company.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 flex-grow mb-4 leading-relaxed">
                        {company.description}
                      </CardDescription>
                      <Button
                        asChild
                        className="w-full text-white font-semibold py-2 rounded-lg flex items-center justify-center transition-all duration-300 group mt-auto"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = SECONDARY_COLOR)}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}
                      >
                        <a href={company.website} target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CompaniesShowcase;
