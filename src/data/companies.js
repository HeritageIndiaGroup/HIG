// src/data/companies.js

import agro from "@/assets/hero/agro.avif";
import micro from "@/assets/hero/micro.avif";
import media from "@/assets/hero/media.avif";
import hotel from "@/assets/hero/hotel.avif";
import infra from "@/assets/hero/infra.avif";
import glam from "@/assets/hero/glam.avif";
import kashikedarnath from "@/assets/hero/kashikedarnath.avif";
import finance from "@/assets/hero/finance.avif";
import mart from "@/assets/hero/mart.avif";
import traders from "@/assets/hero/dasandas.avif";
import media2 from "@/assets/hero/media2.avif";

export const PRIMARY_COLOR = "#4A90E2";
export const SECONDARY_COLOR = "#50E3C2";
export const ACCENT_COLOR = "#FFC107";

export const CATEGORY_COLORS = {
  Agriculture: SECONDARY_COLOR,
  "Community Services": PRIMARY_COLOR,
  "Education & Media": ACCENT_COLOR,
  Hospitality: ACCENT_COLOR,
  Infrastructure: SECONDARY_COLOR,
  Entertainment: PRIMARY_COLOR,
  "Spiritual Tourism": ACCENT_COLOR,
  Finance: PRIMARY_COLOR,
  Retail: SECONDARY_COLOR,
  "Trading & Logistics": ACCENT_COLOR,
  "Beauty & Lifestyle": PRIMARY_COLOR,
};

export const companies = [
  {
    id: 1,
    name: "HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED",
    description:
      "Agricultural production and farming solutions for sustainable growth, contributing to food security and rural prosperity across India.",
    image: agro,
    website: "https://heritageindiaagro.com/",
    category: "Agriculture",
  },
  {
    id: 2,
    name: "HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION",
    description:
      "Empowering communities through accessible micro-services and fostering grassroots development initiatives.",
    image: micro,
    website: "https://heritage-microservices.com",
    category: "Community Services",
  },
  {
    id: 3,
    name: "HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED",
    description:
      "Delivering innovative educational services and engaging media solutions that inform, educate, and inspire.",
    image: media,
    website: "https://heritage-media-education.com",
    category: "Education & Media",
  },
  {
    id: 4,
    name: "HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED",
    description:
      "Crafting unparalleled hospitality experiences with luxury resorts and hotels that blend comfort with cultural richness.",
    image: hotel,
    website: "https://heritage-hotels.com",
    category: "Hospitality",
  },
  {
    id: 5,
    name: "HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED",
    description:
      "Leading infrastructure development and construction ventures, building the foundations for a stronger, modern India.",
    image: infra,
    website: "https://heritage-infra.com",
    category: "Infrastructure",
  },
  {
    id: 6,
    name: "HIG - HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED",
    description:
      "Bringing captivating stories to life through high-quality film production and entertainment industry services.",
    image: media2,
    website: "https://heritage-films.com",
    category: "Entertainment",
  },
  {
    id: 7,
    name: "HIG - KashiKedarnath",
    description:
      "Providing specialized services and curated spiritual tourism solutions, connecting travelers with India's sacred heritage.",
    image: kashikedarnath,
    website: "https://kashikedarnath.com",
    category: "Spiritual Tourism",
  },
  {
    id: 8,
    name: "HIG - Finance",
    description:
      "Offering comprehensive financial services and strategic investment solutions for individual and corporate growth.",
    image: finance,
    website: "https://heritage-finance.com",
    category: "Finance",
  },
  {
    id: 9,
    name: "HIG - Mart",
    description:
      "A dynamic retail and consumer goods marketplace, delivering quality products and convenient shopping experiences.",
    image: mart,
    website: "https://heritage-mart.com",
    category: "Retail",
  },
  {
    id: 10,
    name: "HIG - Dasandas Traders",
    description:
      "Expert trading and distribution services, ensuring efficient supply chain management and market reach.",
    image: traders,
    website: "https://dasandas-traders.com",
    category: "Trading & Logistics",
  },
  {
    id: 11,
    name: "HIG - Glam Factory",
    description:
      "Curating premium beauty and lifestyle products and services, fostering self-expression and well-being.",
    image: glam,
    website: "https://glamfactory.com",
    category: "Beauty & Lifestyle",
  },
];
