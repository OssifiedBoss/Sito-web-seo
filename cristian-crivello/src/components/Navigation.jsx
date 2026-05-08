'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const services = [
  { label: 'SEO', href: '/seo', emoji: '🔍' },
  { label: 'GEO / AEO', href: '/geo-aeo', emoji: '🤖' },
  { label: 'Google Analytics', href: '/google-analytics', emoji: '📊' },
  { label: 'Google Search Console', href: '/google-search-console', emoji: '🔎' },
  { label: 'Web3 SEO', href: '/seo-web3', emoji: '🚀' },
]

export default function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0.875rem 0',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--color-neutral-200)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '6px',
            background: 'var(--color-azure)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', position: 'relative', flexShrink: 0,
          }}>
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '18px', fontFamily: 'Inter, sans-serif' }}>C</span>
            <div style={{
              position: 'absolute', bottom: '4px', right: '4px',
              width: '6px', height: '6px', borderRadius: '1px',
              background: 'var(--color-amber)',
            }} />
          </div>
          <span style={{ fontWeight: '600', fontSize: '15px', color: 'var(--color-azure)', fontFamily: 'Inter, sans-serif' }}>
            Cristian Lorenzo Crivello
          </span>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          <Link href="/" style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: '500', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--color-azure)'}
            onMouseLeave={e => e.target.style.color = 'var(--color-text)'}>
            Home
          </Link>

          {/* Dropdown servizi */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: '500',
              fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: '4px',
              padding: 0,
            }}>
              Servizi
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"
                style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                <path d="M6 9L1 4h10z"/>
              </svg>
            </button>

            {servicesOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
                transform: 'translateX(-50%)', background: '#fff',
                borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                minWidth: '220px', padding: '8px 0',
                border: '1px solid var(--color-neutral-200)',
              }}>
                {services.map(s => (
                  <Link key={s.href} href={s.href}
                    onClick={() => setServicesOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '10px 16px', color: 'var(--color-text)',
                      fontSize: '0.9rem', transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-azure-light)'; e.currentTarget.style.color = 'var(--color-azure)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text)' }}>
                    {s.emoji} {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="#contacts"
            style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: '500' }}
            onMouseEnter={e => e.target.style.color = 'var(--color-azure)'}
            onMouseLeave={e => e.target.style.color = 'var(--color-text)'}>
            Contatti
          </a>

          <a href="https://www.linkedin.com/in/cristiancrivello" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--color-azure)'}
            onMouseLeave={e => e.target.style.color = 'var(--color-text-secondary)'}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <a href="#contacts" style={{
            background: 'var(--color-azure)', color: '#fff',
            padding: '8px 20px', borderRadius: '50px',
            fontSize: '0.875rem', fontWeight: '600',
            transition: 'all 0.2s', whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => { e.target.style.background = 'var(--color-azure-dark)'; e.target.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.target.style.background = 'var(--color-azure)'; e.target.style.transform = 'translateY(0)' }}>
            Consulenza Gratuita
          </a>
        </div>
      </div>
    </nav>
  )
}
