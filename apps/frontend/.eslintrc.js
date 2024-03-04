const path = require('path');

module.exports = {
  'extends': [
    'plugin:@nx/react-typescript',
    'next',
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    '../../.eslintrc.json'
  ],
  'parserOptions': {
    project: path.resolve(__dirname, '../../apps/frontend/tsconfig.json'),
  },
  'ignorePatterns': ['!**/*', '.next/**/*', 'jest.config.ts', '.eslintrc.js', 'next-env.d.ts'],
  'overrides': [
    {
      'files': ['*.ts', '*.tsx', '*.js', '*.jsx'],
      'rules': {
        '@next/next/no-html-link-for-pages': ['error', 'apps/frontend/pages'],
        'react/function-component-definition': 'off',
        'eslint-plugin-import/no-extraneous-dependencies': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'error',
        'react/prop-types': 'off',
        "spaced-comment": ["error", "always", { "exceptions": ["*", "@ts-check"] }]
      }
    },
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {
        "react/jsx-filename-extension": 'off',
        "react/require-default-props": "off",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/naming-convention": "off"
      }
    },
    {
      'files': ['*.js', '*.jsx'],
      'rules': {}
    },
    {
      'files': ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      'env': {
        'jest': true
      }
    }
  ]
}
