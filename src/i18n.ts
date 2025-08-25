// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// // Translation resources
// const resources = {
//   en: {
//     translation: {
//       // Navigation
//       home: "Home",
//       about: "About Us", 
//       companies: "Our Companies",
//       gallery: "Gallery",
//       certifications: "Certifications",
//       career: "Career",
//       inquiry: "Inquiry",
//       contact: "Contact Us",
//       menu: "Menu",
      
//       // Hero Section
//       heritage: "Heritage",
//       india: "India",
//       group: "Group",
//       exploreCompanies: "Explore Our Companies",
//       power: "Power",
//       progress: "Progress", 
//       victory: "Victory",
      
//       // Company taglines
//       taglinesAgro: "HIG Agro Producer:",
//       taglinesMicro: "HIG Micro Services:",
//       taglinesMedia: "HIG Media & Education:",
//       taglinesHotel: "HIG Hotel & Resort:",
//       taglinesInfra: "HIG Infra Venture:",
//       taglinesGlam: "HIG Glam Factory:",
//       taglinesKashi: "KashiKedarnath:",
//       taglinesFinance: "HIG Finance:",
//       taglinesMart: "HIG Mart:",
//       taglinesTraders: "HIG Dasandas Traders:",
      
//       // Company descriptions
//       descAgro: "Cultivating prosperity, empowering farmers.",
//       descMicro: "Building resilient communities, fostering social change.",
//       descMedia: "Shaping minds, crafting stories.",
//       descHotel: "Redefining luxury, creating memorable stays.",
//       descInfra: "Constructing the future, one foundation at a time.",
//       descGlam: "Innovating beauty, crafting excellence.",
//       descKashi: "Enriching spiritual journeys, promoting cultural heritage.",
//       descFinance: "Empowering financial growth, securing your future.",
//       descMart: "Your daily essentials, delivered with ease.",
//       descTraders: "Global trade, local impact.",
//       descMediaExtra: "Shaping minds, crafting stories. (Additional Media)",
      
//       // About Us
//       aboutTitle: "About Heritage India Group",
//       aboutSubtitle: "With a rich legacy of innovation and impact, Heritage India Group is committed to progress, empowerment, and honoring cultural roots.",
//       ourStory: "Our Story",
//       ourVision: "Our Vision",
//       ourMission: "Our Mission",
//       ourFounders: "Our Founders",
//       visionText: "To be India's most respected and trusted business conglomerate, creating sustainable value and contributing to the nation's progress.",
//       missionText: "Deliver excellence across sectors by fostering innovation, maintaining high standards, and building lasting relationships with stakeholders.",
      
//       // Stats
//       annualRevenue: "Annual Revenue",
//       employees: "Employees", 
//       industryAwards: "Industry Awards",
//       businessSectors: "Business Sectors",
      
//       // Contact
//       contactTitle: "Contact Us",
//       contactSubtitle: "Get in touch with Heritage India Group. We're here to answer your questions and explore how we can work together.",
//       getInTouch: "Get In Touch",
//       ourLocation: "Our Location",
//       regionalOffices: "Regional Offices",
//       headOffice: "Head Office",
//       phoneNumbers: "Phone Numbers",
//       emailAddresses: "Email Addresses", 
//       businessHours: "Business Hours",
      
//       // Footer
//       quickLinks: "Quick Links",
//       followUs: "Follow Us",
//       allRightsReserved: "All rights reserved.",
      
//       // Form
//       fullName: "Full Name",
//       email: "Email",
//       phoneNumber: "Phone Number",
//       companyName: "Company Name",
//       message: "Message",
//       submit: "Send Message",
//       inquiryTitle: "Get in Touch",
//       inquirySubtitle: "Have questions or want to learn more about our services? We'd love to hear from you.",
      
