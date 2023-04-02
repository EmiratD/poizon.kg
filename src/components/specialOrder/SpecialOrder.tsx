import { FC, useState, useEffect } from "react";

import { useAppSelector } from "../../hooks/hook";

import OrderForm from "../specialItemForm/SpecialItemForm";
import SpecialOrderList from "../specialOrderList/SpecialOrderList";

import dateNow from "../../ts/dateNow";

import { ReactComponent as Plus } from "../../assets/svg/plus.svg";

const SpecialOrder: FC = () => {
  const orders = useAppSelector((state) => state.orderList.orderList);


  const [showFormForItem, setShowFormForItem] = useState<boolean>(true);
  const [classForm, SetClassForm] = useState<boolean>(true);

  const classItemForm = classForm
    ? "special-form__open"
    : "special-form__close";

  const showForm = () => {
    SetClassForm(!classForm);
    setTimeout(() => {
      setShowFormForItem(!showFormForItem);
    }, 500);
  };
  
  useEffect(() => {}, [orders]);

  return (
    <section className={`specialOrder`}>
      <h1 className="specialOrder-title">Спецзаказ</h1>
      <div className="specialOrder-bord">
        <div className="specialOrder-bord__top">
          <span className="specialOrder-bord__top-date">{dateNow()}</span>
          <button className={`specialOrder-bord__top-btn`} onClick={showForm}>
            <div className={`${classForm ? "close" : "open"}`}>
              <Plus />
            </div>
          </button>
        </div>

        {showFormForItem && <OrderForm classNameItem={classItemForm} />}

        <SpecialOrderList />
      </div>
    </section>
  );
};

export default SpecialOrder;
