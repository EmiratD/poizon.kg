import { useState, useEffect } from "react";

import ItemCard from "../itemCard/ItemCard";
import { useSearchUserQuery } from "../../store/slice/github.api";
import Loader from "../loader/Loader";

interface Iprops {
  searchOn: boolean;
  fillterOn: boolean;
}

const UserRoom = () => {
  
  const [render, setRender] = useState("");
  
  const { isLoading, isError, data } = useSearchUserQuery(render);
  useEffect(() => {}, [data]);

  const columnStyle = (render === 'order') ? 'flexColumn' : null;
  const centerStyle = (isLoading === true) ? 'flexCenter' : null;

  return (
    <main className="wrapper user-room">
      <div className="user-info">
        <h1 className="user-info__name">UserName</h1>
        <span className="user-info__text">email</span>
        <span className="user-info__text">number</span>
        <button className="user-info__setting">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_71_802)">
              <path
                d="M12.5333 15.5C14.1902 15.5 15.5333 14.1569 15.5333 12.5C15.5333 10.8431 14.1902 9.5 12.5333 9.5C10.8765 9.5 9.53333 10.8431 9.53333 12.5C9.53333 14.1569 10.8765 15.5 12.5333 15.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.9333 15.5C19.8002 15.8016 19.7605 16.1362 19.8193 16.4606C19.8781 16.785 20.0328 17.0843 20.2633 17.32L20.3233 17.38C20.5093 17.5657 20.6568 17.7863 20.7574 18.0291C20.8581 18.2719 20.9099 18.5322 20.9099 18.795C20.9099 19.0578 20.8581 19.3181 20.7574 19.5609C20.6568 19.8037 20.5093 20.0243 20.3233 20.21C20.1376 20.396 19.917 20.5435 19.6742 20.6441C19.4314 20.7448 19.1712 20.7966 18.9083 20.7966C18.6455 20.7966 18.3852 20.7448 18.1424 20.6441C17.8996 20.5435 17.6791 20.396 17.4933 20.21L17.4333 20.15C17.1976 19.9195 16.8983 19.7648 16.5739 19.706C16.2495 19.6472 15.9149 19.6869 15.6133 19.82C15.3176 19.9468 15.0653 20.1572 14.8876 20.4255C14.71 20.6938 14.6146 21.0082 14.6133 21.33V21.5C14.6133 22.0304 14.4026 22.5391 14.0275 22.9142C13.6525 23.2893 13.1438 23.5 12.6133 23.5C12.0829 23.5 11.5742 23.2893 11.1991 22.9142C10.824 22.5391 10.6133 22.0304 10.6133 21.5V21.41C10.6056 21.079 10.4984 20.758 10.3058 20.4887C10.1132 20.2194 9.84406 20.0143 9.53333 19.9C9.23171 19.7669 8.89713 19.7272 8.57274 19.786C8.24834 19.8448 7.949 19.9995 7.71333 20.23L7.65333 20.29C7.46758 20.476 7.247 20.6235 7.00421 20.7241C6.76141 20.8248 6.50116 20.8766 6.23833 20.8766C5.97549 20.8766 5.71524 20.8248 5.47244 20.7241C5.22965 20.6235 5.00907 20.476 4.82333 20.29C4.63737 20.1043 4.48985 19.8837 4.38921 19.6409C4.28856 19.3981 4.23675 19.1378 4.23675 18.875C4.23675 18.6122 4.28856 18.3519 4.38921 18.1091C4.48985 17.8663 4.63737 17.6457 4.82333 17.46L4.88333 17.4C5.11386 17.1643 5.26851 16.865 5.32733 16.5406C5.38615 16.2162 5.34644 15.8816 5.21333 15.58C5.08656 15.2842 4.87608 15.032 4.60779 14.8543C4.3395 14.6766 4.02511 14.5813 3.70333 14.58H3.53333C3.00289 14.58 2.49418 14.3693 2.11911 13.9942C1.74404 13.6191 1.53333 13.1104 1.53333 12.58C1.53333 12.0496 1.74404 11.5409 2.11911 11.1658C2.49418 10.7907 3.00289 10.58 3.53333 10.58H3.62333C3.95432 10.5723 4.27533 10.4651 4.54462 10.2725C4.81392 10.0799 5.01904 9.81074 5.13333 9.5C5.26644 9.19838 5.30615 8.86381 5.24733 8.53941C5.18851 8.21502 5.03386 7.91568 4.80333 7.68L4.74333 7.62C4.55737 7.43425 4.40985 7.21368 4.30921 6.97088C4.20856 6.72808 4.15675 6.46783 4.15675 6.205C4.15675 5.94217 4.20856 5.68192 4.30921 5.43912C4.40985 5.19632 4.55737 4.97575 4.74333 4.79C4.92907 4.60405 5.14965 4.45653 5.39244 4.35588C5.63524 4.25523 5.89549 4.20343 6.15833 4.20343C6.42116 4.20343 6.68141 4.25523 6.92421 4.35588C7.167 4.45653 7.38758 4.60405 7.57333 4.79L7.63333 4.85C7.869 5.08054 8.16834 5.23519 8.49274 5.294C8.81713 5.35282 9.15171 5.31312 9.45333 5.18H9.53333C9.82909 5.05324 10.0813 4.84276 10.259 4.57447C10.4367 4.30618 10.532 3.99179 10.5333 3.67V3.5C10.5333 2.96957 10.744 2.46086 11.1191 2.08579C11.4942 1.71071 12.0029 1.5 12.5333 1.5C13.0638 1.5 13.5725 1.71071 13.9475 2.08579C14.3226 2.46086 14.5333 2.96957 14.5333 3.5V3.59C14.5346 3.91179 14.63 4.22618 14.8076 4.49447C14.9853 4.76276 15.2376 4.97324 15.5333 5.1C15.8349 5.23312 16.1695 5.27282 16.4939 5.214C16.8183 5.15519 17.1176 5.00054 17.3533 4.77L17.4133 4.71C17.5991 4.52405 17.8196 4.37653 18.0624 4.27588C18.3052 4.17523 18.5655 4.12343 18.8283 4.12343C19.0912 4.12343 19.3514 4.17523 19.5942 4.27588C19.837 4.37653 20.0576 4.52405 20.2433 4.71C20.4293 4.89575 20.5768 5.11632 20.6774 5.35912C20.7781 5.60192 20.8299 5.86217 20.8299 6.125C20.8299 6.38783 20.7781 6.64808 20.6774 6.89088C20.5768 7.13368 20.4293 7.35425 20.2433 7.54L20.1833 7.6C19.9528 7.83568 19.7981 8.13502 19.7393 8.45941C19.6805 8.78381 19.7202 9.11838 19.8533 9.42V9.5C19.9801 9.79577 20.1906 10.048 20.4589 10.2257C20.7272 10.4034 21.0415 10.4987 21.3633 10.5H21.5333C22.0638 10.5 22.5725 10.7107 22.9475 11.0858C23.3226 11.4609 23.5333 11.9696 23.5333 12.5C23.5333 13.0304 23.3226 13.5391 22.9475 13.9142C22.5725 14.2893 22.0638 14.5 21.5333 14.5H21.4433C21.1215 14.5013 20.8072 14.5966 20.5389 14.7743C20.2706 14.952 20.0601 15.2042 19.9333 15.5V15.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className="user-data">
        <div className="user-data__btns">
          <button
            className="user-data__btns-btn"
            onClick={() => {
              setRender("items");
            }}
          >
            <div className="user-data-svg" onClick={() => {}}>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_103_985)">
                  <path
                    d="M9.46667 22C10.019 22 10.4667 21.5523 10.4667 21C10.4667 20.4477 10.019 20 9.46667 20C8.91439 20 8.46667 20.4477 8.46667 21C8.46667 21.5523 8.91439 22 9.46667 22Z"
                    stroke="#121111"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.4667 22C21.019 22 21.4667 21.5523 21.4667 21C21.4667 20.4477 21.019 20 20.4667 20C19.9144 20 19.4667 20.4477 19.4667 21C19.4667 21.5523 19.9144 22 20.4667 22Z"
                    stroke="#121111"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.46667 1H5.46667L8.14667 14.39C8.23812 14.8504 8.48858 15.264 8.85422 15.5583C9.21986 15.8526 9.67737 16.009 10.1467 16H19.8667C20.336 16.009 20.7935 15.8526 21.1591 15.5583C21.5248 15.264 21.7752 14.8504 21.8667 14.39L23.4667 6H6.46667"
                    stroke="#121111"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <span className="user-data-text">корзина</span>
          </button>
          <button
            className="user-data__btns-btn"
            onClick={() => {
              setRender("order");
            }}
          >
            <div className="user-data-svg">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.38 9.39996L8.38 4.20996"
                  stroke="#121111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.88 15.9999V7.9999C21.8796 7.64918 21.7871 7.30471 21.6115 7.00106C21.436 6.69742 21.1837 6.44526 20.88 6.2699L13.88 2.2699C13.576 2.09437 13.2311 2.00195 12.88 2.00195C12.5289 2.00195 12.184 2.09437 11.88 2.2699L4.88 6.2699C4.57627 6.44526 4.32399 6.69742 4.14847 7.00106C3.97295 7.30471 3.88036 7.64918 3.88 7.9999V15.9999C3.88036 16.3506 3.97295 16.6951 4.14847 16.9987C4.32399 17.3024 4.57627 17.5545 4.88 17.7299L11.88 21.7299C12.184 21.9054 12.5289 21.9979 12.88 21.9979C13.2311 21.9979 13.576 21.9054 13.88 21.7299L20.88 17.7299C21.1837 17.5545 21.436 17.3024 21.6115 16.9987C21.7871 16.6951 21.8796 16.3506 21.88 15.9999Z"
                  stroke="#121111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.14999 6.95996L12.88 12.01L21.61 6.95996"
                  stroke="#121111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.88 22.08V12"
                  stroke="#121111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="user-data-text">заказы</span>
          </button>
          <button 
          className="user-data__btns-btn">
            <div className="user-data-svg">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_103_900)">
                  <path
                    d="M11.88 4H4.88C4.34957 4 3.84086 4.21071 3.46579 4.58579C3.09072 4.96086 2.88 5.46957 2.88 6V20C2.88 20.5304 3.09072 21.0391 3.46579 21.4142C3.84086 21.7893 4.34957 22 4.88 22H18.88C19.4104 22 19.9191 21.7893 20.2942 21.4142C20.6693 21.0391 20.88 20.5304 20.88 20V13"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.38 2.50023C19.7778 2.1024 20.3174 1.87891 20.88 1.87891C21.4426 1.87891 21.9822 2.1024 22.38 2.50023C22.7778 2.89805 23.0013 3.43762 23.0013 4.00023C23.0013 4.56284 22.7778 5.1024 22.38 5.50023L12.88 15.0002L8.88 16.0002L9.88 12.0002L19.38 2.50023Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <span className="user-data-text">спецзаказ</span>
          </button>
        </div>
        <div className={`user-data__bord ${columnStyle} ${centerStyle}`}>
          {render === "items" &&
            data?.map((el) => (
              <ItemCard
                key={el.id}
                name={el.login}
                price={el.id}
                imge={el.avatar_url}
              />
            ))}
          {render === "order" &&
            data?.map((el) => (
              <UserOrder
                key={el.id}
                dateOrder={el.login}
                price={el.html_url}
              />
            ))}

          {isLoading && <Loader/>}
        </div>
      </div>
    </main>
  );
};

function UserOrder ({dateOrder, price}:{dateOrder:string, price: string}) {
  return (
    <div className="order-card">
      <div className="order-card__text">{dateOrder}</div>
      <div className="order-card__text">{price}</div>
      <div className="order-card__text">{price}</div>
      <div className="order-card__text">{dateOrder}</div>
      <button 
        className="order-card__btn"
        >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default UserRoom;
