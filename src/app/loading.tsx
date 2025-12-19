"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper text-ink">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-24 w-64 mb-8"
            >
                <Image
                    src="/images/hero/logo.webp"
                    alt="Be Enrich"
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>

            <div className="w-64 h-[2px] bg-gold/20 overflow-hidden relative rounded-full">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    className="absolute inset-y-0 left-0 bg-gold"
                />
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 font-display text-lg tracking-widest text-gold"
            >
                Loading...
            </motion.p>
        </div>
    );
}
