"use client";

import { useState } from "react";
import colors from "@/theme/colors";
import { homeContent } from "@/content/homeContent";

export default function BookingForm() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const { form } = homeContent.contact;

    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                    <label
                        className={`absolute left-4 top-3 text-sm transition-all duration-300 pointer-events-none ${focusedField === 'name' ? 'text-gold -translate-y-1 scale-90' : 'text-mist/50'}`}
                    >
                        {form.nameLabel}
                    </label>
                    <input
                        type="text"
                        className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-paper focus:outline-none focus:border-gold/50 transition-colors"
                        onFocus={() => setFocusedField('name')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                    />
                </div>

                {/* Phone */}
                <div className="relative">
                    <label
                        className={`absolute left-4 top-3 text-sm transition-all duration-300 pointer-events-none ${focusedField === 'phone' ? 'text-gold -translate-y-1 scale-90' : 'text-mist/50'}`}
                    >
                        {form.phoneLabel}
                    </label>
                    <input
                        type="tel"
                        className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-paper focus:outline-none focus:border-gold/50 transition-colors"
                        onFocus={() => setFocusedField('phone')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                    />
                </div>
            </div>

            {/* Email (Optional) */}
            <div className="relative">
                <label
                    className={`absolute left-4 top-3 text-sm transition-all duration-300 pointer-events-none ${focusedField === 'email' ? 'text-gold -translate-y-1 scale-90' : 'text-mist/50'}`}
                >
                    {form.emailLabel}
                </label>
                <input
                    type="email"
                    className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-paper focus:outline-none focus:border-gold/50 transition-colors"
                    onFocus={() => setFocusedField('email')}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                />
            </div>

            {/* Service & Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service Selection */}
                <div className="relative">
                    <select
                        className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 py-4 text-paper focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                        defaultValue=""
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
                        className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 py-4 text-paper focus:outline-none focus:border-gold/50 transition-colors placeholder-mist/50"
                        style={{ colorScheme: 'dark' }}
                    />
                </div>
            </div>

            {/* Message */}
            <div className="relative">
                <label
                    className={`absolute left-4 top-3 text-sm transition-all duration-300 pointer-events-none ${focusedField === 'message' ? 'text-gold -translate-y-1 scale-90' : 'text-mist/50'}`}
                >
                    {form.messageLabel}
                </label>
                <textarea
                    rows={4}
                    className="w-full bg-stone/30 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-paper focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    onFocus={() => setFocusedField('message')}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-gold text-ink font-bold py-4 rounded-xl hover:bg-goldSoft transition-all duration-300 shadow-lg hover:shadow-gold/20 tracking-wide uppercase text-sm"
            >
                {form.submitText}
            </button>
        </form>
    );
}
