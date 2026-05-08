import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'SEO Web3 | Crypto NFT DeFi SEO | Cristian Crivello',
  description: 'SEO specializzata per progetti Web3, crypto, NFT e DeFi. Visibilità organica in un mercato che la maggior parte degli esperti SEO non capisce.',
}

const content = {
  title: 'SEO Web3',
  subtitle: 'Visibilità Organica per Crypto, NFT e DeFi',
  description: 'Il Web3 ha regole diverse. Ho studiato questo ecosistema — e so come portarti traffico organico qualificato.',
  intro: "Il mercato Web3 è enorme, rumoroso e difficile da navigare. La maggior parte degli esperti SEO tradizionali non capisce il settore. Io sì: comprendo blockchain, DeFi, NFT e token economics. Questa comprensione profonda si traduce in strategie SEO che funzionano davvero per i progetti crypto.",
  servicesTitle: 'Cosa include la SEO Web3',
  services: [
    { title: '🚀 Keyword Research Web3', description: 'Ricerca keyword specifica per il settore: terminologia crypto, DeFi, NFT. Intercetto il pubblico giusto nei momenti giusti.' },
    { title: '📝 Content Strategy', description: 'Contenuti educativi e informativi che convertono: guide, analisi, confronti. Il pubblico Web3 è esigente — devi meritarti la sua fiducia.' },
    { title: '🔗 Link Building Crypto', description: 'Backlink da media crypto, blog di settore, community. Network specifico per il mondo Web3.' },
    { title: '⚙️ SEO Tecnica', description: 'Ottimizzazione tecnica pensata per siti Web3: velocità, sicurezza, structured data per token e protocol.' },
    { title: '🌐 Community SEO', description: 'Strategia di presenza organica su Reddit, forum crypto, Discord — dove vive davvero la community Web3.' },
    { title: '📊 Analytics Web3', description: 'Setup tracking specifico per conversioni Web3: wallet connect, transazioni, acquisizione holder.' },
  ],
  benefitsTitle: 'Perché la SEO Web3 è diversa?',
  benefits: [
    'Il pubblico crypto cerca informazioni approfondite — non si accontenta',
    'La SEO funziona 24/7 anche quando il mercato dorme',
    'Costruisce credibilità nel lungo periodo — fondamentale nel Web3',
    'Traffico organico converte meglio dei banner crypto',
    'Permette di raggiungere investitori retail e istituzionali',
    'Differenziazione reale in un mercato pieno di rumore',
  ],
  process: [
    { title: 'Analisi del progetto e mercato', description: 'Studio approfondito del tuo progetto Web3, del target e del panorama competitivo nel settore.' },
    { title: 'Keyword e content strategy', description: 'Identifico le keyword più preziose e costruisco un piano editoriale basato su dati e comprensione del settore.' },
    { title: 'Ottimizzazione tecnica', description: 'SEO tecnica completa con attenzione alle specificità dei siti Web3: sicurezza, performance, structured data.' },
    { title: 'Contenuto e authority', description: 'Produzione o supervisione di contenuti ad alto valore e campagna link building nel network crypto.' },
    { title: 'Monitoring e ottimizzazione', description: 'Tracking continuo dei risultati con adattamento rapido alle evoluzioni del mercato crypto.' },
  ],
}

export default function SeoWeb3Page() {
  return <ServicePageTemplate content={content} />
}
