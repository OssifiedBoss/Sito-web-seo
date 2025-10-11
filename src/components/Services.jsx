import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: '🔍',
      title: t.services.seo.title,
      description: t.services.seo.description,
      link: '/seo',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '⚙️',
      title: t.services.wordpress.title,
      description: t.services.wordpress.description,
      link: '/wordpress',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '📊',
      title: t.services.analytics.title,
      description: t.services.analytics.description,
      link: '/google-analytics',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '🔎',
      title: t.services.searchConsole.title,
      description: t.services.searchConsole.description,
      link: '/google-search-console',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: '🚀',
      title: t.services.web3.title,
      description: t.services.web3.description,
      link: '/seo-web3',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">{t.services.title}</h2>
          <p className="services-subtitle">{t.services.subtitle}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="service-card"
              style={{ '--card-gradient': service.gradient }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <span className="service-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
