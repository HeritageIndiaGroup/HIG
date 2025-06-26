
// // Original Code
// import { Users, Target, Award, TrendingUp } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import vinayakPlaza from '@/assets/Vinayak_Plaza.jpg'; // ✅ Correct import

// const AboutUs = () => {
//   const values = [
//     {
//       name: "Amit Sharma",
//       role: "Chairman & Founder",
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//       quote: `"Building a better India begins with trust, vision, and relentless commitment."`
//     },
//     {
//       name: "Priya Mehta",
//       role: "Co-Founder & Director",
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//       quote: `"Empowering communities and driving innovation is at the heart of everything we do."`
//     },
//     {
//       name: "Raj Malhotra",
//       role: "Managing Director",
//       image: "https://randomuser.me/api/portraits/men/55.jpg",
//       quote: `"Our mission is to shape industries with purpose, pride, and integrity."`
//     },
//     {
//       name: "Anjali Desai",
//       role: "Executive Director",
//       image: "https://randomuser.me/api/portraits/women/65.jpg",
//       quote: `"True leadership lies in uplifting people and transforming ideas into action."`
//     },
//   ];

//   const stats = [
//     { icon: TrendingUp, number: "₹5,000+ Cr", label: "Annual Revenue" },
//     { icon: Users, number: "10,000+", label: "Employees" },
//     { icon: Award, number: "50+", label: "Industry Awards" },
//     { icon: Target, number: "12", label: "Business Sectors" }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-blue-900 mb-4">About Heritage India Group</h2>
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
//                 Founded in 1998, Heritage India Group began as a single construction company with a vision 
//                 to contribute to India's infrastructure development. Over the years, we have grown into a 
//                 diversified conglomerate with 12 companies spanning multiple industries.
//               </p>
//               <p>
//                 Our journey reflects India's own growth story - from traditional industries to modern 
//                 technology-driven sectors. Today, we employ over 10,000 people across the country and 
//                 continue to expand our footprint in emerging markets.
//               </p>
//               <p>
//                 What sets us apart is our commitment to combining traditional Indian values with modern 
//                 business practices, creating sustainable value for all our stakeholders.
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

//         {/* Founders */}
//         <div className="text-center mb-12">
//           <h3 className="text-3xl font-bold text-blue-900 mb-8">Our Founders</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((founder, index) => (
//               <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
//                 <CardContent className="text-center space-y-4">
//                   <img 
//                     src={founder.image}
//                     alt={founder.name}
//                     className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
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
//     </section>
//   );
// };

// export default AboutUs;


// // // Updated 
// import { Users, Target, Award, TrendingUp } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import vinayakPlaza from '@/assets/Vinayak_Plaza.jpg'; // ✅ Correct import

// const AboutUs = () => {
//   const values = [
//     {
//       name: "Amit Sharma",
//       role: "Chairman & Founder",
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//       quote: `"Building a better India begins with trust, vision, and relentless commitment."`
//     },
//     {
//       name: "Priya Mehta",
//       role: "Co-Founder & Director",
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//       quote: `"Empowering communities and driving innovation is at the heart of everything we do."`
//     },
//     {
//       name: "Raj Malhotra",
//       role: "Managing Director",
//       image: "https://randomuser.me/api/portraits/men/55.jpg",
//       quote: `"Our mission is to shape industries with purpose, pride, and integrity."`
//     },
//     {
//       name: "Anjali Desai",
//       role: "Executive Director",
//       image: "https://randomuser.me/api/portraits/women/65.jpg",
//       quote: `"True leadership lies in uplifting people and transforming ideas into action."`
//     },
//   ];

