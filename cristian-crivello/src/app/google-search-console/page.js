import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Google Search Console | Monitoring e Ottimizzazione | Cristian Crivello',
  description: 'Gestione professionale Google Search Console. Monitoraggio performance, risoluzione errori di indicizzazione, ottimizzazione visibilità organica.',
}

const content = {
  title: 'Google Search Console',
  subtitle: 'Monitoring, Indexing & Performance Ottimization',
  description: 'Il tuo sito è invisibile su Google? Scopriamo perché e lo sistemiamo — con i dati diretti da Google.',
  intro: 'Google Search Console è la finestra diretta su come Google vede il tuo sito. Errori di indicizzazione, pagine escluse, performance query — la maggior parte dei siti ha problemi nascosti qui che costano posizioni ogni giorno. Li trovo e li risolvo.',
  servicesTitle: 'Cosa include il servizio Search Console',
  services: [
    { title: '🔗 Verifica e Setup', description: 'Verifica del sito, configurazione proprietà, collegamento con GA4 e Bing Webmaster Tools.' },
    { title: '🕷️ Analisi Crawling', description: 'Verifica del budget di crawl, file robots.txt, sitemap XML. Mi assicuro che Google possa esplorare tutto correttamente.' },
    { title: '📋 Risoluzione Errori', description: 'Identificazione e fix di errori 404, redirect chains, problemi di indicizzazione, pagine escluse ingiustamente.' },
    { title: '📊 Performance Report', description: 'Analisi CTR, impressioni, posizione media per query e pagine. Identifico opportunità nascoste.' },
    { title: '🏗️ Core Web Vitals', description: 'Analisi e ottimizzazione dei segnali di esperienza pagina: LCP, FID, CLS per il ranking.' },
    { title: '🔍 Ottimizzazione CTR', description: 'Miglioramento title e description per aumentare i click dalla SERP senza cambiare posizione.' },
  ],
  benefitsTitle: 'Perché monitorare Search Console?',
  benefits: [
    'Individuazione immediata di problemi che bloccano il ranking',
    'Dati diretti da Google — la fonte più affidabile',
    'Scoperta di keyword per cui già sei visibile ma non ottimizzato',
    'Prevenzione di penalizzazioni algoritmiche',
    'Velocità di indicizzazione dei nuovi contenuti',
    'Comprensione di come Google interpreta il tuo sito',
  ],
  process: [
    { title: 'Setup e verifica', description: 'Configuro o verifico la proprietà Search Console e la collego a GA4 e altri strumenti.' },
    { title: 'Audit indicizzazione', description: 'Analizzo quali pagine sono indicizzate, quali escluse e perché. Piena visibilità sullo stato del sito.' },
    { title: 'Risoluzione problemi', description: 'Fix degli errori prioritari: da problemi tecnici di crawling a errori di structured data.' },
    { title: 'Analisi performance', description: 'Studio delle query, identificazione opportunità di miglioramento CTR e posizionamento.' },
    { title: 'Monitoring continuativo', description: 'Setup di alert per nuovi problemi e review periodica dei dati per cogliere ogni opportunità.' },
  ],
}

export default function GoogleSearchConsolePage() {
  return <ServicePageTemplate content={content} />
}
