
import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';

const TARGET_DIR = path.resolve('public/images/brands');

const BRANDS = [
    { name: 'algotherm', domain: 'algotherm.com' },
    { name: 'kooswalla', domain: 'kooswalla.com' }, // might fail
    { name: 'skeyndor', domain: 'skeyndor.com' },
    { name: 'keune', domain: 'keune.com' },
    { name: 'kryolan', domain: 'kryolan.com' },
    { name: 'redken', domain: 'redken.com' },
    { name: 'wella', domain: 'wella.com' },
    { name: 'mac', domain: 'maccosmetics.com' },
    { name: 'loreal', domain: 'lorealprofessionnel.com' },
    { name: 'schwarzkopf', domain: 'schwarzkopf-professional.com' }, // might be tricky
    { name: 'o3plus', domain: 'o3plus.com' },
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const chunks = [];
                res.on('data', (chunk) => chunks.push(chunk));
                res.on('end', () => resolve(Buffer.concat(chunks)));
            } else {
                reject(new Error(`Failed to load ${url}: Status ${res.statusCode}`));
            }
        }).on('error', reject);
    });
};

async function fetchLogos() {
    console.log('Starting logo fetch...');

    // Ensure directory exists
    if (!fs.existsSync(TARGET_DIR)) {
        fs.mkdirSync(TARGET_DIR, { recursive: true });
    }

    for (const brand of BRANDS) {
        console.log(`Fetching ${brand.name}...`);
        const url = `https://logo.clearbit.com/${brand.domain}?size=400&format=png`;

        try {
            const buffer = await downloadImage(url);

            // Convert to WebP and ensure transparent background/white logo if possible? 
            // Clearbit logos are usually colored.
            // For a dark theme, we might need to invert them if they are black.
            // But let's just get them first.

            // Process: Resize to height 100, keep aspect ratio.
            // If we want to make them "white" for dark mode:
            // .threshold() or .linear() can manipulate colors, but it's risky for colored logos.
            // Let's just save the original colored logo for now, simpler is better.
            // Or maybe grayscale().negate() if it's black on white?
            // Let's stick to colored logos first, the user just wants the "logo".

            await sharp(buffer)
                .trim() // Remove whitespace
                .resize({ height: 120, fit: 'inside' })
                .toFormat('webp')
                .toFile(path.join(TARGET_DIR, `${brand.name}.webp`));

            console.log(`✓ Saved ${brand.name}`);
        } catch (e) {
            console.log(`✗ Failed ${brand.name}: ${e.message}`);
            // Fallback generation logic - keep existing text-based SVG logic or generate new?
            // We'll leave the existing one if it exists (from previous step) or generate a simple fallback

            const width = brand.name.length * 25 + 60;
            const svg = `
                <svg width="${width}" height="120" viewBox="0 0 ${width} 120" xmlns="http://www.w3.org/2000/svg">
                    <style>
                        .text { fill: #D4AF37; font-family: sans-serif; font-size: 32px; font-weight: bold; text-anchor: middle; dominant-baseline: middle; }
                    </style>
                    <text x="50%" y="54%" class="text">${brand.name.toUpperCase()}</text>
                </svg>
            `;
            try {
                await sharp(Buffer.from(svg))
                    .webp()
                    .toFile(path.join(TARGET_DIR, `${brand.name}.webp`));
                console.log(`  -> Generated text fallback for ${brand.name}`);
            } catch (err) {
                console.error('Fallback failed');
            }
        }
    }
    console.log('Done fetching logos.');
}

fetchLogos();
