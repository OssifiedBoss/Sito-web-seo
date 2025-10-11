import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  it: {
    nav: {
      home: 'Home',
      services: 'Servizi',
      contacts: 'Contatti',
      seo: 'SEO',
      wordpress: 'WordPress',
      analytics: 'Analytics',
      searchConsole: 'Search Console',
      web3: 'Web3 SEO'
    },
    hero: {
      title: 'SEO & Web3 Specialist',
      subtitle: 'Ottimizzazione Avanzata per Progetti Blockchain e Tradizionali',
      description: 'Trasformo la visibilità del tuo progetto in risultati concreti. Dalla SEO tradizionale all\'ottimizzazione Web3, porto la tua presenza online al livello successivo.',
      cta: 'Inizia il Tuo Progetto',
      ctaSubtitle: 'Consulenza gratuita di 30 minuti'
    },
    services: {
      title: 'Servizi Specializzati',
      subtitle: 'Soluzioni su misura per ogni esigenza digitale',
      seo: {
        title: 'SEO',
        description: 'Ottimizzazione completa per i motori di ricerca'
      },
      wordpress: {
        title: 'WordPress',
        description: 'Sviluppo e ottimizzazione siti WordPress'
      },
      analytics: {
        title: 'Google Analytics',
        description: 'Analisi dati e tracking avanzato'
      },
      searchConsole: {
        title: 'Google Search Console',
        description: 'Monitoraggio e ottimizzazione performance'
      },
      web3: {
        title: 'SEO Web3',
        description: 'Visibilità per progetti blockchain e NFT'
      }
    },
    contact: {
      title: 'Parliamo del Tuo Progetto',
      subtitle: 'Raccontami la tua vision, creeremo insieme la strategia perfetta',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      send: 'Invia Richiesta',
      namePlaceholder: 'Il tuo nome',
      emailPlaceholder: 'La tua email',
      messagePlaceholder: 'Parlami del tuo progetto...'
    },
    footer: {
      portfolio: 'Scarica Portfolio',
      linkedin: 'LinkedIn',
      fiverr: 'Fiverr'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      contacts: 'Contact',
      seo: 'SEO',
      wordpress: 'WordPress',
      analytics: 'Analytics',
      searchConsole: 'Search Console',
      web3: 'Web3 SEO'
    },
    hero: {
      title: 'SEO & Web3 Specialist',
      subtitle: 'Advanced Optimization for Blockchain and Traditional Projects',
      description: 'I transform your project visibility into concrete results. From traditional SEO to Web3 optimization, I take your online presence to the next level.',
      cta: 'Start Your Project',
      ctaSubtitle: 'Free 30-minute consultation'
    },
    services: {
      title: 'Specialized Services',
      subtitle: 'Tailored solutions for every digital need',
      seo: {
        title: 'SEO',
        description: 'Complete search engine optimization'
      },
      wordpress: {
        title: 'WordPress',
        description: 'WordPress development and optimization'
      },
      analytics: {
        title: 'Google Analytics',
        description: 'Advanced data analysis and tracking'
      },
      searchConsole: {
        title: 'Google Search Console',
        description: 'Performance monitoring and optimization'
      },
      web3: {
        title: 'Web3 SEO',
        description: 'Visibility for blockchain and NFT projects'
      }
    },
    contact: {
      title: 'Let\'s Talk About Your Project',
      subtitle: 'Share your vision, we\'ll create the perfect strategy together',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Request',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Tell me about your project...'
    },
    footer: {
      portfolio: 'Download Portfolio',
      linkedin: 'LinkedIn',
      fiverr: 'Fiverr'
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('it');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'it' ? 'en' : 'it');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
