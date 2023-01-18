import BordInfo from "../bordInfo/BordInfo";

import PoizonLogobalck from "../../assets/svg/PoizonLogobalck";
import Clothing from "../../assets/svg/Clothing";

const logo = <PoizonLogobalck />;
const clothing = <Clothing />;
const textInfo: string =
  "Компания предоставляет доставку товаров и одежды с платформы Poizon покупателям по всему кыргызстану. Платформа Poison известна своей быстрой и надежной службой доставки, что делает ее популярным выбором для тех, кто хочет приобрести высококачественную одежду от люксового бренда.";

const AboutUsBord = (
  <BordInfo title={logo} text={textInfo} btn="о нас" img={clothing} link={'/SpecialOrderPage'}/>
); 

export default AboutUsBord;
