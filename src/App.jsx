import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SEOPage from './pages/SEOPage';
import WordPressPage from './pages/WordPressPage';
import GoogleAnalyticsPage from './pages/GoogleAnalyticsPage';
import GoogleSearchConsolePage from './pages/GoogleSearchConsolePage';
import Web3SEOPage from './pages/Web3SEOPage';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/seo" element={<SEOPage />} />
            <Route path="/wordpress" element={<WordPressPage />} />
            <Route path="/google-analytics" element={<GoogleAnalyticsPage />} />
            <Route path="/google-search-console" element={<GoogleSearchConsolePage />} />
            <Route path="/seo-web3" element={<Web3SEOPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
