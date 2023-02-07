// eslint-disable-next-line import/no-extraneous-dependencies
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [
      ...configDefaults.exclude,
      'e2e-tests/*',
    ],
  },
});
