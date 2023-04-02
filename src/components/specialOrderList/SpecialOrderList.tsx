import { useState } from "react";

import { useAppSelector } from '../../hooks/hook';


const SpecialOrderList = () => {
  
  const orders = useAppSelector(state => state.orderList.orderList);

  const [comment, setComment] = useState<string>("");

  return (
    <>
      <ul className="list">
        {orders &&
          orders.map((order) => (
            <li className="list-item" key={order.id}>
              <span className="itemUi-info">{order.nameItem}</span>
              <span className="itemUi-info">размер: {order.size}</span>
              <span className="itemUi-info">кол-во: {order.quantity}</span>
            </li>
          ))}
      </ul>
      <label className="special-form__label label-textarea">
        <span className="special-form__label-text">комментарии:</span>
        <textarea
          className="special-form__input textarea"
          placeholder="можете написать дополнительную информацию или особые пожелания"
          maxLength={300}
          wrap="soft"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
      </label>
      <button className="btn-add">оформить заказ</button>
    </>
  );
};

export default SpecialOrderList;
