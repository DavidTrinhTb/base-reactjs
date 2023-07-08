import { useTranslation } from 'react-i18next';

import { Select } from 'antd';
import { LANGUAGES, resources } from 'i18n/i18n';

import IconDropdown from 'resources/svg/IconDropdown';
import IconEarth from 'resources/svg/IconEarth';

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const LANGUAGE_OPTIONS = [
    {
      value: LANGUAGES.EN,
      label: 'EN',
    },
    {
      value: LANGUAGES.JA,
      label: 'JP',
    },
  ];

  const handleChangeLanguage = (value: string) => {
    let language = value;

    if (Object.keys(resources).indexOf(value) === -1) {
      language = LANGUAGES.EN;
    }

    i18n.changeLanguage(language);
  };

  return (
    <div className='flex items-center color-primary'>
      <IconEarth />
      <Select
        value={i18n.language}
        options={LANGUAGE_OPTIONS}
        suffixIcon={<IconDropdown />}
        onChange={handleChangeLanguage}
      />
    </div>
  );
};

export default LanguageSelect;
