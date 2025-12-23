import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppCTA() {
    const phoneNumber = "918125944445";
    const message = encodeURIComponent("Hi, I'd like to book an appointment at Be Enrich.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-4 w-full px-8 py-5 bg-gradient-to-r from-[#25D366] to-[#20bd5a] hover:from-[#20bd5a] hover:to-[#1aa950] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/30 group relative overflow-hidden"
        >
            {/* Background animation */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            
            <MessageCircle className="w-6 h-6 group-hover:scale-125 transition-transform duration-300 relative z-10" />
            <div className="flex flex-col items-start relative z-10">
                <span className="text-sm font-semibold uppercase tracking-wide">Chat on WhatsApp</span>
                <span className="text-xs opacity-90 font-light">Instant response</span>
            </div>
            <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
        </motion.a>
    );
}
