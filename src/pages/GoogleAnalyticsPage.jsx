import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';
import './ServicePage.css';

function GoogleAnalyticsPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'it'
      ? 'Consulente Google Analytics | Analisi Dati Web e Tracking Conversioni | Cristian Crivello'
      : 'Google Analytics Consultant | Web Data Analysis & Conversion Tracking | Cristian Crivello';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = language === 'it'
        ? 'Consulente Google Analytics esperto in setup GA4, tracking conversioni, analisi dati web, report personalizzati e ottimizzazione. Trasforma i dati in decisioni strategiche.'
        : 'Google Analytics consultant expert in GA4 setup, conversion tracking, web data analysis, custom reports, and optimization. Transform data into strategic decisions.';
    }
  }, [language]);

  const content = language === 'it' ? {
    hero: {
      title: 'Consulente Google Analytics',
      subtitle: 'Analisi Dati Web e Ottimizzazione delle Conversioni',
      description: 'Trasforma i dati del tuo sito in insight azionabili per crescere il tuo business'
    },
    intro: 'Google Analytics è lo strumento più potente per comprendere il comportamento degli utenti sul tuo sito, ma il 90% delle aziende utilizza solo una frazione delle sue capacità. Come consulente Google Analytics certificato, ti aiuto a configurare tracking avanzato, analizzare i dati e ottimizzare le conversioni basandoti su decisioni data-driven.',
    services: {
      title: 'Servizi Google Analytics Offerti',
      list: [
        {
          title: '📊 Setup GA4 Completo',
          description: 'Configurazione professionale di Google Analytics 4 da zero o migrazione da Universal Analytics. Setup stream, eventi, conversioni e integrazioni.'
        },
        {
          title: '🎯 Tracking Conversioni',
          description: 'Implementazione di tracking avanzato per obiettivi, e-commerce, form, download, scroll depth, video engagement e eventi custom.'
        },
        {
          title: '🔍 Analisi Dati Approfondita',
          description: 'Interpretazione dei dati per identificare trend, opportunità e problemi. Analisi del funnel, bounce rate, session quality e user journey.'
        },
        {
          title: '📈 Report Personalizzati',
          description: 'Creazione di dashboard custom e report automatizzati in Looker Studio. Metriche rilevanti per il tuo business presentate in modo chiaro.'
        },
        {
          title: '🔗 Integrazioni Avanzate',
          description: 'Collegamento di GA4 con Google Ads, Search Console, BigQuery, CRM e altri tool. Data layer implementation e GTM setup.'
        },
        {
          title: '🎓 Formazione e Consulenza',
          description: 'Training personalizzato per il tuo team su GA4, interpretazione metriche, creazione report e decision making basato sui dati.'
        }
      ]
    },
    benefits: {
      title: 'Perché Investire in Google Analytics?',
      list: [
        'Decisioni basate su dati reali, non intuizioni',
        'Identificazione delle fonti di traffico più redditizie',
        'Ottimizzazione del ROI di marketing e advertising',
        'Comprensione profonda del comportamento utenti',
        'Miglioramento continuo delle conversioni',
        'Vantaggio competitivo attraverso data intelligence'
      ]
    },
    process: {
      title: 'Il Mio Processo di Lavoro',
      steps: [
        { title: '1. Audit Setup Esistente', description: 'Verifica della configurazione attuale, identificazione errori e gap nel tracking dei dati' },
        { title: '2. Strategia di Tracking', description: 'Definizione degli obiettivi business e piano di implementazione eventi, conversioni e metriche custom' },
        { title: '3. Implementazione Tecnica', description: 'Setup GA4, Google Tag Manager, data layer, e-commerce tracking e integrazioni con piattaforme' },
        { title: '4. Testing e Validazione', description: 'Verifica accurata del corretto funzionamento di tutti i tracking attraverso debug mode e test' },
        { title: '5. Report e Insights', description: 'Delivery di report mensili con analisi, trend, raccomandazioni strategiche e action plan' }
      ]
    },
    cta: {
      title: 'Pronto a Sfruttare il Potere dei Dati?',
      description: 'Contattami per una consulenza Google Analytics gratuita e scopri come ottimizzare il tracking e le conversioni del tuo sito.',
      button: 'Richiedi Consulenza Gratuita'
    }
  } : {
    hero: {
      title: 'Google Analytics Consultant',
      subtitle: 'Web Data Analysis and Conversion Optimization',
      description: 'Transform your website data into actionable insights to grow your business'
    },
    intro: 'Google Analytics is the most powerful tool for understanding user behavior on your site, but 90% of companies use only a fraction of its capabilities. As a certified Google Analytics consultant, I help you set up advanced tracking, analyze data, and optimize conversions based on data-driven decisions.',
    services: {
      title: 'Google Analytics Services Offered',
      list: [
        {
          title: '📊 Complete GA4 Setup',
          description: 'Professional Google Analytics 4 configuration from scratch or migration from Universal Analytics. Stream setup, events, conversions, and integrations.'
        },
        {
          title: '🎯 Conversion Tracking',
          description: 'Implementation of advanced tracking for goals, e-commerce, forms, downloads, scroll depth, video engagement, and custom events.'
        },
        {
          title: '🔍 In-Depth Data Analysis',
          description: 'Data interpretation to identify trends, opportunities, and issues. Funnel analysis, bounce rate, session quality, and user journey.'
        },
        {
          title: '📈 Custom Reports',
          description: 'Creation of custom dashboards and automated reports in Looker Studio. Relevant metrics for your business presented clearly.'
        },
        {
          title: '🔗 Advanced Integrations',
          description: 'Connection of GA4 with Google Ads, Search Console, BigQuery, CRM, and other tools. Data layer implementation and GTM setup.'
        },
        {
          title: '🎓 Training & Consulting',
          description: 'Personalized training for your team on GA4, metric interpretation, report creation, and data-driven decision making.'
        }
      ]
    },
    benefits: {
      title: 'Why Invest in Google Analytics?',
      list: [
        'Decisions based on real data, not intuition',
        'Identification of most profitable traffic sources',
        'Optimization of marketing and advertising ROI',
        'Deep understanding of user behavior',
        'Continuous conversion improvement',
        'Competitive advantage through data intelligence'
      ]
    },
    process: {
      title: 'My Work Process',
      steps: [
        { title: '1. Existing Setup Audit', description: 'Verification of current configuration, identification of errors and gaps in data tracking' },
        { title: '2. Tracking Strategy', description: 'Definition of business objectives and implementation plan for events, conversions, and custom metrics' },
        { title: '3. Technical Implementation', description: 'GA4 setup, Google Tag Manager, data layer, e-commerce tracking, and platform integrations' },
        { title: '4. Testing & Validation', description: 'Accurate verification of correct tracking functionality through debug mode and testing' },
        { title: '5. Reports & Insights', description: 'Delivery of monthly reports with analysis, trends, strategic recommendations, and action plan' }
      ]
    },
    cta: {
      title: 'Ready to Harness the Power of Data?',
      description: 'Contact me for a free Google Analytics consultation and discover how to optimize tracking and conversions on your site.',
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

export default GoogleAnalyticsPage;
