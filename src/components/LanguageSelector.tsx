import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {i18n.language.toUpperCase()}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage('ru')}>RU</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('en')}>EN</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('uz')}>UZ</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
