// import { useEffect, useState, useRef } from 'react'; // Import useRef
// import { Briefcase, MapPin, Clock, Send, FileText, UploadCloud, XCircle } from 'lucide-react'; // Added UploadCloud, XCircle
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// const jobOpenings = [
//   {
//     title: 'Frontend Developer',
//     location: 'Noida, India',
//     type: 'Full-Time',
//     description: 'We are seeking an experienced Frontend Developer with a strong command of React, Tailwind CSS, and modern animation libraries to build stunning user interfaces. A minimum of 2 years of professional experience is preferred.',
//   },
//   {
//     title: 'HR Executive',
//     location: 'Delhi, India',
//     type: 'Full-Time',
//     description: 'Join our dynamic HR team! We are looking for an HR Executive with proven experience in end-to-end recruitment processes, onboarding, and employee relations. Strong communication skills are essential.',
//   },
//   {
//     title: 'Marketing Manager',
//     location: 'Mumbai, India',
//     type: 'Full-Time',
//     description: 'Lead our marketing initiatives! We require a creative and results-driven Marketing Manager skilled in digital marketing strategies, campaign management, and leading a small team to achieve business objectives.',
//   },
//   {
//     title: 'UI/UX Designer',
//     location: 'Remote',
//     type: 'Full-Time',
//     description: 'Craft intuitive and beautiful user experiences. We are searching for a talented UI/UX Designer with expertise in user research, wireframing, prototyping, and design tools like Figma or Sketch.',
//   },
//   {
//     title: 'Backend Developer',
//     location: 'Hyderabad, India',
//     type: 'Full-Time',
//     description: 'Build robust and scalable server-side applications. We need a Backend Developer proficient in Node.js, Python, or Go, with experience in database design and API development.',
//   },
// ];

// export default function Career() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     position: '',
//     resumeName: '', // Stores the name of the selected file
//   });

//   const fileInputRef = useRef(null); // Ref for the file input

//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       handleChange('resumeName', file.name);
//     } else {
//       handleChange('resumeName', ''); // Clear if no file selected
//     }
//   };

//   const handleRemoveFile = () => {
//     handleChange('resumeName', '');
//     if (fileInputRef.current) {
//       fileInputRef.current.value = ''; // Clear the file input element
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, phone, position, resumeName } = formData;

//     const message = `New Career Application:
    
// Name: ${name}
// Phone: ${phone}
// Position Applied For: ${position}
// Resume: ${resumeName ? resumeName : 'Not attached. Will send separately.'}`;

//     const whatsappNumber = '+917081957371'; // Your WhatsApp number
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

//     window.open(whatsappUrl, '_blank');

//     // Reset form data and file input after submission
//     setFormData({
//       name: '',
//       phone: '',
//       position: '',
//       resumeName: '',
//     });
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 py-16 px-4 md:px-16 lg:px-24">
//       {/* Header */}
//       <section className="text-center mb-16" data-aos="fade-up">
//         <h1 className="text-5xl font-extrabold mb-4 text-blue-900 leading-tight">
//           Shape Your Future With Us
//         </h1>
//         <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//           We're always looking for passionate individuals to join our growing team.
//           Explore our current opportunities and take the next step in your career.
//         </p>
//       </section>

