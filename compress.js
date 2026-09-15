const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'images');

async function processImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      const filePath = path.join(dir, file);
      const tempPath = path.join(dir, 'temp_' + file);
      
      console.log('Compressing:', file);
      
      if (file.endsWith('.png')) {
        await sharp(filePath)
          .png({ quality: 60, compressionLevel: 9, palette: true })
          .toFile(tempPath);
      } else {
        await sharp(filePath)
          .jpeg({ quality: 60 })
          .toFile(tempPath);
      }
        
      fs.renameSync(tempPath, filePath);
      
      const stats = fs.statSync(filePath);
      console.log(`Done: ${file} - New size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
    }
  }
}

processImages().catch(console.error);
