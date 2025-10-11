import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ContactForm.css';

function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulazione invio form - sostituisci con la tua logica di backend
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form data:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">{t.contact.title}</h2>
        <p className="contact-subtitle">{t.contact.subtitle}</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t.contact.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.namePlaceholder}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t.contact.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.emailPlaceholder}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t.contact.message}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.messagePlaceholder}
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? '...' : t.contact.send}
          </button>

          {submitStatus === 'success' && (
            <div className="status-message success">
              Messaggio inviato con successo!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              Errore nell'invio. Riprova.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
