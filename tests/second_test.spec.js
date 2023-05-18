import { test, expect } from "@playwright/test";

import { waitForSelectors } from "../custom/example";
import { gotos } from "../custom/example";

require("dotenv").config();

test("test", async ({ page }) => {
  await gotos(page, process.env.WEBURL);

  await page.pause();
  // await page.waitForSelector(process.env.SEARCH_TEXTBOX_ID);
  await waitForSelectors(page, process.env.SEARCH_TEXTBOX_ID);

  await page
    .locator(process.env.SEARCH_TEXTBOX_ID)
    .fill(process.env.SEARCH_PRODUCT_NAME);

  await waitForSelectors(page, process.env.SUBMIT_BUTTON_ID);

  await page.click(process.env.SUBMIT_BUTTON_ID);

  await page.evaluate(() => {
    window.scrollTo(0, 1000);
  });
  // await waitForSelector(page, process.env.SELECT_PRODUCT_ID);
  await page.click(process.env.SELECT_PRODUCT_ID);
});
