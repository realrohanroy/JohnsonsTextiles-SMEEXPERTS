const { Jimp } = require('jimp');

async function removeWhite() {
  const image = await Jimp.read('public/images/logo-dark.png');
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const color = image.getPixelColor(x, y);
      const r = (color >>> 24) & 0xFF;
      const g = (color >>> 16) & 0xFF;
      const b = (color >>> 8) & 0xFF;
      
      // If it's very close to white, make it transparent
      if (r > 240 && g > 240 && b > 240) {
        // Set alpha to 0
        image.setPixelColor(0x00000000, x, y);
      }
    }
  }
  
  await image.write('public/images/logo-dark.png');
  
  // Also copy it to logo.png for the footer
  await image.write('public/images/logo.png');
  console.log("Success: Removed white background and saved to logo-dark.png and logo.png");
}

removeWhite().catch(console.error);
