const { test, expect } = require("@playwright/test");

test("my first test", async ({ page }) => {
  await page.goto("https://amazon.com");
  await expect(page).toHaveTitle("amazon");
});
