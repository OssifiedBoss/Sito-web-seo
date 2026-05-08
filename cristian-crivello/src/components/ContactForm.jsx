'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Integra Formspree o EmailJS
    // Formspree: fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    await new Promise(r => setTimeout(r, 1000))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setLoading(false)
  }

  return (
    <section id="contacts" style={{ padding: '6rem 2rem', background: 'var(--color-bg-secondary)' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: '700', color: '#0f172a',
            marginBottom: '0.75rem', letterSpacing: '-0.02em',
          }}>
            Parliamo del tuo progetto
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
            Raccontami la situazione — rispondo entro 24 ore.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            { name: 'name', label: 'Nome', type: 'text', placeholder: 'Il tuo nome' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'La tua email' },
          ].map(field => (
            <div key={field.name}>
              <label style={{
                display: 'block', fontSize: '0.875rem',
                fontWeight: '500', color: 'var(--color-text)',
                marginBottom: '6px',
              }}>
                {field.label}
              </label>
              <input
                type={field.type}
                value={form[field.name]}
                onChange={e => setForm(p => ({ ...p, [field.name]: e.target.value }))}
                placeholder={field.placeholder}
                required
                style={{
                  width: '100%', padding: '12px 16px',
                  border: '1.5px solid var(--color-neutral-200)',
                  borderRadius: '10px', fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none', transition: 'border-color 0.2s',
                  background: '#fff',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--color-azure)'}
                onBlur={e => e.target.style.borderColor = 'var(--color-neutral-200)'}
              />
            </div>
          ))}

          <div>
            <label style={{
              display: 'block', fontSize: '0.875rem',
              fontWeight: '500', color: 'var(--color-text)', marginBottom: '6px',
            }}>
              Messaggio
            </label>
            <textarea
              value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              placeholder="Raccontami del tuo progetto, del tuo sito, del tuo obiettivo..."
              required rows={5}
              style={{
                width: '100%', padding: '12px 16px',
                border: '1.5px solid var(--color-neutral-200)',
                borderRadius: '10px', fontSize: '0.95rem',
                fontFamily: 'Inter, sans-serif', outline: 'none',
                transition: 'border-color 0.2s', resize: 'vertical',
                background: '#fff',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--color-azure)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-neutral-200)'}
            />
          </div>

          <button
            type="submit" disabled={loading}
            style={{
              background: loading ? '#93b4fb' : 'var(--color-azure)',
              color: '#fff', border: 'none',
              padding: '14px', borderRadius: '10px',
              fontSize: '1rem', fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
              marginTop: '0.5rem',
            }}
          >
            {loading ? 'Invio in corso...' : 'Invia Messaggio'}
          </button>

          {status === 'success' && (
            <div style={{
              background: '#d1fae5', color: '#065f46',
              padding: '12px 16px', borderRadius: '10px',
              fontSize: '0.9rem', fontWeight: '500', textAlign: 'center',
            }}>
              ✅ Messaggio inviato! Ti rispondo entro 24 ore.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
