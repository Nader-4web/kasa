import '../style/Footer.css';
import logoFooter from '../assets/footerlogo.png';

function Footer() {
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo" />
      <div className="copyright">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
