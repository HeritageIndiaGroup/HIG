
import { Users, Target, Award, TrendingUp, Heart, Shield, Globe, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Heritage",
      description: "Honoring our rich cultural legacy while building for the future"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Conducting business with the highest ethical standards"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and creative solutions"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to environmental responsibility and social impact"
    }
  ];

  const stats = [
    { icon: TrendingUp, number: "₹5,000+ Cr", label: "Annual Revenue" },
    { icon: Users, number: "10,000+", label: "Employees" },
    { icon: Award, number: "50+", label: "Industry Awards" },
    { icon: Target, number: "12", label: "Business Sectors" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Heritage India Group</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of excellence spanning over two decades, building India's future through 
            innovation, integrity, and unwavering commitment to quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-blue-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 1998, Heritage India Group began as a single construction company with a vision 
                to contribute to India's infrastructure development. Over the years, we have grown into a 
                diversified conglomerate with 12 companies spanning multiple industries.
              </p>
              <p>
                Our journey reflects India's own growth story - from traditional industries to modern 
                technology-driven sectors. Today, we employ over 10,000 people across the country and 
                continue to expand our footprint in emerging markets.
              </p>
              <p>
                What sets us apart is our commitment to combining traditional Indian values with modern 
                business practices, creating sustainable value for all our stakeholders.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
              alt="Heritage India Group Office"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <CardContent className="space-y-4">
              <Target className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="leading-relaxed text-blue-100">
                To be India's most respected and trusted business conglomerate, creating sustainable 
                value for all stakeholders while contributing to the nation's economic growth and 
                social development.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardContent className="space-y-4">
              <Award className="h-12 w-12 text-white mb-4" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="leading-relaxed">
                To deliver excellence in every sector we operate, fostering innovation, maintaining 
                the highest standards of quality, and building lasting relationships with our customers, 
                partners, and communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                  <CardContent className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-900" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-900">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
