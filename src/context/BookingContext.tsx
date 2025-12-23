"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import BookingContainer from "@/components/booking/BookingContainer";

interface BookingContextType {
    isBookingOpen: boolean;
    toggleBooking: () => void;
    openBooking: () => void;
    closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const toggleBooking = () => {
        setIsBookingOpen((prev) => !prev);
    };

    const openBooking = () => {
        setIsBookingOpen(true);
    };

    const closeBooking = () => {
        setIsBookingOpen(false);
    };

    return (
        <BookingContext.Provider value={{ isBookingOpen, toggleBooking, openBooking, closeBooking }}>
            {children}
            {isBookingOpen && <BookingContainer toggleBooking={closeBooking} />}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
};