//       // Companies Showcase
//       companiesTitle: "Our Diverse Portfolio", 
//       companiesSubtitle: "Explore the vast network of Heritage India Group companies, each a beacon of innovation and a driving force in India's journey towards growth and prosperity.",
//       visitWebsite: "Visit Website",
      
//       // Gallery
//       galleryTitle: "Our Gallery",
//       photos: "Photos",
//       videos: "Videos",
      
//       // Career 
//       careerTitle: "Shape Your Future With Us",
//       careerSubtitle: "We're always looking for passionate individuals to join our growing team. Explore our current opportunities and take the next step in your career.",
//       jobOpenings: "Current Job Openings",
//       applyNow: "Apply Now",
//       applyHere: "Apply Here",
//       sendApplication: "Send Your Application",
//       applicationRedirect: "You'll be redirected to a secure Google Form to submit your application and upload your resume.",
//       fullTime: "Full-Time",
      
//       // Job Titles
//       frontendDeveloper: "Frontend Developer",
//       hrExecutive: "HR Executive", 
//       marketingManager: "Marketing Manager",
//       uiuxDesigner: "UI/UX Designer",
//       backendDeveloper: "Backend Developer",
      
//       // Job Descriptions
//       frontendDesc: "We are seeking an experienced Frontend Developer with a strong command of React, Tailwind CSS, and modern animation libraries to build stunning user interfaces. A minimum of 2 years of professional experience is preferred.",
//       hrDesc: "Join our dynamic HR team! We are looking for an HR Executive with proven experience in end-to-end recruitment processes, onboarding, and employee relations. Strong communication skills are essential.",
//       marketingDesc: "Lead our marketing initiatives! We require a creative and results-driven Marketing Manager skilled in digital marketing strategies, campaign management, and leading a small team to achieve business objectives.",
//       uiuxDesc: "Craft intuitive and beautiful user experiences. We are searching for a talented UI/UX Designer with expertise in user research, wireframing, prototyping, and design tools like Figma or Sketch.",
//       backendDesc: "Build robust and scalable server-side applications. We need a Backend Developer proficient in Node.js, Python, or Go, with experience in database design and API development.",
      
//       // Language
//       language: "Language",
//       english: "English",
//       hindi: "हिंदी",
//     }
//   },
//   hi: {
//     translation: {
//       // Navigation
//       home: "होम",
//       about: "हमारे बारे में",
//       companies: "हमारी कंपनियां",
//       gallery: "गैलरी",
//       certifications: "प्रमाणपत्र",
//       career: "करियर",
//       inquiry: "पूछताछ",
//       contact: "संपर्क करें",
//       menu: "मेनू",
      
//       // Hero Section
//       heritage: "हेरिटेज",
//       india: "इंडिया",
//       group: "ग्रुप",
//       exploreCompanies: "हमारी कंपनियों का अन्वेषण करें",
//       power: "शक्ति",
//       progress: "प्रगति",
//       victory: "विजय",
      
//       // Company taglines
//       taglinesAgro: "HIG एग्रो प्रोड्यूसर:",
//       taglinesMicro: "HIG माइक्रो सर्विसेज:",
//       taglinesMedia: "HIG मीडिया एंड एजुकेशन:",
//       taglinesHotel: "HIG होटल एंड रिसॉर्ट:",
//       taglinesInfra: "HIG इन्फ्रा वेंचर:",
//       taglinesGlam: "HIG ग्लैम फैक्टरी:",
//       taglinesKashi: "काशी केदारनाथ:",
//       taglinesFinance: "HIG फाइनेंस:",
//       taglinesMart: "HIG मार्ट:",
//       taglinesTraders: "HIG दासनदास ट्रेडर्स:",
      
