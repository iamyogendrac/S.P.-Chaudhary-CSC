import { MapPin, Phone, Clock, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onBookingClick: () => void;
}

const AboutSection = ({ onBookingClick }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              हमारे बारे में
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              S.P. Chaudhary Digital Service Center - बस्ती का विश्वसनीय जन सेवा केंद्र
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: About Content */}
            <div className="space-y-6">
              <div className="bg-gradient-primary text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  जन सेवा केंद्र (CSC)
                </h3>
                <p className="text-lg leading-relaxed opacity-90 mb-6">
                  हम एक सरकारी मान्यता प्राप्त कॉमन सर्विस सेंटर (CSC) हैं जो डिजिटल इंडिया मिशन के तहत 
                  बस्ती के लोगों को सभी आवश्यक डिजिटल और सरकारी सेवाएं प्रदान करते हैं।
                </p>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  <span className="font-semibold text-lg">CSC प्रमाणित केंद्र</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-accent">
                  <Users className="w-10 h-10 text-accent mb-3" />
                  <h4 className="font-bold text-xl text-card-foreground mb-2">5000+</h4>
                  <p className="text-muted-foreground">संतुष्ट ग्राहक</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-secondary">
                  <Heart className="w-10 h-10 text-secondary mb-3" />
                  <h4 className="font-bold text-xl text-card-foreground mb-2">2 वर्ष</h4>
                  <p className="text-muted-foreground">सेवा का अनुभव</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-xl border-t-4 border-primary">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  संपर्क जानकारी
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground mb-1">पता</p>
                      <p className="text-muted-foreground">
                        Near State Bank of India<br />
                        Chilma Bazar, Basti<br />
                        Uttar Pradesh - 272301
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground mb-1">फोन नंबर</p>
                      <a 
                        href="tel:8957449403" 
                        className="text-lg font-bold text-accent hover:text-accent-light transition-colors"
                      >
                        +91 8957449403
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Mr. Pankaj Chaudhary</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground mb-1">समय</p>
                      <p className="text-muted-foreground">
                        सोमवार से रविवार<br />
                        सुबह 9:00 - शाम 7:00<br />
                        <span className="text-accent font-semibold">बिना किसी बंद दिन के</span>
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={onBookingClick}
                  className="btn-accent w-full mt-6 text-lg py-6"
                >
                  अभी संपर्क करें
                </Button>
              </div>

              {/* Google Maps Embed Placeholder */}
              <div className="bg-muted rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground font-medium">
                      Near State Bank of India<br />
                      Chilma Bazar, Basti
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-accent text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">हमारा मिशन</h3>
            <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              डिजिटल इंडिया के सपने को साकार करते हुए, हम बस्ती के हर नागरिक को आसान, तेज़ और भरोसेमंद 
              डिजिटल सेवाएं प्रदान करने के लिए प्रतिबद्ध हैं। हमारा लक्ष्य है कि कोई भी व्यक्ति सरकारी सेवाओं 
              और डिजिटल सुविधाओं से वंचित न रहे।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
