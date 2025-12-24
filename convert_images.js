
const sharp = require('sharp');
const fs = require('fs');

const images = [
    "c:/Users/vanib/OneDrive/Desktop/berich/public/images/about/aboutmain.png",
    "c:/Users/vanib/OneDrive/Desktop/berich/public/images/about/aboutsec.png"
];

images.forEach(imgPath => {
    const webpPath = imgPath.replace('.png', '.webp');
    sharp(imgPath)
        .toFormat('webp')
        .toFile(webpPath)
        .then(() => console.log(`Converted ${imgPath} to ${webpPath}`))
        .catch(err => console.error(`Error converting ${imgPath}:`, err));
});
