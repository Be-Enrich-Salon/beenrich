import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent("Hi, I'd like to book an appointment.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20 group"
        >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="tracking-wide">Chat on WhatsApp</span>
        </a>
    );
}
