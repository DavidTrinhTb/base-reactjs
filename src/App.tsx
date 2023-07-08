import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import jaJP from 'antd/lib/locale/ja_JP';
import i18n, { LANGUAGES } from 'i18n/i18n';
import { router } from 'routes';

const App = () => {
  const getLocale = (language: string) => {
    const languageToChange = language || i18n.language;

    switch (languageToChange) {
      case LANGUAGES.EN: {
        return enUS;
      }
      case LANGUAGES.JA: {
        return jaJP;
      }

      default: {
        return enUS;
      }
    }
  };

  const [locale, setLocale] = useState(getLocale as any);

  useEffect(() => {
    const changeConfigProvider = (language: string) => setLocale(getLocale(language));
    i18n.on('languageChanged', changeConfigProvider);

    return () => {
      i18n.off('languageChanged', changeConfigProvider);
    };
  }, []);

  return (
    <ConfigProvider locale={locale}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
