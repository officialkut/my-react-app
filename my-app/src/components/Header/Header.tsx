import React, { ReactElement } from 'react';

const Header = (): ReactElement => {
  return (
    <header className="header container">
      <a className="header__logo logo">Jobly</a>
      <nav className="header__nav">
        <ul className="header__list">
          <button className="header__recruiters" type="button">
            For Recruiters
          </button>
          <button id="header__signup" className="header__signup">
            Sign Up
          </button>
          <button className="header__login" type="button" id="header__login">
            Log in
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;