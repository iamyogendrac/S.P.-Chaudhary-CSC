import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import cscLogo from "@/assets/csc-logo.png";
import digitalIndiaLogo from "@/assets/digital-india-logo.png";

interface HeaderProps {
  onBookingClick: () => void;
}

const Header = ({ onBookingClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <img src={cscLogo} alt="CSC Logo" className="h-12 w-12 object-contain" />
              <img src={digitalIndiaLogo} alt="Digital India" className="h-12 w-12 object-contain hidden sm:block" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary leading-tight">
                एस.पी. चौधरी
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">डिजिटल सेवा केंद्र</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              होम
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              सेवाएँ
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              हमारे बारे में
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              संपर्क
            </button>
            <Button onClick={onBookingClick} className="btn-primary">
              <Phone className="w-4 h-4 mr-2" />
              सेवा बुक करें
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-slide-in">
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                होम
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                सेवाएँ
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                हमारे बारे में
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                संपर्क
              </button>
              <Button onClick={onBookingClick} className="btn-primary w-full mt-2">
                <Phone className="w-4 h-4 mr-2" />
                सेवा बुक करें
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
