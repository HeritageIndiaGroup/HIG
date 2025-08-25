import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Trophy } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Virtual } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
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

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const companyNames = [
    'HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED',
    'HERITAGE INDIA MICRO SERVICES FOUNDATION',
    'HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED',
    'HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED',
    'HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED',
    'HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED',
    'Kashi Kedarnath',
    'Finance',
    'Mart',
    'Dasandas Traders',
    'Glam Factory',
  ];

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
      className="relative w-full min-h-screen text-white pt-[50px] overflow-hidden"
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
              className="w-full h-full bg-cover bg-center hero-bg-image"
              style={{ backgroundImage: `url(${image})` }}
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
            <span className="text-heritage-saffron">{t('heritage')}</span>{' '}
            <span className="text-white">{t('india')}</span>{' '}
            <span className="text-heritage-green font-extrabold">{t('group')}</span>
          </h1>

          {/* Animated Tagline */}
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-accent min-h-[5rem] sm:min-h-[2.5rem] flex items-center justify-center gap-x-2">
            <span className="text-white">HIG</span>
            <span className="text-accent">|</span>
            <div className="relative overflow-hidden">
               <span key={activeIndex} className="inline-block animate-calm-slide-up">
                {companyNames[activeIndex]}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <Button
              onClick={scrollToCompanies}
              className="inline-flex items-center gap-2 px-5 py-2 border border-white text-white text-sm font-semibold rounded-full bg-transparent hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300 group"
              aria-label="Scroll to explore our companies section"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {t('exploreCompanies')}
              </span>
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
            </Button>
          </div>

          {/* Hindi/English Stats */}
          <div className="grid grid-cols-3 gap-6 pt-10 max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <Zap className="h-8 w-8 mb-2 text-accent" aria-hidden="true" />
              <div className="text-xl font-bold">शक्ति</div>
              <div className="text-xl font-normal">{t('power')}</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-8 w-8 mb-2 text-success" aria-hidden="true" />
              <div className="text-xl font-bold">प्रगति</div>
              <div className="text-xl font-normal">{t('progress')}</div>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="h-8 w-8 mb-2 text-heritage-saffron" aria-hidden="true" />
              <div className="text-xl font-bold">विजय</div>
              <div className="text-xl font-normal">{t('victory')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;