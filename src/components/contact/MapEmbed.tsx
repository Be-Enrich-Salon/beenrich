export default function MapEmbed() {
    return (
        <div className="w-full h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg border border-white/5 bg-stone/50 relative group">
            {/* Grayscale filter for luxury look, color on hover if desired */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472163!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709901234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.2) brightness(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:filter-none opacity-80 group-hover:opacity-100"
            ></iframe>

            {/* Overlay to ensure it matches dark theme initially */}
            <div className="absolute inset-0 bg-charcoal/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
        </div>
    );
}
