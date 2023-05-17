export async function goto(page, url) {
  await page.goto(url);
}
export async function waitForSelector(page, selector) {
  await page.waitForSelector(selector);
}
