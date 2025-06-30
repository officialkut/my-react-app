import '../../assets/styles/style.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__logo">Jobly.co</a>
        <p className="footer__title">We support a pool of diverse young creatives and engineers.</p>
      </div>
      <div className="footer__holder">
        <p className="footer__copy">© {currentYear} Jobly.co Copyright and All rights reserved.</p>
        <p className="footer__copyright">Terms and Conditions · Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;