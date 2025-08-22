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

//   const mergedContactInfo = [
//     {
//       icon: MapPin,
//       title: "Head Office",
//       details: [
//         "C/o. Saroj Gupta, Chandpur Industrial Estate Chandpur",
//         "Varanasi, Uttar Pradesh 221106",
//         "India",
//       ],
//     },
//     {
//       icon: Phone,
//       title: "Phone Numbers",
//       details: [
//         "+91 8418878887",
//         "Toll Free: 8418878887",
//       ],
//     },
//     {
//       icon: Mail,
//       title: "Email Addresses",
//       details: [
//         "admin@heritageindiagroup.com",
//         "admin@higproductionhouse.com",
//         "investor@heritageindiagroup.com",
//       ],
//     },
//     {
//       icon: Clock,
//       title: "Business Hours",
//       details: [
//         "Monday - Friday: 9:00 AM - 6:00 PM",
//         "Saturday: 9:00 AM - 1:00 PM",
//         "Sunday: Closed",
//       ],
//     },
//   ];

//   const regionalOffices = [
//     {
//       title: "Vinayak Plaza Office",
//       address: "Maldhayia, Varanasi, Uttar Pradesh",
//     },
//     {
//       title: "Uttrakhand Office",
//       address: "Heritage India Agro Producer company,Tea estate, near Durga temple,Banjarawala chowk, dehradun 248001,Uttarakhand, India",
//     },
//     {
//       title: "Pandeypur Office",
//       address: "Pandey, Varanasi, Uttar Pradesh",
//     },
//   ];

//   return (
//     <section
//       id="contact"
//       className="scroll-mt-24 py-20 bg-gradient-to-br from-[#eef4fa] to-white text-gray-900"
//     >
//       <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
//         {/* Header */}
//         <header className="text-center mb-16 max-w-3xl mx-auto">
//      <h2 className="text-5xl font-extrabold mb-5 text-gray-900 leading-tight">
//   Contact{' '}
//   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
//     Us
//   </span>
// </h2>

//           <p className="text-lg sm:text-xl text-gray-700">
//             Get in touch with Heritage India Group. We're here to answer your questions and explore how we can work together.
//           </p>
//         </header>

//         {/* Main content grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Merged Contact Info */}
//           <div>
//             <h3 className="text-2xl font-bold text-black mb-8">Get In Touch</h3>
//             <Card className="bg-white shadow-lg rounded-xl transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300">
//               <CardContent className="p-8 space-y-10">
//                 {mergedContactInfo.map(({ icon: Icon, title, details }, idx) => (
//                   <div key={idx} className="flex space-x-6">
//                     <div className="flex-shrink-0">
//                       <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
//                         <Icon className="w-7 h-7 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
//                       <div className="space-y-2 text-gray-700 text-base select-text">
//                         {details.map((detail, i) => (
//                           <p key={i}>{detail}</p>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Map and Regional Offices */}
//           <div>
//             <h3 className="text-2xl font-bold text-black mb-8">Our Location</h3>

//             <a
//               href="https://maps.app.goo.gl/VBoFzE8s1HiuwtiD9"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block mb-10 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-[1.03] hover:shadow-2xl duration-300 cursor-pointer"
//               aria-label="Open map location in Google Maps"
//             >
//               <Card className="bg-white/10 backdrop-blur-sm border border-gray-200 shadow-md overflow-hidden">
//                 <CardContent className="p-0">
//                   <div className="aspect-video w-full h-[280px] md:h-[320px]">
//                     <div id="leaflet-map" className="w-full h-full" />
//                   </div>
//                 </CardContent>
//               </Card>
//             </a>

//             <h4 className="text-2xl font-bold text-black mb-6">Regional Offices</h4>
//             <div className="space-y-6">
//               {regionalOffices.map(({ title, address }, idx) => (
//                 <Card
//                   key={idx}
//                   className="bg-white shadow-lg rounded-xl transition-transform transform hover:scale-[1.03] hover:shadow-2xl duration-300 cursor-pointer"
//                 >
//                   <CardContent className="flex space-x-6 p-6">
//                     <div className="flex-shrink-0">
//                       <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
//                         <MapPin className="w-7 h-7 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h5 className="text-xl font-semibold mb-1 text-gray-900">{title}</h5>
//                       <p className="text-gray-700">{address}</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;






import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const mergedContactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "C/o. Saroj Gupta, Chandpur Industrial Estate Chandpur",
        "Varanasi, Uttar Pradesh 221106",
        "India",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 8418878887",
        "Toll Free: 8418878887",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "admin@heritageindiagroup.com",
        "admin@higproductionhouse.com",
        "investor@heritageindiagroup.com",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const regionalOffices = [
    {
      title: "Vinayak Plaza Office",
      address: "Maldhayia, Varanasi, Uttar Pradesh",
    },
    {
      title: "Uttrakhand Office",
      address: "Heritage India Agro Producer company,Tea estate, near Durga temple,Banjarawala chowk, dehradun 248001,Uttarakhand, India",
    },
    // {
    //   title: "Pandeypur Office",
    //   address: "Pandey, Varanasi, Uttar Pradesh",
    // },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 bg-gradient-to-br from-[#eef4fa] to-white text-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-5 text-gray-900 leading-tight">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              Us
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-700">
            Get in touch with Heritage India Group. We're here to answer your questions and explore how we can work together.
          </p>
        </header>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Merged Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Get In Touch</h3>
            <Card className="bg-white shadow-lg rounded-xl transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300">
              <CardContent className="p-8 space-y-10">
                {mergedContactInfo.map(({ icon: Icon, title, details }, idx) => (
                  <div key={idx} className="flex space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
                      <div className="space-y-2 text-gray-700 text-base select-text">
                        {details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Map and Regional Offices */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Our Location</h3>

            <a
              href="https://maps.app.goo.gl/VBoFzE8s1HiuwtiD9"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-10 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-[1.03] hover:shadow-2xl duration-300 cursor-pointer"
              aria-label="Open map location in Google Maps"
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-gray-200 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video w-full h-[280px] md:h-[320px]">
                    {/* Google Maps iframe */}
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.048498169114!2d78.02856799999999!3d30.278956500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929104fe56c77%3A0x301ff4114bb2be47!2sHIG-HERITAGE%20AGRO%20INDIA%20PRODUCER%20COMPANY%20LIMITED!5e1!3m2!1sen!2sin!4v1755895938080!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>
            </a>

            <h4 className="text-2xl font-bold text-black mb-6">Regional Offices</h4>
            <div className="space-y-6">
              {regionalOffices.map(({ title, address }, idx) => (
                <Card
                  key={idx}
                  className="bg-white shadow-lg rounded-xl transition-transform transform hover:scale-[1.03] hover:shadow-2xl duration-300 cursor-pointer"
                >
                  <CardContent className="flex space-x-6 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold mb-1 text-gray-900">{title}</h5>
                      <p className="text-gray-700">{address}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
