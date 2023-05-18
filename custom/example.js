export async function gotos(page, url) {
  await page.goto(url);
}
export async function waitForSelectors(page, selector) {
  await page.waitForSelector(selector);
}
