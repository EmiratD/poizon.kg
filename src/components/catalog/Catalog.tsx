import { useState, useEffect } from "react";

import { useSearchUserQuery } from "../../store/slice/github.api";

import ItemCard from "../itemCard/ItemCard";
import { SearchSvg } from "../../assets/svg/workflowSvg";

const Catalog = () => {
  const [catalog, setCatalog] = useState("man");

  const { isLoading, isError, data } = useSearchUserQuery(catalog);

  useEffect(() => {}, [data]);

  return (
    <section className="catalog">
      <div className="catalog-fillter">
        <div>
          <button
            autoFocus
            onClick={() => {
              setCatalog("man");
            }}
            className="catalog-fillter__btn"
          >
            мужское
          </button>
          <button
            onClick={() => {
              setCatalog("woman");
            }}
            className="catalog-fillter__btn"
          >
            женское
          </button>
          <button
            onClick={() => {
              setCatalog("new");
            }}
            className="catalog-fillter__btn"
          >
            новинки
          </button>
        </div>
        <label htmlFor="searchCatalog">
          <div className="w16h16" style={{ height: 16, width: 16 }}>
            <SearchSvg />
          </div>
          <input
            type="text"
            placeholder="поиск"
            id="searchCatalog"
            onChange={(e) => {
              setCatalog(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="catalog-bord">
        {isLoading && (
          <div className="bord">
            <span className="bord-info-title">Loading</span>
          </div>
        )}
        {isError && (
          <div className="bord">
            <span className="bord-info-title">error</span>
          </div>
        )}
        {data &&
          data?.map((el) => (
            <ItemCard
              key={el.id}
              name={el.login}
              price={el.id}
              imge={el.avatar_url}
            />
          ))}
      </div>
    </section>
  );
};

export default Catalog;

// const item = {
//   name: "nikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenikenike",
//   price: 54,
//   imge: "https://e7.pngegg.com/pngimages/507/572/png-clipart-sneakers-sneaker-collecting-shoe-vans-adidas-adidas-white-text.png",
// };
// const item2 = {
//   name: "puma",
//   price: 12,
//   imge: "https://www.shutterstock.com/image-vector/transparent-shoes-icon-png-vector-260nw-1952341351.jpg",
// };
// const item3 = {
//   name: "adida",
//   price: 25,
//   imge: "https://st4.depositphotos.com/18664664/20981/v/600/depositphotos_209817200-stock-illustration-sneaker-icon-vector-isolated-white.jpg",
// };

// const [catalog, setCatalog] = useState(item);
// const [items, setItems] = useState([
//   <ItemCard
//     name={
//       catalog.name
//     }
//     price={catalog.price}
//     imge={
//       catalog.imge
//     }
//   />,
// ]);

// useEffect(() => {
//   const itemInfo = <ItemCard
//     name={
//       catalog.name
//     }
//     price={catalog.price}
//     imge={
//       catalog.imge
//     }
//   />;
//   let arr = [];
//   for(let i = 0; i < 10; i++){
//     arr.push(itemInfo);
//   }
//   setItems(arr);
// }, []);

// return (
//   <section className="catalog">
//     <div className="catalog-fillter">
//       <button
//         autoFocus
//         onClick={() => {
//           setCatalog(item);
//         }}
//         className="catalog-fillter__btn"
//       >
//         мужское
//       </button>
//       <button
//         onClick={() => {
//           setCatalog(item2);
//         }}
//         className="catalog-fillter__btn"
//       >
//         женское
//       </button>
//       <button
//         onClick={() => {
//           setCatalog(item3);
//         }}
//         className="catalog-fillter__btn"
//       >
//         новинки
//       </button>
//     </div>
//     <div className="catalog-bord">{items}</div>
//   </section>
// );
