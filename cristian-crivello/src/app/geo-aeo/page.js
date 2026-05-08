import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'GEO & AEO — Ottimizzazione per AI Search | Cristian Crivello',
  description: 'Ottimizzazione per Generative Engine Optimization e Answer Engine Optimization. Visibilità su ChatGPT, Perplexity, Google SGE e Gemini. Il futuro della search è adesso.',
}

const content = {
  title: 'GEO / AEO',
  subtitle: 'Generative Engine Optimization & Answer Engine Optimization',
  description: "L'AI sta cambiando come le persone cercano. Sei visibile su ChatGPT, Perplexity, Google SGE? Ti ci porto.",
  intro: "Il 40% delle ricerche nei prossimi anni passerà attraverso AI. ChatGPT, Perplexity, Google Gemini — questi sistemi non funzionano come Google tradizionale. Servono strategie diverse. Sono uno dei pochi specialisti in Italia con esperienza reale su GEO e AEO.",
  servicesTitle: 'Cosa include GEO/AEO',
  services: [
    { title: '🤖 GEO Strategy', description: 'Ottimizzazione dei contenuti per essere citati e raccomandati dai motori generativi. Struttura, autorevolezza, format.' },
    { title: '❓ AEO & Featured Snippets', description: 'Posizionamento nelle risposte dirette di Google. Schema markup, FAQ structure, content per position zero.' },
    { title: '📊 Structured Data', description: 'Implementazione schema.org per far capire ai motori AI chi sei, cosa fai, perché sei autorevole.' },
    { title: '✍️ Content per AI', description: 'Riscrittura e ottimizzazione contenuti per soddisfare i criteri E-E-A-T potenziati usati dai sistemi AI.' },
    { title: '🔍 AI Search Monitoring', description: 'Monitoraggio della tua presenza su ChatGPT, Perplexity e Google SGE. Identifichiamo gap e opportunità.' },
    { title: '🏗️ Authority Building', description: 'Costruzione di autorevolezza digitale riconosciuta dagli AI: menzioni, citazioni, fonti, brand signals.' },
  ],
  benefitsTitle: 'Perché GEO/AEO adesso?',
  benefits: [
    'Vantaggio early mover — la competizione è ancora bassa',
    'Visibilità nei nuovi canali dove i tuoi clienti cercano',
    'Complementare alla SEO tradizionale, non alternativa',
    'Posizionamento come fonte autorevole per gli AI',
    "Traffico qualificato da utenti con alta intenzione d'acquisto",
    'Futuro-proof: prepara il sito per come evolverà la search',
  ],
  process: [
    { title: 'AI Visibility Audit', description: 'Verifico come appari (o non appari) su ChatGPT, Perplexity, Google SGE e Gemini.' },
    { title: 'Content Gap Analysis', description: 'Identifico i contenuti che gli AI stanno cercando nel tuo settore e che mancano sul tuo sito.' },
    { title: 'Structured Data Implementation', description: 'Implementazione schema markup avanzato per massimizzare la comprensibilità da parte degli AI.' },
    { title: 'Content Optimization', description: 'Riscrittura e ottimizzazione contenuti per i criteri E-E-A-T e i format preferiti dai motori AI.' },
    { title: 'Monitoring Continuo', description: 'Tracking della presenza sui principali sistemi AI e ottimizzazione continua basata sui risultati.' },
  ],
}

export default function GeoAeoPage() {
  return <ServicePageTemplate content={content} />
}
