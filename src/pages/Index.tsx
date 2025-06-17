
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
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CompaniesShowcase />
      <AboutUs />
      <Certifications />
      <InquiryForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
