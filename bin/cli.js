const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');

  await page.evaluate(() => {
    // <script src="path/to/gremlins.min.js"></script>
    const script = document.createElement("script");
    script.setAttribute("src", "https://rawgit.com/marmelab/gremlins.js/master/gremlins.min.js");

    document.querySelector("body").appendChild(script);
  });
  await page.waitFor(1000);
  await page.evaluate(() => {
    gremlins.createHorde().unleash();
  });

  // await browser.close();
})();
