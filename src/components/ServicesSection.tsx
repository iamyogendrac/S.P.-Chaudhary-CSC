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
  ChevronDown,
  ChevronUp,
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
  documents: string[];
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
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const serviceCategories: Record<string, ServiceItemProps[]> = {
    gov: [
      {
        icon: Fingerprint,
        title: "आधार सेवाएँ",
        description: "अद्यतन (Update), नया नामांकन (New Enrolment), और लिंकिंग में सहायता।",
        color: "text-red-500",
        documents: ["मूल आधार कार्ड", "पते का प्रमाण (बिजली बिल/राशन कार्ड)", "मोबाइल नंबर", "पासपोर्ट साइज फोटो"],
        onClick: () => onServiceClick("आधार सेवाएँ"),
      },
      {
        icon: Wallet,
        title: "पैन कार्ड (NSDL/UTI)",
        description: "नया आवेदन, सुधार (Correction), और तेज़ ई-पैन वितरण।",
        color: "text-orange-500",
        documents: ["आधार कार्ड", "जन्म प्रमाण पत्र", "पते का प्रमाण", "पासपोर्ट साइज फोटो", "हस्ताक्षर"],
        onClick: () => onServiceClick("पैन कार्ड (NSDL/UTI)"),
      },
      {
        icon: Plane,
        title: "पासपोर्ट आवेदन",
        description: "ऑनलाइन आवेदन, फॉर्म भरना और दस्तावेज़ीकरण में मदद।",
        color: "text-blue-500",
        documents: ["आधार कार्ड", "वोटर ID", "10वीं की मार्कशीट", "पते का प्रमाण", "जन्म प्रमाण पत्र", "पासपोर्ट साइज फोटो"],
        onClick: () => onServiceClick("पासपोर्ट आवेदन"),
      },
      {
        icon: Vote,
        title: "वोटर आईडी और ड्राइविंग लाइसेंस",
        description: "नया पंजीकरण, नवीनीकरण और सुधार सेवाएँ।",
        color: "text-emerald-500",
        documents: ["आधार कार्ड", "पते का प्रमाण", "जन्म प्रमाण पत्र", "फोटो", "Form 1 (वोटर के लिए)"],
        onClick: () => onServiceClick("वोटर आईडी और ड्राइविंग लाइसेंस"),
      },
      {
        icon: Shield,
        title: "आयुष्मान और राशन कार्ड",
        description: "कार्ड आवेदन, मुद्रण (Printing), और योजना पात्रता सहायता।",
        color: "text-indigo-500",
        documents: ["आधार कार्ड", "आय प्रमाण पत्र", "राशन कार्ड", "परिवार रजिस्टर", "बैंक पासबुक", "मोबाइल नंबर"],
        onClick: () => onServiceClick("आयुष्मान और राशन कार्ड"),
      },
      {
        icon: Medal,
        title: "आधिकारिक प्रमाण पत्र",
        description: "आय (Income), जाति (Caste), निवास (Domicile), जन्म और मृत्यु प्रमाण पत्र के आवेदन।",
        color: "text-yellow-500",
        documents: ["आधार कार्ड", "राशन कार्ड", "बिजली बिल", "शपथ पत्र (Affidavit)", "आवेदन फॉर्म", "पासपोर्ट साइज फोटो"],
        onClick: () => onServiceClick("आधिकारिक प्रमाण पत्र"),
      },
    ],
    finance: [
      {
        icon: Banknote,
        title: "खाता खोलना",
        description: "बचत (Savings), चालू (Current) और डिजिटल खाता आवेदनों में सहायता।",
        color: "text-secondary",
        documents: ["आधार कार्ड", "पैन कार्ड", "पते का प्रमाण", "पासपोर्ट साइज फोटो", "मोबाइल नंबर", "प्रारंभिक जमा राशि"],
        onClick: () => onServiceClick("बैंक खाता खोलना"),
      },
      {
        icon: DollarSign,
        title: "डीमैट खाता और आधार लिंक",
        description: "डीमैट खाता खोलना और अनिवार्य आधार-बैंक लिंकिंग।",
        color: "text-primary",
        documents: ["पैन कार्ड", "आधार कार्ड", "बैंक पासबुक", "पासपोर्ट साइज फोटो", "हस्ताक्षर", "रद्द चेक (Cancelled Cheque)"],
        onClick: () => onServiceClick("डीमैट खाता और आधार लिंक"),
      },
      {
        icon: Smartphone,
        title: "डिजिटल वॉलेट सेटअप",
        description: "Paytm, Bharat Pe Business, और Phone Pe खातों के लिए सेटअप सहायता।",
        color: "text-accent",
        documents: ["आधार कार्ड", "पैन कार्ड", "मोबाइल नंबर", "बैंक अकाउंट डिटेल्स", "दुकान का फोटो (व्यवसाय के लिए)"],
        onClick: () => onServiceClick("डिजिटल वॉलेट सेटअप"),
      },
      {
        icon: HardHat,
        title: "जीएसटी और आयकर",
        description: "जीएसटी आवेदन सहायता और आयकर रिटर्न (ITR) फाइलिंग में सहायता।",
        color: "text-orange-500",
        documents: ["पैन कार्ड", "आधार कार्ड", "बैंक स्टेटमेंट", "व्यवसाय पंजीकरण", "Form 16 (ITR के लिए)", "निवेश प्रमाण"],
        onClick: () => onServiceClick("जीएसटी और आयकर सेवाएँ"),
      },
      {
        icon: ShieldCheck,
        title: "बीमा और वित्तीय पूछताछ",
        description: "बीमा उत्पाद मार्गदर्शन और सामान्य वित्तीय पूछताछ।",
        color: "text-red-500",
        documents: ["आधार कार्ड", "पैन कार्ड", "आयु प्रमाण", "आय प्रमाण", "नॉमिनी डिटेल्स", "मेडिकल हिस्ट्री (स्वास्थ्य बीमा के लिए)"],
        onClick: () => onServiceClick("बीमा सेवाएँ"),
      },
      {
        icon: CreditCard,
        title: "एटीएम सेवा (AEPS)",
        description: "आधार-सक्षम भुगतान प्रणाली (AEPS) द्वारा नकद निकासी।",
        color: "text-indigo-500",
        documents: ["आधार कार्ड", "आधार लिंक्ड मोबाइल नंबर", "फिंगरप्रिंट", "बैंक खाता (आधार से लिंक्ड)"],
        onClick: () => onServiceClick("एटीएम सेवा (AEPS)"),
      },
    ],
    schemes: [
      {
        icon: UserPlus,
        title: "ई-श्रम और सीएससी पंजीकरण",
        description: "ई-श्रम कार्ड और कॉमन सर्विस सेंटर (CSC) योजनाओं के लिए पंजीकरण।",
        color: "text-accent",
        documents: ["आधार कार्ड", "मोबाइल नंबर", "बैंक पासबुक", "कार्य का विवरण", "पासपोर्ट साइज फोटो"],
        onClick: () => onServiceClick("ई-श्रम और सीएससी पंजीकरण"),
      },
      {
        icon: Tractor,
        title: "पीएम किसान योजना",
        description: "प्रधान मंत्री किसान सम्मान निधि (PM-Kisan) के लिए आवेदन और स्थिति की जाँच।",
        color: "text-yellow-500",
        documents: ["आधार कार्ड", "बैंक पासबुक", "खसरा-खतौनी", "जमीन के कागजात", "मोबाइल नंबर", "पासपोर्ट साइज फोटो"],
        onClick: () => onServiceClick("पीएम किसान योजना"),
      },
      {
        icon: Briefcase,
        title: "व्यवसाय पंजीकरण",
        description: "विभिन्न व्यवसाय और सरकारी पंजीकरणों में सहायता।",
        color: "text-primary",
        documents: ["आधार कार्ड", "पैन कार्ड", "पते का प्रमाण", "व्यवसाय का पता", "पार्टनरशिप डीड (यदि लागू)", "NOC"],
        onClick: () => onServiceClick("व्यवसाय पंजीकरण"),
      },
      {
        icon: ClipboardCheck,
        title: "फॉर्म और आवेदन भरना",
        description: "किसी भी ऑनलाइन सरकारी या आवेदन फॉर्म को भरने के लिए विशेषज्ञ सहायता।",
        color: "text-secondary",
        documents: ["संबंधित दस्तावेज (फॉर्म के अनुसार)", "आधार कार्ड", "फोटो", "हस्ताक्षर", "मोबाइल नंबर"],
        onClick: () => onServiceClick("ऑनलाइन फॉर्म भरना"),
      },
      {
        icon: FileWarning,
        title: "राशन कार्ड और सुधार",
        description: "नए राशन कार्ड के लिए आवेदन और मौजूदा विवरण में सुधार।",
        color: "text-red-500",
        documents: ["आधार कार्ड (परिवार के सभी सदस्यों का)", "आय प्रमाण पत्र", "निवास प्रमाण", "बिजली बिल", "परिवार रजिस्टर"],
        onClick: () => onServiceClick("राशन कार्ड सेवाएँ"),
      },
      {
        icon: Scroll,
        title: "जीवन प्रमाण पत्र",
        description: "पेंशनभोगियों के लिए डिजिटल जीवन प्रमाण पत्र सेवा।",
        color: "text-orange-500",
        documents: ["आधार कार्ड", "पेंशन पासबुक या PPO नंबर", "मोबाइल नंबर", "बैंक खाता विवरण"],
        onClick: () => onServiceClick("जीवन प्रमाण पत्र"),
      },
    ],
    travel: [
      {
        icon: Train,
        title: "IRCTC टिकट बुकिंग",
        description: "ट्रेन, बस, फ्लाइट और आपातकालीन टिकट बुकिंग में सहायता।",
        color: "text-indigo-500",
        documents: ["आधार कार्ड", "यात्री का नाम और उम्र", "मोबाइल नंबर", "यात्रा की तारीख और स्थान"],
        onClick: () => onServiceClick("IRCTC टिकट बुकिंग"),
      },
      {
        icon: Zap,
        title: "यूटिलिटी बिल भुगतान",
        description: "बिजली, पानी और गैस बिल भुगतान सेवाएँ।",
        color: "text-yellow-500",
        documents: ["बिल नंबर या उपभोक्ता संख्या", "पिछला बिल", "मोबाइल नंबर", "भुगतान राशि"],
        onClick: () => onServiceClick("यूटिलिटी बिल भुगतान"),
      },
      {
        icon: Smartphone,
        title: "मोबाइल रिचार्ज",
        description: "सभी ऑपरेटरों के लिए त्वरित मोबाइल और DTH रिचार्ज।",
        color: "text-accent",
        documents: ["मोबाइल नंबर या DTH आईडी", "रिचार्ज राशि", "ऑपरेटर का नाम"],
        onClick: () => onServiceClick("मोबाइल रिचार्ज"),
      },
      {
        icon: FileText,
        title: "डिजिटल दस्तावेज़",
        description: "दस्तावेज़ प्रिंटिंग, स्कैनिंग और फोटो कॉपी सेवाएँ।",
        color: "text-secondary",
        documents: ["मूल दस्तावेज़ (स्कैन/कॉपी के लिए)", "पेन ड्राइव या ईमेल (प्रिंट के लिए)"],
        onClick: () => onServiceClick("डिजिटल दस्तावेज़ सेवाएँ"),
      },
      {
        icon: Users,
        title: "ऑनलाइन परीक्षा फॉर्म",
        description: "सभी सरकारी और प्रतियोगी परीक्षाओं के फॉर्म भरना।",
        color: "text-primary",
        documents: ["आधार कार्ड", "शैक्षणिक प्रमाण पत्र", "जाति/आय प्रमाण पत्र (यदि लागू)", "पासपोर्ट साइज फोटो", "हस्ताक्षर"],
        onClick: () => onServiceClick("ऑनलाइन परीक्षा फॉर्म"),
      },
      {
        icon: Building2,
        title: "डिजिटल हस्ताक्षर",
        description: "DSC (Digital Signature Certificate) आवेदन और नवीनीकरण।",
        color: "text-orange-500",
        documents: ["पैन कार्ड", "आधार कार्ड", "फोटो", "मोबाइल नंबर", "ईमेल आईडी"],
        onClick: () => onServiceClick("डिजिटल हस्ताक्षर"),
      },
    ],
  };

  const toggleServiceExpansion = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
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
                  onClick={() => {
                    setActiveTab(tab.id);
                    setExpandedService(null);
                  }}
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
              const isExpanded = expandedService === index;
              return (
                <div
                  key={index}
                  className="service-card group"
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

                  {/* Expandable Documents Section */}
                  <button
                    onClick={() => toggleServiceExpansion(index)}
                    className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors mb-3 w-full"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        आवश्यक दस्तावेज़ छुपाएं
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        आवश्यक दस्तावेज़ देखें
                      </>
                    )}
                  </button>

                  {isExpanded && (
                    <div className="bg-muted/50 rounded-lg p-4 mb-4 animate-fade-in">
                      <p className="text-sm font-semibold text-card-foreground mb-2">
                        आवश्यक दस्तावेज़:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.documents.map((doc, docIndex) => (
                          <li key={docIndex} className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={service.onClick}
                    className="text-sm font-semibold text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors w-full"
                  >
                    अभी बुकिंग करें →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;