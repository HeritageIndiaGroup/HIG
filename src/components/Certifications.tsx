
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Award, Shield, CheckCircle } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015 Certification",
    description: "Quality Management System certification for consistent quality delivery",
    icon: Award,
    category: "Quality Management"
  },
  {
    id: 2,
    title: "GST Registration Certificate",
    description: "Goods and Services Tax registration for all business operations",
    icon: FileText,
    category: "Tax Registration"
  },
  {
    id: 3,
    title: "Company Incorporation Certificate",
    description: "Certificate of Incorporation under Companies Act",
    icon: Shield,
    category: "Legal Registration"
  },
  {
    id: 4,
    title: "MSME Registration",
    description: "Micro, Small and Medium Enterprises registration certificate",
    icon: CheckCircle,
    category: "Government Registration"
  },
  {
    id: 5,
    title: "Trade License",
    description: "Municipal trade license for business operations",
    icon: FileText,
    category: "Municipal License"
  },
  {
    id: 6,
    title: "PAN Card",
    description: "Permanent Account Number for tax identification",
    icon: Shield,
    category: "Tax Registration"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Certifications & Registrations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is backed by comprehensive certifications and legal registrations, 
            ensuring compliance and quality across all our business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <Card key={cert.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                    {cert.title}
                  </CardTitle>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {cert.category}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
