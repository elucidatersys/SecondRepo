import { test, expect } from '@playwright/test';

test('TC1: User able to navigate to the Facebook',{tag: "@abhinav"}, async ({ page }) => {
  await page.goto('https://www.google.com/');
  console.log("The title of the page is : " + await page.title());
  await expect(page).toHaveTitle('Google');

});