import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    fontSize: {
      xs: '14px',
      sm: '16px',
      base: '18px',
      xl: '20px',
      '2xl': '26px',
      '3xl': '34px',
      '4xl': '42px',
      '5xl': '56px',
      '6xl': '70px',
    },
    lineHeight: {
      base: '150%',
      xl: '120%',
    },
    boxShadow: {
      sm: 'box-shadow: 0px 2px 12px -4px rgba(22, 34, 51, 0.08)',
      base: 'box-shadow: 0px 4px 16px -4px rgba(22, 34, 51, 0.08)',
      xl: 'box-shadow: 0px 6px 24px -4px rgba(22, 34, 51, 0.12)',
    },
    colors: {
      white: '#ffffff',
      primary: '#F57C00',
      primary_2: '#FFE3AE',
      primary_3: '#FF3823',
      'border-color': '#adadad',
    },
  },
  rules: [
    [/^m-([.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    [/^mt-([.\d]+)$/, ([_, num]) => ({ 'margin-top': `${num}px` })],
    [/^mb-([.\d]+)$/, ([_, num]) => ({ 'margin-bottom': `${num}px` })],
    [/^ml-([.\d]+)$/, ([_, num]) => ({ 'margin-left': `${num}px` })],
    [/^mr-([.\d]+)$/, ([_, num]) => ({ 'margin-right': `${num}px` })],
    [/^mx-([.\d]+)$/, ([_, num]) => ({ 'margin-left': `${num}px`, 'margin-right': `${num}px` })],
    [/^my-([.\d]+)$/, ([_, num]) => ({ 'margin-top': `${num}px`, 'margin-bottom': `${num}px` })],
    [/^p-([.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
    [/^pt-([.\d]+)$/, ([_, num]) => ({ 'padding-top': `${num}px` })],
    [/^pb-([.\d]+)$/, ([_, num]) => ({ 'padding-bottom': `${num}px` })],
    [/^pl-([.\d]+)$/, ([_, num]) => ({ 'padding-left': `${num}px` })],
    [/^pr-([.\d]+)$/, ([_, num]) => ({ 'padding-right': `${num}px` })],
    [/^px-([.\d]+)$/, ([_, num]) => ({ 'padding-left': `${num}px`, 'padding-right': `${num}px` })],
    [/^py-([.\d]+)$/, ([_, num]) => ({ 'padding-top': `${num}px`, 'padding-bottom': `${num}px` })],
  ],
  shortcuts: [
    {
      h1: 'text-6xl leading-xl font-600',
      h2: 'text-5xl leading-xl font-600',
      h3: 'text-4xl leading-base font-600',
      h4: 'text-3xl leading-base font-600',
      h5: 'text-2xl leading-base font-600',
      h6: 'text-xl leading-base font-600',
      h6: 'text-xl leading-base font-600',
      'sub-heading': 'text-base leading-base font-600',
      body: 'text-sm leading-base font-500',
      'body-sm': 'text-xs leading-base font-500',
    },
  ],
});
