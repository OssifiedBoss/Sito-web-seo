import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Navigation.css';

function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('home');
    }
  };

  const handleContactClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('contacts');
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">Cristian Crivello</Link>
        </div>

        <div className="nav-links">
          <Link to="/" onClick={handleHomeClick} className="nav-link">
            {t.nav.home}
          </Link>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="nav-link dropdown-toggle">
              {t.nav.services}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
                style={{ marginLeft: '4px', transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
              >
                <path d="M6 9L1 4h10z"/>
              </svg>
            </button>

            {isServicesOpen && (
              <div className="dropdown-menu">
                <Link to="/seo" className="dropdown-item" onClick={() => setIsServicesOpen(false)}>
                  🔍 {t.nav.seo}
                </Link>
                <Link to="/wordpress" className="dropdown-item" onClick={() => setIsServicesOpen(false)}>
                  ⚙️ {t.nav.wordpress}
                </Link>
                <Link to="/google-analytics" className="dropdown-item" onClick={() => setIsServicesOpen(false)}>
                  📊 {t.nav.analytics}
                </Link>
                <Link to="/google-search-console" className="dropdown-item" onClick={() => setIsServicesOpen(false)}>
                  🔎 {t.nav.searchConsole}
                </Link>
                <Link to="/seo-web3" className="dropdown-item" onClick={() => setIsServicesOpen(false)}>
                  🚀 {t.nav.web3}
                </Link>
              </div>
            )}
          </div>

          <Link to="/#contacts" onClick={handleContactClick} className="nav-link">
            {t.nav.contacts}
          </Link>

          <a
            href="https://www.linkedin.com/in/cristian-crivello"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <button onClick={toggleLanguage} className="language-switcher">
            <span className={language === 'it' ? 'active' : ''}>IT</span>
            <span className="separator">|</span>
            <span className={language === 'en' ? 'active' : ''}>EN</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
