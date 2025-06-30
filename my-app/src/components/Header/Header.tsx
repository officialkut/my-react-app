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
        <a className="header__logo logo">Jobly</a>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          <button className="header__recruiters" type="button">
            For Recruiters
          </button>
          <button
            className="header__signup"
            onClick={() => setShowModal('signup')}
          >
            Sign Up
          </button>
          <button
            className="header__login"
            type="button"
            onClick={() => setShowModal('login')}
          >
            Log in
          </button>
        </ul>
      </nav>

      {showModal && (
        <AuthModal
          type={showModal}
          onClose={() => setShowModal(null)}
          onSubmit={handleAuthSubmit}
        />
      )}
    </header>
  );
};

export default Header;