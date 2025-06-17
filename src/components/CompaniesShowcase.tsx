
import { ExternalLink, Building2, Users, GraduationCap, Hotel, Hammer, Film, Home, CreditCard, ShoppingCart, Truck, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const companies = [
  {
    id: 1,
    name: "Heritage India Agro Producer Company Limited",
    description: "Agricultural production and farming solutions for sustainable growth",
    icon: Building2,
    website: "https://heritage-agro.com",
    category: "Agriculture"
  },
  {
    id: 2,
    name: "Heritage India Micro Services Foundation",
    description: "Micro services and community development initiatives",
    icon: Users,
    website: "https://heritage-microservices.com",
    category: "Services"
  },
  {
    id: 3,
    name: "Heritage Media and Education Private Limited",
    description: "Educational services and media solutions",
    icon: GraduationCap,
    website: "https://heritage-media-education.com",
    category: "Education & Media"
  },
  {
    id: 4,
    name: "Heritage India Hotel & Resort Private Limited",
    description: "Hospitality services and luxury resort experiences",
    icon: Hotel,
    website: "https://heritage-hotels.com",
    category: "Hospitality"
  },
  {
    id: 5,
    name: "Heritage India Infra Venture Private Limited",
    description: "Infrastructure development and construction ventures",
    icon: Hammer,
    website: "https://heritage-infra.com",
    category: "Infrastructure"
  },
  {
    id: 6,
    name: "Heritage India Film Production Private Limited",
    description: "Film production and entertainment industry services",
    icon: Film,
    website: "https://heritage-films.com",
    category: "Entertainment"
  },
  {
    id: 7,
    name: "KashiKendarnath",
    description: "Specialized services and spiritual tourism solutions",
    icon: Home,
    website: "https://kashikendarnath.com",
    category: "Tourism"
  },
  {
    id: 8,
    name: "Heritage Finance",
    description: "Financial services and investment solutions",
    icon: CreditCard,
    website: "https://heritage-finance.com",
    category: "Finance"
  },
  {
    id: 9,
    name: "Heritage Mart",
    description: "Retail and consumer goods marketplace",
    icon: ShoppingCart,
    website: "https://heritage-mart.com",
    category: "Retail"
  },
  {
    id: 10,
    name: "Dasandas Traders",
    description: "Trading and distribution services",
    icon: Truck,
    website: "https://dasandas-traders.com",
    category: "Trading"
  },
  {
    id: 11,
    name: "Glam Factory",
    description: "Beauty and lifestyle products and services",
    icon: Sparkles,
    website: "https://glamfactory.com",
    category: "Beauty & Lifestyle"
  }
];

const CompaniesShowcase = () => {
  return (
    <section id="companies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Companies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse portfolio of companies under Heritage India Group, 
            each excelling in their respective industries and contributing to India's growth story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {companies.map((company) => {
            const IconComponent = company.icon;
            return (
              <Card key={company.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                    {company.name}
                  </CardTitle>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {company.category}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {company.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-900 group-hover:text-white transition-all duration-300"
                    onClick={() => window.open(company.website, '_blank')}
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompaniesShowcase;
