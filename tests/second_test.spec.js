import { test, expect } from "@playwright/test";
import { waitForSelector } from "./example.spec";
import { goto } from "./example.spec";

require("dotenv").config();

test("test", async ({ page }) => {
  await goto(page, process.env.WEBURL);

  await page.pause();
  // await page.waitForSelector(process.env.SEARCH_TEXTBOX_ID);
  await waitForSelector(page, process.env.SEARCH_TEXTBOX_ID);

  await page
    .locator(process.env.SEARCH_TEXTBOX_ID)
    .fill(process.env.SEARCH_PRODUCT_NAME);
  await waitForSelector(page, process.env.SUBMIT_BUTTON_ID);

  await page.click(process.env.SUBMIT_BUTTON_ID);
  await page.evaluate(() => {
    window.scrollTo(0, 1000);
  });
  // await waitForSelector(page, process.env.SELECT_PRODUCT_ID);
  await page.click(process.env.SELECT_PRODUCT_ID);
});
