import { Phone } from "lucide-react";

const CallButton = () => {
  const handleClick = () => {
    window.location.href = "tel:+918957449403";
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-6 z-50 p-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
      aria-label="कॉल करें"
    >
      <Phone className="w-7 h-7" />
    </button>
  );
};

export default CallButton;
