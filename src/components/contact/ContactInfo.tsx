import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { homeContent } from "@/content/homeContent";

export default function ContactInfo() {
    const { info } = homeContent.contact;

    const infoItems = [
        { icon: MapPin, label: info.address.label, value: Array.isArray(info.address.value) ? info.address.value.join(", ") : info.address.value },
        { icon: Phone, label: info.phone.label, value: info.phone.value, href: `tel:${info.phone.value.replace(/\s+/g, '')}` },
        { icon: Mail, label: info.email.label, value: info.email.value, href: `mailto:${info.email.value}` },
        { icon: Clock, label: info.hours.label, value: info.hours.value },
    ];

    return (
        <div className="space-y-10">
            <div>
                <h3 className="text-2xl font-display text-gold mb-4">
                    {info.title}
                </h3>
                <p className="text-mist/80 font-light leading-relaxed text-base max-w-sm">
                    {info.description}
                </p>
            </div>

            <div className="space-y-8">
                {infoItems.map((item, idx) => {
                    const Icon = item.icon;
                    const content = (
                        <div className="flex items-start gap-4 group">
                            <div className="mt-1 flex-shrink-0">
                                <Icon size={20} className="text-gold" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-1 text-sm">
                                    {item.label}
                                </h4>
                                <p className="text-mist/70 font-light text-sm group-hover:text-mist transition-colors">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    );

                    if (item.href) {
                        return (
                            <a key={item.label} href={item.href} className="block hover:opacity-80 transition-opacity">
                                {content}
                            </a>
                        );
                    }
                    return <div key={item.label}>{content}</div>;
                })}
            </div>
        </div>
    );
}
