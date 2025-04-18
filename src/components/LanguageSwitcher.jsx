import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const menuBg = useColorModeValue('black', 'gray.800');
  const buttonBg = useColorModeValue('gray.100', 'gray.700');

  const languages = [
    { code: 'en', name: 'english', flag: '🇬🇧' },
    { code: 'zh', name: 'chinese', flag: '🇨🇳' },
    { code: 'tr', name: 'turkish', flag: '🇹🇷' },
    { code: 'ru', name: 'russian', flag: '🇷🇺' }
  ];

  const [currentLanguageCode, setCurrentLanguageCode] = useState(
    () => localStorage.getItem('language') || 'en'
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setCurrentLanguageCode(lng);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguageCode(savedLanguage);
    }
  }, [i18n]);

  const currentLanguage = languages.find(lang => lang.code === currentLanguageCode) || languages[0];

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon as={FaChevronDown} />}
        bg={buttonBg}
        _hover={{ bg: useColorModeValue('gray.200', 'gray.600') }}
        _active={{ bg: useColorModeValue('gray.300', 'gray.500') }}
        px={4}
        py={2}
        borderRadius="md"
      >
        <Flex align="center" gap={2}>
          <Text fontSize="lg">{currentLanguage.flag}</Text>
          <Text>{ t(currentLanguage.name) }</Text>
        </Flex>
      </MenuButton>
      <MenuList bg={menuBg} minW="150px" py={0}>
        {languages.map((language) => (
          currentLanguage.code != language.code &&
          <MenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            bg={i18n.language === language.code ? useColorModeValue('gray.100', 'gray.600') : 'transparent'}
            _hover={{ bg: useColorModeValue('gray.200', 'gray.500'), color: "black" }}
          >
            <Flex align="center" gap={3}>
              <Text fontSize="lg">{language.flag}</Text>
              <Text>{t(language.name)}</Text>
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;