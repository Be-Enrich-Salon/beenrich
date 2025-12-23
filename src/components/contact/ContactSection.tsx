"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import BookingForm from "./BookingForm";
import { homeContent } from "@/content/homeContent";
import { useBooking } from "@/context/BookingContext";

export default function ContactSection() {
    const { openBooking } = useBooking();
    return (
        <section id="contact" className="py-24 bg-[#111111] text-paper">
            <div className="section-shell">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display text-gold mb-3">
                        Contact & Book Appointment
                    </h2>
                    <p className="text-mist/70 font-light">
                        We&apos;re here to make your experience seamless and luxurious
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-between"
                    >
                        <ContactInfo />

                        {/* WhatsApp Button now opens booking modal */}
                        <div className="mt-8">
                            <button
                                onClick={openBooking}
                                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-[#25D366]/20"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-2.846-.828-.907-.372-1.527-.962-1.586-1.036-.058-.075-.602-.802-.602-1.529 0-.728.375-1.093.51-1.228.149-.149.349-.19.481-.19.131 0 .22.001.323.003.103.002.22.002.329.271.121.29.418 1.021.454 1.096.036.075.06.166.012.261-.048.095-.083.159-.151.244-.055.068-.112.138-.174.204-.067.071-.137.149-.06.284.075.131.334.552.72.896.496.442.923.585 1.056.649.134.065.217.06.291-.018.077-.08.319-.372.404-.5.086-.129.176-.107.294-.064.12.043.766.36 0.899.426.133.065.22.097.251.152.031.055.031.321-.113.726z" />
                                </svg>
                                Chat on WhatsApp
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#1a1a1a] p-8 md:p-10 rounded-xl border border-white/5 shadow-2xl"
                    >
                        <h3 className="text-2xl font-display text-white mb-8">Request an Appointment</h3>
                        <BookingForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
