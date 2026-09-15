const { Jimp } = require('jimp');

async function fillLogo() {
  const image = await Jimp.read('logo.png');
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  
  function getAlpha(color) {
    return color & 0xFF; // Lowest byte is alpha in RGBA
  }
  
  const visited = new Uint8Array(w * h);
  
  // Flood fill from borders to mark all "outside" pixels
  const stack = [];
  
  // Add all border pixels to stack if they are transparent
  for (let x = 0; x < w; x++) {
    stack.push([x, 0]);
    stack.push([x, h - 1]);
  }
  for (let y = 0; y < h; y++) {
    stack.push([0, y]);
    stack.push([w - 1, y]);
  }
  
  while (stack.length > 0) {
    const [x, y] = stack.pop();
    if (x < 0 || x >= w || y < 0 || y >= h) continue;
    
    const idx = y * w + x;
    if (visited[idx]) continue;
    
    const color = image.getPixelColor(x, y);
    const alpha = getAlpha(color);
    
    // If it's mostly transparent, it's part of the outside void
    if (alpha < 50) {
      visited[idx] = 1;
      stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }
  }
  
  // Now everything NOT visited AND mostly transparent is INSIDE.
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const idx = y * w + x;
      if (!visited[idx]) {
        const color = image.getPixelColor(x, y);
        const alpha = getAlpha(color);
        // If it's transparent or semi-transparent inside, make it solid black
        // Actually, just making everything inside black if it isn't gold.
        // Or composite black under it:
        // Alpha blend original color over black
        const r = (color >>> 24) & 0xFF;
        const g = (color >>> 16) & 0xFF;
        const b = (color >>> 8) & 0xFF;
        const a = alpha / 255;
        
        // Blend over black (0,0,0)
        const newR = Math.round(r * a + 0 * (1 - a));
        const newG = Math.round(g * a + 0 * (1 - a));
        const newB = Math.round(b * a + 0 * (1 - a));
        
        // Write new solid color
        const newColor = (newR << 24) | (newG << 16) | (newB << 8) | 0xFF;
        image.setPixelColor(newColor >>> 0, x, y);
      }
    }
  }
  
  await image.write('public/images/logo-dark.png');
  console.log("Created public/images/logo-dark.png");
}

fillLogo().catch(console.error);
