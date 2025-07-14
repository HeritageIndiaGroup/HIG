// import { Users, Target, Award, TrendingUp } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import vinayakPlaza from '@/assets/Vinayak_Plaza.jpg';
// import React, { useState } from 'react'; // Import useState

// const AboutUs = () => {
//   // State to manage the currently selected image for the modal
//   const [selectedImage, setSelectedImage] = useState(null);

//   const values = [
//     {
//       name: "Mr. Dasan Das Gupta",
//       role: "Chairman & Founder",
//       image: "/Dasan_Das_Gupta.jpg",
//       quote: `"Building a better India begins with trust, vision, and relentless commitment."`
//     },
//     {
//       name: "Ms. Saroj Gupta",
//       role: "Co-Founder & Director",
//       image: "/Saroj_Gupta.jpg",
//       quote: `"Empowering communities and driving innovation is at the heart of everything we do."`
//     }
//   ];

//   const stats = [
//     { icon: TrendingUp, number: "₹5,000+ Cr", label: "Annual Revenue" },
//     { icon: Users, number: "10,000+", label: "Employees" },
//     { icon: Award, number: "50+", label: "Industry Awards" },
//     { icon: Target, number: "12", label: "Business Sectors" }
//   ];

//   // Function to open the image in the modal
//   const openImageModal = (imageSrc) => {
//     setSelectedImage(imageSrc);
//   };

//   // Function to close the image modal
//   const closeImageModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-extrabold mb-5 text-gray-900 leading-tight">
//             About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Heritage India</span> Group
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A legacy of excellence spanning over two decades, building India's future through 
//             innovation, integrity, and unwavering commitment to quality.
//           </p>
//         </div>

//         {/* Our Story */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <div className="space-y-6">
//             <h3 className="text-3xl font-bold text-blue-900">Our Story</h3>
//             <div className="space-y-4 text-gray-600 leading-relaxed">
//               <p>
//                 At the heart of the Heritage India Group (HIG) lies a vision sculpted by its esteemed founder, Mr. Dasan Das Gupta. His pioneering spirit, unwavering commitment to nation-building, and profound belief in empowering communities have been the guiding light for every endeavor under the HIG umbrella. From a single idea, he has fostered a diverse ecosystem dedicated to transforming aspirations into tangible realities across various sectors, building a legacy rooted in progress and heritage.
//               </p>
//               <p>
//                 This enduring legacy is exemplified in the very growth and diversification of HIG, much like a magnificent tree whose strong roots nourish a sprawling network of branches, each reaching towards new horizons. We have three main pillars that represent the core of our multifaceted operations.
//               </p>
//               <p>
//                 Empowering Communities: We uplift rural Uttar Pradesh by fostering economic independence through grassroots development, financial inclusion, and agricultural innovation with HIG - Heritage India Agro Producer Company Limited and HIG - Heritage India Micro Services Foundation.

//                 Building for the Future: We drive growth and connectivity via infrastructure (HIG - Heritage India Infra Venture Private Limited), finance (HIG - Finance), and trade (HIG - Dasandas Traders), propelling national development.

//                 Celebrating Culture & Progress: We honor India's heritage while embracing modernity through media and education (HIG – Heritage Media and Education Private Limited, HIG - Heritage India Film Production Private Limited), and diverse experiences from spiritual journeys to retail (HIG - Heritage India Hotel & Resort Private Limited, Kashi Kedarnath, HIG - Mart, HIG - Glam Factory).
//               </p>
//             </div>
//           </div>
//           <div className="relative">
//             <img 
//               src={vinayakPlaza}
//               alt="Heritage India Group Office"
//               className="rounded-2xl shadow-2xl"
//             />
//             <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
//           </div>
//         </div>

