export const homeContent = {
    hero: {
        slides: [
            {
                id: 1,
                image: "/images/hero/men-hair-care-responsive.webp",
                title: "Men Hair Care",
                subtitle: "Precision cuts and styling for the modern man.",
                position: "center",
                slug: "men-hair-care",
            },
            {
                id: 2,
                image: "/images/hero/women-hair-care-responsive.webp",
                title: "Women Hair Care",
                subtitle: "Artistic styling and nourishing rituals.",
                position: "center 20%",
                slug: "women-hair-care",
            },
            {
                id: 3,
                image: "/images/services/chemical-treatment-men-women-hero.webp",
                title: "Chemical Treatments",
                subtitle: "Advanced transformations for men & women.",
                position: "center",
                slug: "chemical-treatments",
            },
            {
                id: 4,
                image: "/images/packages/royal-bride.webp",
                title: "Personal Grooming & Makeup",
                subtitle: "Flawless artistry for every occasion.",
                position: "center top",
                slug: "grooming-makeup",
            },
            {
                id: 5,
                image: "/images/services/skin-care-hero.webp",
                title: "Skin Care",
                subtitle: "Rejuvenating rituals for radiant skin.",
                position: "center 30%",
                slug: "skin-care",
            },
            {
                id: 6,
                image: "/images/hero/manicure-pedicure-hero.webp",
                title: "Manicure & Pedicure",
                subtitle: "Indulgent hand and foot care.",
                position: "center",
                slug: "pedicure-manicure",
            },
            {
                id: 7,
                image: "/images/packages/bridal-groom-hero.webp",
                title: "Bridal & Groom",
                subtitle: "Exquisite journeys for your special day.",
                position: "center 50%",
                slug: "grooming-makeup",
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
        description1: "Be Enrich Beauty Salon offers professional beauty, hair, and wellness services in a refined and relaxing environment. With expert professionals, premium products, and personalized care, we help you look your best and feel confident every day.",
        description2: "Step into a sanctuary of refined grooming and beauty, where every detail is curated for your comfort and confidence.",
        ctaText: "Discover Our Story",
        ctaLink: "/about",
        images: {
            main: "/images/about/about.webp",
            secondary: "/images/about/haircut.webp",
            detail: "/images/about/tools.webp",
        },
    },
    hospitality: {
        badge: "Our Salon",
        title: "A Space Designed for Comfort & Care",
        description: "Experience a clean, calm, and welcoming salon environment where every detail is thoughtfully maintained for your comfort.",
        benefits: [
            "Hygienic & well-maintained",
            "Comfortable seating & calm ambience",
            "Friendly and professional staff"
        ],
        images: {
            main: "/images/saloon/saloon1.webp",
            secondary: "/images/saloon/saloon2.webp",
            detail: "/images/saloon/saloon3.webp",
            fourth: "/images/about/interior.webp"
        }
    },
    servicesPreview: {
        badge: "Signature Menu",
        title: "A Preview of Indulgence",
        description:
            "Expert salon and spa services thoughtfully curated to enhance your beauty, comfort, and confidence.",
        viewAllText: "View All Services",

        items: [
            {
                id: "men-hair-care",
                title: "Men Hair Care",
                description:
                    "Precision cuts and beard styling designed to define the modern man's signature look.",
                image: "/images/services/menhaircare.webp",
            },
            {
                id: "women-hair-care",
                title: "Women Hair Care",
                description:
                    "Artistic styling and nourishing rituals that celebrate your natural beauty and grace.",
                image: "/images/services/hair-studio.webp",
            },
            {
                id: "chemical-treatments",
                title: "Chemical Treatments",
                description:
                    "Advanced color, texture, and smooting transformations using world-class formulations.",
                image: "/images/services/chemical-treatments-mix.webp",
            },
            {
                id: "grooming-makeup",
                title: "Grooming & Make Up",
                description:
                    "Flawless grooming essentials and professional makeup artistry for every special occasion.",
                image: "/images/hero/bride.jpg",
                position: "center 20%",
            },
            {
                id: "skin-care",
                title: "Skin Care",
                description:
                    "Rejuvenating facial therapies designed to restore radiance and youthful vitality.",
                image: "/images/hero/facial.webp",
            },
            {
                id: "pedicure-manicure",
                title: "Pedicure & Manicure",
                description:
                    "Indulgent hand and foot rituals that blend relaxation with expert nail grooming.",
                image: "/images/services/manicure-pedicure.webp",
            },
            {
                id: "body-spa-reflexology",
                title: "Body SPA & Reflexology",
                description:
                    "Holistic body therapies and reflexology designed to de-stress and restore inner balance.",
                image: "/images/hero/body-spa.webp",
            },
        ],
    },

    signaturePackages: {
        badge: "Signature Packages",
        title: "Exquisite Grooming Journeys",
        description: "From everyday grooming to luxury and bridal experiences, our packages are thoughtfully designed to suit every style and celebration.",
        heroImage: "/images/packages/bridal-groom-hero.webp",
        items: [
            {
                name: "Classic",
                price: "₹7,500",
                image: "/images/services/men-hair-hero.webp",
                includes: [
                    "Hair Cut",
                    "Shaving",
                    "Shine Treatment",
                    "Classic Pedicure",
                    "Classic Manicure",
                    "TanPack",
                    "Tan Removal Facial",
                    "Makeup"
                ],
            },
            {
                name: "Luxury",
                price: "₹12,500",
                image: "/images/packages/royal.webp",
                includes: [
                    "Hair Cut",
                    "Shaving",
                    "Shine Treatment",
                    "Luxury Pedicure",
                    "Luxury Manicure",
                    "Tanpack",
                    "Whitening Facial",
                    "Body Polishing",
                    "Makeup",
                ],
            },
            {
                name: "Royal",
                price: "₹15,500",
                image: "/images/gallery/grooming-moment.webp",
                includes: [
                    "Haircut",
                    "Shaving",
                    "Shine Treatment",
                    "Crystal Pedicure",
                    "Crystal Manicure",
                    "Whitening Facial",
                    "Full Body Polishing",
                    "HD Makeup",
                ],
            },
            {
                name: "Classic Bride",
                price: "₹18,000",
                image: "/images/packages/classic-bride.webp",
                includes: [
                    "Hair Cut",
                    "Shine Treatment",
                    "TanPack",
                    "Hair Styling",
                    "Tan Removal Facial",
                    "Classic Pedicure",
                    "Classic Manicure",
                    "Full Body Polishing",
                    "Saree Draping",
                    "Makeup",
                ],
            },
            {
                name: "Elegant Bride",
                price: "₹22,000",
                image: "/images/gallery/bridal-portrait.webp",
                includes: [
                    "Hair Cut",
                    "Shine Treatment",
                    "TanPack",
                    "Luxury Pedicure",
                    "Luxury Manicure",
                    "Whitening Facial",
                    "Saree Draping",
                    "Hair Styling",
                    "Full Body Polishing",
                    "HD Makeup",
                ],
            },
            {
                name: "Royal Bride",
                price: "₹25,000",
                image: "/images/packages/royal-bride.webp",
                includes: [
                    "Hair Cut",
                    "Shine Treatment",
                    "TanPack",
                    "Advanced Hair Styling",
                    "Crystal Pedicure",
                    "Crystal Manicure",
                    "Saree Draping",
                    "Full Body Polishing",
                    "Whitening Facial",
                    "Saree Draping",
                    "Royal Makeup",
                ],
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
                src: "/images/gallery/engin-akyurt-Ix4D4-8cQUU-unsplash.webp",
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
            {
                src: "/images/gallery/kalpa-mahagamage-I3y-aJ4DWng-unsplash.webp",
                alt: "Portrait Photography",
                category: "Portrait",
                ratio: "3/4"
            }
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
                value: "Serving you across Vijayawada, Guntur, Ongole, and Tenali."
            },
            phone: {
                label: "Phone",
                value: "+91 81259 44445"
            },
            email: {
                label: "Email",
                value: "enrich.ap@gmail.com"
            },
            hours: {
                label: "Working Hours",
                value: "Mon - Sun: 9:00 AM - 9:00 PM"
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
                { label: "Men's Haircut & Styling", value: "men-hair" },
                { label: "Women's Haircut & Styling", value: "women-hair" },
                { label: "Chemical Treatments (Color/Straightening)", value: "chemical" },
                { label: "Bridal & Groom Makeup", value: "grooming" },
                { label: "Advanced Skin Care & Facials", value: "skincare" },
                { label: "Luxury Manicure & Pedicure", value: "pedicure-manicure" },
                { label: "Relaxing Body Spa", value: "spa" }
            ]
        }
    },
    footer: {
        brandName: "Be Enrich",
        tagline: "Experience the art of luxury grooming. Where precision meets indulgence.",
        socials: {
            instagram: "https://instagram.com",
            facebook: "https://facebook.com",
            twitter: "https://twitter.com"
        },
        explore: {
            title: "Quick Links",
            links: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Locations", href: "/locations" },
                { label: "Services", href: "/services" },
                { label: "Signature Packages", href: "/#packages" },
                { label: "Our Work", href: "/#gallery" }
            ]
        },
        services: {
            title: "Our Services",
            links: [
                { label: "Men Hair Care", href: "/services/men-hair-care" },
                { label: "Women Hair Care", href: "/services/women-hair-care" },
                { label: "Chemical Treatments", href: "/services/chemical-treatments" },
                { label: "Grooming & Make Up", href: "/services/grooming-makeup" },
                { label: "Skin Care", href: "/services/skin-care" },
                { label: "Pedicure & Manicure", href: "/services/pedicure-manicure" },
                { label: "Body SPA & Reflexology", href: "/services/body-spa-reflexology" }
            ]
        },
        contact: {
            title: "Visit Us",
            address: "Serving you across Vijayawada, Guntur, Ongole, and Tenali.",
            phone: "+91 81259 44445",
            email: "enrich.ap@gmail.com"
        },
        copyright: "© 2025 Be Enrich Salon. All rights reserved.",
        designedBy: "Designed with Elegance"
    },
    testimonials: {
        badge: "Client Experiences",
        title: "Loved by Our Clients",
        subtitle: "Real stories from people who trust Be Enrich Salon & Spa",
        items: [
            {
                id: 1,
                name: "Lakshmi P.",
                quote: "The best salon in Vijayawada! Their hair spa treatment completely transformed my dry hair. The staff is so polite and the ambiance is pure luxury.",
                service: "Signature Hair Spa",
                rating: 5
            },
            {
                id: 2,
                name: "Sravani K.",
                quote: "I visited the Guntur branch for a facial, and the glow is real! They use genuine premium products and the massage was incredibly relaxing.",
                service: "Radiance Facial",
                rating: 5
            },
            {
                id: 3,
                name: "Arjun Reddy",
                quote: "Finally a premium grooming place in Ongole. The haircut and beard styling were on point. Great vibe and professional service.",
                service: "Men's Grooming",
                rating: 5
            },
            {
                id: 4,
                name: "Kavya M.",
                quote: "Be Enrich in Tenali made my wedding day perfect. The bridal makeup was subtle yet stunning, exactly how I wanted it. Highly recommended!",
                service: "Bridal Makeup",
                rating: 5
            }
        ]
    },
    brands: {
        title: "Our Trusted Partners",
        subtitle: "Collaborating with the world's finest beauty brands",
        sideImage: "/images/brands/sissor.png",
        items: [
            { name: "Algotherm", logo: "/images/brands/algotherm-logo-horizontal.webp" },
            { name: "Skeyndor", logo: "/images/brands/skr_logo-black_cr.webp" },
            { name: "Keune", logo: "/images/brands/keune-logo.webp" },
            { name: "Kryolan", logo: "/images/brands/kryolan-professional-make-up-logo.webp" },
            { name: "Redken", logo: "/images/brands/redkenlogo.webp" },
            { name: "Wella Professionals", logo: "/images/brands/wella-logo.webp" },
            { name: "M.A.C", logo: "/images/brands/MAC-Cosmetics-Logo.webp" },
            { name: "Schwarzkopf Professional", logo: "/images/brands/Science-Create-Beauty-Logo-Black.webp" },
            { name: "O3+", logo: "/images/brands/o3.webp" },
            { name: "KooSwalla", logo: "/images/brands/LOGO.webp" },
            { name: "Luchiana", logo: "/images/brands/luchiana-1914125123.webp" },
            { name: "Maybelline", logo: "/images/brands/Maybelline-Logo.svg.png" },
            { name: "Nykaa", logo: "/images/brands/Nykaa_New_Logo.svg.png" }
        ]
    },
};
