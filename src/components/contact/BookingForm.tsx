"use client";

import { useState } from "react";
import { homeContent } from "@/content/homeContent";
import { ChevronDown } from "lucide-react";

export default function BookingForm() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const { form } = homeContent.contact;
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        service: "",
        message: ""
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.phone || !formData.service || !formData.location) {
            alert("Please fill in the required fields (Name, Phone, Location, Service).");
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch("https://formsubmit.co/ajax/enrich.ap@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Request_Type: "Appointment Booking",
                    ...formData,
                    _subject: `New Appointment Request | ${formData.name}`,
                    _template: "table",
                    _captcha: "false",
                    _autoresponse: "Thank you for your request. We will confirm your appointment shortly."
                })
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    location: "",
                    service: "",
                    message: ""
                });
                setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
            } else {
                console.error("Form submission failed:", result);
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

    const inputClasses = "w-full bg-[#222] border border-[#333] rounded-lg px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-gold/50 transition-colors placeholder-gray-500";
    const labelClasses = "block text-xs text-gray-400 mb-1 ml-1";

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={form.nameLabel}
                        className={inputClasses}
                        required
                    />
                </div>

                {/* Phone */}
                <div>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={form.phoneLabel}
                        className={inputClasses}
                        required
                    />
                </div>
            </div>

            {/* Email (Optional) */}
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={form.emailLabel}
                    className={inputClasses}
                />
            </div>

            {/* Location Selection */}
            <div className="relative">
                <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none`}
                    required
                >
                    <option value="" disabled>Select Location</option>
                    {["Vijayawada", "Guntur", "Ongole", "Tenali"].map((loc) => (
                        <option key={loc} className="bg-[#222]" value={loc}>
                            {loc}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <ChevronDown size={16} />
                </div>
            </div>

            {/* Service Selection */}
            <div className="relative">
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none`}
                >
                    <option value="" disabled>Select Service</option>
                    {form.serviceOptions.map((option) => (
                        <option key={option.value} className="bg-[#222]" value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <ChevronDown size={16} />
                </div>
            </div>

            {/* Message */}
            <div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={form.messageLabel}
                    rows={4}
                    className={`${inputClasses} resize-none`}
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full font-bold py-3 rounded-lg transition-all duration-300 shadow-md tracking-wider uppercase text-xs ${status === 'success'
                    ? 'bg-green-600 text-white cursor-default shadow-none'
                    : status === 'error'
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-[#C5A059] text-[#111] hover:bg-[#b08d4a]' // Gold color matching image
                    }`}
            >
                {status === 'loading' ? 'Sending...'
                    : status === 'success' ? 'Request Sent'
                        : status === 'error' ? 'Failed - Try Again'
                            : 'BOOK APPOINTMENT'}
            </button>
        </form>
    );
}
