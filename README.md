# Currency Converter

A simple currency converter built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Convert currency values between selectable currencies
- Swap source and target currencies
- Reset the form with a clear button
- Uses a reusable `InputBox` component
- Tailwind CSS styling

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the provided local URL in your browser to view the app.

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Project structure

- `src/App.tsx` — main application layout and conversion logic
- `src/components/InputBox.tsx` — reusable input component for amount and currency selection
- `src/hooks/useCurrencyInfo.ts` — custom hook for currency rate data

## Usage

1. Enter an amount in the `From` field.
2. Choose the source currency and target currency.
3. Click `Convert` to calculate the converted amount.
4. Use the `swap` button to switch the conversion direction.
5. Click `Clear` to reset the inputs and results.

## Notes

- The app uses TypeScript for typed component props and state.
- The `Clear` button resets both amounts and preserves the selected currency state.
- `useCurrencyInfo` provides currency rate data for conversion.

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
