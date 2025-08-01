import neostandard, { resolveIgnoresFromGitignore } from "neostandard";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  ...neostandard({
    ignores: resolveIgnoresFromGitignore(),
    ts: true
  }),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
  },
  {
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
];