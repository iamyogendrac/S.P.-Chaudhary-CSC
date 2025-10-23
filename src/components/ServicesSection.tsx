import { useState } from "react";
import {
  Building2,
  CreditCard,
  FileText,
  Users,
  Plane,
  Shield,
  Banknote,
  Smartphone,
  HardHat,
  UserPlus,
  Tractor,
  Briefcase,
  ClipboardCheck,
  FileWarning,
  Scroll,
  Train,
  Zap,
  Vote,
  Medal,
  DollarSign,
  ShieldCheck,
  Fingerprint,
  Wallet,
} from "lucide-react";

interface ServiceTabProps {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

interface ServicesSectionProps {
  onServiceClick: (serviceName: string) => void;
}

const serviceTabs: ServiceTabProps[] = [
  { id: "gov", label: "पहचान पत्र और सरकारी", icon: Fingerprint },
  { id: "finance", label: "वित्तीय और बैंकिंग", icon: Banknote },
  { id: "schemes", label: "योजनाएँ और पंजीकरण", icon: ClipboardCheck },
  { id: "travel", label: "यात्रा और उपयोगिताएँ", icon: Train },
];

const ServicesSection = ({ onServiceClick }: ServicesSectionProps) => {
  const [activeTab, setActiveTab] = useState("gov");

  const serviceCategories: Record<string, ServiceItemProps[]> = {
    gov: [
      {
        icon: Fingerprint,
        title: "आधार सेवाएँ",
        description: "अद्यतन (Update), नया नामांकन (New Enrolment), और लिंकिंग में सहायता।",
        color: "text-red-500",
        onClick: () => onServiceClick("आधार सेवाएँ"),
      },
      {
        icon: Wallet,
        title: "पैन कार्ड (NSDL/UTI)",
        description: "नया आवेदन, सुधार (Correction), और तेज़ ई-पैन वितरण।",
        color: "text-orange-500",
        onClick: () => onServiceClick("पैन कार्ड (NSDL/UTI)"),
      },
      {
        icon: Plane,
        title: "पासपोर्ट आवेदन",
        description: "ऑनलाइन आवेदन, फॉर्म भरना और दस्तावेज़ीकरण में मदद।",
        color: "text-blue-500",
        onClick: () => onServiceClick("पासपोर्ट आवेदन"),
      },
      {
        icon: Vote,
        title: "वोटर आईडी और ड्राइविंग लाइसेंस",
        description: "नया पंजीकरण, नवीनीकरण और सुधार सेवाएँ।",
        color: "text-emerald-500",
        onClick: () => onServiceClick("वोटर आईडी और ड्राइविंग लाइसेंस"),
      },
      {
        icon: Shield,
        title: "आयुष्मान और राशन कार्ड",
        description: "कार्ड आवेदन, मुद्रण (Printing), और योजना पात्रता सहायता।",
        color: "text-indigo-500",
        onClick: () => onServiceClick("आयुष्मान और राशन कार्ड"),
      },
      {
        icon: Medal,
        title: "आधिकारिक प्रमाण पत्र",
        description: "आय (Income), जाति (Caste), निवास (Domicile), जन्म और मृत्यु प्रमाण पत्र के आवेदन।",
        color: "text-yellow-500",
        onClick: () => onServiceClick("आधिकारिक प्रमाण पत्र"),
      },
    ],
    finance: [
      {
        icon: Banknote,
        title: "खाता खोलना",
        description: "बचत (Savings), चालू (Current) और डिजिटल खाता आवेदनों में सहायता।",
        color: "text-secondary",
        onClick: () => onServiceClick("बैंक खाता खोलना"),
      },
      {
        icon: DollarSign,
        title: "डीमैट खाता और आधार लिंक",
        description: "डीमैट खाता खोलना और अनिवार्य आधार-बैंक लिंकिंग।",
        color: "text-primary",
        onClick: () => onServiceClick("डीमैट खाता और आधार लिंक"),
      },
      {
        icon: Smartphone,
        title: "डिजिटल वॉलेट सेटअप",
        description: "Paytm, Bharat Pe Business, और Phone Pe खातों के लिए सेटअप सहायता।",
        color: "text-accent",
        onClick: () => onServiceClick("डिजिटल वॉलेट सेटअप"),
      },
      {
        icon: HardHat,
        title: "जीएसटी और आयकर",
        description: "जीएसटी आवेदन सहायता और आयकर रिटर्न (ITR) फाइलिंग में सहायता।",
        color: "text-orange-500",
        onClick: () => onServiceClick("जीएसटी और आयकर सेवाएँ"),
      },
      {
        icon: ShieldCheck,
        title: "बीमा और वित्तीय पूछताछ",
        description: "बीमा उत्पाद मार्गदर्शन और सामान्य वित्तीय पूछताछ।",
        color: "text-red-500",
        onClick: () => onServiceClick("बीमा सेवाएँ"),
      },
      {
        icon: CreditCard,
        title: "एटीएम सेवा (AEPS)",
        description: "आधार-सक्षम भुगतान प्रणाली (AEPS) द्वारा नकद निकासी।",
        color: "text-indigo-500",
        onClick: () => onServiceClick("एटीएम सेवा (AEPS)"),
      },
    ],
    schemes: [
      {
        icon: UserPlus,
        title: "ई-श्रम और सीएससी पंजीकरण",
        description: "ई-श्रम कार्ड और कॉमन सर्विस सेंटर (CSC) योजनाओं के लिए पंजीकरण।",
        color: "text-accent",
        onClick: () => onServiceClick("ई-श्रम और सीएससी पंजीकरण"),
      },
      {
        icon: Tractor,
        title: "पीएम किसान योजना",
        description: "प्रधान मंत्री किसान सम्मान निधि (PM-Kisan) के लिए आवेदन और स्थिति की जाँच।",
        color: "text-yellow-500",
        onClick: () => onServiceClick("पीएम किसान योजना"),
      },
      {
        icon: Briefcase,
        title: "व्यवसाय पंजीकरण",
        description: "विभिन्न व्यवसाय और सरकारी पंजीकरणों में सहायता।",
        color: "text-primary",
        onClick: () => onServiceClick("व्यवसाय पंजीकरण"),
      },
      {
        icon: ClipboardCheck,
        title: "फॉर्म और आवेदन भरना",
        description: "किसी भी ऑनलाइन सरकारी या आवेदन फॉर्म को भरने के लिए विशेषज्ञ सहायता।",
        color: "text-secondary",
        onClick: () => onServiceClick("ऑनलाइन फॉर्म भरना"),
      },
      {
        icon: FileWarning,
        title: "राशन कार्ड और सुधार",
        description: "नए राशन कार्ड के लिए आवेदन और मौजूदा विवरण में सुधार।",
        color: "text-red-500",
        onClick: () => onServiceClick("राशन कार्ड सेवाएँ"),
      },
      {
        icon: Scroll,
        title: "जीवन प्रमाण पत्र",
        description: "पेंशनभोगियों के लिए डिजिटल जीवन प्रमाण पत्र सेवा।",
        color: "text-orange-500",
        onClick: () => onServiceClick("जीवन प्रमाण पत्र"),
      },
    ],
    travel: [
      {
        icon: Train,
        title: "IRCTC टिकट बुकिंग",
        description: "ट्रेन, बस, फ्लाइट और आपातकलीन टिकट बुकिंग में सहायता।",
        color: "text-indigo-500",
        onClick: () => onServiceClick("IRCTC टिकट बुकिंग"),
      },
      {
        icon: Zap,
        title: "यूटिलिटी बिल भुगतान",
        description: "बिजली, पानी और गैस बिल भुगतान सेवाएँ।",
        color: "text-yellow-500",
        onClick: () => onServiceClick("यूटिलिटी बिल भुगतान"),
      },
      {
        icon: Smartphone,
        title: "मोबाइल रिचार्ज",
        description: "सभी ऑपरेटरों के लिए त्वरित मोबाइल और DTH रिचार्ज।",
        color: "text-accent",
        onClick: () => onServiceClick("मोबाइल रिचार्ज"),
      },
      {
        icon: FileText,
        title: "डिजिटल दस्तावेज़",
        description: "दस्तावेज़ प्रिंटिंग, स्कैनिंग और फोटो कॉपी सेवाएँ।",
        color: "text-secondary",
        onClick: () => onServiceClick("डिजिटल दस्तावेज़ सेवाएँ"),
      },
      {
        icon: Users,
        title: "ऑनलाइन परीक्षा फॉर्म",
        description: "सभी सरकारी और प्रतियोगी परीक्षाओं के फॉर्म भरना।",
        color: "text-primary",
        onClick: () => onServiceClick("ऑनलाइन परीक्षा फॉर्म"),
      },
      {
        icon: Building2,
        title: "डिजिटल हस्ताक्षर",
        description: "DSC (Digital Signature Certificate) आवेदन और नवीनीकरण।",
        color: "text-orange-500",
        onClick: () => onServiceClick("डिजिटल हस्ताक्षर"),
      },
    ],
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            हमारी सेवाओं की पूरी श्रृंखला
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            अपनी सभी डिजिटल और दस्तावेज़ीकरण आवश्यकताओं के लिए एक सेवा चुनें और बुकिंग करें
          </p>
        </div>

        {/* Service Tabs */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {serviceTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card text-card-foreground hover:bg-primary/10 hover:scale-105"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories[activeTab]?.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={service.onClick}
                  className="service-card text-left group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-muted mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                    बुकिंग करें →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
