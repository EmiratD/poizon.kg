import { useState, useEffect } from "react";

import { useSearchUserQuery } from "../../store/slice/github.api";

import ItemCard from "../itemCard/ItemCard";
import { SearchSvg } from "../../assets/svg/workflowSvg";
import FillterBord from "../fillterBord/FillterBord";

interface Iprops {
  searchOn: boolean;
  fillterOn: boolean;
}

const Catalog = ({ searchOn, fillterOn }: Iprops) => {
  const [catalog, setCatalog] = useState("man");

  const { isLoading, isError, data } = useSearchUserQuery(catalog);

  useEffect(() => {
    
  }, [data]);

  const yLine = fillterOn ? "y-line" : "";

  return (
    <section className="catalog">
      <div className="catalog-action">
        <div>
          <button
            autoFocus
            onClick={() => {
              setCatalog("man");
            }}
            className="catalog-action__btn"
          >
            мужское
          </button>
          <button
            onClick={() => {
              setCatalog("woman");
            }}
            className="catalog-action__btn"
          >
            женское
          </button>
          <button
            onClick={() => {
              setCatalog("new");
            }}
            className="catalog-action__btn"
          >
            новинки
          </button>
        </div>
        {searchOn && (
          <label className="catalog-action__label">
            <input
              type="text"
              id="searchCatalog"
              className="catalog-action__label-search"
              onChange={(e) => {
                if (e.target.value !== "") {
                  setTimeout(() => {
                    setCatalog(e.target.value);
                  }, 1000);
                } else {
                  setTimeout(() => {
                    setCatalog("man");
                  }, 1000);
                }
              }}
            />
            <div style={{ height: 16, width: 16 }}>
              <SearchSvg />
            </div>
          </label>
        )}
      </div>
      <div className="catalog-conteiner">
        {fillterOn && <FillterBord />}
        <div className={`catalog-conteiner__bord ${yLine}`}>
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
      </div>
    </section>
  );
};

export default Catalog;
