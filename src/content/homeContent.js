export const homeContent = {
    hero: {
        slides: [
            {
                id: 1,
                image: "/images/hero/womenhaircare.jpg",
                title: "Hair Studio",
                subtitle: "Precision cuts and styling tailored to your individuality.",
                position: "center top",
            },
            {
                id: 2,
                image: "/images/hero/facial.webp",
                title: "Skin & Glow Rituals",
                subtitle: "Personalised skin rituals for a healthy, luminous glow.",
                position: "center 30%",
            },
            {
                id: 3,
                image: "/images/hero/bride.jpg",
                title: "Bridal & Groom Makeovers",
                subtitle: "Timeless magnificent looks for your special day.",
                position: "center 35%",
            },
            {
                id: 4,
                image: "/images/hero/body-spa.webp",
                title: "Body Spa & Relaxation",
                subtitle: "Holistic therapies designed to de-stress and restore balance.",
                position: "center",
            },
            {
                id: 5,
                image: "/images/gallery/grooming-moment.webp",
                title: "Personal Grooming & Nail Care",
                subtitle: "Flawless grooming essentials and expert nail care.",
                position: "center 70%",
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
                image: "/images/services/menhaircare.webp",
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
                image: "/images/packages/elegant-bride.webp",
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
                src: "/images/hero/bride.jpg",
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
                value: "+91 8125944445"
            },
            email: {
                label: "Email",
                value: "enrich.ap@gmail.com"
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
        socials: {
            instagram: "https://instagram.com",
            facebook: "https://facebook.com",
            twitter: "https://twitter.com"
        },
        explore: {
            title: "Explore",
            links: [
                { label: "Services", href: "/#services" },
                { label: "Signature Packages", href: "/#packages" },
                { label: "Our Work", href: "/#gallery" },
                { label: "About Us", href: "/about" }
            ]
        },
        support: {
            title: "Support",
            links: [
                { label: "Book Appointment", href: "/#booking" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "FAQ", href: "#" }
            ]
        },
        contact: {
            title: "Contact Us",
            address: "2nd Floor, Shop No 12,13A, Trendset Mall, Sai Nagar, Kala Nagar, Acharya Ranga Nagar, Benz Circle, Vijayawada, Andhra Pradesh 520008",
            phone: "+91 8125944445",
            email: "enrich.ap@gmail.com"
        },
        copyright: "Be Enrich Salon. All rights reserved.",
        designedBy: "Designed with Elegance"
    },
    testimonials: {
        badge: "Client Experiences",
        title: "Loved by Our Clients",
        subtitle: "Real stories from people who trust Be Enrich Salon & Spa",
        items: [
            {
                id: 1,
                name: "Priya R.",
                quote: "The staff are very professional and friendly. I loved the (hair cut) and facial. The salon is clean and relaxing.",
                service: "Hair & Skin Care",
                rating: 5
            },
            {
                id: 2,
                name: "Anjali M.",
                quote: "Finally found a salon that understands curly hair! The stylist took their time to explain the process and the results are amazing.",
                service: "Hair Styling",
                rating: 5
            },
            {
                id: 3,
                name: "Rohan K.",
                quote: "The best grooming experience I've had in Delhi. Professional, precise, and a very premium atmosphere.",
                service: "Men's Grooming",
                rating: 5
            },
            {
                id: 4,
                name: "Sanya D.",
                quote: "Their bridal makeup is absolutely stunning. They made me feel so comfortable and I looked exactly how I dreamed.",
                service: "Bridal Makeup",
                rating: 5
            }
        ]
    },
    brands: {
        title: "Our Trusted Partners",
        subtitle: "Collaborating with the world's finest beauty brands",
        sideImage: "/images/brands/productimages.webp",
        items: [
            { name: "Algotherm", logo: "/images/brands/algotherm-logo-horizontal.webp" },
            { name: "Skeyndor", logo: "/images/brands/skr_logo-black_cr.webp" },
            { name: "Keune", logo: "/images/brands/keune-logo.webp" },
            { name: "Kryolan", logo: "/images/brands/kryolan-professional-make-up-logo.webp" },
            { name: "Redken", logo: "/images/brands/redkenlogo.webp" },
            { name: "Wella Professionals", logo: "/images/brands/wella-logo.webp" },
            { name: "M.A.C", logo: "/images/brands/MAC-Cosmetics-Logo.webp" },
            { name: "Schwarzkopf Professional", logo: "/images/brands/Science-Create-Beauty-Logo-Black.webp" },
            { name: "L'Oréal Professionnel", logo: "/images/brands/OIP.webp" },
            { name: "O3+", logo: "/images/brands/OIP (2).webp" },
            { name: "KooSwalla", logo: "/images/brands/LOGO.webp" }
        ]
    },
};
