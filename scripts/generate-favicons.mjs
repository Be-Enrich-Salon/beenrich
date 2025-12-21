import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceImage = join(__dirname, '../public/images/hero/logo_icon.png');
const outputDir = join(__dirname, '../public');

async function generateFavicons() {
  try {
    // Generate 32x32 favicon
    await sharp(sourceImage)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(outputDir, 'favicon-32x32.png'));
    console.log('✓ Generated favicon-32x32.png');

    // Generate 16x16 favicon
    await sharp(sourceImage)
      .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(outputDir, 'favicon-16x16.png'));
    console.log('✓ Generated favicon-16x16.png');

    // Generate 180x180 Apple touch icon
    await sharp(sourceImage)
      .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(outputDir, 'apple-touch-icon.png'));
    console.log('✓ Generated apple-touch-icon.png');

    // Generate 48x48 high-quality favicon
    await sharp(sourceImage)
      .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(outputDir, 'favicon-48x48.png'));
    console.log('✓ Generated favicon-48x48.png');

    // Generate favicon.ico (32x32 as ICO fallback)
    await sharp(sourceImage)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(outputDir, 'favicon.ico'));
    console.log('✓ Generated favicon.ico');

    console.log('\n✅ All favicons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();
