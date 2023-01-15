import {Link} from 'react-router-dom';

import SignInAndLogIn from '../signInAndLogIn/SignInAndLogIn';

import PoizonLogoWhite from '../../assets/svg/PoizonLogoWhite';

const Header = () => {
  return(
    <header className="header">
      <nav className="header-nav">
        <Link to='/'>
          <div className='header-nav__logo'><PoizonLogoWhite/></div>
        </Link>
        <nav className="header-nav__pages">
          <span className="header-text"><Link to='/CatalogPage'>каталог</Link></span>
          <span className="header-text"><Link to='/BasketPage'>корзина</Link></span>
          <span className="header-text"><Link to='/SpecialOrderPage'>спецзаказ</Link></span>
        </nav>
        <SignInAndLogIn/>
      </nav>
    </header>
  );
}

export default Header;