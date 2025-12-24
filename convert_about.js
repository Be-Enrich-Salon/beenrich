const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'c:/Users/vanib/OneDrive/Desktop/berich/public/images/about/about.png';
const outputPath = 'c:/Users/vanib/OneDrive/Desktop/berich/public/images/about/about.webp';

sharp(inputPath)
    .toFormat('webp')
    .toFile(outputPath)
    .then(() => console.log('Successfully converted about.png to about.webp'))
    .catch(err => console.error('Error converting image:', err));
