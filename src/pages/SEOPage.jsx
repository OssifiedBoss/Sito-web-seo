import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';
import './ServicePage.css';

function SEOPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'it'
      ? 'Consulente SEO Professionista | Ottimizzazione Motori di Ricerca | Cristian Crivello'
      : 'Professional SEO Consultant | Search Engine Optimization | Cristian Crivello';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = language === 'it'
        ? 'Consulente SEO esperto in ottimizzazione per motori di ricerca. Aumenta la visibilità del tuo sito, migliora il ranking su Google e genera traffico organico qualificato.'
        : 'Expert SEO consultant specializing in search engine optimization. Increase your website visibility, improve Google rankings, and generate qualified organic traffic.';
    }
  }, [language]);

  const content = language === 'it' ? {
    hero: {
      title: 'Consulente SEO',
      subtitle: 'Ottimizzazione Professionale per Motori di Ricerca',
      description: 'Porta il tuo sito web ai primi posti su Google con strategie SEO comprovate'
    },
    intro: 'La SEO (Search Engine Optimization) è fondamentale per il successo online. Come consulente SEO specializzato, ti aiuto a massimizzare la visibilità del tuo sito web sui motori di ricerca, attirando traffico organico qualificato e aumentando le conversioni.',
    services: {
      title: 'Servizi SEO Offerti',
      list: [
        {
          title: 'Analisi SEO Completa',
          description: 'Audit tecnico approfondito del tuo sito web per identificare opportunità di ottimizzazione e problemi che limitano il ranking.'
        },
        {
          title: 'Ricerca Keyword Strategica',
          description: 'Identifico le parole chiave più redditizie per il tuo business, analizzando volume di ricerca, difficoltà e intento dell\'utente.'
        },
        {
          title: 'SEO On-Page',
          description: 'Ottimizzazione di contenuti, meta tag, struttura URL, heading e internal linking per massimizzare la rilevanza delle pagine.'
        },
        {
          title: 'SEO Tecnica',
          description: 'Miglioramento di velocità, crawlability, indexability, Core Web Vitals e implementazione di schema markup.'
        },
        {
          title: 'Link Building',
          description: 'Strategie di acquisizione backlink di qualità da siti autorevoli per aumentare la domain authority.'
        },
        {
          title: 'Content Strategy',
          description: 'Pianificazione e creazione di contenuti SEO-friendly che rispondono alle esigenze del tuo pubblico target.'
        }
      ]
    },
    benefits: {
      title: 'Perché Investire nella SEO?',
      list: [
        'Traffico organico sostenibile e duraturo nel tempo',
        'ROI superiore rispetto alla pubblicità a pagamento',
        'Maggiore credibilità e autorevolezza nel tuo settore',
        'Vantaggio competitivo sui concorrenti',
        'Aumento della brand awareness',
        'Conversioni di qualità superiore'
      ]
    },
    process: {
      title: 'Il Mio Processo di Lavoro',
      steps: [
        { title: '1. Analisi Iniziale', description: 'Studio approfondito del tuo sito, concorrenti e mercato di riferimento' },
        { title: '2. Strategia Personalizzata', description: 'Creazione di una roadmap SEO su misura per i tuoi obiettivi' },
        { title: '3. Implementazione', description: 'Esecuzione delle ottimizzazioni tecniche e contenutistiche' },
        { title: '4. Monitoraggio', description: 'Tracking costante delle performance e aggiustamenti strategici' },
        { title: '5. Report Mensili', description: 'Documentazione dettagliata dei risultati e progressi ottenuti' }
      ]
    },
    cta: {
      title: 'Pronto a Dominare i Risultati di Ricerca?',
      description: 'Contattami per una consulenza SEO gratuita e scopri come posso aiutarti a raggiungere la prima pagina di Google.',
      button: 'Richiedi Consulenza Gratuita'
    }
  } : {
    hero: {
      title: 'SEO Consultant',
      subtitle: 'Professional Search Engine Optimization',
      description: 'Take your website to the top of Google with proven SEO strategies'
    },
    intro: 'SEO (Search Engine Optimization) is essential for online success. As a specialized SEO consultant, I help you maximize your website visibility on search engines, attracting qualified organic traffic and increasing conversions.',
    services: {
      title: 'SEO Services Offered',
      list: [
        {
          title: 'Complete SEO Analysis',
          description: 'In-depth technical audit of your website to identify optimization opportunities and issues limiting ranking.'
        },
        {
          title: 'Strategic Keyword Research',
          description: 'I identify the most profitable keywords for your business, analyzing search volume, difficulty, and user intent.'
        },
        {
          title: 'On-Page SEO',
          description: 'Optimization of content, meta tags, URL structure, headings, and internal linking to maximize page relevance.'
        },
        {
          title: 'Technical SEO',
          description: 'Improvement of speed, crawlability, indexability, Core Web Vitals, and schema markup implementation.'
        },
        {
          title: 'Link Building',
          description: 'Quality backlink acquisition strategies from authoritative sites to increase domain authority.'
        },
        {
          title: 'Content Strategy',
          description: 'Planning and creation of SEO-friendly content that addresses your target audience needs.'
        }
      ]
    },
    benefits: {
      title: 'Why Invest in SEO?',
      list: [
        'Sustainable and lasting organic traffic',
        'Higher ROI compared to paid advertising',
        'Greater credibility and authority in your industry',
        'Competitive advantage over competitors',
        'Increased brand awareness',
        'Higher quality conversions'
      ]
    },
    process: {
      title: 'My Work Process',
      steps: [
        { title: '1. Initial Analysis', description: 'In-depth study of your site, competitors, and target market' },
        { title: '2. Custom Strategy', description: 'Creation of a tailored SEO roadmap for your goals' },
        { title: '3. Implementation', description: 'Execution of technical and content optimizations' },
        { title: '4. Monitoring', description: 'Constant performance tracking and strategic adjustments' },
        { title: '5. Monthly Reports', description: 'Detailed documentation of results and progress achieved' }
      ]
    },
    cta: {
      title: 'Ready to Dominate Search Results?',
      description: 'Contact me for a free SEO consultation and discover how I can help you reach Google\'s first page.',
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

export default SEOPage;
