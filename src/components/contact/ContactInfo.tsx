import { MapPin, Phone, Mail, Clock } from "lucide-react";
import colors from "@/theme/colors";
import { homeContent } from "@/content/homeContent";

export default function ContactInfo() {
    const { info } = homeContent.contact;

    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-serif mb-6" style={{ color: colors.gold }}>
                    {info.title}
                </h3>
                <p className="text-mist/80 mb-8 font-light leading-relaxed">
                    {info.description}
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="mt-1">
                        <MapPin size={20} style={{ color: colors.gold }} />
                    </div>
                    <div>
                        <h4 className="font-medium text-white mb-1">{info.address.label}</h4>
                        <p className="text-mist/70 font-light">
                            {info.address.value[0]}
                            <br />
                            {info.address.value[1]}
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="mt-1">
                        <Phone size={20} style={{ color: colors.gold }} />
                    </div>
                    <div>
                        <h4 className="font-medium text-white mb-1">{info.phone.label}</h4>
                        <p className="text-mist/70 font-light">{info.phone.value}</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="mt-1">
                        <Mail size={20} style={{ color: colors.gold }} />
                    </div>
                    <div>
                        <h4 className="font-medium text-white mb-1">{info.email.label}</h4>
                        <p className="text-mist/70 font-light">{info.email.value}</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="mt-1">
                        <Clock size={20} style={{ color: colors.gold }} />
                    </div>
                    <div>
                        <h4 className="font-medium text-white mb-1">{info.hours.label}</h4>
                        <div className="text-mist/70 font-light">
                            <p>{info.hours.value}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
