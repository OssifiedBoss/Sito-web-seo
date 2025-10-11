import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';
import './ServicePage.css';

function Web3SEOPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'it'
      ? 'SEO Web3 e Blockchain | Consulente SEO per NFT, Crypto e DeFi | Cristian Crivello'
      : 'Web3 & Blockchain SEO | SEO Consultant for NFT, Crypto & DeFi | Cristian Crivello';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = language === 'it'
        ? 'Consulente SEO Web3 specializzato in progetti blockchain, NFT collections, protocolli DeFi e crypto websites. Fai crescere la tua community Web3 con strategie SEO avanzate.'
        : 'Web3 SEO consultant specialized in blockchain projects, NFT collections, DeFi protocols, and crypto websites. Grow your Web3 community with advanced SEO strategies.';
    }
  }, [language]);

  const content = language === 'it' ? {
    hero: {
      title: 'SEO Web3 e Blockchain',
      subtitle: 'Strategie SEO per Progetti Crypto, NFT e DeFi',
      description: 'Fai crescere la visibilità del tuo progetto Web3 e attira la community giusta'
    },
    intro: 'Il Web3 sta rivoluzionando internet, ma molti progetti blockchain faticano a farsi trovare online. Come consulente SEO specializzato in Web3, aiuto progetti crypto, NFT collections, protocolli DeFi e DAO a massimizzare la loro visibilità organica, attrarre community qualificate e competere in un mercato sempre più affollato.',
    services: {
      title: 'Servizi SEO Web3 Offerti',
      list: [
        {
          title: '🔗 SEO per Progetti Blockchain',
          description: 'Ottimizzazione completa per L1/L2, bridge, wallet e infrastrutture blockchain. Strategia keyword mirata a developer e utenti crypto-native.'
        },
        {
          title: '🎨 SEO per NFT Collections',
          description: 'Posizionamento organico per collezioni NFT, marketplace e piattaforme di minting. Focus su community building e visibilità pre-launch.'
        },
        {
          title: '💰 SEO per Protocolli DeFi',
          description: 'Ottimizzazione per DEX, lending protocols, yield farming platforms e stablecoin. Content strategy per educare e convertire utenti DeFi.'
        },
        {
          title: '📱 SEO per Crypto Websites',
          description: 'Strategia SEO per exchange, wallet providers, analytics platforms e crypto news sites. Competitive analysis nel crypto space.'
        },
        {
          title: '🌐 Community Growth Web3',
          description: 'Strategie integrate SEO + community per Discord, Twitter, Mirror e piattaforme Web3. Social signals e brand building.'
        },
        {
          title: '🔍 Technical SEO Web3',
          description: 'Ottimizzazione per dApps, IPFS content, wallet connect, gas optimization displays e Web3-specific technical challenges.'
        }
      ]
    },
    benefits: {
      title: 'Perché il SEO è Cruciale per Web3?',
      list: [
        'Attrai early adopters e crypto-native users qualificati',
        'Riduci dipendenza da Twitter/Discord per acquisizione',
        'Migliora credibilità e trust nel competitivo spazio crypto',
        'Genera traffico organico sostenibile pre e post-launch',
        'Educa utenti su meccaniche complesse DeFi/NFT',
        'Competitive advantage in un mercato Web3 saturo'
      ]
    },
    process: {
      title: 'Il Mio Processo di Lavoro',
      steps: [
        { title: '1. Crypto Market Research', description: 'Analisi del tuo progetto, competitor Web3, target audience crypto e keyword strategy specifica per blockchain' },
        { title: '2. Web3 Content Strategy', description: 'Creazione roadmap contenuti: documentation, tutorials, tokenomics explanation, use cases e community resources' },
        { title: '3. Technical Implementation', description: 'Ottimizzazione SEO tecnica per dApps, wallet integration, smart contract data display e performance Web3' },
        { title: '4. Community Integration', description: 'Integrazione strategia SEO con growth su Twitter, Discord, Mirror, Lens Protocol e altri canali Web3' },
        { title: '5. Monitoring & Iteration', description: 'Tracking performance organica, community feedback, competitor movements e iterazione strategia basata su data' }
      ]
    },
    cta: {
      title: 'Pronto a Far Crescere il Tuo Progetto Web3?',
      description: 'Contattami per una consulenza SEO Web3 gratuita e scopri come portare il tuo progetto blockchain ai primi posti su Google.',
      button: 'Richiedi Consulenza Gratuita'
    }
  } : {
    hero: {
      title: 'Web3 & Blockchain SEO',
      subtitle: 'SEO Strategies for Crypto, NFT, and DeFi Projects',
      description: 'Grow your Web3 project visibility and attract the right community'
    },
    intro: 'Web3 is revolutionizing the internet, but many blockchain projects struggle to be found online. As an SEO consultant specialized in Web3, I help crypto projects, NFT collections, DeFi protocols, and DAOs maximize their organic visibility, attract qualified communities, and compete in an increasingly crowded market.',
    services: {
      title: 'Web3 SEO Services Offered',
      list: [
        {
          title: '🔗 SEO for Blockchain Projects',
          description: 'Complete optimization for L1/L2, bridges, wallets, and blockchain infrastructure. Keyword strategy targeting developers and crypto-native users.'
        },
        {
          title: '🎨 SEO for NFT Collections',
          description: 'Organic positioning for NFT collections, marketplaces, and minting platforms. Focus on community building and pre-launch visibility.'
        },
        {
          title: '💰 SEO for DeFi Protocols',
          description: 'Optimization for DEX, lending protocols, yield farming platforms, and stablecoins. Content strategy to educate and convert DeFi users.'
        },
        {
          title: '📱 SEO for Crypto Websites',
          description: 'SEO strategy for exchanges, wallet providers, analytics platforms, and crypto news sites. Competitive analysis in the crypto space.'
        },
        {
          title: '🌐 Web3 Community Growth',
          description: 'Integrated SEO + community strategies for Discord, Twitter, Mirror, and Web3 platforms. Social signals and brand building.'
        },
        {
          title: '🔍 Web3 Technical SEO',
          description: 'Optimization for dApps, IPFS content, wallet connect, gas optimization displays, and Web3-specific technical challenges.'
        }
      ]
    },
    benefits: {
      title: 'Why SEO is Crucial for Web3?',
      list: [
        'Attract qualified early adopters and crypto-native users',
        'Reduce dependency on Twitter/Discord for acquisition',
        'Improve credibility and trust in competitive crypto space',
        'Generate sustainable organic traffic pre and post-launch',
        'Educate users on complex DeFi/NFT mechanics',
        'Competitive advantage in saturated Web3 market'
      ]
    },
    process: {
      title: 'My Work Process',
      steps: [
        { title: '1. Crypto Market Research', description: 'Analysis of your project, Web3 competitors, crypto target audience, and blockchain-specific keyword strategy' },
        { title: '2. Web3 Content Strategy', description: 'Content roadmap creation: documentation, tutorials, tokenomics explanation, use cases, and community resources' },
        { title: '3. Technical Implementation', description: 'Technical SEO optimization for dApps, wallet integration, smart contract data display, and Web3 performance' },
        { title: '4. Community Integration', description: 'SEO strategy integration with growth on Twitter, Discord, Mirror, Lens Protocol, and other Web3 channels' },
        { title: '5. Monitoring & Iteration', description: 'Organic performance tracking, community feedback, competitor movements, and data-driven strategy iteration' }
      ]
    },
    cta: {
      title: 'Ready to Grow Your Web3 Project?',
      description: 'Contact me for a free Web3 SEO consultation and discover how to take your blockchain project to the top of Google.',
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

export default Web3SEOPage;
