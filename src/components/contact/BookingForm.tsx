"use client";

import { useState } from "react";
import colors from "@/theme/colors";
import { homeContent } from "@/content/homeContent";

export default function BookingForm() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const { form } = homeContent.contact;
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
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
        if (!formData.name || !formData.phone || !formData.service) {
            alert("Please fill in the required fields (Name, Phone, Service).");
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch("https://formsubmit.co/ajax/vanibodasingu@gmail.com", {
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
                    service: "",
                    date: "",
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

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                    <label
                        className={`absolute left-4 top-3 text-sm transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name ? 'text-gold -translate-y-1 scale-90' : 'text-mist/50'}`}
                    >
                        {form.nameLabel}
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-paper focus:outline-none focus:border-gold/50 transition-colors"
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                    />
                </div>

                {/* Phone */}
                <div className="relative">
                    <label
                        className={`absolute left-4 top-3 text-sm transition-all duration-300 pointer-events-none ${focusedField === 'phone' || formData.phone ? 'text-gold -translate-y-1 scale-90' : 'text-mist/50'}`}
                    >
                        {form.phoneLabel}
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-paper focus:outline-none focus:border-gold/50 transition-colors"
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        required
                    />
                </div>
            </div>

            {/* Email (Optional) */}
            <div className="relative">
                <label
                    className={`absolute left-4 top-3 text-sm transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email ? 'text-gold -translate-y-1 scale-90' : 'text-mist/50'}`}
                >
                    {form.emailLabel}
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-paper focus:outline-none focus:border-gold/50 transition-colors"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                />
            </div>

            {/* Service & Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service Selection */}
                <div className="relative">
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 py-4 text-paper focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                    >
                        <option value="" disabled>{form.serviceLabel}</option>
                        {form.serviceOptions.map((option) => (
                            <option key={option.value} className="bg-stone text-paper" value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-mist/50">
                        ▼
                    </div>
                </div>

                {/* Date */}
                <div className="relative">
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 py-4 text-paper focus:outline-none focus:border-gold/50 transition-colors placeholder-mist/50"
                        style={{ colorScheme: 'dark' }}
                    />
                </div>
            </div>

            {/* Message */}
            <div className="relative">
                <label
                    className={`absolute left-4 top-3 text-sm transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message ? 'text-gold -translate-y-1 scale-90' : 'text-mist/50'}`}
                >
                    {form.messageLabel}
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-paper focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full font-bold py-4 rounded-xl transition-all duration-300 shadow-lg tracking-wide uppercase text-sm ${status === 'success'
                    ? 'bg-green-600 text-white cursor-default shadow-none'
                    : status === 'error'
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gold text-ink hover:bg-goldSoft hover:shadow-gold/20'
                    }`}
            >
                {status === 'loading' ? 'Sending Request...'
                    : status === 'success' ? 'Request Sent Successfully!'
                        : status === 'error' ? 'Failed - Try Again'
                            : form.submitText}
            </button>
        </form>
    );
}
