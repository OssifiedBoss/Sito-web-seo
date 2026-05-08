import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Google Analytics GA4 | Setup e Configurazione | Cristian Crivello',
  description: 'Setup GA4 professionale, tracking conversioni, eventi personalizzati e dashboard su misura. Trasforma i dati in decisioni di business concrete.',
}

const content = {
  title: 'Google Analytics',
  subtitle: 'Setup GA4 & Tracking Conversioni Professionale',
  description: 'Smetti di navigare a vista. Configuro GA4 correttamente e ti mostro cosa sta succedendo davvero sul tuo sito.',
  intro: 'Il 90% dei siti italiani ha Google Analytics installato male. Tag non configurati, conversioni non tracciate, dati inutilizzabili. Configuro GA4 da zero o riparo quello che non funziona — così hai dati su cui puoi davvero basare decisioni.',
  servicesTitle: 'Cosa include il servizio Analytics',
  services: [
    { title: '⚙️ Setup GA4 Completo', description: 'Configurazione da zero: proprietà, stream dati, eventi standard e personalizzati. Fatto bene, non fatto in fretta.' },
    { title: '🎯 Tracking Conversioni', description: 'Definisco e traccio le conversioni che contano per il tuo business: acquisti, lead, chiamate, form, scroll depth.' },
    { title: '🏷️ Google Tag Manager', description: 'Implementazione GTM per gestire tutti i tag senza toccare il codice. Flessibile e scalabile.' },
    { title: '📊 Dashboard Personalizzate', description: 'Report e dashboard su misura in GA4 o Looker Studio. Vedi subito i KPI che ti interessano.' },
    { title: '🔗 Integrazione Search Console', description: 'Collegamento GA4 + Search Console per vedere dati SEO e comportamento utente in un unico posto.' },
    { title: '📈 Analisi e Interpretazione', description: 'Non solo dati — ti spiego cosa significano e quali azioni concrete puoi prendere.' },
  ],
  benefitsTitle: 'Perché è importante GA4 configurato bene?',
  benefits: [
    'Decisioni basate su dati reali, non su impressioni',
    'Identificazione rapida delle pagine che convertono',
    'Comprensione del percorso utente completo',
    'Ottimizzazione del budget marketing con dati precisi',
    'Reportistica automatica che fa risparmiare ore ogni settimana',
    'Base solida per tutte le altre attività di marketing digitale',
  ],
  process: [
    { title: 'Audit della configurazione attuale', description: "Analizzo quello che hai già: cosa funziona, cosa manca, cosa è sbagliato. Report dettagliato dell'audit." },
    { title: 'Piano di implementazione', description: 'Definisco eventi da tracciare, conversioni chiave, struttura GTM e obiettivi di misurazione.' },
    { title: 'Implementazione tecnica', description: 'Setup completo: GA4, GTM, eventi, conversioni. Lavoro direttamente o ti guido passo passo.' },
    { title: 'Test e validazione', description: 'Verifico che tutto funzioni correttamente con GA4 DebugView e strumenti di testing.' },
    { title: 'Dashboard e formazione', description: 'Creo le dashboard che ti servono e ti mostro come leggere i dati che contano.' },
  ],
}

export default function GoogleAnalyticsPage() {
  return <ServicePageTemplate content={content} />
}
