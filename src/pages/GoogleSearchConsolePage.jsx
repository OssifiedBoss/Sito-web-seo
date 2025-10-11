import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';
import './ServicePage.css';

function GoogleSearchConsolePage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'it'
      ? 'Consulente Google Search Console | Monitoraggio SEO e Indicizzazione | Cristian Crivello'
      : 'Google Search Console Consultant | SEO Monitoring & Indexing | Cristian Crivello';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = language === 'it'
        ? 'Consulente Google Search Console esperto in setup, monitoraggio SEO, risoluzione problemi tecnici, gestione indicizzazione e sitemap. Massimizza la visibilità su Google.'
        : 'Google Search Console consultant expert in setup, SEO monitoring, technical issue resolution, indexing management, and sitemap optimization. Maximize visibility on Google.';
    }
  }, [language]);

  const content = language === 'it' ? {
    hero: {
      title: 'Consulente Google Search Console',
      subtitle: 'Monitoraggio SEO e Ottimizzazione Indicizzazione Google',
      description: 'Massimizza la visibilità del tuo sito su Google con monitoring e ottimizzazione avanzata'
    },
    intro: 'Google Search Console è lo strumento essenziale per monitorare come Google vede e indicizza il tuo sito. Come consulente Search Console specializzato, ti aiuto a identificare e risolvere problemi tecnici SEO, ottimizzare l\'indicizzazione, monitorare performance di ricerca e sfruttare ogni opportunità per migliorare il tuo ranking.',
    services: {
      title: 'Servizi Google Search Console Offerti',
      list: [
        {
          title: '⚙️ Setup e Configurazione',
          description: 'Configurazione completa di Search Console, verifica proprietà, integrazione con Analytics, setup multi-dominio e gestione utenti.'
        },
        {
          title: '🔍 Monitoraggio Performance',
          description: 'Analisi dettagliata di impressioni, click, CTR e posizioni medie. Identificazione keyword opportunità e trend di ricerca.'
        },
        {
          title: '🐛 Risoluzione Problemi Tecnici',
          description: 'Diagnosi e fix di errori di crawling, problemi di indicizzazione, mobile usability issues, Core Web Vitals e structured data errors.'
        },
        {
          title: '📑 Gestione Indicizzazione',
          description: 'Ottimizzazione sitemap XML, robots.txt, gestione URL parameters, richieste di indicizzazione e rimozione URL obsoleti.'
        },
        {
          title: '🔗 Analisi Backlink',
          description: 'Monitoraggio dei link in entrata, identificazione link tossici, analisi anchor text e opportunità di disavow.'
        },
        {
          title: '📊 Report e Alert',
          description: 'Setup di alert automatici per problemi critici, report mensili su salute SEO e raccomandazioni strategiche per migliorare.'
        }
      ]
    },
    benefits: {
      title: 'Perché Usare Google Search Console?',
      list: [
        'Visibilità completa su come Google vede il tuo sito',
        'Identificazione precoce di problemi tecnici SEO',
        'Ottimizzazione dell\'indicizzazione per massimo coverage',
        'Monitoraggio performance di ricerca in tempo reale',
        'Risoluzione rapida di penalizzazioni e errori',
        'Data-driven insights per strategia SEO efficace'
      ]
    },
    process: {
      title: 'Il Mio Processo di Lavoro',
      steps: [
        { title: '1. Setup Iniziale', description: 'Configurazione completa di Search Console, verifica proprietà, integrazione Analytics e setup sitemap' },
        { title: '2. Audit Tecnico', description: 'Analisi approfondita di tutti gli errori, warning e opportunità presenti in Search Console' },
        { title: '3. Fix e Ottimizzazione', description: 'Risoluzione sistematica di problemi di crawling, indicizzazione, mobile usability e performance' },
        { title: '4. Monitoraggio Continuo', description: 'Setup alert automatici e monitoring quotidiano per identificare nuovi problemi tempestivamente' },
        { title: '5. Report Mensili', description: 'Analisi performance di ricerca, progressi su fix tecnici e raccomandazioni per miglioramento continuo' }
      ]
    },
    cta: {
      title: 'Pronto a Ottimizzare la Tua Presenza su Google?',
      description: 'Contattami per una consulenza Search Console gratuita e scopri come risolvere problemi tecnici e migliorare la tua indicizzazione.',
      button: 'Richiedi Consulenza Gratuita'
    }
  } : {
    hero: {
      title: 'Google Search Console Consultant',
      subtitle: 'SEO Monitoring and Google Indexing Optimization',
      description: 'Maximize your site visibility on Google with advanced monitoring and optimization'
    },
    intro: 'Google Search Console is the essential tool for monitoring how Google sees and indexes your site. As a specialized Search Console consultant, I help you identify and resolve technical SEO issues, optimize indexing, monitor search performance, and leverage every opportunity to improve your ranking.',
    services: {
      title: 'Google Search Console Services Offered',
      list: [
        {
          title: '⚙️ Setup & Configuration',
          description: 'Complete Search Console configuration, property verification, Analytics integration, multi-domain setup, and user management.'
        },
        {
          title: '🔍 Performance Monitoring',
          description: 'Detailed analysis of impressions, clicks, CTR, and average positions. Identification of keyword opportunities and search trends.'
        },
        {
          title: '🐛 Technical Issue Resolution',
          description: 'Diagnosis and fix of crawling errors, indexing issues, mobile usability problems, Core Web Vitals, and structured data errors.'
        },
        {
          title: '📑 Indexing Management',
          description: 'XML sitemap optimization, robots.txt, URL parameter handling, indexing requests, and obsolete URL removal.'
        },
        {
          title: '🔗 Backlink Analysis',
          description: 'Monitoring of inbound links, identification of toxic links, anchor text analysis, and disavow opportunities.'
        },
        {
          title: '📊 Reports & Alerts',
          description: 'Setup of automatic alerts for critical issues, monthly reports on SEO health, and strategic recommendations for improvement.'
        }
      ]
    },
    benefits: {
      title: 'Why Use Google Search Console?',
      list: [
        'Complete visibility on how Google sees your site',
        'Early identification of technical SEO issues',
        'Indexing optimization for maximum coverage',
        'Real-time search performance monitoring',
        'Rapid resolution of penalties and errors',
        'Data-driven insights for effective SEO strategy'
      ]
    },
    process: {
      title: 'My Work Process',
      steps: [
        { title: '1. Initial Setup', description: 'Complete Search Console configuration, property verification, Analytics integration, and sitemap setup' },
        { title: '2. Technical Audit', description: 'In-depth analysis of all errors, warnings, and opportunities present in Search Console' },
        { title: '3. Fix & Optimization', description: 'Systematic resolution of crawling, indexing, mobile usability, and performance issues' },
        { title: '4. Continuous Monitoring', description: 'Setup of automatic alerts and daily monitoring to identify new issues promptly' },
        { title: '5. Monthly Reports', description: 'Search performance analysis, progress on technical fixes, and recommendations for continuous improvement' }
      ]
    },
    cta: {
      title: 'Ready to Optimize Your Google Presence?',
      description: 'Contact me for a free Search Console consultation and discover how to resolve technical issues and improve your indexing.',
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

export default GoogleSearchConsolePage;
