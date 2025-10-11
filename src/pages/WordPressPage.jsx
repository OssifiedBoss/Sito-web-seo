import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';
import './ServicePage.css';

function WordPressPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'it'
      ? 'Consulente WordPress Esperto | Sviluppo e Ottimizzazione WordPress | Cristian Crivello'
      : 'Expert WordPress Consultant | WordPress Development & Optimization | Cristian Crivello';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = language === 'it'
        ? 'Consulente WordPress specializzato in sviluppo, ottimizzazione, temi custom, plugin, sicurezza e speed optimization. Trasforma il tuo sito WordPress in una macchina performante.'
        : 'WordPress consultant specialized in development, optimization, custom themes, plugins, security, and speed optimization. Transform your WordPress site into a high-performance machine.';
    }
  }, [language]);

  const content = language === 'it' ? {
    hero: {
      title: 'Consulente WordPress',
      subtitle: 'Sviluppo e Ottimizzazione Professionale WordPress',
      description: 'Trasforma il tuo sito WordPress in una piattaforma veloce, sicura e performante'
    },
    intro: 'WordPress alimenta oltre il 43% dei siti web nel mondo, ma pochi lo sfruttano al massimo delle sue potenzialità. Come consulente WordPress specializzato, ottimizzare il tuo sito per ottenere performance eccellenti, sicurezza massima e un\'esperienza utente superiore.',
    services: {
      title: 'Servizi WordPress Offerti',
      list: [
        {
          title: '⚡ Speed Optimization',
          description: 'Ottimizzazione delle performance per tempi di caricamento sotto i 2 secondi. Caching avanzato, compressione immagini, lazy loading e ottimizzazione database.'
        },
        {
          title: '🎨 Temi Custom',
          description: 'Sviluppo di temi WordPress personalizzati, responsive e ottimizzati per SEO. Design unico che rispecchia la tua identità di brand.'
        },
        {
          title: '🔌 Plugin Development',
          description: 'Creazione di plugin custom per funzionalità specifiche. Integrazione API, automazioni e soluzioni su misura per il tuo business.'
        },
        {
          title: '🔒 Sicurezza WordPress',
          description: 'Hardening completo del sito, protezione da malware, backup automatici, firewall e monitoraggio proattivo delle vulnerabilità.'
        },
        {
          title: '🔧 Manutenzione e Aggiornamenti',
          description: 'Gestione completa di aggiornamenti core, plugin e temi. Monitoraggio continuo, fix bug e supporto tecnico dedicato.'
        },
        {
          title: '🚀 Migrazione WordPress',
          description: 'Migrazione sicura da altre piattaforme o hosting. Zero downtime, preservazione SEO e ottimizzazione post-migrazione.'
        }
      ]
    },
    benefits: {
      title: 'Perché Scegliere un Consulente WordPress?',
      list: [
        'Tempi di caricamento fino al 70% più veloci',
        'Protezione avanzata contro attacchi e malware',
        'Ottimizzazione per Core Web Vitals e SEO',
        'Riduzione dei costi operativi e hosting',
        'Migliore esperienza utente e conversioni',
        'Scalabilità per crescita futura'
      ]
    },
    process: {
      title: 'Il Mio Processo di Lavoro',
      steps: [
        { title: '1. Audit Completo', description: 'Analisi approfondita di performance, sicurezza, codice e configurazione del tuo sito WordPress' },
        { title: '2. Piano di Ottimizzazione', description: 'Strategia personalizzata con priorità, timeline e obiettivi misurabili per il tuo progetto' },
        { title: '3. Implementazione', description: 'Sviluppo e ottimizzazione con testing continuo in ambiente staging prima del deploy' },
        { title: '4. Testing e QA', description: 'Verifica cross-browser, mobile testing e controllo qualità su tutti gli aspetti' },
        { title: '5. Monitoraggio Continuo', description: 'Uptime monitoring, performance tracking e interventi proattivi per mantenere il sito al top' }
      ]
    },
    cta: {
      title: 'Pronto a Potenziare il Tuo Sito WordPress?',
      description: 'Contattami per una consulenza WordPress gratuita e scopri come posso trasformare il tuo sito in una macchina performante.',
      button: 'Richiedi Consulenza Gratuita'
    }
  } : {
    hero: {
      title: 'WordPress Consultant',
      subtitle: 'Professional WordPress Development & Optimization',
      description: 'Transform your WordPress site into a fast, secure, and high-performing platform'
    },
    intro: 'WordPress powers over 43% of websites worldwide, but few leverage its full potential. As a specialized WordPress consultant, I optimize your site for excellent performance, maximum security, and superior user experience.',
    services: {
      title: 'WordPress Services Offered',
      list: [
        {
          title: '⚡ Speed Optimization',
          description: 'Performance optimization for loading times under 2 seconds. Advanced caching, image compression, lazy loading, and database optimization.'
        },
        {
          title: '🎨 Custom Themes',
          description: 'Development of custom, responsive, and SEO-optimized WordPress themes. Unique design that reflects your brand identity.'
        },
        {
          title: '🔌 Plugin Development',
          description: 'Creation of custom plugins for specific functionalities. API integration, automation, and tailored solutions for your business.'
        },
        {
          title: '🔒 WordPress Security',
          description: 'Complete site hardening, malware protection, automated backups, firewall, and proactive vulnerability monitoring.'
        },
        {
          title: '🔧 Maintenance & Updates',
          description: 'Complete management of core, plugin, and theme updates. Continuous monitoring, bug fixes, and dedicated technical support.'
        },
        {
          title: '🚀 WordPress Migration',
          description: 'Safe migration from other platforms or hosting. Zero downtime, SEO preservation, and post-migration optimization.'
        }
      ]
    },
    benefits: {
      title: 'Why Choose a WordPress Consultant?',
      list: [
        'Loading times up to 70% faster',
        'Advanced protection against attacks and malware',
        'Optimization for Core Web Vitals and SEO',
        'Reduced operational and hosting costs',
        'Better user experience and conversions',
        'Scalability for future growth'
      ]
    },
    process: {
      title: 'My Work Process',
      steps: [
        { title: '1. Complete Audit', description: 'In-depth analysis of performance, security, code, and configuration of your WordPress site' },
        { title: '2. Optimization Plan', description: 'Customized strategy with priorities, timeline, and measurable objectives for your project' },
        { title: '3. Implementation', description: 'Development and optimization with continuous testing in staging environment before deployment' },
        { title: '4. Testing & QA', description: 'Cross-browser verification, mobile testing, and quality control on all aspects' },
        { title: '5. Continuous Monitoring', description: 'Uptime monitoring, performance tracking, and proactive interventions to keep the site at peak performance' }
      ]
    },
    cta: {
      title: 'Ready to Power Up Your WordPress Site?',
      description: 'Contact me for a free WordPress consultation and discover how I can transform your site into a high-performance machine.',
      button: 'Request Free Consultation'
    }
  };

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>{content.hero.title}</h1>
          <h2>{content.hero.subtitle}</h2>
          <p>{content.hero.description}</p>
          <Link to="/#contacts" className="cta-button">{content.cta.button}</Link>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="intro-section">
            <p className="intro-text">{content.intro}</p>
          </div>

          <div className="services-offered">
            <h2>{content.services.title}</h2>
            <div className="services-grid">
              {content.services.list.map((service, index) => (
                <div key={index} className="service-item">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="benefits-section">
            <h2>{content.benefits.title}</h2>
            <ul className="benefits-list">
              {content.benefits.list.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="process-section">
            <h2>{content.process.title}</h2>
            <div className="process-steps">
              {content.process.steps.map((step, index) => (
                <div key={index} className="process-step">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="final-cta">
            <h2>{content.cta.title}</h2>
            <p>{content.cta.description}</p>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default WordPressPage;
