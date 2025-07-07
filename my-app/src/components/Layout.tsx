import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import AuthModal from './AuthModal/AuthModal';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState<'login' | 'signup' | null>(null);

  const handleAuthSubmit = (data: { email: string; password: string; name?: string; surname?: string }) => {
    console.log('Auth data:', data);
    // Здесь будет логика аутентификации
    setShowModal(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      

    </div>
  );
};

export default Layout;