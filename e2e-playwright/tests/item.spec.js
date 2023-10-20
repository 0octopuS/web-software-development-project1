const {test, expect} = require('@playwright/test');
test('Items in a shopping list should be collectable', async ({page}) => {
  await page.goto('http://localhost:7777/lists/1');
  await page.fill('input[name=\'name\']', 'New Item');
  await page.click('input[type=\'submit\']');
  await page.click('button:has-text(\'Mark collected!\')');
  const item = await page.waitForSelector('del');
  expect(item).toBeTruthy();
});
