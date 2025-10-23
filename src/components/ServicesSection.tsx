import { useState } from "react";
import { 
  Fingerprint, Wallet, Plane, Vote, Shield, Award,
  PiggyBank, DollarSign, Smartphone, HardHat, ShieldCheck, CreditCard,
  UserPlus, Tractor, Briefcase, ClipboardCheck, FileWarning, ScrollText,
  Train, Zap, Receipt, Wifi, Home, Building
} from "lucide-react";

const serviceTabs = [
  { id: "gov", label: "पहचान पत्र और सरकारी", icon: Fingerprint },
  { id: "finance", label: "वित्तीय और बैंकिंग", icon: DollarSign },
  { id: "schemes", label: "योजनाएँ और पंजीकरण", icon: ClipboardCheck },
  { id: "travel", label: "यात्रा और उपयोगिताएँ", icon: Train },
];

const serviceCategories = {
  gov: [
    { icon: Fingerprint, title: "आधार सेवाएँ", description: "अद्यतन (Update), नया नामांकन, और लिंकिंग में सहायता।", color: "text-red-500" },
    { icon: Wallet, title: "पैन कार्ड (NSDL/UTI)", description: "नया आवेदन, सुधार, और तेज़ ई-पैन वितरण।", color: "text-orange-500" },
    { icon: Plane, title: "पासपोर्ट आवेदन", description: "ऑनलाइन आवेदन, फॉर्म भरना और दस्तावेज़ीकरण में मदद।", color: "text-blue-500" },
    { icon: Vote, title: "वोटर आईडी और ड्राइविंग लाइसेंस", description: "नया पंजीकरण, नवीनीकरण और सुधार सेवाएँ।", color: "text-green-500" },
    { icon: Shield, title: "आयुष्मान और राशन कार्ड", description: "कार्ड आवेदन, मुद्रण, और योजना पात्रता सहायता।", color: "text-purple-500" },
    { icon: Award, title: "आधिकारिक प्रमाण पत्र", description: "आय, जाति, निवास, जन्म और मृत्यु प्रमाण पत्र के आवेदन।", color: "text-yellow-500" },
  ],
  finance: [
    { icon: PiggyBank, title: "खाता खोलना", description: "बचत, चालू और डिजिटल खाता आवेदनों में सहायता।", color: "text-blue-500" },
    { icon: DollarSign, title: "डीमैट खाता और आधार लिंक", description: "डीमैट खाता खोलना और अनिवार्य आधार-बैंक लिंकिंग।", color: "text-primary" },
    { icon: Smartphone, title: "डिजिटल वॉलेट सेटअप", description: "Paytm, Bharat Pe Business, और Phone Pe खातों के लिए सेटअप।", color: "text-accent" },
    { icon: HardHat, title: "जीएसटी और आयकर", description: "जीएसटी आवेदन और आयकर रिटर्न (ITR) फाइलिंग में सहायता।", color: "text-orange-500" },
    { icon: ShieldCheck, title: "बीमा और वित्तीय पूछताछ", description: "बीमा उत्पाद मार्गदर्शन और सामान्य वित्तीय पूछताछ।", color: "text-red-500" },
    { icon: CreditCard, title: "एटीएम सेवा (AEPS)", description: "आधार-सक्षम भुगतान प्रणाली द्वारा नकद निकासी।", color: "text-purple-500" },
  ],
  schemes: [
    { icon: UserPlus, title: "ई-श्रम और सीएससी पंजीकरण", description: "ई-श्रम कार्ड और CSC योजनाओं के लिए पंजीकरण।", color: "text-accent" },
    { icon: Tractor, title: "पीएम किसान योजना", description: "PM-Kisan के लिए आवेदन और स्थिति की जाँच।", color: "text-yellow-500" },
    { icon: Briefcase, title: "व्यवसाय पंजीकरण", description: "विभिन्न व्यवसाय और सरकारी पंजीकरणों में सहायता।", color: "text-primary" },
    { icon: ClipboardCheck, title: "फॉर्म और आवेदन भरना", description: "किसी भी ऑनलाइन सरकारी या आवेदन फॉर्म को भरने में विशेषज्ञ सहायता।", color: "text-blue-500" },
    { icon: FileWarning, title: "राशन कार्ड और सुधार", description: "नए राशन कार्ड के लिए आवेदन और मौजूदा विवरण में सुधार।", color: "text-red-500" },
    { icon: ScrollText, title: "जीवन प्रमाण पत्र", description: "पेंशनभोगियों के लिए डिजिटल जीवन प्रमाण पत्र सेवा।", color: "text-orange-500" },
  ],
  travel: [
    { icon: Train, title: "IRCTC टिकट बुकिंग", description: "ट्रेन, बस, फ्लाइट और आपातकालीन टिकट बुकिंग में सहायता।", color: "text-purple-500" },
    { icon: Zap, title: "यूटिलिटी बिल भुगतान", description: "बिजली, पानी और गैस बिल भुगतान सेवाएँ।", color: "text-yellow-500" },
    { icon: Receipt, title: "मोबाइल और DTH रिचार्ज", description: "सभी ऑपरेटरों के लिए तत्काल रिचार्ज सेवा।", color: "text-blue-500" },
    { icon: Wifi, title: "इंटरनेट और ब्रॉडबैंड", description: "नए कनेक्शन और बिल भुगतान में सहायता।", color: "text-accent" },
    { icon: Home, title: "संपत्ति दस्तावेज़", description: "संपत्ति पंजीकरण और दस्तावेज़ीकरण में सहायता।", color: "text-orange-500" },
    { icon: Building, title: "सरकारी फॉर्म सहायता", description: "सभी प्रकार के सरकारी फॉर्म भरने में विशेषज्ञ मदद।", color: "text-primary" },
  ],
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("gov");

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            हमारी सेवाओं की पूरी श्रृंखला
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            अपनी सभी डिजिटल और दस्तावेज़ीकरण आवश्यकताओं के लिए हम कैसे आपकी सहायता कर सकते हैं, यह देखने के लिए एक श्रेणी चुनें।
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex overflow-x-auto gap-2 sm:gap-4 mb-12 pb-4 scrollbar-hide">
          {serviceTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card text-card-foreground hover:bg-muted"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {serviceCategories[activeTab as keyof typeof serviceCategories].map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Icon className={`w-8 h-8 flex-shrink-0 ${service.color}`} />
                  <h3 className="text-xl font-bold text-card-foreground leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
