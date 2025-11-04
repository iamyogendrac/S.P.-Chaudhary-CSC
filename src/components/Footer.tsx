import { Phone, MapPin, Clock, Mail } from "lucide-react";
import cscLogo from "@/assets/csc-logo.png";
import digitalIndiaLogo from "@/assets/digital-india-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={cscLogo} alt="CSC" className="h-12 w-12 object-contain" />
              <img src={digitalIndiaLogo} alt="Digital India" className="h-12 w-12 object-contain" />
            </div>
            <h3 className="text-xl font-bold">
              S.P. Chaudhary<br />Digital Service Center
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              बस्ती का विश्वसनीय जन सेवा केंद्र। सभी डिजिटल और सरकारी सेवाएं एक छत के नीचे।<br />
              सेवा प्रदाता: Pankaj Chaudhary
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  होम
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  सेवाएँ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  हमारे बारे में
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  संपर्क
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">प्रमुख सेवाएँ</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• आधार सेवाएँ</li>
              <li>• पैन कार्ड</li>
              <li>• AEPS बैंकिंग</li>
              <li>• पासपोर्ट आवेदन</li>
              <li>• बिल भुगतान</li>
              <li>• सरकारी योजनाएँ</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">संपर्क जानकारी</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Near State Bank of India<br />
                  Chilma Bazar, Basti, UP - 272301
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="tel:8957449403"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 8957449403
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  सोमवार से रविवार<br />
                  सुबह 9:00 - शाम 7:00 (बिना बंद दिन)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>
              © {currentYear} S.P. Chaudhary Digital Service Center। सभी अधिकार सुरक्षित।
            </p>
            <p className="flex items-center gap-2">
              <span>समर्थित:</span>
              <span className="font-semibold text-primary-foreground">CSC / Digital India</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
