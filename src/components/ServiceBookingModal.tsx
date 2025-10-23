import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarClock, User, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

const ServiceBookingModal = ({ isOpen, onClose, serviceName = "सामान्य सेवा" }: ServiceBookingModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    timeSlot: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.mobile || !formData.address || !formData.timeSlot) {
      toast({
        title: "कृपया सभी फ़ील्ड भरें",
        description: "सभी जानकारी देना आवश्यक है।",
        variant: "destructive",
      });
      return;
    }

    // Validate mobile number (10 digits)
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast({
        title: "गलत मोबाइल नंबर",
        description: "कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `*नई सेवा बुकिंग*
━━━━━━━━━━━━━━━━
📋 *सेवा:* ${serviceName}
👤 *नाम:* ${formData.name}
📱 *मोबाइल:* ${formData.mobile}
📍 *पता:* ${formData.address}
🕐 *समय:* ${formData.timeSlot}
━━━━━━━━━━━━━━━━`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918557449403?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success toast
    toast({
      title: "बुकिंग भेजी गई!",
      description: "आपकी बुकिंग WhatsApp पर भेज दी गई है। जल्द ही संपर्क किया जाएगा।",
    });

    // Reset form and close modal
    setFormData({ name: "", mobile: "", address: "", timeSlot: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            सेवा बुकिंग करें
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            चयनित सेवा: <span className="font-semibold text-accent">{serviceName}</span>
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              पूरा नाम *
            </Label>
            <Input
              id="name"
              placeholder="अपना पूरा नाम दर्ज करें"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="text-base"
              required
            />
          </div>

          {/* Mobile Field */}
          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-base font-semibold flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              मोबाइल नंबर *
            </Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="10 अंकों का मोबाइल नंबर"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })}
              maxLength={10}
              pattern="[0-9]{10}"
              className="text-base"
              required
            />
          </div>

          {/* Address Field */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-base font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              पता *
            </Label>
            <Textarea
              id="address"
              placeholder="अपना पूरा पता दर्ज करें"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="text-base min-h-[80px]"
              required
            />
          </div>

          {/* Time Slot Field */}
          <div className="space-y-2">
            <Label htmlFor="timeSlot" className="text-base font-semibold flex items-center gap-2">
              <CalendarClock className="w-4 h-4 text-primary" />
              पसंदीदा समय *
            </Label>
            <select
              id="timeSlot"
              value={formData.timeSlot}
              onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              className="w-full px-3 py-2 text-base border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              required
            >
              <option value="">समय चुनें</option>
              <option value="सुबह 9:00 - 11:00">सुबह 9:00 - 11:00</option>
              <option value="सुबह 11:00 - दोपहर 1:00">सुबह 11:00 - दोपहर 1:00</option>
              <option value="दोपहर 1:00 - शाम 3:00">दोपहर 1:00 - शाम 3:00</option>
              <option value="शाम 3:00 - शाम 5:00">शाम 3:00 - शाम 5:00</option>
              <option value="शाम 5:00 - शाम 7:00">शाम 5:00 - शाम 7:00</option>
            </select>
          </div>

          {/* Info Note */}
          <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-accent">ध्यान दें:</strong> आपकी बुकिंग की जानकारी WhatsApp पर भेजी जाएगी। 
              हम जल्द ही आपसे संपर्क करेंगे।
            </p>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="btn-primary w-full text-lg py-6">
            <Send className="w-5 h-5 mr-2" />
            WhatsApp पर बुकिंग भेजें
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceBookingModal;
