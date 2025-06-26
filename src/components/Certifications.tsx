
'use client';

import { Card } from '@/components/ui/card';
import { Award, FileText, Shield, CheckCircle, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner'; // ✅ Toast notifications

const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015 Certification",
    description: "Quality Management System certification for consistent quality delivery",
    icon: Award,
    document: "ISO_9001_2015_Certificate.pdf",
    isUploaded: true
  },
  {
    id: 2,
    title: "GST Registration Certificate",
    description: "Goods and Services Tax registration for all business operations",
    icon: FileText,
    document: "GST_Registration_Certificate.pdf",
    isUploaded: false
  },
  {
    id: 3,
    title: "Company Incorporation Certificate",
    description: "Certificate of Incorporation under Companies Act",
    icon: Shield,
    document: "Company_Incorporation_Certificate.pdf",
    isUploaded: true
  },
  {
    id: 4,
    title: "MSME Registration",
    description: "Micro, Small and Medium Enterprises registration certificate",
    icon: CheckCircle,
    document: "MSME_Registration_Certificate.pdf",
    isUploaded: true
  },
  {
    id: 5,
    title: "Trade License",
    description: "Municipal trade license for business operations",
    icon: FileText,
    document: "Trade_License_Certificate.pdf",
    isUploaded: false
  },
  {
    id: 6,
    title: "PAN Card",
    description: "Permanent Account Number for tax identification",
    icon: Shield,
    document: "PAN_Card_Certificate.pdf",
    isUploaded: false // ✅ Not uploaded, no 404 now
  }
];

const Certifications = () => {
  const handleDownload = (cert: typeof certifications[0]) => {
    if (cert.isUploaded) {
      const fileURL = `/${cert.document}`;
      window.open(fileURL, '_blank');
    } else {
      toast.warning("Document not yet uploaded", {
        description: `"${cert.title}" will be available soon.`,
        duration: 5000,
        action: {
          label: 'OK',
          onClick: () => {},
        },
      });
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-[#eef4fa] to-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#005BA1] mb-4">Certifications & Registrations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These credentials reflect our unwavering commitment to transparency, legality, and excellence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative group w-72 h-72 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 bg-white backdrop-blur-md border border-gray-200">
                  <Card className="w-full h-full rounded-full bg-opacity-60 flex flex-col items-center justify-center text-center border-none bg-white">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#005BA1] to-blue-600 flex items-center justify-center mb-3 shadow-md">
                      <Icon className="text-white h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#005BA1] px-4">{cert.title}</h3>
                    <p className="text-sm text-gray-600 px-6 mt-2">{cert.description}</p>
                  </Card>

                  {/* Hover Overlay */}
                  <div
                    onClick={() => handleDownload(cert)}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <Eye className="text-white h-10 w-10" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;



