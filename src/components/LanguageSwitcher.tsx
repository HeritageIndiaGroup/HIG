import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ isSticky = false }: { isSticky?: boolean }) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  const currentLanguage = i18n.language;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${
            isSticky
              ? 'bg-transparent text-black border-black hover:bg-gray-100'
              : 'bg-transparent text-white border-white hover:bg-white/10'
          }`}
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm">
            {currentLanguage === 'hi' ? 'हिंदी' : 'English'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white shadow-xl border border-gray-200 rounded-lg z-50 min-w-[120px]"
      >
        <DropdownMenuItem
          onClick={() => changeLanguage('en')}
          className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm ${
            currentLanguage === 'en' ? 'bg-gray-50 font-medium' : ''
          }`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage('hi')}
          className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm ${
            currentLanguage === 'hi' ? 'bg-gray-50 font-medium' : ''
          }`}
        >
          हिंदी
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;