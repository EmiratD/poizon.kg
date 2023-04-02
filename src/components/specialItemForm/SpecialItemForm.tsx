import { FC, useState } from "react";

import { addItem } from "../../store/slice/orderSlice";

import { useAppDispatch } from "../../hooks/hook";
type props ={
  classNameItem: string;
}
const SpecialOrderCard: FC<props> = ({classNameItem}) => {

  const dispatch = useAppDispatch();

  const [nameItem, setNameItem] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("1");
  const [size, setSize] = useState<string>("");

  const item = {
    id: Date.now(),
    nameItem,
    url,
    quantity,
    size,
  };

  return (
    <form className={`special-form ${classNameItem}`}>
      <label className="special-form__label">
        <span className="special-form__label-text">
           название товара:
        </span>
        <input
          required
          autoFocus
          className="special-form__input input-url"
          type="text"
          placeholder="модель"
          onChange={(e) => {
            setNameItem(e.target.value);
          }}
          max={200}
        />
      </label>
      <label className="special-form__label">
        <span className="special-form__label-text">
          укажите сслыку:
        </span>
        <input
          required
          autoFocus
          className="special-form__input input-url"
          type="text"
          placeholder="или код товара"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
      </label>
      <label className="special-form__label">
        <span className="special-form__label-text">укажите размер:</span>
        <input
          required
          className="special-form__input input-size"
          type="text"
          placeholder="xl или 41.5"
          onChange={(e) => {
            setSize(e.target.value);
          }}
          maxLength={15}
        />
      </label>
      <label className="special-form__label ">
        <span className="special-form__label-text">количество:</span>
        <input
          className="special-form__input input-quantity"
          type="number"
          defaultValue={1}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          min={1}
          max={20}
        />
      </label>
      <button 
        className="btn-add"
        onClick={(event) => {
          event.preventDefault();
          dispatch(addItem(item));
        }}
      >
      добавить в список
      </button>
    </form>
  );
};

export default SpecialOrderCard;
