import { Telegram, Whatsapp, Instagram } from '../../assets/svg/socialIcons';

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className="footer-nav">
        <div className="conteiner">
          <div className="footer-nav__section">
            <p className="footer-nav__section-title">ОБЩАЯ ИНФОРМАЦИЯ</p>
            <div className="footer-nav__section-ul">
              <p className="footer-nav__section-ul-li">О НАС</p>
              <p className="footer-nav__section-ul-li">УСЛУГ</p>
              <p className="footer-nav__section-ul-li">ПОЛИТИКА</p>
            </div>
          </div>
          <div className="footer-nav__section">
            <p className="footer-nav__section-title">КОНТАКТЫ</p>
            <div className="footer-nav__section-ul">
              <a href="https://www.instagram.com/poizon_kg" className="footer-nav__section-ul-li">
                <Instagram/>
                <span>https://www.instagram.com/poizon_kg</span>
              </a>
              <a href="https://t.me/poizontg" className="footer-nav__section-ul-li">
                <Telegram/>
                <span>https://t.me/poizontg</span>
              </a>
              <a href="#" className="footer-nav__section-ul-li">
                <Whatsapp/>
                <span>+996 504 474 868</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-nav__section">
          <p className="footer-nav__section-title">ПОДДЕРЖКА</p>
          <div className="footer-nav__section-ul">
            <p className="footer-nav__section-ul-li">сообщить об ошибке</p>
            <p className="footer-nav__section-ul-li">жалобы и предложения</p>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;