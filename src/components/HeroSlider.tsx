import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CreditCard, FileText, MapPin, Award, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import cscLogo from "@/assets/csc-logo-new.png";
import digitalIndiaLogo from "@/assets/csc-digital-india-logo.png";
import sanchalakImage from "@/assets/pankaj-chaudhary.jpg";
import mantraDevice from "@/assets/mantra-device.png";
import bankLogos from "@/assets/bank-logos-strip.png";

interface HeroSliderProps {
  onBookingClick: () => void;
}

const slides = [
  {
    title: "CSC - जन सेवा केंद्र",
    subtitle: "डिजिटल इंडिया की पहल",
    description: "सरकार द्वारा मान्यता प्राप्त कॉमन सर्विस सेंटर - सभी सरकारी और डिजिटल सेवाएं एक छत के नीचे।",
    icon: Award,
  },
  {
    title: "प्रधानमंत्री डिजिटल इंडिया मिशन",
    subtitle: "आधार, पैन और सभी सरकारी योजनाएं",
    description: "PM किसान, आयुष्मान भारत, AEPS बैंकिंग - सभी योजनाओं का लाभ यहाँ पाएं।",
    icon: Building2,
  },
  {
    title: "आधार सक्षम बैंकिंग (AEPS)",
    subtitle: "बिना ATM कार्ड के पैसे निकालें",
    description: "सिर्फ आधार कार्ड से नकद निकासी, बैलेंस चेक और मिनी स्टेटमेंट - सुरक्षित और तेज़।",
    icon: CreditCard,
  },
  {
    title: "स्थानीय और भरोसेमंद सेवा",
    subtitle: "बस्ती में आपका विश्वसनीय पार्टनर",
    description: "State Bank of India के पास, Chilma Bazar, Basti में स्थित। सोमवार से रविवार - सुबह 9 से शाम 7 बजे तक।",
    icon: Users,
  },
  {
    title: "Mantra AEPS Device - सुरक्षित बायोमेट्रिक सिस्टम",
    subtitle: "आधार सक्षम भुगतान प्रणाली",
    description: "प्रमाणित Mantra Device से सुरक्षित फिंगरप्रिंट स्कैनिंग - सरकार द्वारा अनुमोदित तकनीक।",
    icon: Award,
  },
];

const HeroSlider = ({ onBookingClick }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const Icon = slides[currentSlide].icon;

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-blue-600 to-orange-500 min-h-[650px] sm:min-h-[700px] flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-blue-500 to-green-400 animate-gradient-slow"></div>
      </div>
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-1000"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Government Logos Badge */}
          <div className="inline-flex items-center gap-4 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl mb-6 shadow-2xl border-2 border-orange-400 animate-fade-in-left">
            <img src={cscLogo} alt="CSC Common Service Centre" width="114" height="64" className="h-16 w-auto object-contain animate-pulse-glow" />
            <img src={digitalIndiaLogo} alt="CSC Digital India" width="94" height="64" className="h-16 w-auto object-contain animate-pulse-glow" />
          </div>

          {/* Bank Logos Strip */}
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl mb-6 shadow-xl border border-blue-300">
            <img src={bankLogos} alt="SBI, BOB, PNB, Aadhaar Enabled" width="120" height="48" className="h-12 w-auto object-contain" />
          </div>

          {/* Main Content with Enhanced Animation */}
          <div className="animate-scale-in" key={currentSlide}>
            {currentSlide === 4 && (
              <div className="mb-6 flex justify-center">
                <img src={mantraDevice} alt="Mantra AEPS Device" width="128" height="128" className="h-32 w-auto object-contain rounded-lg shadow-2xl border-4 border-white/30" />
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-2xl">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300 mb-6 drop-shadow-lg">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              {slides[currentSlide].description}
            </p>
            
            {/* Sanchalak Info with Image */}
            <div className="inline-flex items-center gap-4 bg-white/95 backdrop-blur-md px-8 py-4 rounded-2xl mb-6 border-2 border-orange-400 shadow-2xl">
              <img 
                src={sanchalakImage} 
                alt="Pankaj Chaudhary - संचालक"
                width="80"
                height="80"
                className="h-20 w-20 rounded-full object-cover border-4 border-orange-500 shadow-lg"
              />
              <div className="text-left">
                <span className="text-orange-600 text-sm font-bold block">संचालक (Operator)</span>
                <span className="text-blue-700 font-bold text-lg sm:text-xl block">Pankaj Chaudhary</span>
                <span className="text-green-600 text-xs font-semibold block">S.P. Chaudhary Digital Service Center</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={onBookingClick}
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 bg-orange-600 hover:bg-orange-700 text-white shadow-xl hover:shadow-2xl border-2 border-white"
            >
              अभी सेवा बुक करें
            </Button>
            <Button 
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 bg-white hover:bg-gray-100 text-blue-700 border-2 border-white shadow-xl"
            >
              सभी सेवाएँ देखें
            </Button>
          </div>

          {/* Slider Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
