import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcherCompact = () => {
  const { currentLanguage, changeLanguage, getAvailableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const availableLanguages = getAvailableLanguages();

  const handleLanguageChange = (languageKey) => {
    changeLanguage(languageKey);
    setIsOpen(false);
  };

  const currentLangConfig = availableLanguages.find(lang => lang.key === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1.5 bg-[#0D3B56]/60 hover:bg-[#114665] text-white rounded-md transition-all duration-300 border border-[#1E6A93]/40 hover:border-[#2A7CB0] backdrop-blur-sm"
        aria-label="Change language"
      >
        <span className="text-base leading-none">{currentLangConfig?.flag}</span>
        <svg 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-40 bg-[#0D3B56]/95 backdrop-blur-md border border-[#1E6A93]/50 rounded-lg shadow-xl z-50 overflow-hidden">
          {availableLanguages.map((language) => (
            <button
              key={language.key}
              onClick={() => handleLanguageChange(language.key)}
              className={`w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 ${
                currentLanguage === language.key 
                  ? 'bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] text-white' 
                  : 'text-slate-200 hover:bg-[#114665] hover:text-white'
              }`}
            >
              <span className="text-sm">{language.flag}</span>
              <span className="text-xs font-medium">{language.name}</span>
              {currentLanguage === language.key && (
                <svg className="w-3 h-3 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Overlay để đóng dropdown khi click bên ngoài */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcherCompact;
