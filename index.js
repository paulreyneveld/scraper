const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.walgreens.com/findcare/vaccination/covid-19/location-screening");

  await page.setViewport({ width: 1200, height: 800 });

  // await page.waitForSelector(".topbar > input");
  // await page.click(".topbar > input");

  // await page.type(".topbar > input", "for");

  // await page.waitForSelector("#button-search");
  // await page.click("#button-search");

  await browser.close();
})();