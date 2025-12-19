import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public/images');

async function processDirectory(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const name = path.basename(entry.name, ext);
                const webpPath = path.join(directory, `${name}.webp`);

                // Skip if webp already exists and is newer? No, just overwrite to be safe/sure.
                console.log(`Converting: ${entry.name} -> ${name}.webp`);

                try {
                    await sharp(fullPath)
                        .webp({ quality: 80 })
                        .toFile(webpPath);
                    // Optional: Delete original? 
                    // fs.unlinkSync(fullPath); 
                } catch (err) {
                    console.error(`Failed to convert ${entry.name}:`, err);
                }
            }
        }
    }
}

console.log('Starting image optimization...');
if (fs.existsSync(PUBLIC_DIR)) {
    processDirectory(PUBLIC_DIR).then(() => {
        console.log('All images converted to WebP!');
    });
} else {
    console.error(`Directory not found: ${PUBLIC_DIR}`);
}
