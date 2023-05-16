import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.waitForSelector("#twotabsearchtextbox");
  await page.click("#twotabsearchtextbox");
  await page.pause();
  await page.waitForSelector("id=twotabsearchtextbox");
  await page.locator("id=twotabsearchtextbox").fill("samsung mobile");
  await page.waitForSelector("#nav-search-submit-button");
  await page.click("#nav-search-submit-button");
  await page.waitForSelector(".s-result-item:nth-child(5) h2 a ");
  await page.click(".s-result-item:nth-child(5) h2 a ");
});
