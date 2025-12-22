"use client";

import React, { useEffect, useState } from "react";
import "./booking.css";
import Image from "next/image";
import { X, Send } from "lucide-react";

interface BookingContainerProps {
    toggleBooking: () => void;
}

const BookingContainer: React.FC<BookingContainerProps> = ({ toggleBooking }) => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    // Prevent background page scroll while booking overlay is open
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    const services = [
        { category: "Haircut - Men", name: "Classic Cut", price: "₹300" },
        { category: "Haircut - Men", name: "Style Cut", price: "₹400" },
        { category: "Haircut - Men", name: "Kids Cut", price: "₹200" },

        { category: "Beard & Shave", name: "Beard Trim", price: "₹150" },
        { category: "Beard & Shave", name: "Beard Style", price: "₹200" },
        { category: "Beard & Shave", name: "Royal Shave", price: "₹250" },

        { category: "Hair Color - Men", name: "Full Color", price: "₹800" },
        { category: "Hair Color - Men", name: "Root Touch-up", price: "₹500" },
        { category: "Hair Color - Men", name: "Highlights", price: "₹1200" },

        { category: "Spa & Treatments", name: "Head Massage", price: "₹300" },
        { category: "Spa & Treatments", name: "Hair Spa", price: "₹600" },
        { category: "Spa & Treatments", name: "Facial", price: "₹500" },

        { category: "Haircut - Women", name: "U-Cut", price: "₹200" },
        { category: "Haircut - Women", name: "Straight Cut", price: "₹150" },
        { category: "Haircut - Women", name: "Deep U-Cut", price: "₹300" },
        { category: "Haircut - Women", name: "V-Cut", price: "₹300" },
        { category: "Haircut - Women", name: "Layer Cut", price: "₹350" },

        { category: "Hair Color - Women", name: "Full Color", price: "₹1500" },
        { category: "Hair Color - Women", name: "Root Touch-up", price: "₹800" },
        { category: "Hair Color - Women", name: "Highlights", price: "₹2000" },
        { category: "Hair Color - Women", name: "Balayage", price: "₹3000" },

        { category: "Hair Treatments", name: "Hair Spa", price: "₹800" },
        { category: "Hair Treatments", name: "Keratin", price: "₹3500" },
        { category: "Hair Treatments", name: "Smoothening", price: "₹3000" },
        { category: "Hair Treatments", name: "Rebonding", price: "₹4000" },

        { category: "Bridal Services", name: "Bridal Makeup", price: "₹8000" },
        { category: "Bridal Services", name: "Pre-Bridal Package", price: "₹15000" },
        { category: "Bridal Services", name: "Party Makeup", price: "₹3000" },

        { category: "Facial & Skin", name: "Gold Facial", price: "₹1200" },
        { category: "Facial & Skin", name: "Diamond Facial", price: "₹1500" },
        { category: "Facial & Skin", name: "Clean-up", price: "₹600" },
        { category: "Facial & Skin", name: "Bleach", price: "₹400" },
    ];

    const toggleService = (serviceName: string, price: string) => {
        const serviceStr = `${serviceName} - ${price}`;
        if (selectedServices.includes(serviceStr)) {
            setSelectedServices(selectedServices.filter((s) => s !== serviceStr));
        } else {
            setSelectedServices([...selectedServices, serviceStr]);
        }
    };

    const sendToWhatsApp = () => {
        const phoneNumber = "6281303917";
        let message = "Hello! I would like to book the following services:\n\n";

        if (selectedServices.length > 0) {
            selectedServices.forEach((service, index) => {
                message += `${index + 1}. ${service}\n`;
            });
        } else {
            message += "I would like to inquire about your services.";
        }

        message += "\n\nPlease confirm availability and booking details.";

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const groupedServices = services.reduce((acc, service) => {
        if (!acc[service.category]) {
            acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
    }, {} as Record<string, typeof services>);

    // Ensure mouse wheel scroll works inside the services list
    const onWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        target.scrollTop += e.deltaY;
        e.stopPropagation();
    };

    return (
        <div className="booking-overlay">
            <div className="booking-container">
                <i>Speaker</i>
                <b>Camera</b>
                <div className="booking-header">
                    <Image
                        src="/images/hero/logo.webp"
                        alt="Logo"
                        className="booking-logo"
                        width={40}
                        height={40}
                    />
                    <button className="close-button" onClick={toggleBooking}>
                        <X size={18} color="gray" />
                    </button>
                </div>
                <hr />

                <div className="services-container">
                    <div className="services-header">
                        <h3>💇 Select Services</h3>
                        {selectedServices.length > 0 && (
                            <span className="selected-count">{selectedServices.length} selected</span>
                        )}
                    </div>

                    <div
                        className="all-services"
                        onWheel={onWheelScroll}
                        onTouchStart={(e) => {
                            // Capture gesture start to avoid bubbling to the page
                            e.stopPropagation();
                        }}
                        onTouchMove={(e) => {
                            // Keep touch scrolling inside the list on mobile
                            e.stopPropagation();
                        }}
                    >
                        {Object.entries(groupedServices).map(([category, categoryServices]) => (
                            <div key={category}>
                                <h3 className="service-type">{category}</h3>
                                <ul>
                                    {categoryServices.map((service) => {
                                        const serviceStr = `${service.name} - ${service.price}`;
                                        const isSelected = selectedServices.includes(serviceStr);
                                        return (
                                            <li
                                                key={service.name}
                                                onClick={() => toggleService(service.name, service.price)}
                                                className={isSelected ? "selected" : ""}
                                            >
                                                <span className="service-name">{service.name}</span>
                                                <span className="service-price">{service.price}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <button className="whatsapp-button" onClick={sendToWhatsApp}>
                        <Send size={18} />
                        <span>Send to WhatsApp</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingContainer;
