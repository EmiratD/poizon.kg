import { Link } from "react-router-dom";

import NoItem from "../../assets/svg/NoItem";

const SpecialOrderlBord = () => {
  return (
    <section className="bord-info">
      <div className="bord-info-img">
        <NoItem />
      </div>
      <div className="bord-info-card">
        <h2 className="bord-info-card__title">Каталог</h2>
        <p className="bord-info-card__text">
          Товары которые находятся у нас в публикациях это лишь наша подборка
          для вас - а так мы возим абсолютно все с площадки poizon, где имеются
          абсолютно все товары: от одежды, обуви до косметики!
        </p>
        <Link to={"/SpecialOrderPage"}>
          <button className="bord-info-card__btn">спецзаказ</button>
        </Link>
      </div>
    </section>
  );
};

export default SpecialOrderlBord;