//       // Company descriptions
//       descAgro: "समृद्धि की खेती, किसानों को सशक्त बनाना।",
//       descMicro: "लचीले समुदायों का निर्माण, सामाजिक परिवर्तन को बढ़ावा।",
//       descMedia: "मन को आकार देना, कहानियां रचना।",
//       descHotel: "लक्जरी को फिर से परिभाषित करना, यादगार प्रवास बनाना।",
//       descInfra: "भविष्य का निर्माण, एक नींव के साथ।",
//       descGlam: "सुंदरता में नवाचार, उत्कृष्टता की रचना।",
//       descKashi: "आध्यात्मिक यात्राओं को समृद्ध करना, सांस्कृतिक विरासत को बढ़ावा देना।",
//       descFinance: "वित्तीय विकास को सशक्त बनाना, आपके भविष्य को सुरक्षित करना।",
//       descMart: "आपकी दैनिक आवश्यकताएं, आसानी से वितरित।",
//       descTraders: "वैश्विक व्यापार, स्थानीय प्रभाव।",
//       descMediaExtra: "मन को आकार देना, कहानियां रचना। (अतिरिक्त मीडिया)",
      
//       // About Us
//       aboutTitle: "हेरिटेज इंडिया ग्रुप के बारे में",
//       aboutSubtitle: "नवाचार और प्रभाव की समृद्ध विरासत के साथ, हेरिटेज इंडिया ग्रुप प्रगति, सशक्तिकरण और सांस्कृतिक जड़ों के सम्मान के लिए प्रतिबद्ध है।",
//       ourStory: "हमारी कहानी",
//       ourVision: "हमारा दृष्टिकोण",
//       ourMission: "हमारा मिशन",
//       ourFounders: "हमारे संस्थापक",
//       visionText: "भारत के सबसे सम्मानित और विश्वसनीय व्यापारिक समूह बनना, टिकाऊ मूल्य का सृजन करना और राष्ट्र की प्रगति में योगदान देना।",
//       missionText: "नवाचार को बढ़ावा देकर, उच्च मानकों को बनाए रखकर, और हितधारकों के साथ स्थायी संबंध बनाकर सभी क्षेत्रों में उत्कृष्टता प्रदान करना।",
      
//       // Stats
//       annualRevenue: "वार्षिक राजस्व",
//       employees: "कर्मचारी",
//       industryAwards: "उद्योग पुरस्कार",
//       businessSectors: "व्यापारिक क्षेत्र",
      
//       // Contact
//       contactTitle: "संपर्क करें",
//       contactSubtitle: "हेरिटेज इंडिया ग्रुप से संपर्क करें। हम आपके प्रश्नों का उत्तर देने और यह जानने के लिए यहां हैं कि हम कैसे एक साथ काम कर सकते हैं।",
//       getInTouch: "संपर्क में रहें",
//       ourLocation: "हमारा स्थान",
//       regionalOffices: "क्षेत्रीय कार्यालय",
//       headOffice: "मुख्य कार्यालय",
//       phoneNumbers: "फोन नंबर",
//       emailAddresses: "ईमेल पते",
//       businessHours: "व्यापार घंटे",
      
//       // Footer
//       quickLinks: "त्वरित लिंक",
//       followUs: "हमारा अनुसरण करें",
//       allRightsReserved: "सभी अधिकार सुरक्षित।",
      
//       // Form
//       fullName: "पूरा नाम",
//       email: "ईमेल",
//       phoneNumber: "फोन नंबर",
//       companyName: "कंपनी का नाम",
//       message: "संदेश",
//       submit: "संदेश भेजें",
//       inquiryTitle: "संपर्क करें",
//       inquirySubtitle: "क्या कोई प्रश्न हैं या हमारी सेवाओं के बारे में और जानना चाहते हैं? हम आपसे सुनना चाहेंगे।",
      
//       // Companies Showcase
//       companiesTitle: "हमारा विविध पोर्टफोलियो",
//       companiesSubtitle: "हेरिटेज इंडिया ग्रुप की कंपनियों के विशाल नेटवर्क का अन्वेषण करें, जो प्रत्येक नवाचार की किरण है और भारत की विकास और समृद्धि की यात्रा में एक प्रेरक शक्ति है।",
//       visitWebsite: "वेबसाइट पर जाएं",
      