//   const stats = [
//     { icon: TrendingUp, number: "₹5,000+ Cr", label: "Annual Revenue" },
//     { icon: Users, number: "10,000+", label: "Employees" },
//     { icon: Award, number: "50+", label: "Industry Awards" },
//     { icon: Target, number: "12", label: "Business Sectors" }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-blue-900 mb-4">About Heritage India Group</h2>
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
//                 Founded in 1998, Heritage India Group began as a single construction company with a vision 
//                 to contribute to India's infrastructure development. Over the years, we have grown into a 
//                 diversified conglomerate with 12 companies spanning multiple industries.
//               </p>
//               <p>
//                 Our journey reflects India's own growth story - from traditional industries to modern 
//                 technology-driven sectors. Today, we employ over 10,000 people across the country and 
//                 continue to expand our footprint in emerging markets.
//               </p>
//               <p>
//                 What sets us apart is our commitment to combining traditional Indian values with modern 
//                 business practices, creating sustainable value for all our stakeholders.
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
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((founder, index) => (
//               <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
//                 <CardContent className="text-center space-y-4">
//                   <img 
//                     src={founder.image}
//                     alt={founder.name}
//                     className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
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
//     </section>
//   );
// };

// export default AboutUs;


import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import vinayakPlaza from '@/assets/Vinayak_Plaza.jpg';

const AboutUs = () => {
  const values = [
    {
      name: "Mr. Dasan Das Gupta",
      role: "Chairman & Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: `"Building a better India begins with trust, vision, and relentless commitment."`
    },
    {
      name: "Ms. Saroj Gupta",
      role: "Co-Founder & Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: `"Empowering communities and driving innovation is at the heart of everything we do."`
    }
  ];

  const stats = [
    { icon: TrendingUp, number: "₹5,000+ Cr", label: "Annual Revenue" },
    { icon: Users, number: "10,000+", label: "Employees" },
    { icon: Award, number: "50+", label: "Industry Awards" },
    { icon: Target, number: "12", label: "Business Sectors" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
<h2 className="text-5xl font-extrabold mb-5 text-gray-900 leading-tight">
  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Heritage India</span> Group
</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of excellence spanning over two decades, building India's future through 
            innovation, integrity, and unwavering commitment to quality.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-blue-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At the heart of the Heritage India Group (HIG) lies a vision sculpted by its esteemed founder, Mr. Dasan Das Gupta. His pioneering spirit, unwavering commitment to nation-building, and profound belief in empowering communities have been the guiding light for every endeavor under the HIG umbrella. From a single idea, he has fostered a diverse ecosystem dedicated to transforming aspirations into tangible realities across various sectors, building a legacy rooted in progress and heritage.
              </p>
              <p>
                This enduring legacy is exemplified in the very growth and diversification of HIG, much like a magnificent tree whose strong roots nourish a sprawling network of branches, each reaching towards new horizons. We have three main pillars that represent the core of our multifaceted operations.
              </p>
              <p>
                Empowering Communities: We uplift rural Uttar Pradesh by fostering economic independence through grassroots development, financial inclusion, and agricultural innovation with HIG - Heritage India Agro Producer Company Limited and HIG - Heritage India Micro Services Foundation.

Building for the Future: We drive growth and connectivity via infrastructure (HIG - Heritage India Infra Venture Private Limited), finance (HIG - Finance), and trade (HIG - Dasandas Traders), propelling national development.

Celebrating Culture & Progress: We honor India's heritage while embracing modernity through media and education (HIG – Heritage Media and Education Private Limited, HIG - Heritage India Film Production Private Limited), and diverse experiences from spiritual journeys to retail (HIG - Heritage India Hotel & Resort Private Limited, Kashi Kedarnath, HIG - Mart, HIG - Glam Factory).
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={vinayakPlaza}
              alt="Heritage India Group Office"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Statistics */}
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

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <CardContent className="space-y-4">
              <Target className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="leading-relaxed text-blue-100">
                To be India's most respected and trusted business conglomerate, creating sustainable 
                value for all stakeholders while contributing to the nation's economic growth and 
                social development.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardContent className="space-y-4">
              <Award className="h-12 w-12 text-white mb-4" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="leading-relaxed">
                To deliver excellence in every sector we operate, fostering innovation, maintaining 
                the highest standards of quality, and building lasting relationships with our customers, 
                partners, and communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Founders Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">Our Founders</h3>
          <div className="grid md:grid-cols-2 gap-6 justify-center">
            {values.map((founder, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <CardContent className="text-center space-y-4">
                  <img 
                    src={founder.image}
                    alt={founder.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
                  />
                  <h4 className="text-xl font-bold text-blue-900">{founder.name}</h4>
                  <p className="text-gray-600">{founder.role}</p>
                  <p className="italic text-gray-500 text-sm">{founder.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
