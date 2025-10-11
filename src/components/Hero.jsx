import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

function Hero() {
  const { t } = useLanguage();

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-placeholder">
              {/* Placeholder per l'immagine - puoi aggiungere la tua foto qui */}
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="100" fill="#673de6" opacity="0.1"/>
                <circle cx="100" cy="80" r="40" fill="#673de6" opacity="0.3"/>
                <path d="M40 160 Q100 120 160 160" fill="#673de6" opacity="0.3"/>
              </svg>
            </div>
          </div>

          <div className="hero-text">
            <h1 className="hero-title">Cristian Crivello</h1>
            <h2 className="hero-subtitle">{t.hero.title}</h2>
            <p className="hero-description">{t.hero.subtitle}</p>
            <p className="hero-description-secondary">{t.hero.description}</p>

            <div className="hero-cta-wrapper">
              <button onClick={scrollToContacts} className="hero-cta">
                {t.hero.cta}
              </button>
              <span className="cta-subtitle">{t.hero.ctaSubtitle}</span>
            </div>
          </div>
        </div>

        <div className="hero-links">
          <a
            href="https://www.linkedin.com/in/cristian-crivello"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>

          <a
            href="https://www.fiverr.com/cristiancrivello"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3v18h-22v-18h22zm-2 2h-18v14h18v-14z"/>
            </svg>
            Fiverr
          </a>

          <a
            href="#"
            className="social-link portfolio-link"
            onClick={(e) => {
              e.preventDefault();
              alert('Aggiungi qui il link al tuo portfolio PDF');
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
            {t.footer.portfolio}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
