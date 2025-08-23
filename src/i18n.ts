import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About Us", 
      companies: "Our Companies",
      gallery: "Gallery",
      certifications: "Certifications",
      career: "Career",
      inquiry: "Inquiry",
      contact: "Contact Us",
      menu: "Menu",
      
      // Hero Section
      heritage: "Heritage",
      india: "India",
      group: "Group",
      exploreCompanies: "Explore Our Companies",
      power: "Power",
      progress: "Progress", 
      victory: "Victory",
      
      // Company taglines
      taglinesAgro: "HIG Agro Producer:",
      taglinesMicro: "HIG Micro Services:",
      taglinesMedia: "HIG Media & Education:",
      taglinesHotel: "HIG Hotel & Resort:",
      taglinesInfra: "HIG Infra Venture:",
      taglinesGlam: "HIG Glam Factory:",
      taglinesKashi: "KashiKedarnath:",
      taglinesFinance: "HIG Finance:",
      taglinesMart: "HIG Mart:",
      taglinesTraders: "HIG Dasandas Traders:",
      
      // Company descriptions
      descAgro: "Cultivating prosperity, empowering farmers.",
      descMicro: "Building resilient communities, fostering social change.",
      descMedia: "Shaping minds, crafting stories.",
      descHotel: "Redefining luxury, creating memorable stays.",
      descInfra: "Constructing the future, one foundation at a time.",
      descGlam: "Innovating beauty, crafting excellence.",
      descKashi: "Enriching spiritual journeys, promoting cultural heritage.",
      descFinance: "Empowering financial growth, securing your future.",
      descMart: "Your daily essentials, delivered with ease.",
      descTraders: "Global trade, local impact.",
      descMediaExtra: "Shaping minds, crafting stories. (Additional Media)",
      
      // About Us
      aboutTitle: "About Heritage India Group",
      aboutSubtitle: "With a rich legacy of innovation and impact, Heritage India Group is committed to progress, empowerment, and honoring cultural roots.",
      ourStory: "Our Story",
      ourVision: "Our Vision",
      ourMission: "Our Mission",
      ourFounders: "Our Founders",
      visionText: "To be India's most respected and trusted business conglomerate, creating sustainable value and contributing to the nation's progress.",
      missionText: "Deliver excellence across sectors by fostering innovation, maintaining high standards, and building lasting relationships with stakeholders.",
      
      // Stats
      annualRevenue: "Annual Revenue",
      employees: "Employees", 
      industryAwards: "Industry Awards",
      businessSectors: "Business Sectors",
      
      // Contact
      contactTitle: "Contact Us",
      contactSubtitle: "Get in touch with Heritage India Group. We're here to answer your questions and explore how we can work together.",
      getInTouch: "Get In Touch",
      ourLocation: "Our Location",
      regionalOffices: "Regional Offices",
      headOffice: "Head Office",
      phoneNumbers: "Phone Numbers",
      emailAddresses: "Email Addresses", 
      businessHours: "Business Hours",
      
      // Footer
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      allRightsReserved: "All rights reserved.",
      
      // Form
      fullName: "Full Name",
      email: "Email",
      phoneNumber: "Phone Number",
      companyName: "Company Name",
      message: "Message",
      submit: "Send Message",
      inquiryTitle: "Get in Touch",
      inquirySubtitle: "Have questions or want to learn more about our services? We'd love to hear from you.",
      
      // Language
      language: "Language",
      english: "English",
      hindi: "हिंदी",
    }
  },
  hi: {
    translation: {
      // Navigation
      home: "होम",
      about: "हमारे बारे में",
      companies: "हमारी कंपनियां",
      gallery: "गैलरी",
      certifications: "प्रमाणपत्र",
      career: "करियर",
      inquiry: "पूछताछ",
      contact: "संपर्क करें",
      menu: "मेनू",
      
      // Hero Section
      heritage: "हेरिटेज",
      india: "इंडिया",
      group: "ग्रुप",
      exploreCompanies: "हमारी कंपनियों का अन्वेषण करें",
      power: "शक्ति",
      progress: "प्रगति",
      victory: "विजय",
      
      // Company taglines
      taglinesAgro: "HIG एग्रो प्रोड्यूसर:",
      taglinesMicro: "HIG माइक्रो सर्विसेज:",
      taglinesMedia: "HIG मीडिया एंड एजुकेशन:",
      taglinesHotel: "HIG होटल एंड रिसॉर्ट:",
      taglinesInfra: "HIG इन्फ्रा वेंचर:",
      taglinesGlam: "HIG ग्लैम फैक्टरी:",
      taglinesKashi: "काशी केदारनाथ:",
      taglinesFinance: "HIG फाइनेंस:",
      taglinesMart: "HIG मार्ट:",
      taglinesTraders: "HIG दासनदास ट्रेडर्स:",
      
      // Company descriptions
      descAgro: "समृद्धि की खेती, किसानों को सशक्त बनाना।",
      descMicro: "लचीले समुदायों का निर्माण, सामाजिक परिवर्तन को बढ़ावा।",
      descMedia: "मन को आकार देना, कहानियां रचना।",
      descHotel: "लक्जरी को फिर से परिभाषित करना, यादगार प्रवास बनाना।",
      descInfra: "भविष्य का निर्माण, एक नींव के साथ।",
      descGlam: "सुंदरता में नवाचार, उत्कृष्टता की रचना।",
      descKashi: "आध्यात्मिक यात्राओं को समृद्ध करना, सांस्कृतिक विरासत को बढ़ावा देना।",
      descFinance: "वित्तीय विकास को सशक्त बनाना, आपके भविष्य को सुरक्षित करना।",
      descMart: "आपकी दैनिक आवश्यकताएं, आसानी से वितरित।",
      descTraders: "वैश्विक व्यापार, स्थानीय प्रभाव।",
      descMediaExtra: "मन को आकार देना, कहानियां रचना। (अतिरिक्त मीडिया)",
      
      // About Us
      aboutTitle: "हेरिटेज इंडिया ग्रुप के बारे में",
      aboutSubtitle: "नवाचार और प्रभाव की समृद्ध विरासत के साथ, हेरिटेज इंडिया ग्रुप प्रगति, सशक्तिकरण और सांस्कृतिक जड़ों के सम्मान के लिए प्रतिबद्ध है।",
      ourStory: "हमारी कहानी",
      ourVision: "हमारा दृष्टिकोण",
      ourMission: "हमारा मिशन",
      ourFounders: "हमारे संस्थापक",
      visionText: "भारत के सबसे सम्मानित और विश्वसनीय व्यापारिक समूह बनना, टिकाऊ मूल्य का सृजन करना और राष्ट्र की प्रगति में योगदान देना।",
      missionText: "नवाचार को बढ़ावा देकर, उच्च मानकों को बनाए रखकर, और हितधारकों के साथ स्थायी संबंध बनाकर सभी क्षेत्रों में उत्कृष्टता प्रदान करना।",
      
      // Stats
      annualRevenue: "वार्षिक राजस्व",
      employees: "कर्मचारी",
      industryAwards: "उद्योग पुरस्कार",
      businessSectors: "व्यापारिक क्षेत्र",
      
      // Contact
      contactTitle: "संपर्क करें",
      contactSubtitle: "हेरिटेज इंडिया ग्रुप से संपर्क करें। हम आपके प्रश्नों का उत्तर देने और यह जानने के लिए यहां हैं कि हम कैसे एक साथ काम कर सकते हैं।",
      getInTouch: "संपर्क में रहें",
      ourLocation: "हमारा स्थान",
      regionalOffices: "क्षेत्रीय कार्यालय",
      headOffice: "मुख्य कार्यालय",
      phoneNumbers: "फोन नंबर",
      emailAddresses: "ईमेल पते",
      businessHours: "व्यापार घंटे",
      
      // Footer
      quickLinks: "त्वरित लिंक",
      followUs: "हमारा अनुसरण करें",
      allRightsReserved: "सभी अधिकार सुरक्षित।",
      
      // Form
      fullName: "पूरा नाम",
      email: "ईमेल",
      phoneNumber: "फोन नंबर",
      companyName: "कंपनी का नाम",
      message: "संदेश",
      submit: "संदेश भेजें",
      inquiryTitle: "संपर्क करें",
      inquirySubtitle: "क्या कोई प्रश्न हैं या हमारी सेवाओं के बारे में और जानना चाहते हैं? हम आपसे सुनना चाहेंगे।",
      
      // Language
      language: "भाषा",
      english: "English",
      hindi: "हिंदी",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;