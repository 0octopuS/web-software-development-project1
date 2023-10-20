const {test, expect} = require('@playwright/test');

test('Main page should have correct title and statistics', async ({page}) => {
  await page.goto('http://localhost:7777');
  await page.waitForSelector('h1:has-text(\'Shared shopping lists\')');
  const statistics = await page.textContent('#statistics');
  expect(statistics).toContain('Shopping lists: ');
  expect(statistics).toContain('Shopping list items: ');
});
test(
    'Main page should show correct statistics or \'No shopping lists yet.\'',
    async ({page}) => {
      await page.goto('http://localhost:7777');
      const statisticsText = await page.textContent('#statistics');
      if (statisticsText.includes('No shopping lists yet.')) {
        expect(statisticsText).toContain('No shopping lists yet.');
      } else {
        expect(statisticsText).toContain('Shopping lists: ');
        expect(statisticsText).toContain('Shopping list items: ');
      }
    });
