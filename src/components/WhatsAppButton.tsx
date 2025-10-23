import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/918957449403?text=नमस्ते,%20मुझे%20आपकी%20डिजिटल%20सेवाओं%20के%20बारे%20में%20जानकारी%20चाहिए।",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
      aria-label="WhatsApp पर संपर्क करें"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
