const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 2000 }
  });
  const page = await context.newPage();

  console.log('Navigating to localhost:3000...');
  
  // Try up to 10 times to connect if the server is still booting
  for (let i = 0; i < 10; i++) {
    try {
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      break;
    } catch (e) {
      console.log(`Attempt ${i + 1} failed. Retrying in 3 seconds...`);
      await new Promise(r => setTimeout(r, 3000));
    }
  }

  console.log('Taking full page screenshot...');
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  console.log('Screenshot saved to screenshot.png');
  await browser.close();
})();
