const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'c:/Users/vanib/OneDrive/Desktop/berich/public/images/about/chairman.jpg';
const outputPath = 'c:/Users/vanib/OneDrive/Desktop/berich/public/images/about/chairman.webp';

sharp(inputPath)
    .toFormat('webp')
    .toFile(outputPath)
    .then(() => console.log('Successfully converted chairman.jpg to chairman.webp'))
    .catch(err => console.error('Error converting image:', err));
