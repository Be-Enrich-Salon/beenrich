"use client";

import React, { useEffect, useState } from "react";
import "./booking.css";
import Image from "next/image";
import { X, Send, ChevronLeft, Check } from "lucide-react";
import { homeContent } from "@/content/homeContent";

interface BookingContainerProps {
    toggleBooking: () => void;
}

const BookingContainer: React.FC<BookingContainerProps> = ({ toggleBooking }) => {
    const [step, setStep] = useState<'location' | 'gender' | 'services'>('location');
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [selectedGender, setSelectedGender] = useState<'Male' | 'Female' | null>(null);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    // Prevent background page scroll while booking overlay is open
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    // Get 7 services from servicesPreview in homeContent
    const servicesList = homeContent.servicesPreview.items.slice(0, 7).map(item => ({
        id: item.id,
        name: item.title,
    }));

    const locationsList = [
        "Guntur",
        "Vijayawada",
        "Ongole",
        "Tenali"
    ];

    const handleLocationSelect = (location: string) => {
        setSelectedLocation(location);
        setTimeout(() => {
            setStep('gender');
        }, 300);
    };

    const handleGenderSelect = (gender: 'Male' | 'Female') => {
        setSelectedGender(gender);
        setTimeout(() => {
            setStep('services');
        }, 300);
    };

    const toggleService = (serviceName: string) => {
        if (selectedServices.includes(serviceName)) {
            setSelectedServices(selectedServices.filter((s) => s !== serviceName));
        } else {
            setSelectedServices([...selectedServices, serviceName]);
        }
    };

    const sendToWhatsApp = () => {
        const phoneNumber = "918125944445";
        let message = `Hello Be Enrich! \n\nI want to book an appointment.\n\n*Location:* ${selectedLocation || "Not selected"}\n*Gender:* ${selectedGender}\n*Services request:* \n`;

        if (selectedServices.length > 0) {
            selectedServices.forEach((service) => {
                message += `• ${service}\n`;
            });
        } else {
            message += "Inquiry about services.";
        }

        message += "\nPlease let me know the available slot.";

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const goBack = () => {
        if (step === 'services') {
            setStep('gender');
            setSelectedServices([]);
            setSelectedGender(null);
        } else if (step === 'gender') {
            setStep('location');
            setSelectedGender(null);
        }
    };

    return (
        <div className="booking-overlay">
            <div className="booking-container">
                <i>Speaker</i>
                <b>Camera</b>
                <span className="deco"></span>

                <div className="booking-header">
                    <Image
                        src="/images/hero/logo.webp"
                        alt="Logo"
                        className="booking-logo"
                        width={100}
                        height={100}
                    />
                    <button className="close-button" onClick={toggleBooking}>
                        <X size={20} color="#D4AC68" />
                    </button>
                </div>
                <hr />

                <div className="h-[420px] relative">
                    {step === 'location' ? (
                        <div className="gender-buttons-container">
                            <h2>Choose Location</h2>
                            {locationsList.map((location) => (
                                <button
                                    key={location}
                                    className={`male-button ${selectedLocation === location ? "selected" : ""}`}
                                    onClick={() => handleLocationSelect(location)}
                                >
                                    {location}
                                </button>
                            ))}
                        </div>
                    ) : step === 'gender' ? (
                        <div className="gender-buttons-container">
                            <h2>Choose Gender</h2>
                            <button
                                className={`male-button ${selectedGender === "Male" ? "selected" : ""}`}
                                onClick={() => handleGenderSelect('Male')}
                            >
                                Male
                            </button>
                            <button
                                className={`female-button ${selectedGender === "Female" ? "selected" : ""}`}
                                onClick={() => handleGenderSelect('Female')}
                            >
                                Female
                            </button>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col">
                            <div className="service-header">
                                <button className="service-back-button" onClick={goBack}>
                                    <ChevronLeft size={24} />
                                </button>
                                <h3>Select Services</h3>
                                <div style={{ width: 32 }}></div>
                            </div>
                            <div className="services-list" data-lenis-prevent>
                                <ul>
                                    {servicesList.map((service) => {
                                        const isSelected = selectedServices.includes(service.name);
                                        return (
                                            <li
                                                key={service.id}
                                                onClick={() => toggleService(service.name)}
                                                className={isSelected ? "selected" : ""}
                                            >
                                                <span>{service.name}</span>
                                                {isSelected && <Check size={16} />}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <button
                                className="whatsapp-button"
                                onClick={sendToWhatsApp}
                                disabled={selectedServices.length === 0}
                            >
                                <Send size={18} />
                                <span>Send Request</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingContainer;