//       // Gallery
//       galleryTitle: "हमारी गैलरी",
//       photos: "तस्वीरें",
//       videos: "वीडियो",
      
//       // Career
//       careerTitle: "हमारे साथ अपना भविष्य बनाएं",
//       careerSubtitle: "हम हमेशा अपनी बढ़ती टीम में शामिल होने के लिए जुनूनी व्यक्तियों की तलाश में हैं। हमारे वर्तमान अवसरों का अन्वेषण करें और अपने करियर में अगला कदम उठाएं।",
//       jobOpenings: "वर्तमान नौकरी के अवसर",
//       applyNow: "अभी आवेदन करें",
//       applyHere: "यहाँ आवेदन करें",
//       sendApplication: "अपना आवेदन भेजें",
//       applicationRedirect: "आपका आवेदन भेजने और अपना रिज्यूमे अपलोड करने के लिए आपको एक सुरक्षित गूगल फॉर्म पर भेजा जाएगा।",
//       fullTime: "पूर्णकालिक",
      
//       // Job Titles
//       frontendDeveloper: "फ्रंटएंड डेवलपर",
//       hrExecutive: "एचआर एक्जीक्यूटिव",
//       marketingManager: "मार्केटिंग मैनेजर", 
//       uiuxDesigner: "UI/UX डिजाइनर",
//       backendDeveloper: "बैकएंड डेवलपर",
      
//       // Job Descriptions
//       frontendDesc: "हम एक अनुभवी फ्रंटएंड डेवलपर की तलाश में हैं जिसे React, Tailwind CSS और आधुनिक एनीमेशन लाइब्रेरीज़ का मजबूत ज्ञान हो। न्यूनतम 2 साल का पेशेवर अनुभव प्राथमिकता है।",
//       hrDesc: "हमारी गतिशील HR टीम में शामिल हों! हम एक HR एक्जीक्यूटिव की तलाश में हैं जिसे भर्ती प्रक्रिया, ऑनबोर्डिंग और कर्मचारी संबंधों का अनुभव हो।",
//       marketingDesc: "हमारी मार्केटिंग पहलों का नेतृत्व करें! हमें एक रचनात्मक और परिणाम-केंद्रित मार्केटिंग मैनेजर की आवश्यकता है जो डिजिटल मार्केटिंग रणनीतियों में कुशल हो।",
//       uiuxDesc: "सहज और सुंदर उपयोगकर्ता अनुभव तैयार करें। हम एक प्रतिभाशाली UI/UX डिजाइनर की खोज में हैं जिसे उपयोगकर्ता अनुसंधान का अनुभव हो।",
//       backendDesc: "मजबूत और स्केलेबल सर्वर-साइड एप्लिकेशन बनाएं। हमें Node.js, Python या Go में दक्ष बैकएंड डेवलपर की आवश्यकता है।",
      
//       // Language
//       language: "भाषा",
//       english: "English",
//       hindi: "हिंदी",
//     }
//   }
// };

// // Initialize saved language preference
// const savedLanguage = localStorage.getItem('language');
// const initialLanguage = (savedLanguage === 'en' || savedLanguage === 'hi') ? savedLanguage : 'en';

// i18n
//   .use(initReactI18next)
//   .init({
//     resources,
//     lng: initialLanguage, // use saved language or default to 'en'
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;








import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      ourStory: "Our Story",
      ourBusinesses: "Our Businesses",
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
      hig: "HIG",
      
      // About Us
      aboutTitle: "About Heritage India Group",
      aboutSubtitle: "With a rich legacy of innovation and impact, Heritage India Group is committed to progress, empowerment, and honoring cultural roots.",
      ourPresence: "Our Presence",
      ourCoreBeliefs: "Our Core Belief",
      presenceText1: "12 companies under the group across diverse industries.",
