const { test, expect } = require("@playwright/test");

test("my test", async ({ page }) => {
  await page.goto("https://www.amazon.com");
  await page.waitForSelector("#twotabsearchtextbox");
  await page.fill("#twotabsearchtextbox", "samsung mobile");
  await page.click("#nav-search-submit-button");
  await page.waitForNavigation();
  await page.click(".s-result-item:nth-child(4) h2 a");
  await page.waitForNavigation();
});

// import { test, expect } from "@playwright/test";

// test("test", async ({ page }) => {
//   await page.goto("https://www.amazon.com/");
//   await page.getByPlaceholder("Search Amazon").click();
//   await page.getByPlaceholder("Search Amazon").fill("samsung mobile");
//   await page.getByRole("button", { name: "Go" }).click();
//   await page.click(".s-result-item:nth-child(4) h2 a");
//     await page.locator('div:nth-child(9) > div > .s-widget-container > .s-card-container > div > div > div:nth-child(2) > div').click();
// });
