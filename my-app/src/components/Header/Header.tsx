import { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';
import '../../assets/styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showModal, setShowModal] = useState<'login' | 'signup' | null>(null);

  const handleAuthSubmit = (data: { email: string; password: string; name?: string; surname?: string }) => {
    console.log('Auth data:', data);
    // Здесь будет логика аутентификации
    setShowModal(null);
  };

  return (
    <header className="header__container">
      <Link to="/">
        <a className="header__logo logo">АвтоДилер</a>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          <Link to="/cards" className="cards-link">
            <button className="header__recruiters" type="button">
              Католог
            </button>
          </Link>
          <button
            className="header__signup"
            onClick={() => setShowModal('signup')}
          >
            регистрация 
          </button>
          <button
            className="header__login"
            type="button"
            onClick={() => setShowModal('login')}
          >
            войти
          </button>
        </ul>
      </nav>

      {
        showModal && (
          <AuthModal
            type={showModal}
            onClose={() => setShowModal(null)}
            onSubmit={handleAuthSubmit}
          />
        )
      }
    </header >
  );
};

export default Header;