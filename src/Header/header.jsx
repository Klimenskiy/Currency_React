import React from "react";
import Paragraph from "./paragraph";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__box">
          <h1 className="header__title">{props.logoText}</h1>

          <div className="header__search">
            <input type="text" placeholder={props.searchText} />
            
            <a href="#">
              <img src={props.searchIcon} alt="search" />
            </a>
          </div>

          <Paragraph paragraph={props.headerText} />
        </div>
      </div>
    </header>
  );
};

export default Header;