//       {/* Jobs Section */}
//       <section className="mb-20">
//         <h2 className="text-3xl font-bold text-center mb-10 text-blue-800" data-aos="fade-up">
//           Current Job Openings
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {jobOpenings.map((job, index) => (
//             <Card
//               key={index}
//               className="group flex flex-col justify-between border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <CardHeader className="p-0 mb-4">
//                 <div className="flex items-center gap-3 mb-2 text-blue-700 font-semibold">
//                   <Briefcase className="w-5 h-5 text-blue-600" />
//                   <span className="text-sm uppercase tracking-wider">{job.type}</span>
//                 </div>
//                 <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
//                   {job.title}
//                 </CardTitle>
//                 <CardDescription className="flex items-center gap-2 text-gray-600">
//                   <MapPin className="w-4 h-4 text-gray-500" />
//                   {job.location}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <p className="text-base text-gray-700 leading-relaxed">
//                   {job.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Apply Form Section */}
//       <section className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
//         <Card className="shadow-2xl border border-blue-300 rounded-xl overflow-hidden bg-white">
//           <CardHeader className="bg-blue-800 text-white p-6">
//             <CardTitle className="text-3xl font-bold mb-2">Apply Now</CardTitle>
//             <CardDescription className="text-blue-100 text-lg">
//               Fill out the form below to send your application directly via WhatsApp.
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="p-8 space-y-7">
//             <form onSubmit={handleSubmit}>
//               <div className="space-y-6">
//                 <div>
//                   <Label htmlFor="name" className="text-lg font-medium mb-2 block">
//                     Full Name <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="name"
//                     required
//                     value={formData.name}
//                     onChange={e => handleChange('name', e.target.value)}
//                     className="p-3 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="phone" className="text-lg font-medium mb-2 block">
//                     Phone Number <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={e => handleChange('phone', e.target.value)}
//                     className="p-3 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
//                     placeholder="+91 XXXXXXXXXX"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="position" className="text-lg font-medium mb-2 block">
//                     Applying For <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="position"
//                     required
//                     value={formData.position}
//                     onChange={e => handleChange('position', e.target.value)}
//                     className="p-3 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
//                     placeholder="e.g., Frontend Developer"
//                   />
//                 </div>

//                 {/* --- Improved Resume Upload Section --- */}
//                 <div>
//                   <Label htmlFor="resume" className="text-lg font-medium mb-2 block">
//                     Resume/CV (Optional)
//                   </Label>
//                   <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer group">
//                     <input
//                       id="resume"
//                       type="file"
//                       accept=".pdf,.doc,.docx"
//                       onChange={handleFileChange}
//                       ref={fileInputRef} // Attach ref
//                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                     />
//                     {formData.resumeName ? (
//                       // Display selected file with a remove button
//                       <div className="flex items-center justify-center gap-3 text-blue-700">
//                         <FileText className="w-6 h-6" />
//                         <span className="font-medium truncate max-w-[calc(100%-6rem)]">
//                           {formData.resumeName}
//                         </span>
//                         <Button
//                           type="button"
//                           variant="ghost"
//                           size="icon"
//                           onClick={handleRemoveFile}
//                           className="text-red-500 hover:text-red-700 ml-2"
//                           aria-label="Remove selected resume"
//                         >
//                           <XCircle className="w-5 h-5" />
//                         </Button>
//                       </div>
//                     ) : (
//                       // Display upload prompt
//                       <div className="flex flex-col items-center justify-center text-gray-500 group-hover:text-blue-600">
//                         <UploadCloud className="w-10 h-10 mb-2" />
//                         <p className="font-semibold text-lg">Drag & Drop or Click to Upload</p>
//                         <p className="text-sm">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
//                       </div>
//                     )}
//                   </div>
//                   <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
//                     <FileText className="w-4 h-4" />
//                     Kindly note: Your resume is selected but not directly uploaded here. You'll send it via WhatsApp manually after submitting this form.
//                   </p>
//                 </div>
//                 {/* --- End Improved Resume Upload Section --- */}

//                 <Button
//                   type="submit"
//                   className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xl py-3 rounded-lg flex items-center justify-center gap-3 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
//                 >
//                   Send Application via WhatsApp
//                   <Send className="w-6 h-6" />
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </section>
//     </div>
//   );
// }




import { useEffect, useState, useRef } from 'react';
import { Briefcase, MapPin, Send, FileText, UploadCloud, XCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const jobOpenings = [
  {
    title: 'Frontend Developer',
    location: 'Noida, India',
    type: 'Full-Time',
    description: 'We are seeking an experienced Frontend Developer with a strong command of React, Tailwind CSS, and modern animation libraries to build stunning user interfaces. A minimum of 2 years of professional experience is preferred.',
  },
  {
    title: 'HR Executive',
    location: 'Delhi, India',
    type: 'Full-Time',
    description: 'Join our dynamic HR team! We are looking for an HR Executive with proven experience in end-to-end recruitment processes, onboarding, and employee relations. Strong communication skills are essential.',
  },
  {
    title: 'Marketing Manager',
    location: 'Mumbai, India',
    type: 'Full-Time',
    description: 'Lead our marketing initiatives! We require a creative and results-driven Marketing Manager skilled in digital marketing strategies, campaign management, and leading a small team to achieve business objectives.',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'Craft intuitive and beautiful user experiences. We are searching for a talented UI/UX Designer with expertise in user research, wireframing, prototyping, and design tools like Figma or Sketch.',
  },
  {
    title: 'Backend Developer',
    location: 'Hyderabad, India',
    type: 'Full-Time',
    description: 'Build robust and scalable server-side applications. We need a Backend Developer proficient in Node.js, Python, or Go, with experience in database design and API development.',
  },
];

export default function Career() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    position: '',
    resumeName: '',
  });

  const fileInputRef = useRef(null);
  const formSectionRef = useRef(null);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleChange('resumeName', file.name);
    } else {
      handleChange('resumeName', '');
    }
  };

  const handleRemoveFile = () => {
    handleChange('resumeName', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleApplyNow = (jobTitle) => {
    setFormData(prev => ({
      ...prev,
      position: jobTitle,
    }));
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, position, resumeName } = formData;

    const message = `New Career Application:
Name: ${name}
Phone: ${phone}
Position Applied For: ${position}
Resume: ${resumeName ? resumeName : 'Not attached. Will send separately.'}`;

    const whatsappNumber = '+917081957371';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      phone: '',
      position: '',
      resumeName: '',
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 py-16 px-4 md:px-16 lg:px-24">
      {/* Hero Section */}
      <section className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-900 leading-tight">
          Shape Your Future With Us
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          We're always looking for passionate individuals to join our growing team.
          Explore our current opportunities and take the next step in your career.
        </p>
      </section>

      {/* Job Cards */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800" data-aos="fade-up">
          Current Job Openings
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpenings.map((job, index) => (
            <Card
              key={index}
              className="group flex flex-col justify-between border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-3 mb-2 text-blue-700 font-semibold">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <span className="text-sm uppercase tracking-wider">{job.type}</span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {job.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  {job.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  {job.description}
                </p>
              </CardContent>
              <div className="mt-auto">
                <Button
                  onClick={() => handleApplyNow(job.title)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  Apply Now <Send className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Apply Form */}
      <section ref={formSectionRef} className="max-w-3xl mx-auto mt-12" data-aos="fade-up" data-aos-delay="200">
        <Card className="shadow-2xl border border-blue-300 rounded-xl overflow-hidden bg-white">
          <CardHeader className="bg-blue-800 text-white p-6">
            <CardTitle className="text-3xl font-bold mb-2">Apply Now</CardTitle>
            <CardDescription className="text-blue-200 text-xl font-semibold">
              Send Your Application
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-7">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg font-medium mb-2 block">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={e => handleChange('name', e.target.value)}
                    className="p-3 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-lg font-medium mb-2 block">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    className="p-3 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
                    placeholder="+917081957371"
                  />
                </div>

                <div>
                  <Label htmlFor="position" className="text-lg font-medium mb-2 block">
                    Applying For <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="position"
                    required
                    value={formData.position}
                    onChange={e => handleChange('position', e.target.value)}
                    className="p-3 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
                    placeholder="e.g., Frontend Developer"
                  />
                </div>

                <div>
                  <Label htmlFor="resume" className="text-lg font-medium mb-2 block">
                    Resume/CV (Optional)
                  </Label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer group">
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {formData.resumeName ? (
                      <div className="flex items-center justify-center gap-3 text-blue-700">
                        <FileText className="w-6 h-6" />
                        <span className="font-medium truncate max-w-[calc(100%-6rem)]">
                          {formData.resumeName}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={handleRemoveFile}
                          className="text-red-500 hover:text-red-700 ml-2"
                          aria-label="Remove selected resume"
                        >
                          <XCircle className="w-5 h-5" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-500 group-hover:text-blue-600">
                        <UploadCloud className="w-10 h-10 mb-2" />
                        <p className="font-semibold text-lg">Drag & Drop or Click to Upload</p>
                        <p className="text-sm">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    Kindly note: Your resume is selected but not directly uploaded here. You'll send it via WhatsApp manually after submitting this form.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xl py-3 rounded-lg flex items-center justify-center gap-3 transition duration-300 shadow-md hover:shadow-lg"
                >
                  Send Application via WhatsApp
                  <Send className="w-6 h-6" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
