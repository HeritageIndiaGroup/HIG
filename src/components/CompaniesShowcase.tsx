
import { ExternalLink, Building2, Factory, Truck, Heart, Home, Zap, Leaf, ShoppingBag, GraduationCap, Plane, Utensils, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const companies = [
  {
    id: 1,
    name: "Heritage Construction",
    description: "Leading construction and infrastructure development company",
    icon: Building2,
    website: "https://heritage-construction.com",
    category: "Construction"
  },
  {
    id: 2,
    name: "Heritage Manufacturing",
    description: "Advanced manufacturing solutions and industrial equipment",
    icon: Factory,
    website: "https://heritage-manufacturing.com",
    category: "Manufacturing"
  },
  {
    id: 3,
    name: "Heritage Logistics",
    description: "Comprehensive logistics and supply chain management",
    icon: Truck,
    website: "https://heritage-logistics.com",
    category: "Logistics"
  },
  {
    id: 4,
    name: "Heritage Healthcare",
    description: "Quality healthcare services and medical facilities",
    icon: Heart,
    website: "https://heritage-healthcare.com",
    category: "Healthcare"
  },
  {
    id: 5,
    name: "Heritage Real Estate",
    description: "Premium residential and commercial real estate",
    icon: Home,
    website: "https://heritage-realestate.com",
    category: "Real Estate"
  },
  {
    id: 6,
    name: "Heritage Energy",
    description: "Renewable energy solutions and power generation",
    icon: Zap,
    website: "https://heritage-energy.com",
    category: "Energy"
  },
  {
    id: 7,
    name: "Heritage Agriculture",
    description: "Sustainable farming and agricultural technologies",
    icon: Leaf,
    website: "https://heritage-agriculture.com",
    category: "Agriculture"
  },
  {
    id: 8,
    name: "Heritage Retail",
    description: "Modern retail chains and e-commerce platforms",
    icon: ShoppingBag,
    website: "https://heritage-retail.com",
    category: "Retail"
  },
  {
    id: 9,
    name: "Heritage Education",
    description: "Educational institutions and learning solutions",
    icon: GraduationCap,
    website: "https://heritage-education.com",
    category: "Education"
  },
  {
    id: 10,
    name: "Heritage Travel",
    description: "Travel and tourism services across India",
    icon: Plane,
    website: "https://heritage-travel.com",
    category: "Travel"
  },
  {
    id: 11,
    name: "Heritage Foods",
    description: "Food processing and restaurant chain operations",
    icon: Utensils,
    website: "https://heritage-foods.com",
    category: "Food & Beverage"
  },
  {
    id: 12,
    name: "Heritage Security",
    description: "Comprehensive security services and solutions",
    icon: Shield,
    website: "https://heritage-security.com",
    category: "Security"
  }
];

const CompaniesShowcase = () => {
  return (
    <section id="companies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Companies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse portfolio of companies, each excelling in their respective industries 
            and contributing to India's growth story.
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
