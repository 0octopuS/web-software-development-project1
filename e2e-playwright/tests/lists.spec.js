const {test, expect} = require('@playwright/test');
test(
    'Shopping Lists page should display active shopping lists and allow adding new lists',
    async ({page}) => {
      await page.goto('http://localhost:7777/lists');
      await page.waitForSelector('h1:has-text(\'Shopping Lists\')');
      await page.waitForSelector('form[name=\'addList\']');
      const lists = await page.$$('.shopping-list');
      expect(lists).toBeTruthy();
    });

test(
    'Individual Shopping List page should show name, items, and allow adding items',
    async ({page}) => {
      await page.goto('http://localhost:7777/lists/1');
      const items = await page.$$('.shopping-list-item');
      expect(items).toBeTruthy();
      await page.fill('input[name=\'name\']', 'New Item');
      await page.click('input[type=\'submit\']');
    });
