import React, { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TreatmentsPage from './components/TreatmentsPage';
import TreatmentDetail from './components/TreatmentDetail';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: string;
  image: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'treatments':
        return (
          <TreatmentsPage
            setCurrentPage={setCurrentPage}
            setSelectedTreatment={setSelectedTreatment}
          />
        );
      case 'treatment-detail':
        return selectedTreatment ? (
          <TreatmentDetail
            treatment={selectedTreatment}
            setCurrentPage={setCurrentPage}
            setSelectedTreatment={setSelectedTreatment}
          />
        ) : (
          <TreatmentsPage
            setCurrentPage={setCurrentPage}
            setSelectedTreatment={setSelectedTreatment}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;