//         {/* Statistics */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
//                 <CardContent className="space-y-4">
//                   <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
//                     <Icon className="h-8 w-8 text-white" />
//                   </div>
//                   <div className="text-3xl font-bold text-blue-900">{stat.number}</div>
//                   <div className="text-gray-600 font-medium">{stat.label}</div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Vision & Mission */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-16">
//           <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-900 to-blue-700 text-white">
//             <CardContent className="space-y-4">
//               <Target className="h-12 w-12 text-yellow-400 mb-4" />
//               <h3 className="text-2xl font-bold">Our Vision</h3>
//               <p className="leading-relaxed text-blue-100">
//                 To be India's most respected and trusted business conglomerate, creating sustainable 
//                 value for all stakeholders while contributing to the nation's economic growth and 
//                 social development.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
//             <CardContent className="space-y-4">
//               <Award className="h-12 w-12 text-white mb-4" />
//               <h3 className="text-2xl font-bold">Our Mission</h3>
//               <p className="leading-relaxed">
//                 To deliver excellence in every sector we operate, fostering innovation, maintaining 
//                 the highest standards of quality, and building lasting relationships with our customers, 
//                 partners, and communities.
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Founders Section */}
//         <div className="text-center mb-12">
//           <h3 className="text-3xl font-bold text-blue-900 mb-8">Our Founders</h3>
//           <div className="grid md:grid-cols-2 gap-6 justify-center">
//             {values.map((founder, index) => (
//               <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
//                 <CardContent className="text-center space-y-4">
//                   <img 
//                     src={founder.image}
//                     alt={founder.name}
//                     className="w-24 h-24 mx-auto rounded-full object-cover shadow-md cursor-pointer" // Added cursor-pointer
//                     onClick={() => openImageModal(founder.image)} // Added onClick handler
//                   />
//                   <h4 className="text-xl font-bold text-blue-900">{founder.name}</h4>
//                   <p className="text-gray-600">{founder.role}</p>
//                   <p className="italic text-gray-500 text-sm">{founder.quote}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Image Modal */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
//           onClick={closeImageModal} // Close modal when clicking anywhere on the overlay
//         >
//           <img 
//             src={selectedImage} 
//             alt="Enlarged founder image" 
//             className="max-w-full max-h-full object-contain" // Ensure image fits within modal
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default AboutUs;




import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import vinayakPlaza from '@/assets/Vinayak_Plaza.jpg';
import HIG_Video from '@/assets/HIG_Vedio.mp4';
import React, { useState } from 'react';

const Sparkle = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.54-6.46l-2.83 2.83M8.29 17.71l-2.83 2.83m12.02 0l-2.83-2.83M8.29 6.29L5.46 3.46" />
  </svg>
);

const AboutUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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

  const stats = [
    { icon: TrendingUp, number: "₹5000+ Cr", label: "Annual Revenue" },
    { icon: Users, number: "10,000+", label: "Employees" },
    { icon: Award, number: "50+", label: "Industry Awards" },
    { icon: Target, number: "12", label: "Business Sectors" }
  ];

  const openImageModal = (imageSrc) => setSelectedImage(imageSrc);
  const closeImageModal = () => setSelectedImage(null);

  return (
    <section id="about" className="pt-10 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Heritage India</span> Group
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With a rich legacy of innovation and impact, Heritage India Group is committed to progress, empowerment, and honoring cultural roots.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-blue-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded by visionary Mr. Dasan Das Gupta, HIG began with a mission to empower communities and build a better future. Through innovative solutions and grassroots involvement, we've expanded across sectors from agro to education.
              </p>
              <p>
                Our commitment to sustainability, tradition, and excellence drives everything we do. We stand on three strong pillars: Empowerment, Infrastructure, and Cultural Preservation.
              </p>
              <p>
                Our ventures include: HIG - Heritage India Agro Producer Company Limited, HIG - Heritage India Micro Services Foundation, HIG – Heritage Media and Education Private Limited, HIG - Heritage India Hotel & Resort Private Limited, HIG - Heritage India Infra Venture Private Limited, HIG - Heritage India Film Production Private Limited, Kashi Kedarnath, HIG - Finance, HIG - Mart, HIG - Dasandas Traders, and HIG - Glam Factory — each contributing uniquely to India's growth and cultural renaissance.
              </p>
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
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="leading-relaxed text-blue-100">
                To be India's most respected and trusted business conglomerate, creating sustainable value and contributing to the nation's progress.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardContent className="space-y-4">
              <Award className="h-12 w-12 text-white mb-4" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="leading-relaxed">
                Deliver excellence across sectors by fostering innovation, maintaining high standards, and building lasting relationships with stakeholders.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">Our Founders</h3>
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
