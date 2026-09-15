const { chromium, devices } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  // Simulate an iPhone 13
  const context = await browser.newContext(devices['iPhone 13']);
  const page = await context.newPage();

  // Go to the local dev server
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Wait a bit for images to load
  await page.waitForTimeout(3000);

  // Take a full-page screenshot
  await page.screenshot({ path: 'mobile_screenshot.png', fullPage: true });

  await browser.close();
  console.log("Mobile screenshot saved to mobile_screenshot.png");
})();
