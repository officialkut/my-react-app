import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__logo">Jobly.co</a>
        <p className="footer__title">We support a pool of diverse young creatives and engineers.</p>
      </div>
      <div className="footer__holder">
        <p className="footer__copy">© 2023 Jobly.co Copyright and All rights reserved.</p>
        <p className="footer__copyright">Terms and Conditions · Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;