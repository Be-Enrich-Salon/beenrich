console.log('Starting conversion...');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'c:/Users/vanib/OneDrive/Desktop/berich/public/images/about/about.png';
const outputPath = 'c:/Users/vanib/OneDrive/Desktop/berich/public/images/about/about.webp';

if (fs.existsSync(inputPath)) {
    console.log('Input file exists');
    sharp(inputPath)
        .toFormat('webp')
        .toFile(outputPath)
        .then(() => console.log('Successfully converted about.png to about.webp'))
        .catch(err => console.error('Error converting image:', err));
} else {
    console.error('Input file does not exist:', inputPath);
}
