'use client'
import Link from 'next/link'

const services = [
  {
    emoji: '🔍',
    title: 'SEO',
    description: 'Ottimizzazione tecnica, on-page e off-page. Analisi keyword, competitor e implementazioni che portano traffico qualificato.',
    href: '/seo',
    color: '#357df9',
  },
  {
    emoji: '🤖',
    title: 'GEO / AEO',
    description: "Ottimizzazione per AI Search (ChatGPT, Perplexity, Gemini). Il futuro della search è qui — ti ci porto prima degli altri.",
    href: '/geo-aeo',
    color: '#6366F1',
    badge: '⚡ AI Search',
  },
  {
    emoji: '📊',
    title: 'Google Analytics',
    description: 'Setup GA4, tracking conversioni, dashboard personalizzate. Trasforma i dati in decisioni di business concrete.',
    href: '/google-analytics',
    color: '#357df9',
  },
  {
    emoji: '🔎',
    title: 'Search Console',
    description: 'Monitoring, risoluzione errori, gestione indicizzazione. Massimizza la tua visibilità su Google.',
    href: '/google-search-console',
    color: '#6366F1',
  },
  {
    emoji: '🚀',
    title: 'SEO Web3',
    description: "Visibilità organica per progetti crypto, NFT, DeFi. SEO per un mercato che la maggior parte degli esperti non capisce.",
    href: '/seo-web3',
    color: '#EF9F27',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '6rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: '700', color: '#0f172a',
            marginBottom: '1rem', letterSpacing: '-0.02em',
          }}>
            Cosa faccio per te
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', maxWidth: '540px', margin: '0 auto', lineHeight: '1.7' }}>
            Non "soluzioni SEO innovative". Strategie misurabili con risultati in 90 giorni.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map(s => (
            <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '2rem',
                background: '#fff',
                border: '1px solid var(--color-neutral-200)',
                borderRadius: '16px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 12px 40px rgba(53,125,249,0.12)`
                  e.currentTarget.style.borderColor = s.color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'var(--color-neutral-200)'
                }}>

                {s.badge && (
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'var(--color-amber)', color: '#412402',
                    fontSize: '0.7rem', fontWeight: '700',
                    padding: '3px 10px', borderRadius: '50px',
                  }}>
                    {s.badge}
                  </div>
                )}

                <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{s.emoji}</div>
                <h3 style={{
                  fontSize: '1.25rem', fontWeight: '600',
                  color: '#0f172a', marginBottom: '0.75rem',
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem', color: 'var(--color-text-secondary)',
                  lineHeight: '1.65', marginBottom: '1.25rem',
                }}>
                  {s.description}
                </p>
                <span style={{
                  fontSize: '0.875rem', color: s.color,
                  fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px',
                }}>
                  Scopri →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
