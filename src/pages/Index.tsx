import { useState } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import TrustHighlights from "@/components/TrustHighlights";
import ServicesSection from "@/components/ServicesSection";
import AepsSection from "@/components/AepsSection";
import AboutSection from "@/components/AboutSection";
import ContactModal from "@/components/ContactModal";
import ServiceBookingModal from "@/components/ServiceBookingModal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isServiceBookingOpen, setIsServiceBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleBookingClick = () => {
    setIsContactModalOpen(true);
  };

  const handleServiceBooking = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsServiceBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onBookingClick={handleBookingClick} />
      
      <main>
        <HeroSlider onBookingClick={handleBookingClick} />
        <TrustHighlights />
        <ServicesSection onServiceClick={handleServiceBooking} />
        <AepsSection onBookingClick={() => handleServiceBooking("AEPS बैंकिंग सेवा")} />
        <AboutSection onBookingClick={handleBookingClick} />
      </main>

      <Footer />
      <WhatsAppButton />
      <CallButton />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      <ServiceBookingModal
        isOpen={isServiceBookingOpen}
        onClose={() => setIsServiceBookingOpen(false)}
        serviceName={selectedService}
      />
    </div>
  );
};

export default Index;
