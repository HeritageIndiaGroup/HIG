import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import vinayakPlaza from '@/assets/Vinayak_Plaza.jpg';
import HIG_Video from '@/assets/HIG_Vedio.mp4';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Sparkle = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.54-6.46l-2.83 2.83M8.29 17.71l-2.83 2.83m12.02 0l-2.83-2.83M8.29 6.29L5.46 3.46" />
  </svg>
);

const AboutUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const values = [
    {
      name: "Mr. Dasan Das Gupta",
      role: "Chairman & Founder",
      image: "/Dasan_Das_Gupta.jpg",
      quote: `"Building a better India begins with trust, vision, and relentless commitment."`
    },
    {
      name: "Ms. Saroj Gupta", 
      role: "Co-Founder & Director",
      image: "/Saroj_Gupta.jpg",
      quote: `"Empowering communities and driving innovation is at the heart of everything we do."`
    }
  ];

  const management = [
    {
      name: "Mr. Ayush Gupta",
      role: "Managing Director",
      image: "/Ayush_Gupta.jpg",
      quote: `"Driving operational excellence and strategic growth across all group companies."`
    },
    {
      name: "Mr. Shubham Gupta",
      role: "Executive Director",
      image: "/Shubham_Gupta.jpg",
      quote: `"Fostering innovation and leading our expansion into new, dynamic markets."`
    },
    {
      name: "Mr. Abhishek Tiwari",
      role: "Chief Operating Officer",
      image: "/Abhishek_Tiwari.jpg",
      quote: `"Optimizing processes to deliver unparalleled value to our customers and stakeholders."`
    },
    {
      name: "Mr. Amitesh Dwivedi",
      role: "Chief Financial Officer",
      image: "/Amitesh_Dwivedi.jpg",
      quote: `"Ensuring financial stewardship and sustainable profitability for long-term success."`
    }
  ];

  const stats = [
    { icon: TrendingUp, number: "₹20+ Cr", label: t('annualRevenue') },
    { icon: Users, number: "1000+", label: t('employees') },
    { icon: Award, number: "20+", label: t('industryAwards') },
    { icon: Target, number: "12+", label: t('businessSectors') }
  ];

  const openImageModal = (imageSrc) => setSelectedImage(imageSrc);
  const closeImageModal = () => setSelectedImage(null);

  return (
    <section id="about" className="pt-10 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-blue-900">{t('ourStory')}</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t('storyParagraph1')}
              </p>
              <p>
                {t('storyParagraph2')}
              </p>
              <p>
                {t('storyParagraph3')}
              </p>
              
              {isExpanded && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 pt-2">{t('ourPresence')}</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t('presenceText1')}</li>
                    <li>{t('presenceText2')}</li>
                    <li>{t('presenceText3')}</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold text-gray-800 pt-2">{t('ourCoreBeliefs')}</h4>
                  <p>
                    {t('coreBeliefText')}
                  </p>
                </div>
              )}
              
              <button onClick={toggleReadMore} className="text-blue-600 hover:underline font-semibold focus:outline-none">
                {isExpanded ? 'Read Less' : 'Read More...'}
              </button>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden">
            <video
              src={HIG_Video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <CardContent className="space-y-4">
              <Target className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold">{t('ourVision')}</h3>
              <p className="leading-relaxed text-blue-100">
                {t('visionText')}
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardContent className="space-y-4">
              <Award className="h-12 w-12 text-white mb-4" />
              <h3 className="text-2xl font-bold">{t('ourMission')}</h3>
              <p className="leading-relaxed">
                {t('missionText')}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">{t('ourFounders')}</h3>
          <div className="grid md:grid-cols-2 gap-6 justify-center">
            {values.map((founder, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <CardContent className="text-center space-y-4">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full rounded-full object-cover shadow-md cursor-pointer"
                      onClick={() => openImageModal(founder.image)}
                    />
                    <span className="absolute -top-2 -right-2 w-4 h-4 text-yellow-300 animate-twinkle delay-0"><Sparkle /></span>
                    <span className="absolute -bottom-2 -left-2 w-3.5 h-3.5 text-pink-400 animate-twinkle delay-100"><Sparkle /></span>
                    <span className="absolute -top-2 left-2 w-3.5 h-3.5 text-blue-400 animate-twinkle delay-200"><Sparkle /></span>
                    <span className="absolute bottom-1 right-3 w-3.5 h-3.5 text-purple-400 animate-twinkle delay-300"><Sparkle /></span>
                    <span className="absolute top-3 left-1 w-4 h-4 text-green-300 animate-twinkle delay-150"><Sparkle /></span>
                    <span className="absolute -bottom-3 right-0 w-3 h-3 text-orange-300 animate-twinkle delay-250"><Sparkle /></span>
                  </div>
                  <h4 className="text-xl font-bold text-blue-900">{founder.name}</h4>
                  <p className="text-gray-600">{founder.role}</p>
                  <p className="italic text-gray-500 text-sm">{founder.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">{t('seniorManagement')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((member, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <CardContent className="text-center space-y-4">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover shadow-md cursor-pointer"
                      onClick={() => openImageModal(member.image)}
                    />
                    <span className="absolute -top-2 -right-2 w-4 h-4 text-yellow-300 animate-twinkle delay-0"><Sparkle /></span>
                    <span className="absolute -bottom-2 -left-2 w-3.5 h-3.5 text-pink-400 animate-twinkle delay-100"><Sparkle /></span>
                    <span className="absolute -top-2 left-2 w-3.5 h-3.5 text-blue-400 animate-twinkle delay-200"><Sparkle /></span>
                    <span className="absolute bottom-1 right-3 w-3.5 h-3.5 text-purple-400 animate-twinkle delay-300"><Sparkle /></span>
                    <span className="absolute top-3 left-1 w-4 h-4 text-green-300 animate-twinkle delay-150"><Sparkle /></span>
                    <span className="absolute -bottom-3 right-0 w-3 h-3 text-orange-300 animate-twinkle delay-250"><Sparkle /></span>
                  </div>
                  <h4 className="text-xl font-bold text-blue-900">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="italic text-gray-500 text-sm">{member.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeImageModal}>
          <img
            src={selectedImage}
            alt="Enlarged founder image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default AboutUs;
