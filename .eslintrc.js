module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  plugins: ['no-only-tests'],
  extends: ['plugin:prettier/recommended', 'plugin:import/recommended'],
  ignorePatterns: ['!.*', '**/node_modules', '**/dist', '**/dist-unused', 'apps/admin-backend'],
  rules: {
    'eslint.workingDirectories': ['./frontend'],
    'prettier/prettier': 'warn',
    'no-only-tests/no-only-tests': [
      'error',
      {
        block: ['test', 'it', 'describe'],
        focus: ['only'],
        fix: false,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['debug', 'info', 'warn', 'error'],
      },
    ],
    'import/namespace': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-restricted-imports': 'off',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@leadgogo/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'test/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-warning-comments': [
      'error',
      {
        terms: ['TEMP', 'TEMPORARY', 'REMOVE'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            argsIgnorePattern: '^[_]+',
            varsIgnorePattern: '^[_]+',
            caughtErrorsIgnorePattern: '^[_]+',
          },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
      },
    },
    {
      files: ['**/?(.|_)scripts/**/*.ts', '.dev/**/*.ts', 'sql-migrations/**/*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-restricted-imports': 'off',
        'no-console': 'off',
        'no-var-requires': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
};
