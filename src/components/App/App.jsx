import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { textRu, textEn } from '../../utils/textData'
import './App.css';


const App = () => {
  const [isLangPage, setIsLangPage] = useState(JSON.parse(localStorage.getItem('lang')) || false);

  useEffect(() => {
    localStorage.setItem('lang', isLangPage);
  });

  const handleClickLangToggle = (evt) => {
    setIsLangPage(evt.target.checked);
    localStorage.setItem('lang', isLangPage)
  };

  const text = isLangPage ? textEn : textRu;

  return (
    <>
      <Header
        onClickToggle={handleClickLangToggle}
        isLangPage={isLangPage}
        text={text}
      />
      <Main
        text={text}
        isLangPage={isLangPage}
      />
      <Footer />
    </>
  )
};

export default App;
