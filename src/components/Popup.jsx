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
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
            {t('inquiryTitle')}
          </h2>
          <p className="text-gray-600 text-sm text-center">
            {t('inquiryDescription')}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">{renderLabel(User, `${t('fullName')} *`)}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={t('fullName')}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">{renderLabel(Mail, `${t('email')} *`)}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder={t('email')}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">{renderLabel(Phone, `${t('phoneNumber')} *`)}</Label>
              <Input
                id="phone"
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder={t('phoneNumber')}
                required
              />
            </div>

            <div>
              <Label>{renderLabel(Building2, `${t('selectCompany')} *`)}</Label>
              <Select
                value={formData.company}
                onValueChange={(value) => handleInputChange('company', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('selectCompany')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">{t('generalInquiry')}</SelectItem>
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
            <Label htmlFor="subject">{renderLabel(FileText, `${t('message')} *`)}</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              placeholder={t('message')}
              required
            />
          </div>

          <div>
            <Label htmlFor="message">{renderLabel(MessageCircle, `${t('message')} *`)}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={t('message')}
              required
              rows={4}
            />
          </div>

          <div>
            <Label className="mb-1 block">{t('preferredContact')}</Label>
            <RadioGroup
              value={formData.contactMethod}
              onValueChange={(value) => handleInputChange('contactMethod', value)}
              className="flex flex-row gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-contact" />
                <Label htmlFor="email-contact">{t('emailOption')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone-contact" />
                <Label htmlFor="phone-contact">{t('phoneOption')}</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full bg-blue-900 text-white hover:bg-blue-800 text-lg">
            {t('submit')} <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
