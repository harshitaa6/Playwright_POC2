import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.click("#twotabsearchtextbox");
  await page.pause();
  await page.locator("id=twotabsearchtextbox").fill("samsung mobile");
  await page.click("#nav-search-submit-button");
  await page.click(".s-result-item:nth-child(5) ");
});
