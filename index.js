const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
      headless: false
  });

  const page = await browser.newPage();

  await page.goto("https://www.walgreens.com/");
  // await page.goto("https://www.paulreinventswheels.com");
  await page.setViewport({ width: 1200, height: 800 });

  // await page.waitForSelector(".topbar > input");
  // await page.click(".topbar > input");

  await page.waitForSelector(".card__content");
  await page.click(".card__content");

  await page.waitForSelector(".getstarted-btn");
  await page.click(".get-started-btn");

  // await page.type(".topbar > input", "for");

  // await page.waitForSelector("#button-search");
  // await page.click("#button-search");

  // await browser.close();
})();