import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Weddings from './components/Weddings';
import Corporate from './components/Corporate';
import Social from './components/Social';
import Launches from './components/Launches';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showConsultationForm, setShowConsultationForm] = useState(false);
      
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    budget: '',
    description: ''
  });
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType ||
        !formData.eventDate || !formData.budget) {
      alert('Please fill in all required fields.');
      return;
    }

    if (parseInt(formData.budget) < 3000) {
      alert('Minimum budget requirement is $3,000.');
      return;
    }
    
    // SQUAREUP INTEGRATION
    alert('Thank you for your interest! You will be redirected to secure payment processing.');
    // Replace with your actual SquareUp payment URL
    window.location.href = 'https://squareup.com/fake_payment_link';
  };
    
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScroll = useCallback(() => {
    const sections = ['hero', 'weddings', 'corporate', 'social', 'launches'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;
        
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#112137] via-[#1d395e] to-[#295185]">
      <Navigation 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        setShowConsultationForm={setShowConsultationForm}
      />
      <Hero scrollToSection={scrollToSection} />
      <Weddings setShowConsultationForm={setShowConsultationForm} />
      <Corporate setShowConsultationForm={setShowConsultationForm} />
      <Social setShowConsultationForm={setShowConsultationForm} />
      <Launches setShowConsultationForm={setShowConsultationForm} />
      <FinalCTA setShowConsultationForm={setShowConsultationForm} />
      <Footer />
                
      <ConsultationModal 
        showConsultationForm={showConsultationForm}
        setShowConsultationForm={setShowConsultationForm}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default App;