'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#0f172a', color: '#94a3b8',
      padding: '3rem 2rem', fontSize: '0.875rem',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '5px',
            background: '#357df9', display: 'flex',
            alignItems: 'center', justifyContent: 'center', position: 'relative',
          }}>
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '14px' }}>C</span>
            <div style={{
              position: 'absolute', bottom: '3px', right: '3px',
              width: '5px', height: '5px', borderRadius: '1px',
              background: '#EF9F27',
            }} />
          </div>
          <span style={{ color: '#e2e8f0', fontWeight: '500' }}>Cristian Lorenzo Crivello</span>
        </div>

        <p style={{ color: '#475569', fontSize: '0.8rem' }}>
          Turn search into revenue · © {new Date().getFullYear()}
        </p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://www.linkedin.com/in/cristiancrivello" target="_blank" rel="noopener noreferrer"
            style={{ color: '#94a3b8', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#357df9'}
            onMouseLeave={e => e.target.style.color = '#94a3b8'}>
            LinkedIn
          </a>
          <Link href="/seo" style={{ color: '#94a3b8' }}
            onMouseEnter={e => e.target.style.color = '#357df9'}
            onMouseLeave={e => e.target.style.color = '#94a3b8'}>
            SEO
          </Link>
          <Link href="/geo-aeo" style={{ color: '#94a3b8' }}
            onMouseEnter={e => e.target.style.color = '#357df9'}
            onMouseLeave={e => e.target.style.color = '#94a3b8'}>
            GEO/AEO
          </Link>
        </div>
      </div>
    </footer>
  )
}
