// src/components/CompaniesShowcase.jsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {
  companies,
  CATEGORY_COLORS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "@/data/companies";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-1/2 left-0 right-0 z-10 flex items-center justify-between px-4 -translate-y-1/2 pointer-events-none">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => swiper.slidePrev()}
        className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 hidden md:flex items-center justify-center p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => swiper.slideNext()}
        className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 hidden md:flex items-center justify-center p-2"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </Button>
    </div>
  );
};

const CompaniesShowcase = () => {
  return (
    <section
      id="companies"
      className="py-20 bg-gradient-to-br from-muted to-background overflow-hidden"
      role="region"
      aria-labelledby="companies-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 id="companies-heading" className="text-5xl font-extrabold mb-5 text-foreground leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              Diverse
            </span>{" "}
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light">
            Explore the vast network of Heritage India Group companies, each a
            beacon of innovation and a driving force in India's journey towards
            growth and prosperity.
          </p>
        </header>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            loop
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
              const color = CATEGORY_COLORS[company.category] || PRIMARY_COLOR;
              return (
                <SwiperSlide key={company.id} className="h-auto">
                  <Card className="h-full flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-gray-100 bg-card">
                    <CardHeader className="p-0 relative">
                      <div className="w-full h-40 bg-muted overflow-hidden flex items-center justify-center">
                        <img
                          src={company.image}
                          alt={`${company.name} - ${company.category} company logo and visual representation`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-300"
                          width="400"
                          height="200"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 text-xs font-semibold rounded-full shadow-sm text-white"
                          style={{ backgroundColor: color }}
                        >
                          {company.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col p-6">
                      <CardTitle className="text-xl font-bold mb-2 text-card-foreground">
                        {company.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground flex-grow mb-4 leading-relaxed">
                        {company.description}
                      </CardDescription>
                      <Button
                        asChild
                        className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded-lg flex items-center justify-center transition-all duration-300 group mt-auto hover:bg-primary-hover"
                      >
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${company.name} website - opens in new tab`}
                        >
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
