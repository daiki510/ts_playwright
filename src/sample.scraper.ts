import { chromium } from 'playwright-core';

(async () => {
  console.log('process start: ', new Date().toString());
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.co.jp/');
  await page.screenshot({ path: `tmp/sample.png` });
  await browser.close();
  console.log('process end: ', new Date().toString());
})();
