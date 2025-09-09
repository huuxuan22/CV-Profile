// Translation index file
import { vi } from './vi';
import { en } from './en';

export const translations = {
  vi,
  en
};

// Default language
export const DEFAULT_LANGUAGE = 'en';

// Get translation function
export const getTranslation = (language, key, fallback = '') => {
  const translation = translations[language];
  if (!translation) {
    console.warn(`Language ${language} not found, falling back to default`);
    return translations[DEFAULT_LANGUAGE][key] || fallback || key;
  }
  
  return translation[key] || fallback || key;
};
