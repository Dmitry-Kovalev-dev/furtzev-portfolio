import React from "react";

const Header = (props) => {
  const { onClickToggle, isLangPage, text } = props;

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <p className="header__name">{text.logo}</p>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-links">
            <li><a className="header__link" href="#projects">{text.navLinkCases}</a></li>
            <li><a className="header__link" href="#career">{text.navLinkCareer}</a></li>
            <li><a className="header__link" href="#contact">{text.navLinkContact}</a></li>
          </ul>
          <input type="checkbox" className="header__toggle-lang" onClick={onClickToggle} defaultChecked={isLangPage} />
        </nav>
      </div>
    </header>
  )
};

export default Header;