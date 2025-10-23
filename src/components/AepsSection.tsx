import { CreditCard, Shield, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import mantraDevice from "@/assets/mantra-device.png";

interface AepsSectionProps {
  onBookingClick: () => void;
}

const AepsSection = ({ onBookingClick }: AepsSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              AEPS - आधार सक्षम भुगतान सेवा
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Mantra डिवाइस के साथ सुरक्षित और तेज़ बैंकिंग सेवाएँ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Device Image and Info */}
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-center mb-6">
                  <img 
                    src={mantraDevice} 
                    alt="Mantra Biometric Device" 
                    className="w-64 h-64 object-contain animate-float"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    Mantra MFS100 Device
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    UIDAI प्रमाणित बायोमेट्रिक डिवाइस
                  </p>
                  <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                    <Shield className="w-5 h-5" />
                    <span>100% सुरक्षित और विश्वसनीय</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-bold animate-pulse-glow">
                ✓ UIDAI Certified
              </div>
            </div>

            {/* Right: Services and Notes */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-lg border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center gap-3">
                  <CreditCard className="w-8 h-8 text-accent" />
                  उपलब्ध सेवाएँ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-card-foreground">नकद निकासी (Cash Withdrawal)</p>
                      <p className="text-sm text-muted-foreground">अपने बैंक खाते से पैसे निकालें</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-card-foreground">बैलेंस पूछताछ (Balance Enquiry)</p>
                      <p className="text-sm text-muted-foreground">अपने खाते का बैलेंस जानें</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-card-foreground">मिनी स्टेटमेंट (Mini Statement)</p>
                      <p className="text-sm text-muted-foreground">हाल के लेनदेन की जानकारी</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-card-foreground">पैसे जमा करना (Cash Deposit)</p>
                      <p className="text-sm text-muted-foreground">अपने खाते में पैसे जमा करें</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-secondary/10 border-l-4 border-secondary rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-secondary" />
                  महत्वपूर्ण नोट - धन लेनदेन के लिए
                </h3>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <p className="text-muted-foreground">
                      <strong>जमा (जमा):</strong> अपना आधार कार्ड, मोबाइल नंबर और जमा की जाने वाली राशि लेकर आएं।
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <p className="text-muted-foreground">
                      <strong>निकासी (निकासी):</strong> आधार कार्ड और लिंक बैंक खाते की जानकारी आवश्यक है।
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <p className="text-muted-foreground">
                      बैंक खाता आधार से लिंक होना चाहिए। मोबाइल नंबर भी बैंक में रजिस्टर्ड होना जरूरी है।
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <p className="text-muted-foreground">
                      सभी लेनदेन <strong>100% सुरक्षित</strong> और बायोमेट्रिक प्रमाणीकरण द्वारा संरक्षित हैं।
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 shadow-md text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-card-foreground">2-3 मिनट</p>
                  <p className="text-xs text-muted-foreground">में पूरा होता है</p>
                </div>
                <div className="bg-card rounded-xl p-4 shadow-md text-center">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-bold text-card-foreground">शून्य शुल्क*</p>
                  <p className="text-xs text-muted-foreground">न्यूनतम सेवा शुल्क</p>
                </div>
              </div>

              <Button 
                onClick={onBookingClick}
                className="btn-primary w-full text-lg py-6"
              >
                AEPS सेवा के लिए संपर्क करें
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AepsSection;
