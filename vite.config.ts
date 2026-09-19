import { defineConfig } from 'vite-plus'

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  staged: {
    '*.ts': 'vp lint --fix',
    '*.{ts,json}': 'vp fmt',
  },
  lint: {
    plugins: ['eslint', 'typescript'],
    options: {
      typeAware: true,
    },
  },
  fmt: {
    ignorePatterns: ['dist/**', '*.md'],
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    quoteProps: 'consistent',
    endOfLine: 'lf',
  },
  pack: {
    deps: { resolveDepSubpath: true, neverBundle: ['markdown-it'] },
  },
})
