import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = ['/', '/about', '/contact', '/404'];

test.describe('automated accessibility checks', () => {
  pages.forEach((route) => {
    test.describe(route, () => {
      test('should not have any automatically detectable accessibility issues', async ({
        page,
      }) => {
        await page.goto(route);

        const accessibilityScanResults = await new AxeBuilder({
          page,
        }).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      });
    });
  });
});
