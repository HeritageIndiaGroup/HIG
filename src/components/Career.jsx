import { useEffect, useState } from 'react';
import { Briefcase, Send } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const jobOpenings = [
  {
    title: 'Frontend Developer',
    location: 'Noida, India',
    type: 'Full-Time',
    description: 'Experience with React, Tailwind, and animations. 2+ years preferred.',
  },
  {
    title: 'HR Executive',
    location: 'Delhi, India',
    type: 'Full-Time',
    description: 'Recruitment and onboarding experience.',
  },
  {
    title: 'Marketing Manager',
    location: 'Mumbai, India',
    type: 'Full-Time',
    description: 'Digital marketing & team management.',
  },
];

export default function Career() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    position: '',
    resumeName: '',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, position, resumeName } = formData;

    const message = `New Career Application:
    
Name: ${name}
Phone: ${phone}
Position Applied For: ${position}
Resume: ${resumeName ? resumeName : 'Not attached. Will send separately.'}`;

    const whatsappNumber = '+917081957371'; // Your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      phone: '',
      position: '',
      resumeName: '',
    });
  };

  return (
    <div className="bg-white text-gray-900 py-12 px-4 md:px-16">
      {/* Header */}
      <section className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Join Our Team</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore open positions and apply easily via WhatsApp.
        </p>
      </section>

      {/* Jobs */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow hover:shadow-lg transition bg-gray-50"
          >
            <div className="flex items-center gap-2 mb-2 text-blue-700 font-semibold">
              <Briefcase className="w-5 h-5" />
              {job.type}
            </div>
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{job.location}</p>
            <p className="text-sm text-gray-700">{job.description}</p>
          </div>
        ))}
      </section>

      {/* Apply Form */}
      <section className="max-w-2xl mx-auto" data-aos="fade-up">
        <Card className="shadow-lg">
          <CardHeader className="bg-blue-900 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Apply Now</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={e => handleChange('name', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="position">Applying For *</Label>
                  <Input
                    id="position"
                    required
                    value={formData.position}
                    onChange={e => handleChange('position', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="resume">Resume File (Optional)</Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={e => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleChange('resumeName', file.name);
                      }
                    }}
                  />
                  <p className="text-sm text-gray-500">
                    Resume is not uploaded — you can send it via WhatsApp manually after submitting.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold text-lg flex items-center justify-center gap-2"
                >
                  Send via WhatsApp
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
