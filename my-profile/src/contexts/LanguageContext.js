import React, { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGES, LANGUAGE_CONFIG } from '../constants/languages';
import { getTranslation } from '../translations';

// Tạo Language Context
const LanguageContext = createContext();

// Hook để sử dụng Language Context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Lấy ngôn ngữ từ localStorage hoặc mặc định là tiếng Anh
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const validLanguages = Object.values(LANGUAGES);
    if (savedLanguage && validLanguages.includes(savedLanguage)) {
      return savedLanguage;
    } else {
      return LANGUAGES.EN;
    }
  });

  // Lưu ngôn ngữ vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem('selectedLanguage', currentLanguage);
  }, [currentLanguage]);

  // Hàm chuyển đổi ngôn ngữ
  const changeLanguage = (language) => {
    // Kiểm tra xem language có trong danh sách các giá trị của LANGUAGES không
    const validLanguages = Object.values(LANGUAGES);
    if (validLanguages.includes(language)) {
      setCurrentLanguage(language);
    } else {
      console.warn(`Invalid language: ${language}. Valid languages:`, validLanguages);
    }
  };

  // Hàm lấy bản dịch
  const t = (key, fallback = '') => {
    return getTranslation(currentLanguage, key, fallback);
  };

  // Hàm lấy cấu hình ngôn ngữ hiện tại
  const getCurrentLanguageConfig = () => {
    return LANGUAGE_CONFIG[currentLanguage];
  };

  // Hàm lấy danh sách tất cả ngôn ngữ
  const getAvailableLanguages = () => {
    return Object.keys(LANGUAGES).map(key => ({
      key: LANGUAGES[key],
      ...LANGUAGE_CONFIG[LANGUAGES[key]]
    }));
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    getCurrentLanguageConfig,
    getAvailableLanguages,
    isRTL: getCurrentLanguageConfig().direction === 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
