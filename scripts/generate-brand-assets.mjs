
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const BRANDS = [
    { file: 'algotherm', text: 'Algotherm' },
    { file: 'kooswalla', text: 'KooSwalla' },
    { file: 'skeyndor', text: 'Skeyndor' },
    { file: 'keune', text: 'Keune' },
    { file: 'kryolan', text: 'Kryolan' },
    { file: 'redken', text: 'Redken' },
    { file: 'wella', text: 'Wella Professionals' },
    { file: 'mac', text: 'M.A.C' },
    { file: 'loreal', text: "L'Oréal Professionnel" },
    { file: 'schwarzkopf', text: 'Schwarzkopf Professional' },
    { file: 'o3plus', text: 'O3+' },
];

const BG_SOURCE = 'C:/Users/vanib/.gemini/antigravity/brain/deb8695f-e8c9-451c-8ffe-1d0f058398ad/brands_section_bg_1766239209197.png';
const TARGET_DIR = path.resolve('public/images/brands');

async function generateAssets() {
    try {
        await fs.mkdir(TARGET_DIR, { recursive: true });

        // 1. Process Background Image
        try {
            console.log('Processing background image...');
            // Check if source exists
            // Note: In real setup we might not have access to check absolute path outside project easily but assuming permission
            await sharp(BG_SOURCE)
                .webp({ quality: 90 })
                .toFile(path.join(TARGET_DIR, 'brands-bg.webp'));
            console.log('Background image saved.');
        } catch (e) {
            console.error('Failed to process background image (might not exist or no permission):', e.message);
            // Verify if user provided us the path or we generated it. We generated it. 
            // If file doesn't exist, we skip.
        }

        // 2. Generate Brand Text Logos
        // 2. Generate Brand Text Logos
        console.log('Generating brand logos...');
        for (const brand of BRANDS) {

            const textWidth = brand.text.length * 28;
            const iconSize = 80;
            const gap = 30;
            const totalWidth = iconSize + gap + textWidth + 50;
            const height = 150;

            // Generate a 'unique' geometric shape based on name length/char
            const charCode = brand.text.charCodeAt(0);
            const shapeType = charCode % 3; // 0: Circle, 1: Square, 2: Diamond

            let shapeSvg = '';
            if (shapeType === 0) {
                shapeSvg = `<circle cx="${iconSize / 2}" cy="${height / 2}" r="${iconSize / 2 - 5}" fill="none" stroke="#D4AF37" stroke-width="4" />
                             <text x="${iconSize / 2}" y="${height / 2 + 2}" fill="#D4AF37" font-weight="bold" font-size="40" text-anchor="middle" dominant-baseline="middle" font-family="serif">${brand.text[0]}</text>`;
            } else if (shapeType === 1) {
                shapeSvg = `<rect x="5" y="${height / 2 - iconSize / 2}" width="${iconSize - 10}" height="${iconSize - 10}" fill="none" stroke="#D4AF37" stroke-width="4" />
                             <text x="${iconSize / 2}" y="${height / 2 + 2}" fill="#D4AF37" font-weight="bold" font-size="40" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif">${brand.text[0]}</text>`;
            } else {
                shapeSvg = `<rect x="5" y="${height / 2 - iconSize / 2}" width="${iconSize - 10}" height="${iconSize - 10}" transform="rotate(45 ${iconSize / 2} ${height / 2})" fill="none" stroke="#D4AF37" stroke-width="4" />
                             <text x="${iconSize / 2}" y="${height / 2 + 2}" fill="#D4AF37" font-weight="bold" font-size="40" text-anchor="middle" dominant-baseline="middle" font-family="serif">${brand.text[0]}</text>`;
            }

            const svg = `
                <svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="shadow">
                            <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="black" flood-opacity="0.8"/>
                        </filter>
                    </defs>
                    
                    <!-- Group for Icon -->
                    <g transform="translate(10, 0)" filter="url(#shadow)">
                        ${shapeSvg}
                    </g>
                    
                    <!-- Text -->
                    <text x="${iconSize + gap}" y="55%" fill="#D4AF37" font-family="sans-serif" font-size="48" font-weight="bold" dominant-baseline="middle" letter-spacing="1" filter="url(#shadow)">${brand.text}</text>
                </svg>
            `;

            await sharp(Buffer.from(svg))
                .webp({ quality: 100, lossless: true })
                .toFile(path.join(TARGET_DIR, `${brand.file}.webp`));

            console.log(`Generated styled logo for: ${brand.text}`);
        }

        console.log('All brand assets generated successfully!');

    } catch (err) {
        console.error('Error in generation script:', err);
    }
}

generateAssets();
