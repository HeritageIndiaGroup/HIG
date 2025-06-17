
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Heritage Tower, Sector 62", "Noida, Uttar Pradesh 201309", "India"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 120 4567890", "+91 120 4567891", "Toll Free: 1800-123-4567"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@heritageindiagroup.com", "careers@heritageindiagroup.com", "investor@heritageindiagroup.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/heritageindiagroup", name: "Facebook" },
    { icon: Twitter, url: "https://twitter.com/heritageindiagroup", name: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com/company/heritageindiagroup", name: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com/heritageindiagroup", name: "Instagram" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with Heritage India Group. We're here to answer your questions 
            and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Get In Touch</h3>
            
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-blue-900" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-blue-100">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-yellow-400">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="bg-white/10 border-white/20 text-white hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <IconComponent className="h-5 w-5" />
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Our Location</h3>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-300 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                    alt="Heritage India Group Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">Heritage Tower</p>
                      <p className="text-sm">Noida, UP</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="text-xl font-semibold mb-4 text-yellow-400">Regional Offices</h4>
              <div className="space-y-3 text-blue-100">
                <div>
                  <p className="font-medium">Mumbai Office</p>
                  <p className="text-sm">Andheri East, Mumbai, Maharashtra</p>
                </div>
                <div>
                  <p className="font-medium">Bangalore Office</p>
                  <p className="text-sm">Electronic City, Bangalore, Karnataka</p>
                </div>
                <div>
                  <p className="font-medium">Chennai Office</p>
                  <p className="text-sm">OMR, Chennai, Tamil Nadu</p>
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
