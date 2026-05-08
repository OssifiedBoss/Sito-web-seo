'use client'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '7rem 2rem 4rem',
      background: 'linear-gradient(135deg, #f8faff 0%, var(--color-azure-light) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative background circles */}
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(53,125,249,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5rem', flexWrap: 'wrap' }}>

          {/* Text */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--color-azure-light)', borderRadius: '50px',
              padding: '6px 14px', marginBottom: '1.5rem',
              border: '1px solid rgba(53,125,249,0.2)',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-amber)' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--color-azure)', fontWeight: '600', letterSpacing: '0.03em' }}>
                SEO · GEO · AEO Specialist
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: '700',
              color: '#0f172a',
              lineHeight: '1.15',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}>
              Cristian Lorenzo<br />
              <span style={{ color: 'var(--color-azure)' }}>Crivello</span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--color-indigo)',
              marginBottom: '0.75rem',
            }}>
              Turn search into revenue.
            </p>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.75',
              marginBottom: '2rem',
              maxWidth: '520px',
            }}>
              Ho analizzato centinaia di siti italiani. Il problema non è mai la qualità del prodotto — è la visibilità. Risolvo questo, con dati, non con promesse.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#contacts" style={{
                background: 'var(--color-azure)', color: '#fff',
                padding: '14px 32px', borderRadius: '50px',
                fontWeight: '600', fontSize: '1rem',
                boxShadow: '0 4px 20px rgba(53,125,249,0.3)',
                transition: 'all 0.25s', display: 'inline-block',
              }}
                onMouseEnter={e => { e.target.style.background = 'var(--color-azure-dark)'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 28px rgba(53,125,249,0.4)' }}
                onMouseLeave={e => { e.target.style.background = 'var(--color-azure)'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 20px rgba(53,125,249,0.3)' }}>
                Consulenza Gratuita
              </a>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                30 minuti, nessun impegno
              </span>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex', gap: '2rem', marginTop: '2.5rem',
              paddingTop: '2rem', borderTop: '1px solid var(--color-neutral-200)',
              flexWrap: 'wrap',
            }}>
              {[
                { value: '6+', label: 'Clienti attivi' },
                { value: '↑ Top 3', label: 'Posizioni Google' },
                { value: 'GEO/AEO', label: 'AI Search ready' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.375rem', fontWeight: '700', color: 'var(--color-azure)' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image placeholder */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: '260px', height: '260px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--color-azure-light), #dde8ff)',
              border: '4px solid #fff',
              boxShadow: '0 20px 60px rgba(53,125,249,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Sostituisci con: <img src="/profile.jpg" alt="Cristian Lorenzo Crivello" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: 'var(--color-azure)', margin: '0 auto 12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '2rem', fontWeight: '700', color: '#fff' }}>C</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                  Aggiungi foto
                </p>
              </div>
              <div style={{
                position: 'absolute', bottom: '20px', right: '20px',
                width: '16px', height: '16px', borderRadius: '3px',
                background: 'var(--color-amber)',
              }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
