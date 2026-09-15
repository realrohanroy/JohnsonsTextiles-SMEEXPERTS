const { Jimp } = require('jimp');

async function fixLogo() {
  const image = await Jimp.read('logo.png');
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  
  let minX = w, maxX = 0, minY = h, maxY = 0;
  
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const color = image.getPixelColor(x, y);
      const alpha = color & 0xFF; // Jimp RGBA alpha channel
      
      if (alpha > 50) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  // Calculate center and radii for the ellipse
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  
  // Make the ellipse slightly smaller (75% of bounding box) to ensure it stays hidden behind the thick gold strokes
  // The crown on top might push the bounding box up, so let's shift the center down a bit just in case.
  const rx = ((maxX - minX) / 2) * 0.70;
  const ry = ((maxY - minY) / 2) * 0.65;
  const adjustedCy = cy + ((maxY - minY) * 0.05); // shift down by 5% of height
  
  // Create a new blank transparent image
  // In older jimp, Jimp.create might not exist or Jimp constructor is used.
  // We can just clone the image and clear it.
  const bg = image.clone();
  
  // Clear the cloned image to transparent
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      bg.setPixelColor(0x00000000, x, y);
    }
  }
  
  // Draw the black ellipse
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const dx = x - cx;
      const dy = y - adjustedCy;
      if ((dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) <= 1) {
         bg.setPixelColor(0x000000FF, x, y); // Solid black
      }
    }
  }
  
  // Composite original image OVER the black ellipse
  bg.composite(image, 0, 0);
  
  await bg.write('public/images/logo-dark.png');
  console.log("Success: Created logo-dark.png using composite ellipse.");
}

fixLogo().catch(console.error);
