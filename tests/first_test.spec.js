import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();
test("test", async ({ page }) => {
  await goto(page, "https://www.amazon.com/");

  await page.pause();
  await waitForSelector(page, process.env.SEARCH_TEXTBOX_ID);

  await page.locator(process.env.SEARCH_TEXTBOX_ID).fill("samsung mobile");
  await waitForSelector(page, process.env.SUBMIT_BUTTON_ID);

  await page.click(process.env.SUBMIT_BUTTON_ID);
  await page.evaluate(() => {
    window.scrollTo(0, 500);
  });
  await waitForSelector(page, process.env.SELECT_PRODUCT);
  await page.click(process.env.SELECT_PRODUCT);
});
