import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Send, MessageSquare } from 'lucide-react';

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

const InquiryForm = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "+917081957371";
    const message = `New Inquiry from Heritage India Group Website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company Interest: ${formData.company || 'General Inquiry'}
Subject: ${formData.subject}
Message: ${formData.message}
Preferred Contact: ${formData.contactMethod}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Your inquiry has been sent via WhatsApp. We'll get back to you within 24 hours.",
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
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="inquiry" className="scroll-mt-24 py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <MessageSquare className="h-16 w-16 text-blue-900 mx-auto mb-4" />
          <h2 className="text-5xl font-extrabold mb-5 text-gray-900 leading-tight">
  Feel Free to{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
    Inquiry
  </span>{' '}
  😊
</h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our services? Want to explore partnership opportunities?
            We're here to help you find the right solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold">Send us an Inquiry</CardTitle>
              <CardDescription className="text-blue-100">
                Fill out the form below and your inquiry will be sent via WhatsApp for quick response.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700 font-semibold">
                      Which Company? *
                    </Label>
                    <Select value={formData.company} onValueChange={(value) => handleInputChange('company', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select a company" />
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

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700 font-semibold">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="Brief subject of your inquiry"
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-semibold">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please provide details about your inquiry..."
                    required
                    rows={6}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-gray-700 font-semibold">
                    Preferred Contact Method
                  </Label>
                  <RadioGroup
                    value={formData.contactMethod}
                    onValueChange={(value) => handleInputChange('contactMethod', value)}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" />
                      <Label htmlFor="email-contact" className="text-gray-600">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" />
                      <Label htmlFor="phone-contact" className="text-gray-600">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send via WhatsApp
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;