// Missing translation keys - need to add to i18n
      presenceText2: "2500 sq. ft. restaurant space as part of our hospitality venture.",
      presenceText3: "Expanding rapidly in entertainment, agro, and lifestyle sectors.",
      
      // Stats
      annualRevenue: "Annual Revenue",
      employees: "Employees", 
      industryAwards: "Industry Awards",
      businessSectors: "Business Sectors",
      
      // Senior Management
      seniorManagement: "Senior Management",
      coreBeliefText: "To preserve the legacy of India's heritage while building a future that inspires trust, growth, and excellence.",
      ourVision: "Our Vision",
      ourMission: "Our Mission",
      ourFounders: "Our Founders",
      visionText: "To be India's most respected and trusted business conglomerate, creating sustainable value and contributing to the nation's progress.",
      missionText: "Deliver excellence across sectors by fostering innovation, maintaining standards, and building lasting relationships with stakeholders.",
      
      // Companies Showcase
      companiesTitle: "Our Diverse Portfolio",
      companiesSubtitle: "Explore the vast network of Heritage India Group companies, each a beacon of innovation and a driving force in India's journey towards growth and prosperity.",
      visitWebsite: "Visit Website",
      
      // Contact
      contactTitle: "Contact Us",
      contactSubtitle: "Get in touch with Heritage India Group. We're here to answer your questions and explore how we can work together.",
      getInTouch: "Get In Touch",
      ourLocation: "Our Location",
      headOffice: "Head Office",
      phoneNumbers: "Phone Numbers",
      emailAddresses: "Email Addresses",
      businessHours: "Business Hours",
      
      // Inquiry Form
      inquiryTitle: "Get in Touch",
      inquirySubtitle: "Have questions or want to learn more about our services? We'd love to hear from you.",
      sendInquiry: "Send us an Inquiry",
      inquiryDescription: "Fill out the form below and your inquiry will be sent via WhatsApp for quick response.",
      fullName: "Full Name",
      email: "Email",
      phoneNumber: "Phone Number",
      companyName: "Company Name",
      message: "Message",
      selectCompany: "Select Company/Service",
      generalInquiry: "General Inquiry",
      preferredContact: "Preferred Contact Method",
      emailOption: "Email",
      phoneOption: "Phone",
      submit: "Send Message",
      
      // Footer
      heritageIndiaGroup: "Heritage India Group",
      buildingTomorrowsLegacy: "Building Tomorrow's Legacy",
      moreCompanies: "More Companies",
      contactInfo: "Contact Info",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      sitemap: "Sitemap",
      allRightsReserved: "All rights reserved.",
      
      // Certifications
      certificationsTitle: "Certifications",
      registrations: "& Registrations",
      certificationsSubtitle: "These credentials reflect our unwavering commitment to transparency, legality, and excellence.",
      iso9001Title: "ISO 9001:2015 Certification",
      iso9001Desc: "Quality Management System certification for consistent quality delivery",
      gstTitle: "GST Registration Certificate",
      gstDesc: "Goods and Services Tax registration for all business operations",
      incorporationTitle: "Company Incorporation Certificate",
      incorporationDesc: "Certificate of Incorporation under Companies Act",
      msmeTitle: "MSME Registration",
      msmeDesc: "Micro, Small and Medium Enterprises registration certificate",
      tradeLicenseTitle: "Trade License",
      tradeLicenseDesc: "Municipal trade license for business operations",
      panTitle: "PAN Card",
      panDesc: "Permanent Account Number for tax identification",
      documentNotUploaded: "Document not yet uploaded",
      documentAvailableSoon: "will be available soon.",
      
      // Gallery
      galleryTitle: "Our Gallery",
      photos: "Photos",
      videos: "Videos",
      
      // Career
      careerTitle: "Shape Your Future With Us",
      careerSubtitle: "We're always looking for passionate individuals to join our growing team. Explore our current opportunities and take the next step in your career.",
      jobOpenings: "Current Job Openings",
      applyNow: "Apply Now",
      fullTime: "Full-Time",
      
      // Language
      language: "Language",
      english: "English",
      hindi: "हिंदी"
    }
  },
  hi: {
    translation: {
      // Navigation
      home: "होम",
      ourStory: "हमारी कहानी",
      ourBusinesses: "हमारे व्यवसाय",
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
      hig: "HIG",
      
      // About Us
      aboutTitle: "हेरिटेज इंडिया ग्रुप के बारे में",
      aboutSubtitle: "नवाचार और प्रभाव की समृद्ध विरासत के साथ, हेरिटेज इंडिया ग्रुप प्रगति, सशक्तिकरण और सांस्कृतिक जड़ों के सम्मान के लिए प्रतिबद्ध है।",
      ourPresence: "हमारी उपस्थिति",
      ourCoreBeliefs: "हमारी मुख्य मान्यता",
      presenceText1: "विविध उद्योगों में समूह के तहत 12 कंपनियां।",
      presenceText2: "हमारे आतिथ्य उद्यम के भाग के रूप में 2500 वर्ग फुट रेस्तरां स्थान।",
      presenceText3: "मनोरंजन, कृषि और जीवनशैली क्षेत्रों में तेजी से विस्तार।",
      
      // Stats  
      annualRevenue: "वार्षिक राजस्व",
      employees: "कर्मचारी",
      industryAwards: "उद्योग पुरस्कार",
      businessSectors: "व्यापारिक क्षेत्र",
      
      // Senior Management
      seniorManagement: "वरिष्ठ प्रबंधन",
      coreBeliefText: "भारत की विरासत की विरासत को संरक्षित करना और एक ऐसे भविष्य का निर्माण करना जो विश्वास, विकास और उत्कृष्टता को प्रेरित करता है।",
      ourVision: "हमारा दृष्टिकोण",
      ourMission: "हमारा मिशन",
      ourFounders: "हमारे संस्थापक",
      visionText: "भारत के सबसे सम्मानित और विश्वसनीय व्यापारिक समूह बनना, टिकाऊ मूल्य का सृजन करना और राष्ट्र की प्रगति में योगदान देना।",
      missionText: "नवाचार को बढ़ावा देकर, मानकों को बनाए रखकर, और हितधारकों के साथ स्थायी संबंध बनाकर सभी क्षेत्रों में उत्कृष्टता प्रदान करना।",
      
      // Companies Showcase
      companiesTitle: "हमारा विविध पोर्टफोलियो",
      companiesSubtitle: "हेरिटेज इंडिया ग्रुप की कंपनियों के विशाल नेटवर्क का अन्वेषण करें, जो प्रत्येक नवाचार की किरण है और भारत की विकास और समृद्धि की यात्रा में एक प्रेरक शक्ति है।",
      visitWebsite: "वेबसाइट पर जाएं",
      
      // Contact
      contactTitle: "संपर्क करें",
      contactSubtitle: "हेरिटेज इंडिया ग्रुप से संपर्क करें। हम आपके प्रश्नों का उत्तर देने और यह जानने के लिए यहां हैं कि हम कैसे एक साथ काम कर सकते हैं।",
      getInTouch: "संपर्क में रहें",
      ourLocation: "हमारा स्थान",
      headOffice: "मुख्य कार्यालय",
      phoneNumbers: "फोन नंबर",
      emailAddresses: "ईमेल पते",
      businessHours: "व्यापार घंटे",
      
      // Inquiry Form
      inquiryTitle: "संपर्क करें",
      inquirySubtitle: "क्या कोई प्रश्न हैं या हमारी सेवाओं के बारे में और जानना चाहते हैं? हम आपसे सुनना चाहेंगे।",
      sendInquiry: "हमें पूछताछ भेजें",
      inquiryDescription: "नीचे दिया गया फॉर्म भरें और आपकी पूछताछ त्वरित प्रतिक्रिया के लिए व्हाट्सऐप के माध्यम से भेजी जाएगी।",
      fullName: "पूरा नाम",
      email: "ईमेल",
      phoneNumber: "फोन नंबर",
      companyName: "कंपनी का नाम",
      message: "संदेश",
      selectCompany: "कंपनी/सेवा चुनें",
      generalInquiry: "सामान्य पूछताछ",
      preferredContact: "पसंदीदा संपर्क विधि",
      emailOption: "ईमेल",
      phoneOption: "फोन",
      submit: "संदेश भेजें",
      
      // Footer
      heritageIndiaGroup: "हेरिटेज इंडिया ग्रुप",
      buildingTomorrowsLegacy: "कल की विरासत का निर्माण",
      moreCompanies: "और कंपनियां",
      contactInfo: "संपर्क जानकारी",
      quickLinks: "त्वरित लिंक",
      followUs: "हमारा अनुसरण करें",
      privacyPolicy: "गोपनीयता नीति",
      termsOfService: "सेवा की शर्तें",
      sitemap: "साइटमैप",
      allRightsReserved: "सभी अधिकार सुरक्षित।",
      
      // Certifications
      certificationsTitle: "प्रमाणपत्र",
      registrations: "और पंजीकरण",
      certificationsSubtitle: "ये प्रमाण पत्र पारदर्शिता, वैधता और उत्कृष्टता के प्रति हमारी अटूट प्रतिबद्धता को दर्शाते हैं।",
      iso9001Title: "ISO 9001:2015 प्रमाणन",
      iso9001Desc: "लगातार गुणवत्ता वितरण के लिए गुणवत्ता प्रबंधन प्रणाली प्रमाणन",
      gstTitle: "GST पंजीकरण प्रमाणपत्र",
      gstDesc: "सभी व्यापारिक संचालन के लिए वस्तु और सेवा कर पंजीकरण",
      incorporationTitle: "कंपनी निगमन प्रमाणपत्र",
      incorporationDesc: "कंपनी अधिनियम के तहत निगमन का प्रमाणपत्र",
      msmeTitle: "MSME पंजीकरण",
      msmeDesc: "सूक्ष्म, लघु और मध्यम उद्यम पंजीकरण प्रमाणपत्र",
      tradeLicenseTitle: "व्यापार लाइसेंस",
      tradeLicenseDesc: "व्यापारिक संचालन के लिए नगरपालिका व्यापार लाइसेंस",
      panTitle: "PAN कार्ड",
      panDesc: "कर पहचान के लिए स्थायी खाता संख्या",
      documentNotUploaded: "दस्तावेज़ अभी तक अपलोड नहीं हुआ",
      documentAvailableSoon: "जल्द ही उपलब्ध होगा।",
      
      // Gallery
      galleryTitle: "हमारी गैलरी",
      photos: "तस्वीरें",
      videos: "वीडियो",
      
      // Career
      careerTitle: "हमारे साथ अपना भविष्य बनाएं",
      careerSubtitle: "हम हमेशा अपनी बढ़ती टीम में शामिल होने के लिए जुनूनी व्यक्तियों की तलाश में हैं। हमारे वर्तमान अवसरों का अन्वेषण करें और अपने करियर में अगला कदम उठाएं।",
      jobOpenings: "वर्तमान नौकरी के अवसर",
      applyNow: "अभी आवेदन करें",
      fullTime: "पूर्णकालिक",
      
      // Language
      language: "भाषा",
      english: "English",
      hindi: "हिंदी"
    }
  }
};

// ...rest of the file is unchanged
const savedLanguage = localStorage.getItem('language');
const initialLanguage = (savedLanguage === 'en' || savedLanguage === 'hi') ? savedLanguage : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;