'use client'
import Navigation from '@/components/Navigation'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function ServicePageTemplate({ content }) {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '70px' }}>

        {/* Hero */}
        <section style={{
          background: `linear-gradient(135deg, var(--color-azure) 0%, var(--color-azure-dark) 100%)`,
          color: '#fff', padding: '6rem 2rem',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              {content.title}
            </h1>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '400', opacity: 0.9, marginBottom: '1.5rem' }}>
              {content.subtitle}
            </h2>
            <p style={{ fontSize: '1.05rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
              {content.description}
            </p>
            <a href="#contacts" style={{
              display: 'inline-block', background: '#fff',
              color: 'var(--color-azure)', padding: '14px 32px',
              borderRadius: '50px', fontWeight: '700', fontSize: '1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transition: 'all 0.2s',
            }}>
              Richiedi Consulenza Gratuita
            </a>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

            {/* Intro */}
            <p style={{
              fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text-secondary)',
              textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem',
            }}>
              {content.intro}
            </p>

            {/* Services grid */}
            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '2rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
              {content.servicesTitle}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
              {content.services.map((s, i) => (
                <div key={i} style={{
                  background: 'var(--color-bg-secondary)', padding: '1.75rem',
                  borderRadius: '12px', border: '1px solid var(--color-neutral-200)',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(53,125,249,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-azure)', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>{s.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '2rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
              {content.benefitsTitle}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
              {content.benefits.map((b, i) => (
                <div key={i} style={{
                  padding: '1.25rem 1.5rem',
                  background: 'var(--color-azure-light)',
                  borderLeft: '4px solid var(--color-azure)',
                  borderRadius: '8px',
                  fontSize: '0.95rem', color: 'var(--color-text)',
                  lineHeight: '1.6',
                }}>
                  {b}
                </div>
              ))}
            </div>

            {/* Process */}
            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '2rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
              Il Mio Processo
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '750px', margin: '0 auto' }}>
              {content.process.map((p, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                  background: '#fff', border: '1px solid var(--color-neutral-200)',
                  borderRadius: '12px', padding: '1.5rem',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-azure)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-neutral-200)'}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'var(--color-azure)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '700', fontSize: '0.9rem', flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{p.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
