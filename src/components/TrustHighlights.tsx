import { CreditCard, FileText, MapPin, Clock, Shield, Users } from "lucide-react";

const highlights = [
  {
    icon: CreditCard,
    title: "एटीएम सेवा (आधार सक्षम)",
    description: "AEPS द्वारा अपना Aadhaar Card लाइए और पैसा निकालिए। तेज़ और सुरक्षित नकद निकासी सेवा।",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent",
  },
  {
    icon: FileText,
    title: "तेज़ पैन कार्ड सेवा",
    description: "मात्र 7 दिनों में e-Pan प्राप्त करे। NSDL/UTI नया आवेदन और सुधार में सहायता।",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary",
  },
  {
    icon: MapPin,
    title: "स्थानीय और भरोसेमंद",
    description: "स्टेट बैंक ऑफ इंडिया चिल्मा बाजार बस्ती के पास सुविधाजनक स्थान पर स्थित।",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary",
  },
  {
    icon: Clock,
    title: "त्वरित सेवा",
    description: "सोमवार से रविवार: सुबह 9:00 से शाम 7:00 बजे तक। बिना किसी बंद दिन के। आपकी सुविधा के लिए हर दिन खुला।",
    color: "text-primary-light",
    bgColor: "bg-primary/10",
    borderColor: "border-primary-light",
  },
  {
    icon: Shield,
    title: "100% सुरक्षित",
    description: "सभी लेनदेन सुरक्षित और गोपनीय। सरकारी मान्यता प्राप्त CSC केंद्र।",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent",
  },
  {
    icon: Users,
    title: "विशेषज्ञ सहायता",
    description: "अनुभवी कर्मचारी द्वारा सभी सरकारी फॉर्म और दस्तावेज़ों में मदद।",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary",
  },
];

const TrustHighlights = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            क्यों चुनें हमें?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            बस्ती में आपकी सभी डिजिटल जरूरतों के लिए एक भरोसेमंद नाम
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`group bg-card rounded-2xl p-6 border-l-4 ${highlight.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl ${highlight.bgColor} mb-4`}>
                  <Icon className={`w-8 h-8 ${highlight.color}`} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
