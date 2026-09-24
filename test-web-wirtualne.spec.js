const { test, expect } = require('@playwright/test');

test('WEB WIRTUALNE - poprawny tytuł strony', async ({ page }) => {
  await page.goto('https://webwirtualne.github.io/web-wirtualne/index.html');

  await expect(page).toHaveTitle(/WEB WIRTUALNE/i);
});