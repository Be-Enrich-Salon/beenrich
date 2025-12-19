export const homeContent = {
    hero: {
        slides: [
            {
                id: 1,
                image: "/images/hero/hair-cut.webp",
                title: "Luxury Hair Care",
                subtitle: "Precision cuts and styling tailored to your individuality.",
            },
            {
                id: 2,
                image: "/images/hero/hair-spa.webp",
                title: "Advanced Hair Treatments",
                subtitle: "Restorative therapies designed for strength, shine, and balance.",
            },
            {
                id: 3,
                image: "/images/hero/hair-color.webp",
                title: "Signature Hair Color",
                subtitle: "Expert color techniques for natural, radiant results.",
            },
            {
                id: 4,
                image: "/images/hero/facial.webp",
                title: "Skin Care & Facials",
                subtitle: "Personalised skin rituals for a healthy, luminous glow.",
            },
            {
                id: 5,
                image: "/images/hero/body-spa.webp",
                title: "Bridal, Makeup & Wellness",
                subtitle: "Timeless bridal looks and indulgent spa experiences.",
            },
        ]

    },
    stats: {
        items: [
            { label: "Years Experience", value: "20+" },
            { label: "Happy Customers", value: "500+" },
            { label: "Awards Won", value: "100+" },
            { label: "Premium Products", value: "50+" },
        ],
    },
    features: {
        badge: "Why Choose Us",
        title: "Crafted Trust,",
        titleAccent: "Proven Expertise",
        description: "A luxury environment guided by meticulous hygiene standards and specialists who genuinely listen to your needs.",
        items: [
            {
                title: "Experienced Professionals",
                description: "Our highly trained stylists and technicians deliver refined beauty services backed by decades of combined expertise.",
            },
            {
                title: "Personalised Beauty",
                description: "Bespoke treatments crafted with care, premium brands, and a deep understanding of individual beauty needs.",
                featured: true,
            },
            {
                title: "Premium Products",
                description: "Indulge in world-class formulations from L'Oréal Professionnel, Redken, and Kerastase for lasting results.",
            },
        ],
    },
    about: {
        badge: "Our Philosophy",
        title: "Crafting Beauty,",
        titleAccent: "Defining Style",
        description1: "We believe that true style is timeless. Our approach combines traditional craftsmanship with modern techniques to create a look that is uniquely yours.",
        description2: "Step into a sanctuary of refined grooming and beauty, where every detail is curated for your comfort and confidence.",
        ctaText: "Discover Our Story",
        ctaLink: "/about",
        images: {
            main: "/images/about/haircut.webp",
            secondary: "/images/about/interior.webp",
            detail: "/images/about/tools.webp",
        },
    },
    servicesPreview: {
        badge: "Signature Menu",
        title: "A Preview of Indulgence",
        description:
            "Expert salon and spa services thoughtfully curated to enhance your beauty, comfort, and confidence.",
        viewAllText: "View All Services",

        items: [
            {
                title: "Hair Styling & Care",
                description:
                    "Professional haircuts, styling, colouring, hair spa, and treatments tailored to your hair type and lifestyle.",
                image: "/images/hero/hair-cut.webp",
            },
            {
                title: "Beard & Grooming",
                description:
                    "Expert beard grooming, trimming, shaping, and personal care for a sharp and confident look.",
                image: "/images/hero/hair-cut.webp",
            },
            {
                title: "Skin, Face & Waxing",
                description:
                    "Facials, clean-ups, skin polishing, tan removal, threading, and hygienic waxing services for radiant skin.",
                image: "/images/hero/facial.webp",
            },
            {
                title: "Massage & Body Spa",
                description:
                    "Relaxing body massages, spa therapies, and wellness treatments designed to refresh body and mind.",
                image: "/images/hero/body-spa.webp",
            },
            {
                title: "Manicure & Pedicure",
                description:
                    "Nourishing manicure and pedicure services to care for, repair, and beautify your hands and feet.",
                image: "/images/hero/body-spa.webp",
            },
            {
                title: "Makeup & Bridal Services",
                description:
                    "Professional makeup, bridal styling, and event-ready looks crafted for your most special occasions.",
                image: "/images/hero/hair-spa.webp",
            },
        ],
    },

    bridal: {
        badge: "Bridal Services",
        title: "Your dream bridal look,",
        titleAccent: "perfectly crafted.",
        description: "Every bride deserves to feel timeless, confident, and radiant on her special day.",
        ctaMain: "View All Bridal Packages",
        ctaSecondary: "Book Bridal Consultation",
        heroImage: "/images/bridal/hero-bg.webp",
        packages: [
            {
                name: "Royal Bride",
                description: "A complete luxury bridal transformation.",
                image: "/images/bridal/package-royal.webp",
            },
            {
                name: "Elegant Bride",
                description: "Graceful, understated, and timeless.",
                image: "/images/bridal/package-elegant.webp",
            },
            {
                name: "Classic Bride",
                description: "Traditional charm with a modern touch.",
                image: "/images/bridal/package-classic.webp",
            },
        ],
    },
    gallery: {
        title: "Our Work",
        subtitleStart: "Crafted transformations &",
        subtitleAccent: "timeless beauty",
        images: [
            {
                src: "/images/gallery/bridal-portrait.webp",
                alt: "Bridal Portrait",
                category: "Bridal",
                ratio: "3/4"
            },
            {
                src: "/images/gallery/hair-styling.webp",
                alt: "Intricate Hair Styling",
                category: "Hair",
                ratio: "1/1"
            },
            {
                src: "/images/gallery/makeup-detail.webp",
                alt: "Artistic Makeup Detail",
                category: "Makeup",
                ratio: "4/3"
            },
            {
                src: "/images/gallery/editorial-fashion.webp",
                alt: "Editorial Fashion",
                category: "Fashion",
                ratio: "3/5"
            },
            {
                src: "/images/gallery/salon-ambience.webp",
                alt: "Luxury Salon Ambience",
                category: "Salon",
                ratio: "16/9"
            },
            {
                src: "/images/gallery/grooming-moment.webp",
                alt: "Grooming Essentials",
                category: "Grooming",
                ratio: "4/5"
            },
        ],
    },
    contact: {
        title: "Contact &",
        titleAccent: "Book Appointment",
        subtitle: "We’re here to make your experience seamless and luxurious",
        info: {
            title: "Contact Information",
            description: "Visit our luxury salon for a transformative experience. We are here to assist you with all your beauty and grooming needs.",
            address: {
                label: "Address",
                value: ["123 Luxury Lane, Golden Enclave,", "New Delhi, India 110001"]
            },
            phone: {
                label: "Phone",
                value: "+91 98765 43210"
            },
            email: {
                label: "Email",
                value: "bookings@beenrich.com"
            },
            hours: {
                label: "Working Hours",
                value: "Mon - Sun: 10:00 AM - 9:00 PM"
            }
        },
        form: {
            title: "Request an Appointment",
            nameLabel: "Full Name",
            phoneLabel: "Phone Number",
            emailLabel: "Email Address (Optional)",
            serviceLabel: "Select Service",
            messageLabel: "Message (Optional)",
            submitText: "Book Appointment",
            serviceOptions: [
                { label: "Bridal Makeup", value: "bridal" },
                { label: "Hair Styling", value: "hair" },
                { label: "Skincare Treatment", value: "skincare" },
                { label: "Grooming", value: "grooming" }
            ]
        }
    },
    footer: {
        brandName: "Be Enrich",
        tagline: "Premium salon and spa experiences that blend artistry, science, and heartfelt hospitality.",
        explore: {
            title: "Explore",
            links: [
                { label: "Services", href: "#services" },
                { label: "Bridal Collection", href: "#bridal" },
                { label: "Our Work", href: "#gallery" },
                { label: "About Us", href: "#about" }
            ]
        },
        support: {
            title: "Support",
            links: [
                { label: "Book Appointment", href: "#booking" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "FAQ", href: "#" }
            ]
        },
        contact: {
            title: "Contact Us",
            address: "123 Luxury Lane, Golden Enclave, New Delhi, India",
            phone: "+91 98765 43210",
            email: "hello@beenrich.com"
        },
        copyright: "Be Enrich Salon. All rights reserved.",
        designedBy: "Designed with Elegance"
    }
};
