/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'

export default getViteConfig({
  test: {
    dir: './test',
    coverage: {
      provider: 'c8',
      reportsDirectory: './coverage',
      reporter: ['text', 'json', 'html'],
    },
  },
})
