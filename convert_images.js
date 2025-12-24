const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/vanib/OneDrive/Desktop/berich/public/images/saloon';

fs.readdir(directory, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    files.forEach(file => {
        if (path.extname(file).toLowerCase() === '.jpg' || path.extname(file).toLowerCase() === '.png') {
            const inputPath = path.join(directory, file);
            const outputPath = path.join(directory, path.parse(file).name + '.webp');

            sharp(inputPath)
                .toFormat('webp')
                .toFile(outputPath)
                .then(() => console.log(`Converted ${file} to .webp`))
                .catch(err => console.error(`Error converting ${file}:`, err));
        }
    });
});
