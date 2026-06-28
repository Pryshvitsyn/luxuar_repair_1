import { useState } from 'react';
import { translations } from './translations';
import { LanguageContext } from './language-context';

export const LanguageProvider = ({ children }) => {
    // Default language is english
    const [language, setLanguage] = useState('en');

    const t = (key) => {
        const keys = key.split('.');
        let result = translations[language];
        for (const k of keys) {
            if (result && result[k]) {
                result = result[k];
            } else {
                return key; // fallback to key
            }
        }
        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
