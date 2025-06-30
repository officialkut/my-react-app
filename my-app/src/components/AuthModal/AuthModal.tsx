import React, { useState } from 'react';
import { AuthFormType } from '../../types';

const AuthModal: React.FC = () => {
  const [formType, setFormType] = useState<AuthFormType>('signup');

  return (
    <div className="form" id="formModal">
      <div className="contact-form-container">
        <div className="form-menu">
          <h2 className="form__name">{formType === 'signup' ? 'Register' : 'Login'}</h2>
          <button className="exit-button">X</button>
        </div>
        {formType === 'signup' ? (
          <form id="contactForm">
            <div className="form-group">
              <label>Surname</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" autoComplete="on" required />
            </div>
            <div className="form-buttons">
              <button type="submit" className="submit-button">Register</button>
              <button type="button" className="cansel-button">Cancel</button>
            </div>
          </form>
        ) : (
          <form id="signUpForm">
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" autoComplete="on" required />
            </div>
            <button type="submit" className="submit-button">Login</button>
            <button className="cansel-button">Cancel</button>
          </form>
        )}
        <button onClick={() => setFormType(formType === 'signup' ? 'login' : 'signup')}>
          Switch to {formType === 'signup' ? 'Login' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;