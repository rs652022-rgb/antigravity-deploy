const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const mainLogoSvg = Buffer.from(`
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d4d4d8;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.3"/>
    </filter>
  </defs>
  <g filter="url(#shadow)">
    <!-- Main A arch shape (bold and curved modern aesthetic) -->
    <path d="M256 50 C280 50 295 65 305 85 L460 380 C475 410 450 440 420 440 C400 440 385 425 375 405 L256 180 L137 405 C127 425 112 440 92 440 C62 440 37 410 52 380 L207 85 C217 65 232 50 256 50 Z" fill="url(#grad1)" />
    <!-- Center triangle overlay forming the bridge of the A -->
    <path d="M256 240 L310 340 C320 360 305 380 280 380 L232 380 C207 380 192 360 202 340 Z" fill="url(#grad1)" />
  </g>
</svg>
`);

const faviconSvg = Buffer.from(`
<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d4d4d8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <!-- Main A arch shape -->
  <path d="M32 6 C35 6 37 8 38 10 L58 48 C60 52 56 56 52 56 C50 56 48 54 47 51 L32 22 L17 51 C16 54 14 56 12 56 C8 56 4 52 6 48 L26 10 C27 8 29 6 32 6 Z" fill="url(#g1)" />
  <!-- Center triangle -->
  <path d="M32 30 L39 43 C40 45 38 48 35 48 L29 48 C26 48 24 45 25 43 Z" fill="url(#g1)" />
</svg>
`);

async function generateFiles() {
    try {
        console.log("Generating logo.png 512x512 with transparent background...");
        await sharp(mainLogoSvg).png().toFile(path.join(publicDir, 'logo.png'));
        
        console.log("Generating favicons...");
        await sharp(faviconSvg).png().toFile(path.join(publicDir, 'favicon.png'));
        await sharp(faviconSvg).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
        await sharp(faviconSvg).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
        await sharp(faviconSvg).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
        await sharp(faviconSvg).png().toFile(path.join(publicDir, 'icon.png'));
        
        // Ensure browser fallback icon
        fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon.ico'));
        
        console.log("SUCCESS: All optimized branding images generated effectively.");
    } catch (err) {
        console.error("ERROR generating images:", err);
    }
}

generateFiles();
