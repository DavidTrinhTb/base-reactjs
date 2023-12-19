// The generateConfig methods use dealLocal() function to get date-fns specific locale data for the provided language
// But the implementation fails in some cases because rc-picker locales names do not exactly match with date-fns ones.

// https://github.com/date-fns/date-fns/tree/main/src/locale
// https://ant.design/docs/react/i18n

const DEFAULT_LOCALE = 'enUS';

const LOCALES_MAP = {
  en_US: 'enUS',
  it_IT: 'it',
  es_ES: 'es',
  ja_JP: 'ja',
  vi_VN: 'vi',

  // and so on...
};

const dealLocale = (key: string) => LOCALES_MAP[key as keyof typeof LOCALES_MAP] ?? DEFAULT_LOCALE;

export const cloneLocale = (locale: any) => {
  const keyLocale = locale?.DatePicker?.lang?.locale;
  const newKeyLocale = dealLocale(keyLocale);

  return {
    ...locale,
    DatePicker: {
      ...locale?.DatePicker,
      lang: { ...locale?.DatePicker?.lang, locale: newKeyLocale },
    },
  };
};
