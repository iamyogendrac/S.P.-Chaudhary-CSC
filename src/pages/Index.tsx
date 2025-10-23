import { useState } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import TrustHighlights from "@/components/TrustHighlights";
import ServicesSection from "@/components/ServicesSection";
import AepsSection from "@/components/AepsSection";
import AboutSection from "@/components/AboutSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onBookingClick={handleBookingClick} />
      
      <main>
        <HeroSlider onBookingClick={handleBookingClick} />
        <TrustHighlights />
        <ServicesSection />
        <AepsSection onBookingClick={handleBookingClick} />
        <AboutSection onBookingClick={handleBookingClick} />
      </main>

      <Footer />
      <WhatsAppButton />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
