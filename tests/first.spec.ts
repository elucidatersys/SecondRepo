import { test, expect } from '@playwright/test';

test('TC1: User able to navigate to the Facebook', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  console.log("The title of the page is : " + page.title());

});