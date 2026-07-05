# Currency Converter

A simple currency converter built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Convert currency values between selectable currencies
- Swap source and target currencies
- Reset the form with a clear button
- Uses a reusable `InputBox` component
- Tailwind CSS styling

## View

<img width="1918" height="926" alt="Currency Convertor" src="https://github.com/user-attachments/assets/fceb572d-4135-4769-9c94-ed76829164d4" />


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

