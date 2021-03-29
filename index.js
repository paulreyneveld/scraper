const puppeteer = require("puppeteer");
const fs = require('fs')
const preloadFile = fs.readFileSync('./preload.js', 'utf8');

(async () => {

  const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--window-position=0,0',
    '--ignore-certifcate-errors',
    '--ignore-certifcate-errors-spki-list',
    '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
];

  const options = {
      args,
      headless: false,
      ignoreHTTPSErrors: true,
      userDataDir: './tmp'
  };
  const browser = await puppeteer.launch(options);

  const page = await browser.newPage();

  await page.evaluateOnNewDocument(preloadFile);
 
  await page.goto("https://www.walgreens.com/findcare/vaccination/covid-19/location-screening");
  
  await page.setViewport({ width: 1200, height: 800 });

  await page.click(".pac-target-input");
  await page.type(".pac-target-input", 'hello', { delay: 20 });


  // await page.type(".topbar > input", "for");

  // await page.waitForSelector("#button-search");
  // await page.click("#button-search");

  // await browser.close();
})();