'use client';

import { Card } from '@/components/ui/card';
import { Award, FileText, Shield, CheckCircle, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const { t } = useTranslation();

  const certifications = [
    {
      id: 1,
      titleKey: "iso9001Title",
      descKey: "iso9001Desc",
      icon: Award,
      document: "ISO_9001_2015_Certificate.pdf",
      isUploaded: true
    },
    {
      id: 2,
      titleKey: "gstTitle",
      descKey: "gstDesc",
      icon: FileText,
      document: "GST_Registration_Certificate.pdf",
      isUploaded: false
    },
    {
      id: 3,
      titleKey: "incorporationTitle",
      descKey: "incorporationDesc",
      icon: Shield,
      document: "Company_Incorporation_Certificate.pdf",
      isUploaded: true
    },
    {
      id: 4,
      titleKey: "msmeTitle",
      descKey: "msmeDesc",
      icon: CheckCircle,
      document: "MSME_Registration_Certificate.pdf",
      isUploaded: true
    },
    {
      id: 5,
      titleKey: "tradeLicenseTitle",
      descKey: "tradeLicenseDesc",
      icon: FileText,
      document: "Trade_License_Certificate.pdf",
      isUploaded: false
    },
    {
      id: 6,
      titleKey: "panTitle",
      descKey: "panDesc",
      icon: Shield,
      document: "PAN_Card_Certificate.pdf",
      isUploaded: false
    }
  ];

  const handleDownload = (cert: typeof certifications[0]) => {
    if (cert.isUploaded) {
      const fileURL = `/${cert.document}`;
      window.open(fileURL, '_blank');
    } else {
      toast.warning(t('documentNotUploaded'), {
        description: `"${t(cert.titleKey)}" ${t('documentAvailableSoon')}`,
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
          <h2 className="text-5xl font-extrabold mb-5 text-gray-900 leading-tight">
            {t('certificationsTitle')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              {t('registrations')}
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('certificationsSubtitle')}
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
                    <h3 className="text-lg font-semibold text-[#005BA1] px-4">{t(cert.titleKey)}</h3>
                    <p className="text-sm text-gray-600 px-6 mt-2">{t(cert.descKey)}</p>
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



