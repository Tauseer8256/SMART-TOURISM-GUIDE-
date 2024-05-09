// useLanguageDirection.js
import { useEffect } from 'react';
import i18n from 'i18next';

const useLanguageDirection = () => {
  useEffect(() => {
    const setLanguageDirection = () => {
      const lang = localStorage.getItem('i18nextLng');
      const targetDivs = document.querySelectorAll('#why-choose, #single-blog-detail, #blog-hero-sec, #what-we-serve');

      targetDivs.forEach(div => {
        div.dir = lang === 'PK' ? 'rtl' : 'ltr';
      });
    };

    setLanguageDirection();

    const languageChangeHandler = () => {
      setLanguageDirection();
    };

    i18n.on('languageChanged', languageChangeHandler);

    return () => {
      i18n.off('languageChanged', languageChangeHandler);
    };
  }, []);
};

export default useLanguageDirection;
