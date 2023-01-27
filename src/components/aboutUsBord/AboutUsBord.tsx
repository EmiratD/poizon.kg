import { Link } from "react-router-dom";

import PoizonLogobalck from "../../assets/svg/PoizonLogobalck";
import Clothing from "../../assets/svg/Clothing";

const AboutUsBord = () => {
  return (
    <section className="bord-info">
      <div className="bord-info-card">
        <h2 className="bord-info-card__title">
          <PoizonLogobalck />
        </h2>
        <p className="bord-info-card__text">
          Компания предоставляет доставку товаров и одежды с платформы Poizon
          покупателям по всему кыргызстану.
        </p>
        <Link to={"/SpecialOrderPage"}>
          <button className="bord-info-card__btn">о нас</button>
        </Link>
      </div>
      <div className="bord-info-img">
        <Clothing />
      </div>
    </section>
  );
};
export default AboutUsBord;
