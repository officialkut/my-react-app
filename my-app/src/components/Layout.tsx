import { Outlet, Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header>
      
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer>
        {/* Подвал приложения */}
      </footer>
    </div>
  );
};

export default Layout;