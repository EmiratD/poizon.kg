import {Link} from 'react-router-dom';

interface IbordInfo {
  title: JSX.Element | string;
  text: string;
  btn: string;
  img: JSX.Element;
  link?: string;
}

const BordInfo = ({title, text, btn, img, link = '/'}: IbordInfo) => {
    return (
    <section className="bord-info">
      <div className="bord-info-card">
        <h2 className="bord-info-card__title">{title}</h2>
        <p className="bord-info-card__text">{text}</p>
        <Link to={link}>
          <button className="bord-info-card__btn">{btn}</button>
        </Link>
      </div>
      <div className="bord-info-img">
        {img}
      </div>
    </section>
  );
};

export  default BordInfo;