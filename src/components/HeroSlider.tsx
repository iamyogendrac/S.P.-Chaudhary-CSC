import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CreditCard, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroSliderProps {
  onBookingClick: () => void;
}

const slides = [
  {
    title: "तेज़, भरोसेमंद और झंझट-मुक्त",
    subtitle: "डिजिटल और सरकारी सेवाएँ",
    description: "आधार और पैन सेवाओं से लेकर यूटिलिटी भुगतान और जटिल सरकारी फॉर्म तक, हम आपके विश्वसनीय स्थानीय विशेषज्ञ हैं।",
    icon: FileText,
  },
  {
    title: "एटीएम सेवा (आधार सक्षम)",
    subtitle: "AEPS - तेज़ नकद निकासी",
    description: "अपना Aadhaar Card लाइए और पैसा निकालिए। तेज़, सुरक्षित और भरोसेमंद बैंकिंग सेवा आपके पास।",
    icon: CreditCard,
  },
  {
    title: "स्थानीय और भरोसेमंद",
    subtitle: "बस्ती में आपका डिजिटल पार्टनर",
    description: "स्टेट बैंक ऑफ इंडिया चिल्मा बाजार बस्ती के पास सुविधाजनक स्थान पर स्थित।",
    icon: MapPin,
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
    <section id="home" className="relative overflow-hidden bg-gradient-hero min-h-[650px] sm:min-h-[700px] flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent animate-gradient-slow"></div>
      </div>
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 transition-opacity duration-1000"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with Government Style */}
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full mb-6 shadow-lg border border-accent/20 animate-fade-in-left">
            <Icon className="w-6 h-6 text-accent animate-pulse-glow" />
            <span className="text-sm sm:text-base font-bold text-foreground">
              🇮🇳 बस्ती, यू.पी. में आपका डिजिटल सेवा पार्टनर
            </span>
          </div>

          {/* Main Content with Enhanced Animation */}
          <div className="animate-scale-in" key={currentSlide}>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-2xl">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/95 mb-6 drop-shadow-lg">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              {slides[currentSlide].description}
            </p>
            
            {/* Service Provider Name */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl mb-6 border border-white/30">
              <span className="text-white/90 text-sm">संचालक:</span>
              <span className="text-white font-bold text-base sm:text-lg">Mr. Pankaj Chaudhary</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={onBookingClick}
              size="lg"
              className="btn-accent w-full sm:w-auto text-base sm:text-lg px-8 py-6 shadow-xl hover:shadow-2xl"
            >
              अभी शुरू करें - बुकिंग करें
            </Button>
            <Button 
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 bg-white hover:bg-white/90 text-primary border-white"
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
