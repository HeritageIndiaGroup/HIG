
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Globe, Target } from 'lucide-react';

const Hero = () => {
  const scrollToCompanies = () => {
    const companiesSection = document.getElementById('companies');
    if (companiesSection) {
      companiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Heritage India
                <span className="block text-yellow-400">Group</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Building tomorrow's legacy through innovation, tradition, and excellence. 
                A diversified conglomerate shaping India's future across multiple industries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToCompanies}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Companies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">Trust</div>
                <div className="text-blue-200 text-sm">& Excellence</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">11</div>
                <div className="text-blue-200 text-sm">Companies</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Target className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">Vision</div>
                <div className="text-blue-200 text-sm">& Innovation</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                alt="Heritage India Group"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
