// // // Original Code
// import { useEffect } from 'react';
// import { Phone, Mail, MapPin, Clock } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const Contact = () => {
//   useEffect(() => {
//     const map = L.map('leaflet-map').setView([25.327328766470877, 82.99104953969832], 15);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors',
//     }).addTo(map);

//     L.marker([25.327328766470877, 82.99104953969832])
//       .addTo(map)
//       .bindPopup('Our Head Office')
//       .openPopup();

//     return () => map.remove();
//   }, []);

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: "Head Office",
//       details: ["C/o. Saroj Gupta, Chandpur Industrial Estate Chandpur", "Varanasi, Uttar Pradesh 221106", "India"]
//     },
//     {
//       icon: Phone,
//       title: "Phone Numbers",
//       details: ["+91 120 4567890", "+91 120 4567891", "Toll Free: 1800-123-4567"]
//     },
//     {
//       icon: Mail,
//       title: "Email Addresses",
//       details: ["info@heritageindiagroup.com", "careers@heritageindiagroup.com", "investor@heritageindiagroup.com"]
//     },
//     {
//       icon: Clock,
//       title: "Business Hours",
//       details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"]
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-[#eef4fa] to-white text-gray-100">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4 text-blue-600">Contact Us</h2>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//             Get in touch with Heritage India Group. We're here to answer your questions 
//             and explore how we can work together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 mb-12">
//           <div className="space-y-8">
//             <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>

//             <Card className="bg-white shadow-md">
//               <CardContent className="p-6 space-y-6">
//                 {contactInfo.map((info, index) => {
//                   const IconComponent = info.icon;
//                   return (
//                     <Card key={index} className="bg-white shadow-sm text-gray-800">
//                       <CardContent className="p-6">
//                         <div className="flex items-start space-x-4">
//                           <div className="flex-shrink-0">
//                             <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
//                               <IconComponent className="h-6 w-6 text-white" />
//                             </div>
//                           </div>
//                           <div className="flex-1">
//                             <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
//                             <div className="space-y-1">
//                               {info.details.map((detail, idx) => (
//                                 <p key={idx} className="text-gray-700">{detail}</p>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   );
//                 })}
//               </CardContent>
//             </Card>
//           </div>

//           <div className="space-y-8">
//             <h3 className="text-2xl font-bold text-black mb-6">Our Location</h3>

//             <a
//               href="https://maps.app.goo.gl/VBoFzE8s1HiuwtiD9"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block"
//             >
//               <Card className="bg-white/10 backdrop-blur-sm border border-gray-200 shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.01]">
//                 <CardContent className="p-0">
//                   <div className="aspect-video w-full h-full">
//                     <div id="leaflet-map" className="w-full h-full" />
//                   </div>
//                 </CardContent>
//               </Card>
//             </a>

//             {/* ✅ Regional Offices heading moved outside the card */}
//             <h4 className="text-2xl font-bold text-black">Regional Offices</h4>


//             <div className="bg-white shadow-md rounded-lg p-6">
//               <div className="space-y-3 text-gray-700">
//                 <div>
//                   <p className="font-medium">Vinayak Plaza Office</p>
//                   <p className="text-sm">Maldhayia, Varanasi, Uttar Pradesh</p>
//                 </div>
//                 <div>
//                   <p className="font-medium">Panchkoshi Office</p>
//                   <p className="text-sm">Panchkoshi Marg, Varanasi, Uttar Pradesh</p>
//                 </div>
//                 <div>
//                   <p className="font-medium">Pandeypur Office</p>
//                   <p className="text-sm">Pandey, Varanasi, Uttar Pradesh</p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// // Updated 
import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Contact = () => {
  useEffect(() => {
    const map = L.map('leaflet-map').setView([25.327328766470877, 82.99104953969832], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([25.327328766470877, 82.99104953969832])
      .addTo(map)
      .bindPopup('Our Head Office')
      .openPopup();

    return () => map.remove();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "C/o. Saroj Gupta, Chandpur Industrial Estate Chandpur",
        "Varanasi, Uttar Pradesh 221106",
        "India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 120 4567890", "+91 120 4567891", "Toll Free: 1800-123-4567"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@heritageindiagroup.com",
        "careers@heritageindiagroup.com",
        "investor@heritageindiagroup.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-gradient-to-br from-[#eef4fa] to-white text-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with Heritage India Group. We're here to answer your questions 
            and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6 space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="bg-white shadow-sm text-gray-800">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-700">{detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Map + Regional Offices */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-black mb-6">Our Location</h3>

            <a
              href="https://maps.app.goo.gl/VBoFzE8s1HiuwtiD9"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-gray-200 shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.01]">
                <CardContent className="p-0">
                  <div className="aspect-video w-full h-[250px] md:h-full">
                    <div id="leaflet-map" className="w-full h-full" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <h4 className="text-2xl font-bold text-black">Regional Offices</h4>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-medium">Vinayak Plaza Office</p>
                  <p className="text-sm">Maldhayia, Varanasi, Uttar Pradesh</p>
                </div>
                <div>
                  <p className="font-medium">Panchkoshi Office</p>
                  <p className="text-sm">Panchkoshi Marg, Varanasi, Uttar Pradesh</p>
                </div>
                <div>
                  <p className="font-medium">Pandeypur Office</p>
                  <p className="text-sm">Pandey, Varanasi, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
