import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/918557449403?text=नमस्ते,%20मुझे%20आपकी%20डिजिटल%20सेवाओं%20के%20बारे%20में%20जानकारी%20चाहिए।",
      "_blank"
    );
  };

  const handleCallClick = () => {
    window.location.href = "tel:8557449403";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            हमसे संपर्क करें
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            हम आपकी मदद के लिए हमेशा तैयार हैं
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* WhatsApp Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 text-lg shadow-lg"
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            WhatsApp पर संदेश भेजें
          </Button>

          {/* Call Button */}
          <Button
            onClick={handleCallClick}
            className="btn-primary w-full py-6 text-lg"
          >
            <Phone className="w-5 h-5 mr-3" />
            अभी कॉल करें: 8557449403
          </Button>

          <div className="border-t pt-6 space-y-4">
            <h3 className="font-semibold text-lg text-center mb-4">
              अन्य संपर्क विकल्प
            </h3>

            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">पता</p>
                <p className="text-sm text-muted-foreground">
                  चिलमा बाजार, बस्ती<br />
                  SBI के पास, उत्तर प्रदेश - 272001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">मोबाइल</p>
                <p className="text-sm text-muted-foreground">+91 8557449403</p>
                <p className="text-xs text-muted-foreground mt-1">Mr. Pankaj Chaudhary</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">समय</p>
                <p className="text-sm text-muted-foreground">
                  सोम - रविवार: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
