import { useState, FormEvent } from 'react';
import '../../assets/styles/form.css';

type AuthModalProps = {
  type: 'login' | 'signup';
  onClose: () => void;
  onSubmit: (data: { email: string; password: string; name?: string; surname?: string }) => void;
};

const AuthModal = ({ type, onClose, onSubmit }: AuthModalProps) => {
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (type === 'signup' && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    onSubmit({
      email: formData.email,
      password: formData.password,
      ...(type === 'signup' && { 
        name: formData.name,
        surname: formData.surname 
      })
    });
  };

  return (
    <div className="form-modal">
      <div className="contact-form-container">
        <div className="form-menu">
          <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          {type === 'signup' && (
            <>
              <div className="form-group">
                <label htmlFor="surname">фамилия</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
            />
          </div>

          {type === 'signup' && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Потвердить пароль</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={8}
              />
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="submit-button">
              {type === 'login' ? 'Login' : 'Register'}
            </button>
            <button type="button" className="cansel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;