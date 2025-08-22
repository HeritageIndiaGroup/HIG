
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompaniesShowcase from '@/components/CompaniesShowcase';
import AboutUs from '@/components/AboutUs';
import Certifications from '@/components/Certifications';
import InquiryForm from '@/components/InquiryForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Heritage India Group - Leading Indian Conglomerate | Agriculture, Infrastructure, Finance & More</title>
        <meta name="description" content="Heritage India Group (HIG) is a diversified Indian conglomerate with 11+ companies across agriculture, infrastructure, hospitality, finance, education, media, and more. Empowering India's future through innovation and excellence." />
        <meta name="keywords" content="Heritage India Group, HIG, Indian business, conglomerate, agriculture, infrastructure, hospitality, finance, education, media, Varanasi, Uttar Pradesh" />
        <link rel="canonical" href="https://heritageindiagroup.com/" />
        
        {/* Additional SEO tags */}
        <meta property="og:title" content="Heritage India Group - Leading Indian Conglomerate" />
        <meta property="og:description" content="Diversified Indian conglomerate with 11+ companies across multiple sectors. Building India's future through innovation, integrity, and excellence." />
        <meta property="og:url" content="https://heritageindiagroup.com/" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org structured data for homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Heritage India Group - Home",
            "description": "Leading Indian conglomerate with diverse business portfolio",
            "url": "https://heritageindiagroup.com/",
            "mainEntity": {
              "@type": "Corporation",
              "name": "Heritage India Group",
              "description": "Diversified Indian conglomerate across multiple sectors"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main role="main">
          <Hero />
          <CompaniesShowcase />
          <AboutUs />
          <Certifications />
          <InquiryForm />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
