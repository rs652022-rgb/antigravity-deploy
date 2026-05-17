const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = process.argv[2];
const publicDir = path.join(__dirname, 'public');

async function processImage() {
    try {
        console.log(`Processing image: ${inputImagePath}`);
        
        // Let's create a square version first. We will just resize and fit using 'cover' to ensure it's square.
        // We'll use 512x512 as the base size.
        const baseImage = sharp(inputImagePath).resize(512, 512, {
            fit: 'cover',
            position: 'center' // keep it centered
        });
        
        // For standard png icons
        await baseImage.clone().png().toFile(path.join(publicDir, 'favicon.png'));
        await baseImage.clone().resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
        await baseImage.clone().resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
        await baseImage.clone().resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
        
        // For Android Chrome icons
        await baseImage.clone().resize(192, 192).png().toFile(path.join(publicDir, 'android-chrome-192x192.png'));
        await baseImage.clone().resize(512, 512).png().toFile(path.join(publicDir, 'android-chrome-512x512.png'));
        
        // Also save as favicon.ico which is a standard format for older browsers and some crawlers
        // sharp doesn't output .ico natively in all versions, but we can just copy the 32x32 png as a fallback, 
        // or just use sharp's .toFormat('ico') if supported, but typically copying 32x32 to .ico works enough for browsers.
        // Actually, it's safer to use the standard png to ico conversion, but if not available, renaming works as fallback.
        // Or we can use an external library if needed. Let's try sharp's native support first, if it fails, we copy.
        try {
            await baseImage.clone().resize(32, 32).toFormat('ico').toFile(path.join(publicDir, 'favicon.ico'));
        } catch (e) {
            console.log("sharp toFormat('ico') failed, using png copy for favicon.ico");
            fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon.ico'));
        }
        
        // Also overwrite logo.png if it's used elsewhere for branding
        await baseImage.clone().png().toFile(path.join(publicDir, 'logo.png'));
        await baseImage.clone().png().toFile(path.join(publicDir, 'icon.png'));
        await baseImage.clone().png().toFile(path.join(publicDir, 'apple-icon.png'));
        
        console.log("Successfully generated all favicon sizes!");
    } catch (err) {
        console.error("Error processing image:", err);
    }
}

processImage();
