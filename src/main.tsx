import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'

// Initialize saved language preference
const savedLanguage = localStorage.getItem('language');
if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
  import('./i18n').then((i18n) => {
    i18n.default.changeLanguage(savedLanguage);
  });
}

createRoot(document.getElementById("root")!).render(<App />);
