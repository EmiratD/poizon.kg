import { Basket, Heart } from "../../assets/svg/ItemCardSvg";

interface ItemInfo {
  name: string;
  price: number;
  imge: string;
}

const ItemCard: ({}: ItemInfo) => JSX.Element = ({ name, price, imge }) => {
  return (
    <div className="itemCard">
      <div className="itemCard-img">
        <img src={imge} alt="" />
      </div>
      <div className="itemCard-info">
        <p className="itemCard-info__name">{name}</p>
        <p className="itemCard-info__price">
          {price}
          <span className="dollar">$</span>
        </p>
      </div>
      <div className="itemCard-heart">
        <Heart />
      </div>
      <div className="itemCard-basket">
        <Basket />
      </div>
    </div>
  );
};

export default ItemCard;
