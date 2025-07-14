// 'use client';

// import { useEffect, useState } from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Send, MessageSquare } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// const companies = [
//   "HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED",
//   "HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION",
//   "HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED",
//   "HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED",
//   "HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED",
//   "HIG - HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED",
//   "HIG - KashiKendarnath",
//   "HIG - Finance",
//   "HIG - Mart",
//   "HIG - Dasandas Traders",
//   "HIG - Glam Factory"
// ];

// const Popup = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     subject: '',
//     message: '',
//     contactMethod: 'email'
//   });

//   const { toast } = useToast();

//   useEffect(() => {
//     const timer = setTimeout(() => setOpen(true), 10000); // Show popup after 10 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const whatsappNumber = "+917081957371";
//     const message = `📩 New Inquiry from Heritage India Group Website:

// 👤 Name: ${formData.name}
// 📧 Email: ${formData.email}
// 📱 Phone: ${formData.phone}
// 🏢 Company: ${formData.company || 'General Inquiry'}
// 📝 Subject: ${formData.subject}
// 💬 Message: ${formData.message}
// 📞 Preferred Contact: ${formData.contactMethod}`;

//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappUrl, '_blank');

//     toast({
//       title: "🎉 Inquiry Sent!",
//       description: "We’ve received your message and will get back to you within 24 hours via your selected method.",
//     });

//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       subject: '',
//       message: '',
//       contactMethod: 'email'
//     });

//     setOpen(false); // Close after submit
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader className="text-center">
//           <DialogTitle className="text-xl mx-auto flex items-center justify-center gap-2">
//             <MessageSquare className="h-5 w-5 text-blue-700" />
//             We'd Love to Hear From You! 😊
//           </DialogTitle>
//           <DialogDescription className="text-gray-600 mt-1 mx-auto text-base">
//             Message us directly on WhatsApp 📱
//           </DialogDescription>
//         </DialogHeader>

//         <form onSubmit={handleSubmit} className="space-y-4 py-2">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <Label htmlFor="name">👤 Full Name *</Label>
//               <Input
//                 id="name"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//                 placeholder="Your full name"
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="email">📧 Email Address *</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange('email', e.target.value)}
//                 placeholder="you@example.com"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <Label htmlFor="phone">📱 Phone Number *</Label>
//               <Input
//                 id="phone"
//                 type="tel"
//                 inputMode="numeric"
//                 value={formData.phone}
//                 onChange={(e) => handleInputChange('phone', e.target.value)}
//                 placeholder="Your phone number"
//                 required
//               />
//             </div>

//             <div>
//               <Label>🏢 Select Company *</Label>
//               <Select
//                 value={formData.company}
//                 onValueChange={(value) => handleInputChange('company', value)}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Choose company or inquiry type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="general">General Inquiry</SelectItem>
//                   {companies.map((company) => (
//                     <SelectItem key={company} value={company}>
//                       {company}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <div>
//             <Label htmlFor="subject">📝 Subject *</Label>
//             <Input
//               id="subject"
//               value={formData.subject}
//               onChange={(e) => handleInputChange('subject', e.target.value)}
//               placeholder="Quick summary of your message"
//               required
//             />
//           </div>

//           <div>
//             <Label htmlFor="message">💬 Your Message *</Label>
//             <Textarea
//               id="message"
//               value={formData.message}
//               onChange={(e) => handleInputChange('message', e.target.value)}
//               placeholder="Tell us how we can help you..."
//               required
//               rows={4}
//             />
//           </div>

//           <div>
//             <Label className="mb-1 block">📞 Preferred Contact Method</Label>
//             <RadioGroup
//               value={formData.contactMethod}
//               onValueChange={(value) => handleInputChange('contactMethod', value)}
//               className="flex flex-row gap-6"
//             >
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="email" id="email-contact" />
//                 <Label htmlFor="email-contact">Email</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="phone" id="phone-contact" />
//                 <Label htmlFor="phone-contact">Phone</Label>
//               </div>
//             </RadioGroup>
//           </div>

//           <Button type="submit" className="w-full bg-blue-900 text-white hover:bg-blue-800 text-lg">
//             🚀 Send via WhatsApp <Send className="ml-2 h-5 w-5" />
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default Popup;





'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Send,
  MessageSquare,
  Mail,
  Phone,
  User,
  Building2,
  FileText,
  MessageCircle,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import logo from '@/assets/logo.png';

const companies = [
  "HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED",
  "HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION",
  "HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED",
  "HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED",
  "HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED",
  "HIG - HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED",
  "HIG - KashiKendarnath",
  "HIG - Finance",
  "HIG - Mart",
  "HIG - Dasandas Traders",
  "HIG - Glam Factory"
];

const Popup = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });

  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "+917081957371";
    const message = `New Inquiry from Heritage India Group Website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'General Inquiry'}
Subject: ${formData.subject}
Message: ${formData.message}
Preferred Contact: ${formData.contactMethod}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Inquiry Sent",
      description: "We’ve received your message and will contact you soon.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      contactMethod: 'email'
    });

    setOpen(false);
  };

  const renderLabel = (Icon, text) => (
    <span className="flex items-center gap-1 text-sm font-medium text-gray-800">
      <Icon className="h-4 w-4" />
      {text}
    </span>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[95vw] md:max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 border border-gray-200 bg-white">
        
        {/* Header with logo */}
        <div className="flex flex-col items-center justify-center mb-6 space-y-3">
          <img src={logo} alt="HIG Logo" className="h-14 w-auto object-contain" />
          <h2 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-700" />
            We'd Love to Hear From You
          </h2>
          <p className="text-gray-600 text-sm text-center">
            Send your message via WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">{renderLabel(User, "Full Name *")}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">{renderLabel(Mail, "Email Address *")}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">{renderLabel(Phone, "Phone Number *")}</Label>
              <Input
                id="phone"
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Your phone number"
                required
              />
            </div>

            <div>
              <Label>{renderLabel(Building2, "Select Company *")}</Label>
              <Select
                value={formData.company}
                onValueChange={(value) => handleInputChange('company', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose company or inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  {companies.map((company) => (
                    <SelectItem key={company} value={company}>
                      {company}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="subject">{renderLabel(FileText, "Subject *")}</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              placeholder="Quick summary of your message"
              required
            />
          </div>

          <div>
            <Label htmlFor="message">{renderLabel(MessageCircle, "Your Message *")}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us how we can help you..."
              required
              rows={4}
            />
          </div>

          <div>
            <Label className="mb-1 block">Preferred Contact Method</Label>
            <RadioGroup
              value={formData.contactMethod}
              onValueChange={(value) => handleInputChange('contactMethod', value)}
              className="flex flex-row gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-contact" />
                <Label htmlFor="email-contact">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone-contact" />
                <Label htmlFor="phone-contact">Phone</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full bg-blue-900 text-white hover:bg-blue-800 text-lg">
            Send via WhatsApp <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
