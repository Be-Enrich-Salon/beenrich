export const servicesContent = {
    hero: {
        title: "Our Services",
        subtitle: "Crafted Beauty & Grooming Experiences",
        description:
            "Professional hair, skin, grooming & spa services designed for comfort and confidence.",
    },
    categories: [
        {
            id: "men-hair-care",
            title: "Men Hair Care",
            description:
                "Precision cuts, sharp beard styling, and restorative hair treatments tailored for the modern man.",
            image: "/images/hero/men-hair-hero.webp",
        },
        {
            id: "women-hair-care",
            title: "Women Hair Care",
            description:
                "Artistic styling, nourishing spa rituals, and transformational cuts that define your personal style.",
            image: "/images/hero/hair-spa.webp",
        },
        {
            id: "chemical-treatments",
            title: "Chemical Treatments",
            description:
                "Advanced texturizing and color transformations using premium formulations tailored for everyone.",
            image: "/images/hero/hair-color.webp",
        },
        {
            id: "grooming-makeup",
            title: "Grooming & Make Up",
            description:
                "Flawless grooming essentials and professional makeup artistry for every celebration.",
            image: "/images/services/makeup-hero.webp",
        },
        {
            id: "skin-care",
            title: "Skin Care",
            description:
                "Dermatologically inspired facial rituals designed to restore radiance and youthful vitality.",
            image: "/images/hero/facial.webp",
        },
        {
            id: "pedicure-manicure",
            title: "Pedicure & Manicure",
            description:
                "Indulgent hand and foot care rituals involving exfoliation, massage, and expert nail grooming.",
            image: "/images/hero/body-spa.webp",
        },
        {
            id: "body-spa-reflexology",
            title: "Body SPA & Reflexology",
            description:
                "Holistic wellness journeys designed to de-stress the body and balance the soul.",
            image: "/images/hero/body-spa.webp",
        },
    ],
    "men-hair-care": {
        slug: "men-hair-care",
        hero: {
            title: "Men Hair Care",
            subtitle: "Precision Grooming & Expert Hair Solutions For Modern Men",
            image: "/images/services/men-hair-hero.webp",
            cta: "Book Appointment",
        },
        intro: {
            heading: "Refining The Modern Gentleman",
            description: [
                "At Be Enrich, we understand that men’s grooming is an art form. Our expert stylists specialize in precision cuts and beard sculpting that enhance your natural features and bone structure.",
                "Using only premium products and techniques, we ensure a relaxing experience that leaves you looking sharp and feeling confident. Whether it's a classic cut or a complete transformation, you are in expert hands.",
            ],
        },
        popularServices: [
            { title: "Creative Director Cut", description: "Expert styling by our top director.", image: "/images/services/bearddesign.webp" },
            { title: "Beard Design", description: "Sharp, sculpted beard shaping.", image: "/images/services/men-hair-hero.webp" },
            { title: "Global Color", description: "Rich, natural-looking color.", image: "/images/services/globalhair.webp" },
            { title: "Hair Spa", description: "Deep conditioning therapy.", image: "/images/hero/hair-spa.webp" },
        ],
        detailedSections: [
            {
                title: "Haircut & Styling",
                description: "Experience precision and style with our range of haircuts.",
                image: "/images/services/men-hair-hero.webp",
                items: [
                    { name: "Creative Director", price: "₹999" },
                    { name: "Creative Stylist", price: "₹799" },
                    { name: "Senior Stylist", price: "₹260" },
                    { name: "Kids Hair Cut (Male)", price: "₹250" },
                    { name: "Beard Trim", price: "₹100" },
                    { name: "Normal Shave", price: "₹120" },
                    { name: "French Beard Shave", price: "₹140" },
                    { name: "Beard Design", price: "₹150" },
                ],
            },
            {
                title: "Hair Spa",
                description: "Revitalize your scalp and hair health with our premium spa therapies.",
                image: "/images/hero/hair-spa.webp",
                items: [
                    { name: "Hair SPA - Exotic", price: "₹800" },
                    { name: "Hair SPA - Alchemy", price: "₹1500" },
                    { name: "Hair SPA - Keratin", price: "₹1600" },
                ],
            },
            {
                title: "Color",
                description: "Enhance your look with our professional color services.",
                image: "/images/services/chemical-hero.webp",
                items: [
                    { name: "Global Color", price: "₹800" },
                    { name: "Crown Highlights", price: "₹1000" },
                    { name: "Side Lock & Mustache", price: "₹200" },
                    { name: "Global Ammonia Free", price: "₹900" },
                    { name: "Highlights Global", price: "₹2500" },
                ],
            },
            {
                title: "Alfaparf Color",
                description: "Premium Italian color treatments for superior shine and care.",
                image: "/images/services/globalhair.webp",
                items: [
                    { name: "Global Color", price: "₹1200" },
                    { name: "Crown Highlights", price: "₹1200" },
                    { name: "Side Lock & Mustache", price: "₹450" },
                    { name: "Global Ammonia Free", price: "₹1300" },
                    { name: "Highlights Global", price: "₹2700" },
                ],
            },
            {
                title: "Head Massage",
                description: "Relaxing head massages to relieve stress and nourish your scalp.",
                image: "/images/services/headmen.webp",
                items: [
                    { name: "Olive Oil", price: "₹300" },
                    { name: "Almond Oil", price: "₹300" },
                    { name: "Aroma Oil", price: "₹500" },
                ],
            },
        ],
        whyChooseUs: [
            { title: "Tailored Grooming", description: "Cuts specifically designed for you." },
            { title: "Complete Care", description: "From beard sculpting to scalp treatments." },
            { title: "Relaxing Experience", description: "Stress-free environment." },
            { title: "Premium Products", description: "Top-tier international brands." },
        ],
        pricing: [
            { name: "Creative Director Cut", price: "₹999" },
            { name: "Creative Stylist Cut", price: "₹799" },
            { name: "Senior Stylist Cut", price: "₹260" },
            { name: "Kids Hair Cut", price: "₹250" },
            { name: "Beard Trim", price: "₹100" },
            { name: "Global Color", price: "₹800" },
            { name: "Hair Spa Exotic", price: "₹800" },
        ],
        cta: {
            headline: "Elevate Your Style",
            subtext: "Book your appointment today for a premium grooming experience.",
            buttonText: "Book Appointment",
        },
        related: [
            { id: "skin-care", title: "Skin Care", image: "/images/hero/facial.webp" },
            { id: "body-spa-reflexology", title: "Body Spa", image: "/images/hero/body-spa.webp" },
            { id: "pedicure-manicure", title: "Pedicure", image: "/images/hero/body-spa.webp" },
        ]
    },
    "women-hair-care": {
        slug: "women-hair-care",
        hero: {
            title: "Women Hair Care",
            subtitle: "Artistic Styling & Nourishing Rituals For timeless Beauty",
            image: "/images/services/women-hair-hero.webp",
            cta: "Book Appointment",
        },
        intro: {
            heading: "The Art of Hair Transformation",
            description: [
                "Be Enrich takes pride in giving you the best in hairstyles and treatments, creating the highest levels in style and sensibility. We ensure your transformation makes you look and feel your absolute best.",
                "Our stylists are experts in understanding hair texture and face shapes, delivering cuts and colors that are personalized just for you. From maintenance to makeovers, we do it all with care.",
            ],
        },
        popularServices: [
            { title: "Creative Haircut", description: "Bespoke cuts by expert stylists.", image: "/images/services/women-hair-hero.webp" },
            { title: "Global Color", description: "Vibrant, long-lasting color.", image: "/images/services/womenhaircolor.webp" },
            { title: "Kerastase Ritual", description: "Luxury hair care treatment.", image: "/images/hero/hair-spa.webp" },
            { title: "Smoothening", description: "Silky, frizz-free texture.", image: "/images/services/chemical-hero.webp" },
        ],
        detailedSections: [
            {
                title: "Haircut & Styling",
                description: "Precision cuts that define your personality including wash and blast dry.",
                image: "/images/services/women-hair-hero.webp",
                items: [
                    { name: "Creative Director", price: "₹1499" },
                    { name: "Creative Stylist", price: "₹1250" },
                    { name: "Senior Stylist", price: "₹799" },
                    { name: "Kids Hair Cut (Female)", price: "₹500" },
                    { name: "Blow Dry", price: "₹600" },
                    { name: "Wash & Blast Dry", price: "₹350" },
                ],
            },
            {
                title: "Color",
                description: "Vibrant global colors and highlights using premium ammonia-free options.",
                image: "/images/services/womenhaircolor.webp",
                items: [
                    { name: "Global Color", price: "₹2500" },
                    { name: "Base Color Root Touch up", price: "₹1400" },
                    { name: "Fashion Color Root Touch up", price: "₹1500" },
                    { name: "Global Ammonia Free", price: "₹2600" },
                    { name: "Ammonia Free Root Touch up", price: "₹1500" },
                    { name: "Global Highlights", price: "₹3000" },
                    { name: "Highlights per Streak (Min-4)", price: "₹350" },
                ],
            },
            {
                title: "Alfaparf Color",
                description: "Exclusive Italian color range for superior shine and longevity.",
                image: "/images/services/chemical-hero.webp",
                items: [
                    { name: "Global Color", price: "₹2900" },
                    { name: "Base Color Root Touch up", price: "₹1800" },
                    { name: "Fashion Color Root Touch up", price: "₹1900" },
                    { name: "Global Ammonia Free", price: "₹3000" },
                    { name: "Ammonia Free Root Touch up", price: "₹1900" },
                    { name: "Global Highlights", price: "₹3400" },
                    { name: "Highlights per Streak (Min-4)", price: "₹450" },
                ],
            },
            {
                title: "Hair Spa & Treatments",
                description: "Deep conditioning therapies for revitalized hair.",
                image: "/images/hero/hair-spa.webp",
                items: [
                    { name: "Hair SPA - Exotic", price: "₹1500" },
                    { name: "Hair SPA - Alchemy", price: "₹2500" },
                    { name: "Hair SPA - Alchemy Express", price: "₹1500" },
                    { name: "Hair SPA - Keratin", price: "₹2600" },
                    { name: "Hair SPA - Lab Remedy", price: "₹1500" },
                ],
            },
            {
                title: "Head Massage",
                description: "Relaxing oil massages for scalp health.",
                image: "/images/services/women-hair-hero.webp",
                items: [
                    { name: "Olive Oil", price: "₹600" },
                    { name: "Almond Oil", price: "₹600" },
                    { name: "Aroma Oil", price: "₹900" },
                ],
            },
        ],
        whyChooseUs: [
            { title: "Expert Consultation", description: "Personalized assessment for your perfect style." },
            { title: "Premium Products", description: "L'Oréal Professionnel and Kerastase exclusively." },
            { title: "Precision Techniques", description: "International cutting and coloring standards." },
            { title: "Hygiene Priority", description: "Sterilized tools and safe environment." },
        ],
        pricing: [
            { name: "Creative Director Cut", price: "₹1499" },
            { name: "Global Color", price: "₹2500" },
            { name: "Hair Spa Exotic", price: "₹1500" },
            { name: "Blow Dry", price: "₹600" },
        ],
        cta: {
            headline: "Love Your Hair",
            subtext: "Let our experts craft the perfect look for your special day.",
            buttonText: "Book Appointment",
        },
        related: [
            { id: "chemical-treatments", title: "Treatments", image: "/images/services/chemical-hero.webp" },
            { id: "skin-care", title: "Skin Care", image: "/images/hero/facial.webp" },
            { id: "grooming-makeup", title: "Makeup", image: "/images/services/makeup-hero.webp" },
        ]
    },
    "chemical-treatments": {
        slug: "chemical-treatments",
        hero: {
            title: "Chemical Treatments",
            subtitle: "Advanced Texture & Color Transformations",
            image: "/images/services/chemical-hero.webp",
            cta: "Book Consultation",
        },
        intro: {
            heading: "Transform Your Texture",
            description: [
                "Our specialized chemical rituals for both men and women ensure lasting transformation while maintaining structural hair integrity. We prioritize hair health above all.",
                "Whether you desire sleek straight hair, defined curls, or a complete color overhaul, our experts use advanced formulations to achieve your dream look safely."
            ],
        },
        popularServices: [
            { title: "Hair Straightening", description: "Sleek, straight, manageable hair.", image: "/images/services/chemical-hero.webp" },
            { title: "Smoothening", description: "Frizz control and shine.", image: "/images/services/womenhaircolor.webp" },
            { title: "Keratin Treatment", description: "Restore protein and strength.", image: "/images/hero/hair-spa.webp" },
            { title: "Hair Botox", description: "Anti-aging for your hair.", image: "/images/services/chemical-hero.webp" },
        ],
        detailedSections: [
            {
                title: "Texture Transformation",
                description: "Long-lasting straightening, smoothening, and perming for a complete look change.",
                image: "/images/services/womenhaircolor.webp",
                items: [
                    { name: "Hair Straightening", price: "5000 onwards" },
                    { name: "Hair Smoothening", price: "5000 onwards" },
                    { name: "Hair Perming", price: "5000 onwards" },
                ],
            },
            {
                title: "Keratin & Repair",
                description: "Intensive protein treatments to restore strength and shine.",
                image: "/images/hero/hair-spa.webp",
                items: [
                    { name: "Keratin Treatment (Men)", price: "3000 onwards" },
                    { name: "Keratin Treatment (Women)", price: "5000 onwards" },
                ],
            },
        ],
        whyChooseUs: [
            { title: "Hair Protection", description: "Bonding agents used to prevent damage." },
            { title: "Lasting Results", description: "Formulations that keep hair straight for months." },
            { title: "Expert Application", description: "Trained specialists for chemical safety." },
            { title: "Post-Care Guide", description: "Detailed advice on maintaining your new look." },
        ],
        pricing: [
            { name: "Hair Straightening", price: "From ₹5000" },
            { name: "Keratin Treatment", price: "From ₹3000" },
        ],
        cta: {
            headline: "Redefine Your Hair",
            subtext: "Book a consultation to discuss your hair transformation.",
            buttonText: "Book Consultation",
        },
        related: [
            { id: "women-hair-care", title: "Women Hair", image: "/images/services/women-hair-hero.webp" },
            { id: "men-hair-care", title: "Men Hair", image: "/images/services/men-hair-hero.webp" },
            { id: "skin-care", title: "Skin Care", image: "/images/hero/facial.webp" },
        ]
    },
    "grooming-makeup": {
        slug: "grooming-makeup",
        hero: {
            title: "Grooming & Make Up",
            subtitle: "Flawless Artistry For Every Occasion",
            image: "/images/services/makeup-hero.webp",
            cta: "Book Appointment",
        },
        intro: {
            heading: "Radiance For Special Moments",
            description: [
                "Eager to experiment with a different style that matches your personality? Be Enrich offers replenishing treatments and professional makeup trends for the day or night, season, or special occasion.",
                "From sharp grooming essentials like waxing and threading to high-definition bridal makeup, we ensure you look picture-perfect."
            ],
        },
        popularServices: [
            { title: "Bridal Makeup", description: "HD makeup for your big day.", image: "/images/services/bridal_makeup_service.webp" },
            { title: "Party Styling", description: "Glamorous looks for events.", image: "/images/services/party_styling_service.webp" },
            { title: "Full Body Waxing", description: "Smooth, hair-free skin.", image: "/images/services/waxing_service.webp" },
            { title: "Threading", description: "Precision facial hair removal.", image: "/images/services/threading_service.webp" },
        ],
        detailedSections: [
            {
                title: "Waxing (Classic / Chocolate / Paraffin)",
                description: "Gentle hair removal services. Prices listed for Classic / Chocolate-Strawberry / Paraffin.",
                image: "/images/services/waxing_service.webp",
                items: [
                    { name: "Full Body", price: "2500 / 3000 / 3000" },
                    { name: "Full Arms", price: "350 / 400 / 800" },
                    { name: "Half Arms", price: "200 / 300 / 600" },
                    { name: "Full Legs", price: "600 / 750 / 900" },
                    { name: "Half Legs", price: "300 / 400 / 400" },
                    { name: "Full Back", price: "500 / 600 / 900" },
                    { name: "Upper Back", price: "300 / 400 / 600" },
                    { name: "Lower Back", price: "300 / 400 / 600" },
                    { name: "Stomach", price: "400 / 600 / 800" },
                    { name: "Upper Lip / Chin", price: "50 / 60 / 100" },
                    { name: "Sides", price: "60 / 90 / 100" },
                    { name: "Neck", price: "90 / 100 / 200" },
                    { name: "Under Arms", price: "100 / 200 / 300" },
                    { name: "Face", price: "200 / 300 / 350" },
                ],
            },
            {
                title: "Makeup & Styling (Classic / Luxury / HD)",
                description: "Professional makeup artistry for your special moments.",
                image: "/images/services/bridal_makeup_service.webp",
                items: [
                    { name: "Light Makeup", price: "2000 / 2500 / 3000" },
                    { name: "Party Makeup", price: "2000 / 2500 / 3000" },
                    { name: "Bridal Makeup", price: "8000 / 10000 / 12000" },
                    { name: "Party Hair Style", price: "1500 onwards" },
                    { name: "Reception Hair Style", price: "2500 onwards" },
                    { name: "Hair Updo's", price: "3000 onwards" },
                    { name: "Saree Draping", price: "₹699" },
                    { name: "Mehendi - Bridal", price: "5000 onwards" },
                    { name: "Mehendi - Classic", price: "500 onwards" },
                ],
            },
            {
                title: "Threading",
                description: "Precision facial hair removal.",
                image: "/images/services/threading_service.webp",
                items: [
                    { name: "Eye Brows", price: "₹50" },
                    { name: "Upper Lip", price: "₹50" },
                    { name: "Chin", price: "₹50" },
                    { name: "Forehead", price: "₹50" },
                    { name: "Sides", price: "₹90" },
                    { name: "Neck", price: "₹100" },
                    { name: "Full Face", price: "₹250" },
                ],
            },
        ],
        whyChooseUs: [
            { title: "Flawless Finish", description: "HD techniques for perfect photos." },
            { title: "Hygiene First", description: "Strict sanitation protocols." },
            { title: "Customized Look", description: "Makeup that reflects your personality." },
            { title: "Premium Brands", description: "Only the best trusted cosmetic brands." },
        ],
        pricing: [
            { name: "Bridal HD Makeup", price: "₹15000" },
            { name: "Party Makeup", price: "₹2500" },
            { name: "Full Body Waxing", price: "₹2500" },
            { name: "Eyebrows", price: "₹50" },
        ],
        cta: {
            headline: "Shine Bright",
            subtext: "Let us create the perfect look for your special day.",
            buttonText: "Book Appointment",
        },
        related: [
            { id: "women-hair-care", title: "Hair Care", image: "/images/services/women-hair-hero.webp" },
            { id: "pedicure-manicure", title: "Nails", image: "/images/hero/body-spa.webp" },
            { id: "skin-care", title: "Skin Care", image: "/images/hero/facial.webp" },
        ]
    },
    "skin-care": {
        slug: "skin-care",
        hero: {
            title: "Skin Care",
            subtitle: "Rejuvenating Rituals For Radiant Skin",
            image: "/images/services/skin-care-hero.webp",
            cta: "Book Facial",
        },
        intro: {
            heading: "Reveal Your Inner Glow",
            description: [
                "Our specialization is combining the best products with the latest advances in skincare technology to create a results-driven professional treatment menu.",
                "We address and treat most skincare concerns, from hydration and brightening to anti-aging and acne control, restoring your skin's natural vitality."
            ],
        },
        popularServices: [
            { title: "Hydra-Facial", description: "Deep cleansing and hydration.", image: "/images/services/hydra_facial_service.webp" },
            { title: "Brightening Therapy", description: "For an even, glowing tone.", image: "/images/services/brightening_therapy_service.webp" },
            { title: "O3+ Clean Up", description: "Premium cleanup for instant fresh look.", image: "/images/services/o3_cleanup_service.webp" },
            { title: "Detan Pack", description: "Effective sun damage removal.", image: "/images/services/detan_pack_service.webp" },
        ],
        detailedSections: [
            {
                title: "Tan Packs",
                description: "Effective de-tanning solutions for face and body.",
                image: "/images/services/tanpack_section_image.webp",
                items: [
                    { name: "Tanpack", price: "₹500" },
                    { name: "O3+ Tanpack", price: "₹600" },
                    { name: "Face & Neck Tan pack", price: "₹800" },
                    { name: "Face & Neck Tan pack (Women)", price: "₹1050" },
                    { name: "Half Arms Tan pack", price: "₹600" },
                    { name: "Full Arms Tan pack", price: "₹700" },
                    { name: "Half Legs Tan pack", price: "₹700" },
                    { name: "Full Legs Tan pack", price: "₹1400" },
                    { name: "Foot Tan pack", price: "₹300" },
                ],
            },
            {
                title: "Skin Polishing",
                description: "Exfoliation for smooth, soft, and glowing skin.",
                image: "/images/services/skin_polishing_section_image.webp",
                items: [
                    { name: "Full Body", price: "₹4000" },
                    { name: "Full Hands - Classic", price: "₹800" },
                    { name: "Full Hands - Luxury", price: "₹1000" },
                    { name: "Half Legs", price: "₹700" },
                    { name: "Full Legs", price: "₹1500" },
                    { name: "Neck - Classic", price: "₹700" },
                    { name: "Neck - Luxury", price: "₹1000" },
                    { name: "Neck Cleansing", price: "₹400" },
                    { name: "Foot Polishing", price: "₹400" },
                ],
            },
            {
                title: "Clean Ups & Face Care",
                description: "Routine care for maintaining fresh and healthy skin.",
                image: "/images/services/cleanup_section_image.webp",
                items: [
                    { name: "Clean up", price: "₹600" },
                    { name: "Clean up - Premium", price: "₹900" },
                    { name: "Clean up - Luxury", price: "₹1200" },
                    { name: "O3 Clean up", price: "₹1500" },
                    { name: "Face Scrub", price: "₹400" },
                    { name: "Face Massage", price: "₹400" },
                    { name: "Face Wash", price: "₹100" },
                ],
            },
        ],
        whyChooseUs: [
            { title: "Radiant Glow", description: "Treatments focused on deep cleansing." },
            { title: "Advanced Formulas", description: "Scientifically proven ingredients." },
            { title: "Gentle Care", description: "Delicate techniques for sensitive skin." },
            { title: "Expert Analysis", description: "Skin type analysis before every service." },
        ],
        pricing: [
            { name: "O3 Clean up", price: "₹1500" },
            { name: "Face & Neck Tan pack", price: "₹800" },
            { name: "Full Body Polishing", price: "₹4000" },
        ],
        cta: {
            headline: "Glow With Confidence",
            subtext: "Experience our signature organic facials.",
            buttonText: "Book Facial",
        },
        related: [
            { id: "body-spa-reflexology", title: "Body Spa", image: "/images/hero/body-spa.webp" },
            { id: "grooming-makeup", title: "Grooming", image: "/images/services/makeup-hero.webp" },
            { id: "women-hair-care", title: "Hair Care", image: "/images/services/women-hair-hero.webp" },
        ]
    },
    "pedicure-manicure": {
        slug: "pedicure-manicure",
        hero: {
            title: "Pedicure & Manicure",
            subtitle: "Indulgent Hand & Foot Rituals",
            image: "/images/hero/body-spa.webp",
            cta: "Book Appointment",
        },
        intro: {
            heading: "The Ultimate Hand & Foot Care",
            description: [
                "Step into relaxation with our indulgent hand and foot care rituals involving exfoliation, massage, and expert nail grooming.",
                "We ensure impeccable hygiene and use high-quality products to keep your hands and feet soft, healthy, and beautiful."
            ],
        },
        popularServices: [
            { title: "Crystal Pedicure", description: "Premium salt scrub and massage.", image: "/images/services/luxe_pedicure_scene.webp" },
            { title: "Spa Manicure", description: "Relaxing soak and nail shaping.", image: "/images/services/luxe_manicure_scene.webp" },
            { title: "Gel Polish", description: "Long-lasting, shiny color.", image: "/images/services/nail_art_gel_polish.webp" },
            { title: "Heel Peel", description: "Treatment for cracked heels.", image: "/images/services/luxe_pedicure_scene.webp" },
        ],
        detailedSections: [
            {
                title: "Luxe Hand & Foot",
                description: "Therapeutic care for your extremities.",
                image: "/images/services/luxe_pedicure_scene.webp",
                items: [
                    { name: "Crystal Pedicure", price: "₹1800" },
                    { name: "Spa Manicure", price: "₹1500" },
                    { name: "Heel Peel Treatment", price: "₹2000" },
                ],
            },
            {
                title: "Nail Artistry",
                description: "Creative designs and finishes.",
                image: "/images/services/nail_art_gel_polish.webp",
                items: [
                    { name: "Gel Polish Application", price: "₹1200" },
                    { name: "Creative Nail Art", price: "From ₹250" },
                ],
            },
        ],
        whyChooseUs: [
            { title: "Total Relaxation", description: "Soothe tired muscles." },
            { title: "Nail Health", description: "Expert cuticle care." },
            { title: "Polished Perfection", description: "Wide range of premium colors." },
            { title: "Hygiene Standard", description: "Disposable liners and sterilized tools." },
        ],
        pricing: [
            { name: "Crystal Pedicure", price: "₹1800" },
            { name: "Spa Manicure", price: "₹1500" },
            { name: "Gel Polish", price: "₹1200" },
        ],
        cta: {
            headline: "Pamper Yourself",
            subtext: "Treat your hands and feet to the luxury they deserve.",
            buttonText: "Book Appointment",
        },
        related: [
            { id: "body-spa-reflexology", title: "Body Spa", image: "/images/hero/body-spa.webp" },
            { id: "skin-care", title: "Facials", image: "/images/hero/facial.webp" },
            { id: "women-hair-care", title: "Hair Care", image: "/images/services/women-hair-hero.webp" },
        ]
    },
    "body-spa-reflexology": {
        slug: "body-spa-reflexology",
        hero: {
            title: "Body SPA & Reflexology",
            subtitle: "Holistic Journeys For Body & Soul",
            image: "/images/hero/body-spa.webp",
            cta: "Book Spa",
        },
        intro: {
            heading: "Balance, Relax, Rejuvenate",
            description: [
                "Holistic wellness journeys designed to de-stress the body and balance the soul.",
            ],
        },
        popularServices: [
            { title: "Swedish Massage", description: "Relaxing full body therapy.", image: "/images/services/body_therapy_service.webp" },
            { title: "Deep Tissue", description: "Intensive muscle relief.", image: "/images/hero/body-spa.webp" },
            { title: "Body Polishing", description: "Full body exfoliation.", image: "/images/services/body_polishing_service.webp" },
            { title: "Foot Reflexology", description: "Pressure point therapy.", image: "/images/services/reflexology_service.webp" },
        ],
        detailedSections: [
            {
                title: "Body Therapy",
                description: "Full body rituals for deep relaxation.",
                image: "/images/services/body_therapy_service.webp",
                items: [
                    { name: "Full Body Swedish Massage", price: "₹3500" },
                    { name: "Deep Tissue Therapy", price: "₹4000" },
                    { name: "Body Polishing & Scrub", price: "₹4500" },
                ],
            },
            {
                title: "Quick Relief",
                description: "Focused treatments for busy schedules.",
                image: "/images/services/reflexology_service.webp",
                items: [
                    { name: "Foot Reflexology (30 min)", price: "₹1200" },
                    { name: "Back & Shoulder Release", price: "₹1500" },
                ],
            },
        ],
        whyChooseUs: [
            { title: "Stress Relief", description: "Therapeutic massage techniques designed to release tension and calm the mind." },
            { title: "Holistic Wellness", description: "Treatments that balance the body's energy and promote overall physical well-being." },
            { title: "Rejuvenating Scrubs", description: "Exfoliating body polishes that reveal smoother, softer, and glowing skin." },
        ],
        pricing: [
            { name: "Swedish Massage", price: "₹3500" },
            { name: "Deep Tissue", price: "₹4000" },
            { name: "Foot Reflexology", price: "₹1200" },
        ],
        cta: {
            headline: "Unwind Today",
            subtext: "Book your escape to tranquility.",
            buttonText: "Book Spa",
        },
        related: [
            { id: "skin-care", title: "Facials", image: "/images/hero/facial.webp" },
            { id: "pedicure-manicure", title: "Pedicure", image: "/images/hero/body-spa.webp" },
            { id: "men-hair-care", title: "Grooming", image: "/images/services/men-hair-hero.webp" },
        ]
    }
};
