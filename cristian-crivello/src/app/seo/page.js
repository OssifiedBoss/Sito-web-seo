import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Consulente SEO | Ottimizzazione Motori di Ricerca | Cristian Crivello',
  description: 'Consulente SEO esperto. Analisi keyword, SEO tecnica, on-page e off-page. Risultati misurabili in 90 giorni. Basato a Palermo, lavoro in tutta Italia.',
}

const content = {
  title: 'Consulente SEO',
  subtitle: 'Ottimizzazione Professionale per Motori di Ricerca',
  description: 'Porta il tuo sito ai primi posti su Google con strategie data-driven e implementazioni tecniche concrete.',
  intro: 'Ho analizzato centinaia di siti italiani. Il problema è quasi sempre lo stesso: buoni prodotti o servizi, visibilità zero. La SEO non è magia — è analisi, tecnica e contenuto strategico. Risultati misurabili, non promesse.',
  servicesTitle: 'Cosa include la consulenza SEO',
  services: [
    { title: '🔍 SEO Audit Completo', description: 'Analisi tecnica approfondita: crawlability, indexability, Core Web Vitals, errori 404, redirect chain e tutto ciò che frena il tuo ranking.' },
    { title: '📝 Keyword Research', description: "Identifico le keyword più redditizie per il tuo business. Non solo volume — analisi dell'intento di ricerca e difficoltà reale." },
    { title: '⚙️ SEO Tecnica', description: 'Velocità, struttura URL, schema markup, canonical, hreflang. Tutto ciò che i crawler di Google devono vedere per premiarti.' },
    { title: '📄 SEO On-Page', description: 'Title, meta description, heading H1-H3, internal linking, ottimizzazione contenuti. Ogni pagina conta.' },
    { title: '🔗 Link Building', description: 'Acquisizione backlink di qualità da siti autorevoli. Niente PBN, niente spam — solo link che aumentano davvero la tua autorità.' },
    { title: '📊 Monitoraggio & Report', description: 'Report mensili con dati reali: posizioni, traffico, conversioni. Saprai sempre dove siamo e dove andiamo.' },
  ],
  benefitsTitle: 'Perché investire in SEO?',
  benefits: [
    'Traffico organico sostenibile — non paghi per ogni click',
    'ROI superiore alla pubblicità a pagamento nel lungo periodo',
    'Maggiore credibilità percepita dagli utenti vs gli annunci',
    'Vantaggio competitivo stabile sui concorrenti',
    'Conversioni di qualità superiore da ricerca organica',
    'Asset permanente che cresce nel tempo',
  ],
  process: [
    { title: 'Analisi iniziale', description: 'Studio del tuo sito, dei concorrenti e del mercato. Definisco priorità e opportunità reali.' },
    { title: 'Strategia personalizzata', description: 'Roadmap su misura: cosa fare prima, perché, con quali obiettivi misurabili.' },
    { title: 'Implementazione tecnica', description: 'Eseguo le modifiche direttamente o guido il tuo team con istruzioni precise.' },
    { title: 'Contenuto e link', description: 'Ottimizzazione contenuti esistenti e acquisizione backlink di qualità.' },
    { title: 'Report mensile', description: 'Analisi risultati, aggiustamenti strategici, nuove opportunità identificate.' },
  ],
}

export default function SEOPage() {
  return <ServicePageTemplate content={content} />
}
